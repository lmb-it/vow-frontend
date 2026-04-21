import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Flex, Form, IFormElement, Text } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { ArrowLeft } from 'lucide-react';
import { churchesActions } from '../../store/churches.slice';
import {
    selectChurches,
    selectSelectedClergy,
    selectClergyLoading,
} from '../../store/churches.selectors';
import { denominationsActions, selectDenominations } from 'Modules';
import type { IReducers } from 'Redux';
import type { IClergyForm } from '../../models/churches.types';
import { getClergyFormElements } from './clergyForm.elements';

const ClergyForm: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ref } = useParams<{ ref?: string }>();
    const isEdit = !!ref;

    const formRef = useRef<any>(null);

    const editing = useSelector(selectSelectedClergy);
    const saving = useSelector(selectClergyLoading);
    const churches = useSelector(selectChurches);
    const denominations = useSelector(selectDenominations);
    const toast = useSelector((state: IReducers) => state.toast);

    useEffect(() => {
        if (!churches.length) dispatch(churchesActions.loadTable({}));
        if (!denominations.length) dispatch(denominationsActions.loadTable({}));
        if (isEdit && ref) {
            dispatch(churchesActions.loadClergyOne(ref));
        } else {
            dispatch(churchesActions.setSelectedClergy(null));
        }
    }, [dispatch, isEdit, ref]);

    const prevSavingRef = useRef<boolean>(false);
    useEffect(() => {
        if (prevSavingRef.current && !saving && toast.visible && toast.type === 'success') {
            navigate('/clergy');
        }
        prevSavingRef.current = saving;
    }, [saving, toast.visible, toast.type, navigate]);

    const churchOptions = useMemo(
        () => churches.map((c) => ({ label: c.name, value: c.ref })),
        [churches],
    );
    const denominationOptions = useMemo(
        () =>
            (denominations as any[]).map((d: any) => ({
                label: d.title ?? d.name ?? d.ref,
                value: d.ref,
            })),
        [denominations],
    );

    const initialValues = useMemo<Partial<IClergyForm>>(() => {
        if (!isEdit || !editing) {
            return {
                isActive: true,
                gender: null,
            };
        }
        return {
            firstNameArabic: editing.firstNameArabic ?? '',
            lastNameArabic: editing.lastNameArabic ?? '',
            firstNameLatin: editing.firstNameLatin ?? '',
            lastNameLatin: editing.lastNameLatin ?? '',
            title: editing.title ?? '',
            gender: editing.gender ?? null,
            bio: editing.bio ?? '',
            mainImageRef: editing.mainImageRef ?? '',
            churchRef: editing.churchRef ?? '',
            denominationRef: editing.denominationRef ?? '',
            isActive: editing.isActive ?? true,
        };
    }, [isEdit, editing]);

    const elements = useMemo(
        () =>
            getClergyFormElements({
                churchOptions,
                denominationOptions,
            }),
        [churchOptions, denominationOptions],
    );

    const elementsWithValues = useMemo<IFormElement<IClergyForm>[]>(
        () =>
            elements.map((el) => {
                const key = (el as any).id as keyof IClergyForm;
                if (key in initialValues) {
                    return {
                        ...el,
                        initialValue: (initialValues as any)[key],
                    } as IFormElement<IClergyForm>;
                }
                return el;
            }),
        [elements, initialValues],
    );

    const handleSubmit = (
        data: IClergyForm,
        setIsSubmitting: (v: boolean) => void,
    ) => {
        setIsSubmitting(true);
        const payload: IClergyForm = {
            ...data,
            gender: (data.gender as any) === '' ? null : data.gender,
        };
        if (isEdit && ref) {
            dispatch(churchesActions.updateClergy({ ref, data: payload }));
        } else {
            dispatch(churchesActions.createClergy(payload));
        }
    };

    const title = isEdit ? 'Edit Clergy' : 'New Clergy';

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex gap={12} alignItems="center">
                <Button
                    icon={<ArrowLeft size={16} />}
                    rounded
                    text
                    onClick={() => navigate('/clergy')}
                    aria-label="Back"
                />
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    {title}
                </Text>
            </Flex>

            <Card>
                <Form<IClergyForm>
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
                    onClick={() => navigate('/clergy')}
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

export default ClergyForm;
