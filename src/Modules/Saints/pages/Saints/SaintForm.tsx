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
import { saintsActions } from '../../store/saints.slice';
import {
    selectEditingSaint,
    selectEditingSaintLoading,
    selectSaintsCategories,
    selectSaintsSharedLoading,
} from '../../store/saints.selectors';
import {
    denominationsActions,
    selectDenominations,
} from 'Modules/Denominations/store';
import {
    churchesActions,
    selectChurches,
} from 'Modules/Churches/store';
import type { IReducers } from 'Redux';
import type { ISaintForm } from '../../models/saints.types';
import { getSaintFormElements } from './saintForm.elements';

const SaintForm: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ref } = useParams<{ ref?: string }>();
    const isEdit = !!ref;

    const formRef = useRef<any>(null);

    const editing = useSelector(selectEditingSaint);
    const editingLoading = useSelector(selectEditingSaintLoading);
    const categories = useSelector(selectSaintsCategories);
    const saving = useSelector(selectSaintsSharedLoading);
    const toast = useSelector((state: IReducers) => state.toast);
    const denominations = useSelector(selectDenominations);
    const churches = useSelector(selectChurches);

    const denominationOptions = useMemo(
        () => denominations.map((d) => ({ label: d.title, value: d.ref })),
        [denominations],
    );
    const churchOptions = useMemo(
        () => churches.map((c) => ({ label: c.name, value: c.ref })),
        [churches],
    );

    // Load categories (for the dropdown) + the saint if editing
    useEffect(() => {
        if (!categories.length) {
            dispatch(saintsActions.loadSaintsCategories({}));
        }
        if (!denominations.length) {
            dispatch(denominationsActions.loadTable({}));
        }
        if (!churches.length) {
            dispatch(churchesActions.loadTable({}));
        }
        if (isEdit && ref) {
            dispatch(saintsActions.loadSaint(ref));
        } else {
            dispatch(saintsActions.setEditingSaint(null));
        }
    }, [dispatch, isEdit, ref]);

    // Navigate back on successful save
    const prevSavingRef = useRef<boolean>(false);
    useEffect(() => {
        if (prevSavingRef.current && !saving && toast.visible && toast.type === 'success') {
            navigate('/saints');
        }
        prevSavingRef.current = saving;
    }, [saving, toast.visible, toast.type, navigate]);

    const initialValues = useMemo<Partial<ISaintForm>>(() => {
        if (!isEdit || !editing) {
            return {
                nameAr: '',
                nameEn: '',
                gender: null,
                dobAd: true,
                deceasedAd: true,
                denominationRefs: [],
                churchRefs: [],
            };
        }
        return {
            nameAr: editing.nameAr ?? '',
            nameEn: editing.nameEn ?? '',
            gender: editing.gender ?? null,
            dob: editing.dob ?? null,
            deceased: editing.deceased ?? null,
            dobAd: editing.dobAd ?? true,
            deceasedAd: editing.deceasedAd ?? true,
            country: editing.country ?? '',
            nationality: editing.nationality ?? '',
            relicsLocation: editing.relicsLocation ?? '',
            forMoreInfo: editing.forMoreInfo ?? '',
            iconUri: editing.iconUri ?? '',
            mainImageRef: editing.mainImageRef ?? '',
            categoryRef: editing.categoryRef ?? '',
            denominationRefs: (editing.denominations ?? []).map((d) => d.ref),
            churchRefs: [],
        };
    }, [isEdit, editing]);

    const elements = useMemo(
        () => getSaintFormElements({ categories }),
        [categories],
    );

    // Inject initial values & add placeholder multi-selects for denominations / churches.
    const elementsWithValues = useMemo<IFormElement<ISaintForm>[]>(() => {
        const base = elements.map((el) => {
            const key = (el as any).id as keyof ISaintForm;
            if (key in initialValues) {
                return { ...el, initialValue: (initialValues as any)[key] } as IFormElement<ISaintForm>;
            }
            return el;
        });

        const denominationsEl: IFormElement<ISaintForm> = {
            type: 'Multiselect',
            id: 'denominationRefs',
            label: 'Denominations',
            list: denominationOptions,
            initialValue: initialValues.denominationRefs ?? [],
            colSpan: 12,
        };
        const churchesEl: IFormElement<ISaintForm> = {
            type: 'Multiselect',
            id: 'churchRefs',
            label: 'Churches',
            list: churchOptions,
            initialValue: initialValues.churchRefs ?? [],
            colSpan: 12,
        };

        return [...base, denominationsEl, churchesEl];
    }, [elements, initialValues, denominationOptions, churchOptions]);

    // Split element arrays per section
    const coreElements = elementsWithValues.filter(
        (el) => !['denominationRefs', 'churchRefs'].includes((el as any).id),
    );
    const denominationElements = elementsWithValues.filter(
        (el) => (el as any).id === 'denominationRefs',
    );
    const churchElements = elementsWithValues.filter(
        (el) => (el as any).id === 'churchRefs',
    );

    const handleSubmit = (
        data: ISaintForm,
        setIsSubmitting: (v: boolean) => void,
    ) => {
        setIsSubmitting(true);
        const payload: ISaintForm = {
            ...data,
            gender: (data.gender as any) === '' ? null : data.gender,
        };
        if (isEdit && ref) {
            dispatch(saintsActions.updateSaint({ ref, data: payload }));
        } else {
            dispatch(saintsActions.createSaint(payload));
        }
    };

    const title = isEdit
        ? `Edit Saint${editing?.nameEn ? ` (${editing.nameEn})` : ''}`
        : 'New Saint';

    if (isEdit && editingLoading) {
        return (
            <Flex p={16}>
                <Text>Loading…</Text>
            </Flex>
        );
    }

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            {/* Header */}
            <Flex gap={12} alignItems="center">
                <Button
                    icon={<ArrowLeft size={16} />}
                    rounded
                    text
                    onClick={() => navigate('/saints')}
                    aria-label="Back"
                />
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    {title}
                </Text>
            </Flex>

            {/* Section 1: Core Fields */}
            <Card>
                <Text fontSize="18px" fontWeight="600">Core</Text>
                <Form<ISaintForm>
                    ref={formRef}
                    elements={coreElements as IFormElement<ISaintForm>[]}
                    onSubmit={handleSubmit}
                    grid={{ columns: 12, gap: '1rem' }}
                    submitButtonProps="none"
                />
            </Card>

            {/* Section 2: Denominations */}
            <Card>
                <Text fontSize="18px" fontWeight="600">Denominations</Text>
                <Form<ISaintForm>
                    elements={denominationElements as IFormElement<ISaintForm>[]}
                    onSubmit={() => {}}
                    submitButtonProps="none"
                />
            </Card>

            {/* Section 3: Churches */}
            <Card>
                <Text fontSize="18px" fontWeight="600">Churches</Text>
                <Form<ISaintForm>
                    elements={churchElements as IFormElement<ISaintForm>[]}
                    onSubmit={() => {}}
                    submitButtonProps="none"
                />
            </Card>

            {/* Section 4+: Placeholder linked-resource panels */}
            {[
                'Linked Videos',
                'Linked Hymns',
                'Linked Bible Verses',
                'Linked Prayers',
                'Linked Calendar Events',
            ].map((section) => (
                <Card key={section}>
                    <Text fontSize="18px" fontWeight="600">{section}</Text>
                    <Text style={{ fontStyle: 'italic', color: 'var(--text-color-secondary)' }}>
                        Coming soon — will be wired once module is built
                    </Text>
                </Card>
            ))}

            {/* Submit */}
            <Flex justifyContent="flex-end" gap={12}>
                <Button
                    label="Cancel"
                    severity="secondary"
                    outlined
                    onClick={() => navigate('/saints')}
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

export default SaintForm;
