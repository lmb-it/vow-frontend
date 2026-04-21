import React from 'react';
import { Flex, IColumn } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import type { IChurchServiceItem } from '../../models/churches.types';

interface Options {
    getChurchLabel: (ref: string | null) => string;
    getLanguageLabel: (ref: string | null) => string;
    onEdit: (row: IChurchServiceItem) => void;
    onDelete: (row: IChurchServiceItem) => void;
}

export const getChurchServicesColumns = ({
    getChurchLabel,
    getLanguageLabel,
    onEdit,
    onDelete,
}: Options): IColumn<IChurchServiceItem>[] => [
    {
        name: 'churchRef',
        label: 'Church',
        body: (v: string) => getChurchLabel(v),
    },
    { name: 'serviceType', label: 'Service Type' },
    { name: 'dayOfWeek', label: 'Day' },
    { name: 'startTime', label: 'Start' },
    { name: 'endTime', label: 'End' },
    {
        name: 'languageRef',
        label: 'Language',
        body: (v: string | null) => getLanguageLabel(v),
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
        body: (_v: string, row: IChurchServiceItem) => (
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
