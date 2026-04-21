import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Flex, Form, IFormElement, Text } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { ArrowLeft } from 'lucide-react';
import { churchesActions } from '../../store/churches.slice';
import {
    selectChurches,
    selectSelectedChurchResource,
    selectChurchResourcesLoading,
} from '../../store/churches.selectors';
import type { IReducers } from 'Redux';
import type { IChurchResourceForm } from '../../models/churches.types';
import { getChurchResourceFormElements } from './churchResourceForm.elements';

const ChurchResourceForm: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ref } = useParams<{ ref?: string }>();
    const isEdit = !!ref;

    const formRef = useRef<any>(null);

    const editing = useSelector(selectSelectedChurchResource);
    const saving = useSelector(selectChurchResourcesLoading);
    const churches = useSelector(selectChurches);
    const toast = useSelector((state: IReducers) => state.toast);

    useEffect(() => {
        if (!churches.length) dispatch(churchesActions.loadTable({}));
        if (isEdit && ref) {
            dispatch(churchesActions.loadResource(ref));
        } else {
            dispatch(churchesActions.setSelectedResource(null));
        }
    }, [dispatch, isEdit, ref]);

    const prevSavingRef = useRef<boolean>(false);
    useEffect(() => {
        if (prevSavingRef.current && !saving && toast.visible && toast.type === 'success') {
            navigate('/church-resources');
        }
        prevSavingRef.current = saving;
    }, [saving, toast.visible, toast.type, navigate]);

    const churchOptions = useMemo(
        () => churches.map((c) => ({ label: c.name, value: c.ref })),
        [churches],
    );

    const initialValues = useMemo<Partial<IChurchResourceForm>>(() => {
        if (!isEdit || !editing) {
            return {
                churchRef: '',
                resourceType: 'website',
                resourceValue: '',
            };
        }
        return {
            churchRef: editing.churchRef ?? '',
            resourceType: editing.resourceType ?? 'website',
            resourceValue: editing.resourceValue ?? '',
        };
    }, [isEdit, editing]);

    const elements = useMemo(
        () => getChurchResourceFormElements({ churchOptions }),
        [churchOptions],
    );

    const elementsWithValues = useMemo<IFormElement<IChurchResourceForm>[]>(
        () =>
            elements.map((el) => {
                const key = (el as any).id as keyof IChurchResourceForm;
                if (key in initialValues) {
                    return {
                        ...el,
                        initialValue: (initialValues as any)[key],
                    } as IFormElement<IChurchResourceForm>;
                }
                return el;
            }),
        [elements, initialValues],
    );

    const handleSubmit = (
        data: IChurchResourceForm,
        setIsSubmitting: (v: boolean) => void,
    ) => {
        setIsSubmitting(true);
        if (isEdit && ref) {
            dispatch(churchesActions.updateResource({ ref, data }));
        } else {
            dispatch(churchesActions.createResource(data));
        }
    };

    const title = isEdit ? 'Edit Church Resource' : 'New Church Resource';

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex gap={12} alignItems="center">
                <Button
                    icon={<ArrowLeft size={16} />}
                    rounded
                    text
                    onClick={() => navigate('/church-resources')}
                    aria-label="Back"
                />
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    {title}
                </Text>
            </Flex>

            <Card>
                <Form<IChurchResourceForm>
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
                    onClick={() => navigate('/church-resources')}
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

export default ChurchResourceForm;
