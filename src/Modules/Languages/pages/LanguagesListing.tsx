import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Text, GoTable, IColumn, useDialog } from '@lmb-it/kitsconcerto';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { languagesActions } from '../store/languages.slice';
import {
    selectLanguages,
    selectLanguagesTableLoading,
    selectLanguagesRefreshKey,
} from '../store/languages.selectors';
import { ILanguage } from '../models/languages.types';

const LanguagesListing = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectLanguages);
    const loading = useSelector(selectLanguagesTableLoading);
    const refreshKey = useSelector(selectLanguagesRefreshKey);
    const { confirm } = useDialog();

    useEffect(() => {
        dispatch(languagesActions.loadTable({}));
    }, [dispatch, refreshKey]);

    const handleDelete = (ref: string) => {
        confirm({
            message: 'Are you sure you want to delete this language?',
            header: 'Confirm Delete',
            acceptClassName: 'p-button-danger',
            accept: () => dispatch(languagesActions.destroy({ ref, del: true })),
        });
    };

    const handleToggleActive = (row: ILanguage) => {
        dispatch(languagesActions.deactivate({ ref: row.ref, activate: !row.isActive }));
    };

    const columns: IColumn<ILanguage>[] = [
        { name: 'label', label: 'Name', isSortable: true },
        { name: 'nativeName', label: 'Native Name' },
        { name: 'iso2', label: 'ISO 2', isSortable: true },
        {
            name: 'isRTL',
            label: 'RTL',
            body: (_value: any, row: ILanguage) => (
                <Tag value={row.isRTL ? 'RTL' : 'LTR'}
                     severity={row.isRTL ? 'warning' : 'info'}
                     style={{ fontSize: '11px' }} />
            ),
        },
        {
            name: 'isActive',
            label: 'Status',
            body: (_value: any, row: ILanguage) => (
                <Tag value={row.isActive ? 'Active' : 'Inactive'}
                     severity={row.isActive ? 'success' : 'danger'}
                     style={{ fontSize: '11px', cursor: 'pointer' }}
                     onClick={() => handleToggleActive(row)} />
            ),
        },
        {
            name: 'actions' as any,
            label: '',
            body: (_value: any, row: ILanguage) => (
                <Flex gap={4}>
                    <Button icon="pi pi-trash" rounded text severity="danger" size="small"
                            onClick={() => handleDelete(row.ref)} />
                </Flex>
            ),
        },
    ];

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    Languages
                </Text>
            </Flex>
            <GoTable
                id="languages-table"
                keyColumn="ref"
                data={items}
                columns={columns}
                loading={loading}
                emptyMessage="No languages found"
            />
        </Flex>
    );
};

export default LanguagesListing;