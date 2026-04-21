import type { IFormElement } from '@lmb-it/kitsconcerto-web';
import type { IClergyForm } from '../../models/churches.types';

export interface IClergyFormElementsOptions {
    churchOptions: { label: string; value: string }[];
    denominationOptions: { label: string; value: string }[];
}

const GENDER_OPTIONS = [
    { label: '—', value: '' },
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
];

export const getClergyFormElements = (
    opts: IClergyFormElementsOptions,
): IFormElement<IClergyForm>[] => {
    const { churchOptions, denominationOptions } = opts;

    return [
        // First name AR / EN side-by-side
        {
            type: 'Text',
            id: 'firstNameArabic',
            label: 'First Name (AR)',
            placeholder: 'الاسم الأول',
            colSpan: 6,
        },
        {
            type: 'Text',
            id: 'firstNameLatin',
            label: 'First Name (EN)',
            colSpan: 6,
        },

        // Last name AR / EN side-by-side
        {
            type: 'Text',
            id: 'lastNameArabic',
            label: 'Last Name (AR)',
            placeholder: 'اسم العائلة',
            colSpan: 6,
        },
        {
            type: 'Text',
            id: 'lastNameLatin',
            label: 'Last Name (EN)',
            colSpan: 6,
        },

        // Title / gender
        { type: 'Text', id: 'title', label: 'Title', colSpan: 8 },
        {
            type: 'Select',
            id: 'gender' as any,
            label: 'Gender',
            list: GENDER_OPTIONS,
            initialValue: '',
            colSpan: 4,
        },

        // Church / Denomination dropdowns
        {
            type: 'Select',
            id: 'churchRef',
            label: 'Church',
            list: churchOptions,
            withFilter: true,
            colSpan: 6,
        },
        {
            type: 'Select',
            id: 'denominationRef',
            label: 'Denomination',
            list: denominationOptions,
            withFilter: true,
            colSpan: 6,
        },

        // Main image — TODO uploader
        {
            type: 'Text',
            id: 'mainImageRef',
            label: 'Main Image Ref',
            helperText: 'TODO: replace with file uploader.',
            colSpan: 12,
        },

        // Bio
        { type: 'Textarea', id: 'bio', label: 'Biography', rows: 4, colSpan: 12 },

        // Active toggle
        {
            type: 'Switch',
            id: 'isActive',
            label: 'Active',
            initialValue: true,
            colSpan: 3,
        },
    ];
};
