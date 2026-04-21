import React from 'react';
import { Flex, IColumn } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import type { IDenomination } from '../../models/denominations.types';

interface DenominationsColumnOptions {
    onEdit: (row: IDenomination) => void;
    onDelete: (row: IDenomination) => void;
}

export const getDenominationsColumns = ({
    onEdit,
    onDelete,
}: DenominationsColumnOptions): IColumn<IDenomination>[] => [
    { name: 'ref', label: 'Ref' },
    { name: 'title', label: 'Title', isSortable: true },
    { name: 'headquarters', label: 'Headquarters' },
    { name: 'patriarch', label: 'Patriarch' },
    {
        name: 'ref',
        label: '',
        headerStyle: { width: '120px', textAlign: 'right' },
        bodyStyle: { textAlign: 'right' },
        body: (_value: string, row: IDenomination) => (
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
