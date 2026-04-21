import * as Yup from 'yup';
import type { IFormElement } from '@lmb-it/kitsconcerto-web';
import type { IChurchServiceForm } from '../../models/churches.types';

export interface IChurchServiceFormElementsOptions {
    churchOptions: { label: string; value: string }[];
    languageOptions: { label: string; value: string }[];
}

const DAY_OPTIONS = [
    { label: 'Sunday', value: 'sunday' },
    { label: 'Monday', value: 'monday' },
    { label: 'Tuesday', value: 'tuesday' },
    { label: 'Wednesday', value: 'wednesday' },
    { label: 'Thursday', value: 'thursday' },
    { label: 'Friday', value: 'friday' },
    { label: 'Saturday', value: 'saturday' },
];

export const getChurchServiceFormElements = (
    opts: IChurchServiceFormElementsOptions,
): IFormElement<IChurchServiceForm>[] => {
    const { churchOptions, languageOptions } = opts;

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
            type: 'Text',
            id: 'serviceType',
            label: 'Service Type',
            placeholder: 'e.g. liturgy, vespers',
            schema: Yup.string().required('Service type is required'),
            colSpan: 6,
        },
        {
            type: 'Select',
            id: 'dayOfWeek',
            label: 'Day of Week',
            list: DAY_OPTIONS,
            schema: Yup.string().required('Day is required'),
            colSpan: 4,
        },
        {
            type: 'Text',
            id: 'startTime',
            label: 'Start Time',
            placeholder: 'HH:MM',
            schema: Yup.string().required('Start time is required'),
            colSpan: 4,
        },
        {
            type: 'Text',
            id: 'endTime',
            label: 'End Time',
            placeholder: 'HH:MM',
            colSpan: 4,
        },
        {
            type: 'Select',
            id: 'languageRef',
            label: 'Language',
            list: languageOptions,
            withFilter: true,
            colSpan: 6,
        },
        {
            type: 'Switch',
            id: 'isRecurring',
            label: 'Recurring',
            initialValue: true,
            colSpan: 3,
        },
        {
            type: 'Switch',
            id: 'isActive',
            label: 'Active',
            initialValue: true,
            colSpan: 3,
        },
        {
            type: 'Textarea',
            id: 'notes',
            label: 'Notes',
            rows: 3,
            colSpan: 12,
        },
    ];
};
