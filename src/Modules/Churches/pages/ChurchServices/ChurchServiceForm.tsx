import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Flex, Form, IFormElement, Text } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { ArrowLeft } from 'lucide-react';
import { churchesActions } from '../../store/churches.slice';
import {
    selectChurches,
    selectSelectedChurchService,
    selectChurchServicesLoading,
} from '../../store/churches.selectors';
import { languagesActions, selectLanguages } from 'Modules';
import type { IReducers } from 'Redux';
import type { IChurchServiceForm } from '../../models/churches.types';
import { getChurchServiceFormElements } from './churchServiceForm.elements';

const ChurchServiceForm: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ref } = useParams<{ ref?: string }>();
    const isEdit = !!ref;

    const formRef = useRef<any>(null);

    const editing = useSelector(selectSelectedChurchService);
    const saving = useSelector(selectChurchServicesLoading);
    const churches = useSelector(selectChurches);
    const languages = useSelector(selectLanguages);
    const toast = useSelector((state: IReducers) => state.toast);

    useEffect(() => {
        if (!churches.length) dispatch(churchesActions.loadTable({}));
        if (!languages.length) dispatch(languagesActions.loadTable({}));
        if (isEdit && ref) {
            dispatch(churchesActions.loadService(ref));
        } else {
            dispatch(churchesActions.setSelectedService(null));
        }
    }, [dispatch, isEdit, ref]);

    const prevSavingRef = useRef<boolean>(false);
    useEffect(() => {
        if (prevSavingRef.current && !saving && toast.visible && toast.type === 'success') {
            navigate('/church-services');
        }
        prevSavingRef.current = saving;
    }, [saving, toast.visible, toast.type, navigate]);

    const churchOptions = useMemo(
        () => churches.map((c) => ({ label: c.name, value: c.ref })),
        [churches],
    );
    const languageOptions = useMemo(
        () =>
            (languages as any[]).map((l: any) => ({
                label: l.title ?? l.name ?? l.code ?? l.ref,
                value: l.ref,
            })),
        [languages],
    );

    const initialValues = useMemo<Partial<IChurchServiceForm>>(() => {
        if (!isEdit || !editing) {
            return {
                churchRef: '',
                serviceType: '',
                dayOfWeek: '',
                startTime: '',
                isRecurring: true,
                isActive: true,
            };
        }
        return {
            churchRef: editing.churchRef ?? '',
            serviceType: editing.serviceType ?? '',
            dayOfWeek: editing.dayOfWeek ?? '',
            startTime: editing.startTime ?? '',
            endTime: editing.endTime ?? '',
            languageRef: editing.languageRef ?? '',
            notes: editing.notes ?? '',
            isRecurring: editing.isRecurring ?? true,
            isActive: editing.isActive ?? true,
        };
    }, [isEdit, editing]);

    const elements = useMemo(
        () => getChurchServiceFormElements({ churchOptions, languageOptions }),
        [churchOptions, languageOptions],
    );

    const elementsWithValues = useMemo<IFormElement<IChurchServiceForm>[]>(
        () =>
            elements.map((el) => {
                const key = (el as any).id as keyof IChurchServiceForm;
                if (key in initialValues) {
                    return {
                        ...el,
                        initialValue: (initialValues as any)[key],
                    } as IFormElement<IChurchServiceForm>;
                }
                return el;
            }),
        [elements, initialValues],
    );

    const handleSubmit = (
        data: IChurchServiceForm,
        setIsSubmitting: (v: boolean) => void,
    ) => {
        setIsSubmitting(true);
        const payload: IChurchServiceForm = {
            ...data,
            languageRef:
                data.languageRef && (data.languageRef as any) !== ''
                    ? data.languageRef
                    : null,
        };
        if (isEdit && ref) {
            dispatch(churchesActions.updateService({ ref, data: payload }));
        } else {
            dispatch(churchesActions.createService(payload));
        }
    };

    const title = isEdit ? 'Edit Church Service' : 'New Church Service';

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex gap={12} alignItems="center">
                <Button
                    icon={<ArrowLeft size={16} />}
                    rounded
                    text
                    onClick={() => navigate('/church-services')}
                    aria-label="Back"
                />
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    {title}
                </Text>
            </Flex>

            <Card>
                <Form<IChurchServiceForm>
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
                    onClick={() => navigate('/church-services')}
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

export default ChurchServiceForm;
