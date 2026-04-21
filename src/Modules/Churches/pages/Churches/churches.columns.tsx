import React from 'react';
import { Flex, IColumn } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import type { IChurch } from '../../models/churches.types';

interface ChurchesColumnOptions {
    onEdit: (row: IChurch) => void;
    onDelete: (row: IChurch) => void;
}

export const getChurchesColumns = ({
    onEdit,
    onDelete,
}: ChurchesColumnOptions): IColumn<IChurch>[] => [
    { name: 'name', label: 'Name', isSortable: true },
    { name: 'otherName', label: 'Other Name' },
    {
        name: 'isMonastery',
        label: 'Type',
        body: (value: IChurch['isMonastery']) => (
            <Tag
                value={value ? 'Monastery' : 'Church'}
                severity={value ? 'warning' : 'info'}
                style={{ fontSize: '11px' }}
            />
        ),
    },
    { name: 'country', label: 'Country' },
    { name: 'city', label: 'City' },
    {
        name: 'denomination',
        label: 'Denomination',
        body: (value: IChurch['denomination']) => value?.title ?? '',
    },
    {
        name: 'ref',
        label: '',
        headerStyle: { width: '120px', textAlign: 'right' },
        bodyStyle: { textAlign: 'right' },
        body: (_value: string, row: IChurch) => (
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
