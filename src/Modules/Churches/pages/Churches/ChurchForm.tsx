import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Flex, Form, IFormElement, Text } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { ArrowLeft } from 'lucide-react';
import { churchesActions } from '../../store/churches.slice';
import {
    selectSelectedChurch,
    selectChurchesLoading,
} from '../../store/churches.selectors';
import { denominationsActions, selectDenominations } from 'Modules';
import type { IReducers } from 'Redux';
import type { IChurchForm } from '../../models/churches.types';
import { getChurchFormElements } from './churchForm.elements';

const ChurchForm: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ref } = useParams<{ ref?: string }>();
    const isEdit = !!ref;

    const formRef = useRef<any>(null);

    const editing = useSelector(selectSelectedChurch);
    const saving = useSelector(selectChurchesLoading);
    const denominations = useSelector(selectDenominations);
    const toast = useSelector((state: IReducers) => state.toast);

    useEffect(() => {
        if (!denominations.length) dispatch(denominationsActions.loadTable({}));
        if (isEdit && ref) {
            dispatch(churchesActions.loadOne(ref));
        } else {
            dispatch(churchesActions.setSelected(null));
        }
    }, [dispatch, isEdit, ref]);

    const denominationOptions = useMemo(
        () =>
            (denominations as any[]).map((d: any) => ({
                label: d.title ?? d.name ?? d.ref,
                value: d.ref,
            })),
        [denominations],
    );

    const prevSavingRef = useRef<boolean>(false);
    useEffect(() => {
        if (prevSavingRef.current && !saving && toast.visible && toast.type === 'success') {
            navigate('/churches');
        }
        prevSavingRef.current = saving;
    }, [saving, toast.visible, toast.type, navigate]);

    const initialValues = useMemo<Partial<IChurchForm>>(() => {
        if (!isEdit || !editing) {
            return {
                name: '',
                isMonastery: false,
                denominationRef: '',
            };
        }
        return {
            name: editing.name ?? '',
            otherName: editing.otherName ?? '',
            isMonastery: editing.isMonastery ?? false,
            country: editing.country ?? '',
            state: editing.state ?? '',
            city: editing.city ?? '',
            streetName1: editing.streetName1 ?? '',
            streetName2: editing.streetName2 ?? '',
            zipCode: editing.zipCode ?? '',
            districtCounty: editing.districtCounty ?? '',
            address: editing.address ?? '',
            latitude: editing.latitude ?? null,
            longitude: editing.longitude ?? null,
            saintAnniversary: editing.saintAnniversary ?? '',
            denominationRef: editing.denominationRef ?? '',
            logoFileRef: editing.logoFileRef ?? '',
            bannerFileRef: editing.bannerFileRef ?? '',
        };
    }, [isEdit, editing]);

    const elements = useMemo(
        () => getChurchFormElements({ denominationOptions }),
        [denominationOptions],
    );

    const elementsWithValues = useMemo<IFormElement<IChurchForm>[]>(
        () =>
            elements.map((el) => {
                const key = (el as any).id as keyof IChurchForm;
                if (key in initialValues) {
                    return {
                        ...el,
                        initialValue: (initialValues as any)[key],
                    } as IFormElement<IChurchForm>;
                }
                return el;
            }),
        [elements, initialValues],
    );

    const handleSubmit = (data: IChurchForm, setIsSubmitting: (v: boolean) => void) => {
        setIsSubmitting(true);
        const payload: IChurchForm = {
            ...data,
            latitude:
                data.latitude !== undefined && data.latitude !== null && (data.latitude as any) !== ''
                    ? Number(data.latitude)
                    : null,
            longitude:
                data.longitude !== undefined && data.longitude !== null && (data.longitude as any) !== ''
                    ? Number(data.longitude)
                    : null,
        };
        if (isEdit && ref) {
            dispatch(churchesActions.update({ ref, data: payload }));
        } else {
            dispatch(churchesActions.create(payload));
        }
    };

    const title = isEdit
        ? `Edit Church${editing?.name ? ` (${editing.name})` : ''}`
        : 'New Church';

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex gap={12} alignItems="center">
                <Button
                    icon={<ArrowLeft size={16} />}
                    rounded
                    text
                    onClick={() => navigate('/churches')}
                    aria-label="Back"
                />
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    {title}
                </Text>
            </Flex>

            <Card>
                <Text fontSize="18px" fontWeight="600">Core</Text>
                <Form<IChurchForm>
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
                    onClick={() => navigate('/churches')}
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

export default ChurchForm;
