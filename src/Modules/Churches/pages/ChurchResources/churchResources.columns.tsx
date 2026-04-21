import React from 'react';
import { Flex, IColumn } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import type { IChurchResource } from '../../models/churches.types';

interface Options {
    getChurchLabel: (ref: string | null) => string;
    onEdit: (row: IChurchResource) => void;
    onDelete: (row: IChurchResource) => void;
}

export const getChurchResourcesColumns = ({
    getChurchLabel,
    onEdit,
    onDelete,
}: Options): IColumn<IChurchResource>[] => [
    {
        name: 'churchRef',
        label: 'Church',
        body: (v: string) => getChurchLabel(v),
    },
    {
        name: 'resourceType',
        label: 'Type',
        body: (v: string) => (
            <Tag value={v} style={{ fontSize: '11px', textTransform: 'capitalize' }} />
        ),
    },
    { name: 'resourceValue', label: 'Value' },
    {
        name: 'ref',
        label: '',
        headerStyle: { width: '120px', textAlign: 'right' },
        bodyStyle: { textAlign: 'right' },
        body: (_v: string, row: IChurchResource) => (
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
