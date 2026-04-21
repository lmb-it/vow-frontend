import * as Yup from 'yup';
import type { IFormElement } from '@lmb-it/kitsconcerto-web';
import type { IChurchForm } from '../../models/churches.types';

export interface IChurchFormElementsOptions {
    denominationOptions: { label: string; value: string }[];
}

export const getChurchFormElements = (
    opts: IChurchFormElementsOptions,
): IFormElement<IChurchForm>[] => {
    const { denominationOptions } = opts;

    return [
        // Name / OtherName
        {
            type: 'Text',
            id: 'name',
            label: 'Name',
            placeholder: 'Church / Monastery name',
            schema: Yup.string().required('Name is required'),
            colSpan: 6,
        },
        {
            type: 'Text',
            id: 'otherName',
            label: 'Other Name',
            colSpan: 6,
        },

        // Monastery toggle
        {
            type: 'Switch',
            id: 'isMonastery',
            label: 'Is Monastery',
            initialValue: false,
            colSpan: 6,
        },

        // Denomination (required)
        {
            type: 'Select',
            id: 'denominationRef',
            label: 'Denomination',
            list: denominationOptions,
            withFilter: true,
            schema: Yup.string().required('Denomination is required'),
            colSpan: 6,
        },

        // Country / State / City
        { type: 'Text', id: 'country', label: 'Country', colSpan: 4 },
        { type: 'Text', id: 'state', label: 'State / Province', colSpan: 4 },
        { type: 'Text', id: 'city', label: 'City', colSpan: 4 },

        // Street / zip / county
        { type: 'Text', id: 'streetName1', label: 'Street Line 1', colSpan: 6 },
        { type: 'Text', id: 'streetName2', label: 'Street Line 2', colSpan: 6 },
        { type: 'Text', id: 'zipCode', label: 'ZIP Code', colSpan: 4 },
        { type: 'Text', id: 'districtCounty', label: 'District / County', colSpan: 8 },

        // Full address
        { type: 'Textarea', id: 'address', label: 'Full Address', rows: 2, colSpan: 12 },

        // Lat / Lng (TODO: wire proper map picker)
        {
            type: 'Text',
            id: 'latitude' as any,
            label: 'Latitude',
            helperText: 'TODO: wire map picker for lat/lng.',
            colSpan: 6,
        },
        {
            type: 'Text',
            id: 'longitude' as any,
            label: 'Longitude',
            colSpan: 6,
        },

        // Saint anniversary
        {
            type: 'Text',
            id: 'saintAnniversary',
            label: 'Saint Anniversary',
            placeholder: 'YYYY-MM-DD or approximate',
            colSpan: 6,
        },

        // Logo / Banner — TODO: file uploader
        {
            type: 'Text',
            id: 'logoFileRef',
            label: 'Logo File Ref',
            helperText: 'TODO: replace with file uploader.',
            colSpan: 6,
        },
        {
            type: 'Text',
            id: 'bannerFileRef',
            label: 'Banner File Ref',
            helperText: 'TODO: replace with file uploader.',
            colSpan: 6,
        },
    ];
};
