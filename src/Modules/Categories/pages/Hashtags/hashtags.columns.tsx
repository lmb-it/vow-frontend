import React from 'react';
import { Flex, IColumn } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import type { IHashtag } from '../../models/categories.types';

interface Options {
    onEdit: (row: IHashtag) => void;
    onDelete: (row: IHashtag) => void;
}

export const getHashtagsColumns = ({
    onEdit,
    onDelete,
}: Options): IColumn<IHashtag>[] => [
    { name: 'name', label: 'Name', isSortable: true },
    { name: 'bornAt', label: 'Created' },
    { name: 'touchedAt', label: 'Updated' },
    {
        name: 'name',
        label: '',
        headerStyle: { width: '120px', textAlign: 'right' },
        bodyStyle: { textAlign: 'right' },
        body: (_value: string, row: IHashtag) => (
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
