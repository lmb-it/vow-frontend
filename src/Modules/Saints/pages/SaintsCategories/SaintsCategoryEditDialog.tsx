import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Flex, Form, IFormElement, Text } from '@lmb-it/kitsconcerto-web';
import { saintsActions } from '../../store/saints.slice';
import {
    selectEditingSaintsCategory,
    selectEditingSaintsCategoryLoading,
    selectSaintsCategories,
    selectSaintsSharedLoading,
} from '../../store/saints.selectors';
import type { IReducers } from 'Redux';
import type { ISaintsCategoryForm } from '../../models/saints.types';
import { getSaintsCategoryFormElements } from './saintsCategoryForm.elements';

interface Props {
    visible: boolean;
    onHide: () => void;
    isCreating: boolean;
}

const SaintsCategoryEditDialog: React.FC<Props> = ({ visible, onHide, isCreating }) => {
    const dispatch = useDispatch();
    const formRef = useRef<any>(null);

    const editing = useSelector(selectEditingSaintsCategory);
    const editingLoading = useSelector(selectEditingSaintsCategoryLoading);
    const categories = useSelector(selectSaintsCategories);
    const saving = useSelector(selectSaintsSharedLoading);
    const toast = useSelector((state: IReducers) => state.toast);

    // Close dialog on successful save
    const prevSavingRef = useRef<boolean>(false);
    useEffect(() => {
        if (prevSavingRef.current && !saving && toast.visible && toast.type === 'success') {
            onHide();
        }
        prevSavingRef.current = saving;
    }, [saving, toast.visible, toast.type, onHide]);

    const initialValues = useMemo<Partial<ISaintsCategoryForm>>(() => {
        if (isCreating || !editing) {
            return { slug: '', parentRef: null };
        }
        return {
            slug: editing.slug ?? '',
            parentRef: editing.parentRef ?? null,
        };
    }, [isCreating, editing]);

    const elements = useMemo(
        () =>
            getSaintsCategoryFormElements({
                categories,
                editingRef: editing?.ref ?? null,
            }),
        [categories, editing],
    );

    const elementsWithValues = useMemo<IFormElement<ISaintsCategoryForm>[]>(
        () =>
            elements.map((el) => {
                const key = (el as any).id as keyof ISaintsCategoryForm;
                if (key in initialValues) {
                    return {
                        ...el,
                        initialValue: (initialValues as any)[key] ?? '',
                    } as IFormElement<ISaintsCategoryForm>;
                }
                return el;
            }),
        [elements, initialValues],
    );

    const handleSubmit = (
        data: ISaintsCategoryForm,
        setIsSubmitting: (v: boolean) => void,
    ) => {
        setIsSubmitting(true);
        const payload: ISaintsCategoryForm = {
            slug: data.slug.trim(),
            parentRef: data.parentRef ? data.parentRef : null,
        };
        if (isCreating) {
            dispatch(saintsActions.createSaintsCategory(payload));
        } else if (editing) {
            dispatch(
                saintsActions.updateSaintsCategory({ ref: editing.ref, data: payload }),
            );
        }
    };

    const header = isCreating ? 'New Category' : 'Edit Category';

    const footer = (
        <Flex justifyContent="flex-end" gap={8}>
            <Button label="Cancel" severity="secondary" outlined onClick={onHide} />
            <Button
                label={isCreating ? 'Create' : 'Save'}
                icon="pi pi-check"
                loading={saving}
                onClick={() => formRef.current?.onFormSubmit?.()}
            />
        </Flex>
    );

    return (
        <Dialog
            visible={visible}
            onHide={onHide}
            header={header}
            footer={footer}
            style={{ width: '520px' }}
            modal
            draggable={false}
            closable
        >
            {!isCreating && editingLoading ? (
                <Flex p={16}>
                    <Text>Loading…</Text>
                </Flex>
            ) : (
                <Form<ISaintsCategoryForm>
                    ref={formRef}
                    elements={elementsWithValues}
                    onSubmit={handleSubmit}
                    grid={{ columns: 12, gap: '1rem' }}
                    submitButtonProps="none"
                />
            )}
        </Dialog>
    );
};

export default SaintsCategoryEditDialog;
