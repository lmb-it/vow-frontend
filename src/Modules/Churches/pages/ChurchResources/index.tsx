import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Flex, GoTable, Text, useDialog } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { churchesActions } from '../../store/churches.slice';
import {
    selectChurchResources,
    selectChurchResourcesTableLoading,
    selectChurchResourcesRefreshKey,
    selectChurches,
} from '../../store/churches.selectors';
import type { IChurchResource } from '../../models/churches.types';
import { getChurchResourcesColumns } from './churchResources.columns';

const ChurchResourcesListing: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { confirm } = useDialog();

    const items = useSelector(selectChurchResources);
    const loading = useSelector(selectChurchResourcesTableLoading);
    const refreshKey = useSelector(selectChurchResourcesRefreshKey);
    const churches = useSelector(selectChurches);

    useEffect(() => {
        dispatch(churchesActions.loadResourcesTable({}));
    }, [dispatch, refreshKey]);

    useEffect(() => {
        if (!churches.length) dispatch(churchesActions.loadTable({}));
    }, [dispatch]);

    const getChurchLabel = useCallback(
        (ref: string | null) => {
            if (!ref) return '';
            return churches.find((c) => c.ref === ref)?.name ?? ref;
        },
        [churches],
    );

    const handleCreate = () => navigate('/church-resources/new');
    const handleEdit = (row: IChurchResource) =>
        navigate(`/church-resources/${row.ref}/edit`);
    const handleDelete = (row: IChurchResource) => {
        confirm({
            message: `Delete resource "${row.resourceValue}"?`,
            header: 'Confirm Delete',
            acceptClassName: 'p-button-danger',
            accept: () => dispatch(churchesActions.destroyResource({ ref: row.ref })),
        });
    };

    const columns = useMemo(
        () =>
            getChurchResourcesColumns({
                getChurchLabel,
                onEdit: handleEdit,
                onDelete: handleDelete,
            }),
        [getChurchLabel],
    );

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    Church Resources
                </Text>
                <Button label="Add Resource" icon="pi pi-plus" onClick={handleCreate} />
            </Flex>
            <GoTable
                id="church-resources-table"
                keyColumn="ref"
                data={items}
                columns={columns}
                loading={loading}
                emptyMessage="No resources found"
                globalSearch
            />
        </Flex>
    );
};

export default ChurchResourcesListing;
