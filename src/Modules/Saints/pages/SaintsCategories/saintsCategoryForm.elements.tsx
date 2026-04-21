import * as Yup from 'yup';
import type { IFormElement } from '@lmb-it/kitsconcerto-web';
import type { ISaintsCategory, ISaintsCategoryForm } from '../../models/saints.types';

export interface ISaintsCategoryFormElementsOptions {
    categories: ISaintsCategory[];
    editingRef?: string | null;
}

export const getSaintsCategoryFormElements = (
    opts: ISaintsCategoryFormElementsOptions,
): IFormElement<ISaintsCategoryForm>[] => {
    const { categories, editingRef } = opts;

    const parentOptions = [
        { label: '— None —', value: '' },
        ...categories
            .filter((c) => c.ref !== editingRef)
            .map((c) => ({ label: c.slug, value: c.ref })),
    ];

    return [
        {
            type: 'Text',
            id: 'slug',
            label: 'Slug',
            placeholder: 'e.g. martyrs, monks',
            schema: Yup.string().required('Slug is required'),
            colSpan: 12,
        },
        {
            type: 'Select',
            id: 'parentRef' as any,
            label: 'Parent Category',
            list: parentOptions,
            initialValue: '',
            withFilter: true,
            colSpan: 12,
        },
    ];
};
