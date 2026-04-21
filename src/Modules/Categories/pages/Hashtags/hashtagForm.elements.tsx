import * as Yup from 'yup';
import type { IFormElement } from '@lmb-it/kitsconcerto-web';
import type { IHashtagForm } from '../../models/categories.types';

export const getHashtagFormElements = (): IFormElement<IHashtagForm>[] => [
    {
        type: 'Text',
        id: 'name',
        label: 'Name',
        placeholder: 'e.g. prayer, liturgy',
        schema: Yup.string()
            .required('Name is required')
            .matches(/^[a-z0-9-]+$/i, 'Only letters, digits and dashes'),
        colSpan: 12,
    },
];
