import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Flex, GoTable, Text, useDialog } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { churchesActions } from '../../store/churches.slice';
import {
    selectChurchPhotos,
    selectChurchPhotosTableLoading,
    selectChurchPhotosRefreshKey,
    selectChurches,
} from '../../store/churches.selectors';
import type { IChurchPhoto } from '../../models/churches.types';
import { getChurchPhotosColumns } from './churchPhotos.columns';

const ChurchPhotosListing: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { confirm } = useDialog();

    const items = useSelector(selectChurchPhotos);
    const loading = useSelector(selectChurchPhotosTableLoading);
    const refreshKey = useSelector(selectChurchPhotosRefreshKey);
    const churches = useSelector(selectChurches);

    useEffect(() => {
        dispatch(churchesActions.loadPhotosTable({}));
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

    const handleCreate = () => navigate('/church-photos/new');
    const handleEdit = (row: IChurchPhoto) => navigate(`/church-photos/${row.ref}/edit`);
    const handleDelete = (row: IChurchPhoto) => {
        confirm({
            message: `Delete photo "${row.caption ?? row.fileRef}"?`,
            header: 'Confirm Delete',
            acceptClassName: 'p-button-danger',
            accept: () => dispatch(churchesActions.destroyPhoto({ ref: row.ref })),
        });
    };

    const columns = useMemo(
        () =>
            getChurchPhotosColumns({
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
                    Church Photos
                </Text>
                <Button label="Add Photo" icon="pi pi-plus" onClick={handleCreate} />
            </Flex>
            <GoTable
                id="church-photos-table"
                keyColumn="ref"
                data={items}
                columns={columns}
                loading={loading}
                emptyMessage="No photos found"
                globalSearch
            />
        </Flex>
    );
};

export default ChurchPhotosListing;
