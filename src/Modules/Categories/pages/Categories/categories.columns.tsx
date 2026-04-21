import React from 'react';
import { Flex, IColumn } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import type { ICategory } from '../../models/categories.types';

interface Options {
    getParentLabel: (ref: string | null) => string;
    onEdit: (row: ICategory) => void;
    onDelete: (row: ICategory) => void;
}

export const getCategoriesColumns = ({
    getParentLabel,
    onEdit,
    onDelete,
}: Options): IColumn<ICategory>[] => [
    { name: 'slug', label: 'Slug', isSortable: true },
    {
        name: 'parentRef',
        label: 'Parent',
        body: (value: ICategory['parentRef']) => getParentLabel(value),
    },
    {
        name: 'isActive',
        label: 'Status',
        body: (value: ICategory['isActive']) => (
            <Tag
                value={value ? 'active' : 'inactive'}
                severity={value ? 'success' : 'warning'}
                style={{ fontSize: '11px' }}
            />
        ),
    },
    { name: 'sortOrder', label: 'Sort' },
    {
        name: 'ref',
        label: '',
        headerStyle: { width: '120px', textAlign: 'right' },
        bodyStyle: { textAlign: 'right' },
        body: (_value: string, row: ICategory) => (
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
