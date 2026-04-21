import React from 'react';
import { Flex, IColumn } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import type { IClergy } from '../../models/churches.types';

interface Options {
    getChurchLabel: (ref: string | null) => string;
    onEdit: (row: IClergy) => void;
    onDelete: (row: IClergy) => void;
}

export const getClergyColumns = ({
    getChurchLabel,
    onEdit,
    onDelete,
}: Options): IColumn<IClergy>[] => [
    {
        name: 'firstNameLatin',
        label: 'Name (EN)',
        body: (_v: string | null, row: IClergy) =>
            [row.firstNameLatin, row.lastNameLatin].filter(Boolean).join(' '),
    },
    {
        name: 'firstNameArabic',
        label: 'Name (AR)',
        body: (_v: string | null, row: IClergy) =>
            [row.firstNameArabic, row.lastNameArabic].filter(Boolean).join(' '),
    },
    { name: 'title', label: 'Title' },
    {
        name: 'gender',
        label: 'Gender',
        body: (v: IClergy['gender']) =>
            v ? (
                <Tag
                    value={v}
                    severity={v === 'male' ? 'info' : 'warning'}
                    style={{ fontSize: '11px', textTransform: 'capitalize' }}
                />
            ) : null,
    },
    {
        name: 'churchRef',
        label: 'Church',
        body: (v: string | null) => getChurchLabel(v),
    },
    {
        name: 'isActive',
        label: 'Active',
        body: (v: boolean) => (
            <Tag
                value={v ? 'Active' : 'Inactive'}
                severity={v ? 'success' : 'danger'}
                style={{ fontSize: '11px' }}
            />
        ),
    },
    {
        name: 'ref',
        label: '',
        headerStyle: { width: '120px', textAlign: 'right' },
        bodyStyle: { textAlign: 'right' },
        body: (_v: string, row: IClergy) => (
            <Flex gap={4} justifyContent="flex-end">
                <Button icon="pi pi-pencil" rounded text size="small" onClick={() => onEdit(row)} />
                <Button
                    icon="pi pi-trash"
                    rounded
                    text
                    severity="danger"
                    size="small"
                    onClick={() => onDelete(row)}
                />
            </Flex>
        ),
    },
];
