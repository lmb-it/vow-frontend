import React from 'react';
import { Flex, IColumn } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import type { IChurchPhoto } from '../../models/churches.types';

interface Options {
    getChurchLabel: (ref: string | null) => string;
    onEdit: (row: IChurchPhoto) => void;
    onDelete: (row: IChurchPhoto) => void;
}

export const getChurchPhotosColumns = ({
    getChurchLabel,
    onEdit,
    onDelete,
}: Options): IColumn<IChurchPhoto>[] => [
    {
        name: 'churchRef',
        label: 'Church',
        body: (v: string) => getChurchLabel(v),
    },
    { name: 'fileRef', label: 'File Ref' },
    { name: 'caption', label: 'Caption' },
    { name: 'sortOrder', label: 'Order' },
    {
        name: 'ref',
        label: '',
        headerStyle: { width: '120px', textAlign: 'right' },
        bodyStyle: { textAlign: 'right' },
        body: (_v: string, row: IChurchPhoto) => (
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
