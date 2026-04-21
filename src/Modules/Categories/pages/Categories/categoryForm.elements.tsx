import * as Yup from 'yup';
import type { IFormElement } from '@lmb-it/kitsconcerto-web';
import type { ICategory, ICategoryForm } from '../../models/categories.types';

export interface ICategoryFormElementsOptions {
    categories: ICategory[];
    editingRef?: string | null;
}

export const getCategoryFormElements = (
    opts: ICategoryFormElementsOptions,
): IFormElement<ICategoryForm>[] => {
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
            placeholder: 'e.g. hymns, sermons',
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
        {
            type: 'Text',
            id: 'mainImageRef',
            label: 'Main Image Ref',
            colSpan: 12,
        },
        {
            type: 'Text',
            id: 'sortOrder' as any,
            label: 'Sort Order',
            colSpan: 6,
        },
        {
            type: 'Switch',
            id: 'isActive',
            label: 'Active',
            initialValue: true,
            colSpan: 6,
        },
    ];
};
