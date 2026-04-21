import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Flex, Form, IFormElement, Text } from '@lmb-it/kitsconcerto-web';
import { categoriesActions } from '../../store/categories.slice';
import {
    selectHashtagsLoading,
    selectSelectedHashtag,
} from '../../store/categories.selectors';
import type { IReducers } from 'Redux';
import type { IHashtagForm } from '../../models/categories.types';
import { getHashtagFormElements } from './hashtagForm.elements';

interface Props {
    visible: boolean;
    onHide: () => void;
    isCreating: boolean;
}

const HashtagEditDialog: React.FC<Props> = ({ visible, onHide, isCreating }) => {
    const dispatch = useDispatch();
    const formRef = useRef<any>(null);

    const editing = useSelector(selectSelectedHashtag);
    const saving = useSelector(selectHashtagsLoading);
    const toast = useSelector((state: IReducers) => state.toast);

    const prevSavingRef = useRef<boolean>(false);
    useEffect(() => {
        if (prevSavingRef.current && !saving && toast.visible && toast.type === 'success') {
            onHide();
        }
        prevSavingRef.current = saving;
    }, [saving, toast.visible, toast.type, onHide]);

    const initialValues = useMemo<Partial<IHashtagForm>>(() => {
        if (isCreating || !editing) return { name: '' };
        return { name: editing.name ?? '' };
    }, [isCreating, editing]);

    const elements = useMemo(() => getHashtagFormElements(), []);

    const elementsWithValues = useMemo<IFormElement<IHashtagForm>[]>(
        () =>
            elements.map((el) => {
                const key = (el as any).id as keyof IHashtagForm;
                if (key in initialValues) {
                    return {
                        ...el,
                        initialValue: (initialValues as any)[key] ?? '',
                    } as IFormElement<IHashtagForm>;
                }
                return el;
            }),
        [elements, initialValues],
    );

    const handleSubmit = (
        data: IHashtagForm,
        setIsSubmitting: (v: boolean) => void,
    ) => {
        setIsSubmitting(true);
        const payload: IHashtagForm = { name: data.name.trim() };
        if (isCreating) {
            dispatch(categoriesActions.createHashtag(payload));
        } else if (editing) {
            dispatch(
                categoriesActions.updateHashtag({
                    name: editing.name,
                    data: payload,
                }),
            );
        }
    };

    const header = isCreating ? 'New Hashtag' : 'Edit Hashtag';

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
            style={{ width: '440px' }}
            modal
            draggable={false}
            closable
        >
            {!isCreating && !editing ? (
                <Flex p={16}>
                    <Text>Loading…</Text>
                </Flex>
            ) : (
                <Form<IHashtagForm>
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

export default HashtagEditDialog;
