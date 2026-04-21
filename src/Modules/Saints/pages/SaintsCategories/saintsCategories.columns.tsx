import React from 'react';
import { Flex, IColumn } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import type { ISaintsCategory } from '../../models/saints.types';

interface Options {
    getParentLabel: (ref: string | null) => string;
    onEdit: (row: ISaintsCategory) => void;
    onDelete: (row: ISaintsCategory) => void;
}

export const getSaintsCategoriesColumns = ({
    getParentLabel,
    onEdit,
    onDelete,
}: Options): IColumn<ISaintsCategory>[] => [
    { name: 'slug', label: 'Slug', isSortable: true },
    {
        name: 'parentRef',
        label: 'Parent',
        body: (value: ISaintsCategory['parentRef']) => getParentLabel(value),
    },
    {
        name: 'ref',
        label: '',
        headerStyle: { width: '120px', textAlign: 'right' },
        bodyStyle: { textAlign: 'right' },
        body: (_value: string, row: ISaintsCategory) => (
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
