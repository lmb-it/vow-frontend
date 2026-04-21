import * as Yup from 'yup';
import type { IFormElement } from '@lmb-it/kitsconcerto-web';
import type { IChurchPhotoForm } from '../../models/churches.types';

export interface IChurchPhotoFormElementsOptions {
    churchOptions: { label: string; value: string }[];
}

export const getChurchPhotoFormElements = (
    opts: IChurchPhotoFormElementsOptions,
): IFormElement<IChurchPhotoForm>[] => {
    const { churchOptions } = opts;

    return [
        {
            type: 'Select',
            id: 'churchRef',
            label: 'Church',
            list: churchOptions,
            withFilter: true,
            schema: Yup.string().required('Church is required'),
            colSpan: 12,
        },
        {
            type: 'Text',
            id: 'fileRef',
            label: 'File Ref',
            schema: Yup.string().required('File ref is required'),
            helperText: 'TODO: replace with a file uploader.',
            colSpan: 12,
        },
        {
            type: 'Text',
            id: 'caption',
            label: 'Caption',
            colSpan: 8,
        },
        {
            type: 'Text',
            id: 'sortOrder' as any,
            label: 'Sort Order',
            colSpan: 4,
        },
    ];
};
