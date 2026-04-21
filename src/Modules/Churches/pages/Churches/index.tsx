import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Flex, GoTable, Text, useDialog } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { churchesActions } from '../../store/churches.slice';
import {
    selectChurches,
    selectChurchesTableLoading,
    selectChurchesRefreshKey,
} from '../../store/churches.selectors';
import type { IChurch } from '../../models/churches.types';
import { getChurchesColumns } from './churches.columns';

const ChurchesListing: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { confirm } = useDialog();

    const items = useSelector(selectChurches);
    const loading = useSelector(selectChurchesTableLoading);
    const refreshKey = useSelector(selectChurchesRefreshKey);

    useEffect(() => {
        dispatch(churchesActions.loadTable({}));
    }, [dispatch, refreshKey]);

    const handleCreate = () => navigate('/churches/new');
    const handleEdit = (row: IChurch) => navigate(`/churches/${row.ref}/edit`);
    const handleDelete = (row: IChurch) => {
        confirm({
            message: `Are you sure you want to delete "${row.name}"?`,
            header: 'Confirm Delete',
            acceptClassName: 'p-button-danger',
            accept: () => dispatch(churchesActions.destroy({ ref: row.ref })),
        });
    };

    const columns = useMemo(
        () => getChurchesColumns({ onEdit: handleEdit, onDelete: handleDelete }),
        [],
    );

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    Churches
                </Text>
                <Button label="Add Church" icon="pi pi-plus" onClick={handleCreate} />
            </Flex>
            <GoTable
                id="churches-table"
                keyColumn="ref"
                data={items}
                columns={columns}
                loading={loading}
                emptyMessage="No churches found"
                globalSearch
            />
        </Flex>
    );
};

export default ChurchesListing;
