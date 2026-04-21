import * as Yup from 'yup';
import type { IFormElement } from '@lmb-it/kitsconcerto-web';
import type { IDenominationForm } from '../../models/denominations.types';

export const getDenominationFormElements = (): IFormElement<IDenominationForm>[] => [
    {
        type: 'Text',
        id: 'title',
        label: 'Title',
        placeholder: 'Denomination title',
        schema: Yup.string().required('Title is required'),
        colSpan: 12,
    },
    {
        type: 'Text',
        id: 'headquarters',
        label: 'Headquarters',
        placeholder: 'Headquarters location',
        colSpan: 12,
    },
    {
        type: 'Text',
        id: 'patriarch',
        label: 'Patriarch',
        placeholder: 'Patriarch name',
        colSpan: 12,
    },
];
