import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Flex, GoTable, Text, useDialog } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { denominationsActions } from '../../store/denominations.slice';
import {
    selectDenominations,
    selectDenominationsTableLoading,
    selectDenominationsRefreshKey,
} from '../../store/denominations.selectors';
import type { IDenomination } from '../../models/denominations.types';
import { getDenominationsColumns } from './denominations.columns';

const DenominationsListing: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { confirm } = useDialog();

    const items = useSelector(selectDenominations);
    const loading = useSelector(selectDenominationsTableLoading);
    const refreshKey = useSelector(selectDenominationsRefreshKey);

    useEffect(() => {
        dispatch(denominationsActions.loadTable({}));
    }, [dispatch, refreshKey]);

    const handleCreate = () => navigate('/denominations/new');
    const handleEdit = (row: IDenomination) => navigate(`/denominations/${row.ref}/edit`);
    const handleDelete = (row: IDenomination) => {
        confirm({
            message: `Are you sure you want to delete "${row.title}"?`,
            header: 'Confirm Delete',
            acceptClassName: 'p-button-danger',
            accept: () => dispatch(denominationsActions.destroy({ ref: row.ref })),
        });
    };

    const columns = useMemo(
        () => getDenominationsColumns({ onEdit: handleEdit, onDelete: handleDelete }),
        [],
    );

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    Denominations
                </Text>
                <Button label="Add Denomination" icon="pi pi-plus" onClick={handleCreate} />
            </Flex>
            <GoTable
                id="denominations-table"
                keyColumn="ref"
                data={items}
                columns={columns}
                loading={loading}
                emptyMessage="No denominations found"
                globalSearch
            />
        </Flex>
    );
};

export default DenominationsListing;
