import * as Yup from 'yup';
import type { IFormElement } from '@lmb-it/kitsconcerto-web';
import type { IChurchResourceForm } from '../../models/churches.types';

export interface IChurchResourceFormElementsOptions {
    churchOptions: { label: string; value: string }[];
}

const RESOURCE_TYPE_OPTIONS = [
    { label: 'Website', value: 'website' },
    { label: 'Facebook', value: 'facebook' },
    { label: 'YouTube', value: 'youtube' },
    { label: 'X / Twitter', value: 'x' },
    { label: 'Instagram', value: 'instagram' },
    { label: 'Other', value: 'other' },
];

export const getChurchResourceFormElements = (
    opts: IChurchResourceFormElementsOptions,
): IFormElement<IChurchResourceForm>[] => {
    const { churchOptions } = opts;

    return [
        {
            type: 'Select',
            id: 'churchRef',
            label: 'Church',
            list: churchOptions,
            withFilter: true,
            schema: Yup.string().required('Church is required'),
            colSpan: 6,
        },
        {
            type: 'Select',
            id: 'resourceType',
            label: 'Resource Type',
            list: RESOURCE_TYPE_OPTIONS,
            schema: Yup.string().required('Type is required'),
            colSpan: 6,
        },
        {
            type: 'Text',
            id: 'resourceValue',
            label: 'Resource Value / URL',
            placeholder: 'https://…',
            schema: Yup.string().required('Value is required'),
            colSpan: 12,
        },
    ];
};
