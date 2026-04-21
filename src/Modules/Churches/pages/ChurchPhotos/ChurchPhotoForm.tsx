import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Flex, Form, IFormElement, Text } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { ArrowLeft } from 'lucide-react';
import { churchesActions } from '../../store/churches.slice';
import {
    selectChurches,
    selectSelectedChurchPhoto,
    selectChurchPhotosLoading,
} from '../../store/churches.selectors';
import type { IReducers } from 'Redux';
import type { IChurchPhotoForm } from '../../models/churches.types';
import { getChurchPhotoFormElements } from './churchPhotoForm.elements';

const ChurchPhotoForm: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ref } = useParams<{ ref?: string }>();
    const isEdit = !!ref;

    const formRef = useRef<any>(null);

    const editing = useSelector(selectSelectedChurchPhoto);
    const saving = useSelector(selectChurchPhotosLoading);
    const churches = useSelector(selectChurches);
    const toast = useSelector((state: IReducers) => state.toast);

    useEffect(() => {
        if (!churches.length) dispatch(churchesActions.loadTable({}));
        if (isEdit && ref) {
            dispatch(churchesActions.loadPhoto(ref));
        } else {
            dispatch(churchesActions.setSelectedPhoto(null));
        }
    }, [dispatch, isEdit, ref]);

    const prevSavingRef = useRef<boolean>(false);
    useEffect(() => {
        if (prevSavingRef.current && !saving && toast.visible && toast.type === 'success') {
            navigate('/church-photos');
        }
        prevSavingRef.current = saving;
    }, [saving, toast.visible, toast.type, navigate]);

    const churchOptions = useMemo(
        () => churches.map((c) => ({ label: c.name, value: c.ref })),
        [churches],
    );

    const initialValues = useMemo<Partial<IChurchPhotoForm>>(() => {
        if (!isEdit || !editing) {
            return { churchRef: '', fileRef: '' };
        }
        return {
            churchRef: editing.churchRef ?? '',
            fileRef: editing.fileRef ?? '',
            caption: editing.caption ?? '',
            sortOrder: editing.sortOrder ?? null,
        };
    }, [isEdit, editing]);

    const elements = useMemo(
        () => getChurchPhotoFormElements({ churchOptions }),
        [churchOptions],
    );

    const elementsWithValues = useMemo<IFormElement<IChurchPhotoForm>[]>(
        () =>
            elements.map((el) => {
                const key = (el as any).id as keyof IChurchPhotoForm;
                if (key in initialValues) {
                    return {
                        ...el,
                        initialValue: (initialValues as any)[key],
                    } as IFormElement<IChurchPhotoForm>;
                }
                return el;
            }),
        [elements, initialValues],
    );

    const handleSubmit = (
        data: IChurchPhotoForm,
        setIsSubmitting: (v: boolean) => void,
    ) => {
        setIsSubmitting(true);
        const payload: IChurchPhotoForm = {
            ...data,
            sortOrder:
                data.sortOrder !== undefined &&
                data.sortOrder !== null &&
                (data.sortOrder as any) !== ''
                    ? Number(data.sortOrder)
                    : null,
        };
        if (isEdit && ref) {
            dispatch(churchesActions.updatePhoto({ ref, data: payload }));
        } else {
            dispatch(churchesActions.createPhoto(payload));
        }
    };

    const title = isEdit ? 'Edit Church Photo' : 'New Church Photo';

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex gap={12} alignItems="center">
                <Button
                    icon={<ArrowLeft size={16} />}
                    rounded
                    text
                    onClick={() => navigate('/church-photos')}
                    aria-label="Back"
                />
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    {title}
                </Text>
            </Flex>

            <Card>
                <Form<IChurchPhotoForm>
                    ref={formRef}
                    elements={elementsWithValues}
                    onSubmit={handleSubmit}
                    grid={{ columns: 12, gap: '1rem' }}
                    submitButtonProps="none"
                />
            </Card>

            <Flex justifyContent="flex-end" gap={12}>
                <Button
                    label="Cancel"
                    severity="secondary"
                    outlined
                    onClick={() => navigate('/church-photos')}
                />
                <Button
                    label="Save"
                    icon="pi pi-check"
                    loading={saving}
                    onClick={() => formRef.current?.onFormSubmit?.()}
                />
            </Flex>
        </Flex>
    );
};

export default ChurchPhotoForm;
