import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, GoTable, Text, useDialog } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { saintsActions } from '../../store/saints.slice';
import {
    selectSaintsCategories,
    selectSaintsCategoriesLoading,
    selectSaintsRefreshKey,
} from '../../store/saints.selectors';
import type { ISaintsCategory } from '../../models/saints.types';
import { getSaintsCategoriesColumns } from './saintsCategories.columns';
import SaintsCategoryEditDialog from './SaintsCategoryEditDialog';

const SaintsCategoriesPage: React.FC = () => {
    const dispatch = useDispatch();
    const { confirm } = useDialog();

    const items = useSelector(selectSaintsCategories);
    const loading = useSelector(selectSaintsCategoriesLoading);
    const refreshKey = useSelector(selectSaintsRefreshKey);

    const [dialogVisible, setDialogVisible] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        dispatch(saintsActions.loadSaintsCategories({}));
    }, [dispatch, refreshKey]);

    const getParentLabel = useCallback(
        (ref: string | null) => {
            if (!ref) return '';
            const c = items.find((x) => x.ref === ref);
            return c?.slug ?? ref;
        },
        [items],
    );

    const handleCreate = () => {
        dispatch(saintsActions.setEditingSaintsCategory(null));
        setIsCreating(true);
        setDialogVisible(true);
    };

    const handleEdit = (row: ISaintsCategory) => {
        dispatch(saintsActions.loadSaintsCategory(row.ref));
        setIsCreating(false);
        setDialogVisible(true);
    };

    const handleDelete = (row: ISaintsCategory) => {
        confirm({
            message: `Are you sure you want to delete "${row.slug}"?`,
            header: 'Confirm Delete',
            acceptClassName: 'p-button-danger',
            accept: () => dispatch(saintsActions.deleteSaintsCategory({ ref: row.ref })),
        });
    };

    const columns = useMemo(
        () =>
            getSaintsCategoriesColumns({
                getParentLabel,
                onEdit: handleEdit,
                onDelete: handleDelete,
            }),
        [getParentLabel],
    );

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    Saints Categories
                </Text>
                <Button label="Add Category" icon="pi pi-plus" onClick={handleCreate} />
            </Flex>
            <GoTable
                id="saints-categories-table"
                keyColumn="ref"
                data={items}
                columns={columns}
                loading={loading}
                emptyMessage="No categories found"
                globalSearch
            />
            <SaintsCategoryEditDialog
                visible={dialogVisible}
                onHide={() => setDialogVisible(false)}
                isCreating={isCreating}
            />
        </Flex>
    );
};

export default SaintsCategoriesPage;
