import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
    Card,
    Flex,
    Form,
    IFormElement,
    Text,
} from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { ArrowLeft } from 'lucide-react';
import { categoriesActions } from '../../store/categories.slice';
import {
    selectCategories,
    selectCategoriesLoading,
    selectSelectedCategory,
} from '../../store/categories.selectors';
import type { IReducers } from 'Redux';
import type { ICategoryForm } from '../../models/categories.types';
import { getCategoryFormElements } from './categoryForm.elements';

const CategoryForm: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ref } = useParams<{ ref?: string }>();
    const [searchParams] = useSearchParams();
    const parentFromQuery = searchParams.get('parent');
    const isEdit = !!ref;

    const formRef = useRef<any>(null);

    const editing = useSelector(selectSelectedCategory);
    const categories = useSelector(selectCategories);
    const saving = useSelector(selectCategoriesLoading);
    const toast = useSelector((state: IReducers) => state.toast);

    useEffect(() => {
        if (!categories.length) {
            dispatch(categoriesActions.loadTable({}));
        }
        if (isEdit && ref) {
            dispatch(categoriesActions.loadOne(ref));
        } else {
            dispatch(categoriesActions.setSelected(null));
        }
    }, [dispatch, isEdit, ref]);

    const prevSavingRef = useRef<boolean>(false);
    useEffect(() => {
        if (prevSavingRef.current && !saving && toast.visible && toast.type === 'success') {
            navigate('/categories');
        }
        prevSavingRef.current = saving;
    }, [saving, toast.visible, toast.type, navigate]);

    const initialValues = useMemo<Partial<ICategoryForm>>(() => {
        if (!isEdit || !editing) {
            return {
                slug: '',
                parentRef: parentFromQuery ?? null,
                mainImageRef: null,
                isActive: true,
                sortOrder: null,
            };
        }
        return {
            slug: editing.slug ?? '',
            parentRef: editing.parentRef ?? null,
            mainImageRef: editing.mainImageRef ?? null,
            isActive: editing.isActive ?? true,
            sortOrder: editing.sortOrder ?? null,
        };
    }, [isEdit, editing, parentFromQuery]);

    const elements = useMemo(
        () =>
            getCategoryFormElements({
                categories,
                editingRef: editing?.ref ?? null,
            }),
        [categories, editing],
    );

    const elementsWithValues = useMemo<IFormElement<ICategoryForm>[]>(
        () =>
            elements.map((el) => {
                const key = (el as any).id as keyof ICategoryForm;
                if (key in initialValues) {
                    return {
                        ...el,
                        initialValue: (initialValues as any)[key] ?? '',
                    } as IFormElement<ICategoryForm>;
                }
                return el;
            }),
        [elements, initialValues],
    );

    const handleSubmit = (
        data: ICategoryForm,
        setIsSubmitting: (v: boolean) => void,
    ) => {
        setIsSubmitting(true);
        const sortOrderRaw = (data.sortOrder as any);
        const payload: ICategoryForm = {
            slug: data.slug.trim(),
            parentRef: data.parentRef ? data.parentRef : null,
            mainImageRef: data.mainImageRef || null,
            isActive: data.isActive ?? true,
            sortOrder:
                sortOrderRaw === '' || sortOrderRaw == null
                    ? null
                    : Number(sortOrderRaw),
        };
        if (isEdit && ref) {
            dispatch(categoriesActions.update({ ref, data: payload }));
        } else {
            dispatch(categoriesActions.create(payload));
        }
    };

    const title = isEdit
        ? `Edit Category${editing?.slug ? ` (${editing.slug})` : ''}`
        : 'New Category';

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex gap={12} alignItems="center">
                <Button
                    icon={<ArrowLeft size={16} />}
                    rounded
                    text
                    onClick={() => navigate('/categories')}
                    aria-label="Back"
                />
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    {title}
                </Text>
            </Flex>

            <Card>
                <Form<ICategoryForm>
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
                    onClick={() => navigate('/categories')}
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

export default CategoryForm;
