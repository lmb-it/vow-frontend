import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Flex, GoTable, Text, useDialog } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { saintsActions } from '../../store/saints.slice';
import {
    selectSaints,
    selectSaintsCategories,
    selectSaintsLoading,
    selectSaintsRefreshKey,
} from '../../store/saints.selectors';
import type { ISaint } from '../../models/saints.types';
import { getSaintsColumns } from './saints.columns';

const SaintsListing: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { confirm } = useDialog();

    const items = useSelector(selectSaints);
    const categories = useSelector(selectSaintsCategories);
    const loading = useSelector(selectSaintsLoading);
    const refreshKey = useSelector(selectSaintsRefreshKey);

    useEffect(() => {
        dispatch(saintsActions.loadSaints({}));
        // Load categories once for label resolution in the table
        if (!categories.length) {
            dispatch(saintsActions.loadSaintsCategories({}));
        }
    }, [dispatch, refreshKey]);

    const getCategoryLabel = useCallback(
        (ref: string | null) => {
            if (!ref) return '';
            const c = categories.find((x) => x.ref === ref);
            return c?.slug ?? ref;
        },
        [categories],
    );

    const handleCreate = () => navigate('/saints/new');
    const handleEdit = (row: ISaint) => navigate(`/saints/${row.ref}/edit`);
    const handleDelete = (row: ISaint) => {
        confirm({
            message: `Are you sure you want to delete "${row.nameEn}"?`,
            header: 'Confirm Delete',
            acceptClassName: 'p-button-danger',
            accept: () => dispatch(saintsActions.deleteSaint({ ref: row.ref })),
        });
    };

    const columns = useMemo(
        () => getSaintsColumns({ getCategoryLabel, onEdit: handleEdit, onDelete: handleDelete }),
        [getCategoryLabel],
    );

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    Saints
                </Text>
                <Button label="Add Saint" icon="pi pi-plus" onClick={handleCreate} />
            </Flex>
            <GoTable
                id="saints-table"
                keyColumn="ref"
                data={items}
                columns={columns}
                loading={loading}
                emptyMessage="No saints found"
                globalSearch
            />
        </Flex>
    );
};

export default SaintsListing;
