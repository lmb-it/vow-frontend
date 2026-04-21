import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, GoTable, Text, useDialog } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { categoriesActions } from '../../store/categories.slice';
import {
    selectCategoriesRefreshKey,
    selectHashtags,
    selectHashtagsTableLoading,
} from '../../store/categories.selectors';
import type { IHashtag } from '../../models/categories.types';
import { getHashtagsColumns } from './hashtags.columns';
import HashtagEditDialog from './HashtagEditDialog';

const HashtagsPage: React.FC = () => {
    const dispatch = useDispatch();
    const { confirm } = useDialog();

    const items = useSelector(selectHashtags);
    const loading = useSelector(selectHashtagsTableLoading);
    const refreshKey = useSelector(selectCategoriesRefreshKey);

    const [dialogVisible, setDialogVisible] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        dispatch(categoriesActions.loadHashtagsTable({}));
    }, [dispatch, refreshKey]);

    const handleCreate = () => {
        dispatch(categoriesActions.setSelectedHashtag(null));
        setIsCreating(true);
        setDialogVisible(true);
    };

    const handleEdit = (row: IHashtag) => {
        dispatch(categoriesActions.loadHashtag(row.name));
        setIsCreating(false);
        setDialogVisible(true);
    };

    const handleDelete = (row: IHashtag) => {
        confirm({
            message: `Are you sure you want to delete "${row.name}"?`,
            header: 'Confirm Delete',
            acceptClassName: 'p-button-danger',
            accept: () =>
                dispatch(categoriesActions.destroyHashtag({ name: row.name })),
        });
    };

    const columns = useMemo(
        () => getHashtagsColumns({ onEdit: handleEdit, onDelete: handleDelete }),
        [],
    );

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    Hashtags
                </Text>
                <Button label="Add Hashtag" icon="pi pi-plus" onClick={handleCreate} />
            </Flex>
            <GoTable
                id="hashtags-table"
                keyColumn="name"
                data={items}
                columns={columns}
                loading={loading}
                emptyMessage="No hashtags found"
                globalSearch
            />
            <HashtagEditDialog
                visible={dialogVisible}
                onHide={() => setDialogVisible(false)}
                isCreating={isCreating}
            />
        </Flex>
    );
};

export default HashtagsPage;
