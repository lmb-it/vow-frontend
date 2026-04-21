import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Card,
    Flex,
    Form,
    IFormElement,
    Text,
} from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { ArrowLeft } from 'lucide-react';
import { denominationsActions } from '../../store/denominations.slice';
import {
    selectDenominationSelected,
    selectDenominationsLoading,
} from '../../store/denominations.selectors';
import type { IReducers } from 'Redux';
import type { IDenominationForm } from '../../models/denominations.types';
import { getDenominationFormElements } from './denominationForm.elements';

const DenominationFormPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ref } = useParams<{ ref?: string }>();
    const isEdit = !!ref;

    const editing = useSelector(selectDenominationSelected);
    const saving = useSelector(selectDenominationsLoading);
    const toast = useSelector((state: IReducers) => state.toast);

    useEffect(() => {
        if (isEdit && ref) {
            dispatch(denominationsActions.loadOne(ref));
        } else {
            dispatch(denominationsActions.setSelected(null));
        }
    }, [dispatch, isEdit, ref]);

    // Navigate back on successful save
    const prevSavingRef = useRef<boolean>(false);
    useEffect(() => {
        if (prevSavingRef.current && !saving && toast.visible && toast.type === 'success') {
            navigate('/denominations');
        }
        prevSavingRef.current = saving;
    }, [saving, toast.visible, toast.type, navigate]);

    const initialValues = useMemo<Partial<IDenominationForm>>(() => {
        if (!isEdit || !editing) {
            return {
                title: '',
                headquarters: '',
                patriarch: '',
            };
        }
        return {
            title: editing.title ?? '',
            headquarters: editing.headquarters ?? '',
            patriarch: editing.patriarch ?? '',
        };
    }, [isEdit, editing]);

    const elements = useMemo(() => getDenominationFormElements(), []);

    const elementsWithValues = useMemo<IFormElement<IDenominationForm>[]>(() => {
        return elements.map((el) => {
            const key = (el as any).id as keyof IDenominationForm;
            if (key in initialValues) {
                return {
                    ...el,
                    initialValue: (initialValues as any)[key],
                } as IFormElement<IDenominationForm>;
            }
            return el;
        });
    }, [elements, initialValues]);

    const handleSubmit = (
        data: IDenominationForm,
        setIsSubmitting: (v: boolean) => void,
    ) => {
        setIsSubmitting(true);
        const payload: IDenominationForm = {
            title: data.title,
            headquarters: data.headquarters ? data.headquarters : null,
            patriarch: data.patriarch ? data.patriarch : null,
        };
        if (isEdit && ref) {
            dispatch(denominationsActions.update({ ref, data: payload }));
        } else {
            dispatch(denominationsActions.create(payload));
        }
    };

    const title = isEdit
        ? `Edit Denomination${editing?.title ? ` (${editing.title})` : ''}`
        : 'New Denomination';

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex gap={12} alignItems="center">
                <Button
                    icon={<ArrowLeft size={16} />}
                    rounded
                    text
                    onClick={() => navigate('/denominations')}
                    aria-label="Back"
                />
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    {title}
                </Text>
            </Flex>

            <Card>
                <Form<IDenominationForm>
                    elements={elementsWithValues}
                    onSubmit={handleSubmit}
                    grid={{ columns: 12, gap: '1rem' }}
                    submitButtonProps={{ label: 'Save' }}
                />
            </Card>
        </Flex>
    );
};

export default DenominationFormPage;
