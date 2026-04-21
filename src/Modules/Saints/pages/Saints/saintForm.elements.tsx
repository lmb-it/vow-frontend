import * as Yup from 'yup';
import type { IFormElement } from '@lmb-it/kitsconcerto-web';
import type { ISaintForm, ISaintsCategory } from '../../models/saints.types';

export interface ISaintFormElementsOptions {
    categories: ISaintsCategory[];
}

const GENDER_OPTIONS = [
    { label: '—', value: '' },
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
];

export const getSaintFormElements = (
    opts: ISaintFormElementsOptions,
): IFormElement<ISaintForm>[] => {
    const { categories } = opts;

    const categoryOptions = categories.map((c) => ({
        label: c.slug,
        value: c.ref,
    }));

    return [
        // Name Arabic / English — side-by-side
        {
            type: 'Text',
            id: 'nameAr',
            label: 'Name (AR)',
            placeholder: 'الاسم بالعربية',
            schema: Yup.string().required('Arabic name is required'),
            colSpan: 6,
        },
        {
            type: 'Text',
            id: 'nameEn',
            label: 'Name (EN)',
            placeholder: 'Name in English',
            schema: Yup.string().required('English name is required'),
            colSpan: 6,
        },

        // Gender
        {
            type: 'Select',
            id: 'gender' as any,
            label: 'Gender',
            list: GENDER_OPTIONS,
            initialValue: '',
            colSpan: 12,
        },

        // Country / Nationality
        {
            type: 'Text',
            id: 'country',
            label: 'Country',
            colSpan: 6,
        },
        {
            type: 'Text',
            id: 'nationality',
            label: 'Nationality',
            colSpan: 6,
        },

        // DOB / dobAd
        {
            type: 'Text',
            id: 'dob' as any,
            label: 'Date of Birth',
            placeholder: 'YYYY-MM-DD or approximate',
            colSpan: 6,
        },
        {
            type: 'Switch',
            id: 'dobAd',
            label: 'Date of Birth is AD (not AM)',
            initialValue: true,
            colSpan: 6,
        },

        // Deceased / deceasedAd
        {
            type: 'Text',
            id: 'deceased' as any,
            label: 'Deceased',
            placeholder: 'YYYY-MM-DD or approximate',
            colSpan: 6,
        },
        {
            type: 'Switch',
            id: 'deceasedAd',
            label: 'Deceased is AD (not AM)',
            initialValue: true,
            colSpan: 6,
        },

        // Relics
        {
            type: 'Text',
            id: 'relicsLocation',
            label: 'Relics Location',
            colSpan: 12,
        },

        // For more info
        {
            type: 'Textarea',
            id: 'forMoreInfo',
            label: 'For More Info',
            rows: 3,
            colSpan: 12,
        },

        // Icon Uri + main image ref
        {
            type: 'Text',
            id: 'iconUri',
            label: 'Icon URI',
            colSpan: 6,
        },
        {
            type: 'Text',
            id: 'mainImageRef',
            label: 'Main Image Ref',
            colSpan: 6,
        },

        // Category
        {
            type: 'Select',
            id: 'categoryRef',
            label: 'Category',
            list: categoryOptions,
            withFilter: true,
            schema: Yup.string().required('Category is required'),
            colSpan: 12,
        },
    ];
};
