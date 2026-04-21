import React from 'react';
import { Flex, IColumn } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import type { ISaint } from '../../models/saints.types';

interface SaintsColumnOptions {
    getCategoryLabel: (ref: string | null) => string;
    onEdit: (row: ISaint) => void;
    onDelete: (row: ISaint) => void;
}

export const getSaintsColumns = ({
    getCategoryLabel,
    onEdit,
    onDelete,
}: SaintsColumnOptions): IColumn<ISaint>[] => [
    { name: 'nameEn', label: 'Name (EN)', isSortable: true },
    { name: 'nameAr', label: 'Name (AR)' },
    {
        name: 'gender',
        label: 'Gender',
        body: (value: ISaint['gender']) =>
            value ? (
                <Tag
                    value={value}
                    severity={value === 'male' ? 'info' : 'warning'}
                    style={{ fontSize: '11px', textTransform: 'capitalize' }}
                />
            ) : null,
    },
    {
        name: 'categoryRef',
        label: 'Category',
        body: (value: ISaint['categoryRef']) => getCategoryLabel(value),
    },
    { name: 'country', label: 'Country' },
    {
        name: 'denominations',
        label: 'Denominations',
        body: (value: ISaint['denominations']) => (
            <Flex gap={4} flexWrap="wrap">
                {(value ?? []).map((d) => (
                    <Tag key={d.ref} value={d.title} style={{ fontSize: '11px' }} />
                ))}
            </Flex>
        ),
    },
    {
        name: 'ref',
        label: '',
        headerStyle: { width: '120px', textAlign: 'right' },
        bodyStyle: { textAlign: 'right' },
        body: (_value: string, row: ISaint) => (
            <Flex gap={4} justifyContent="flex-end">
                <Button
                    icon="pi pi-pencil"
                    rounded
                    text
                    size="small"
                    onClick={() => onEdit(row)}
                />
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
