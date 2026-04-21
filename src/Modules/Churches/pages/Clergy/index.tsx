import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Flex, GoTable, Text, useDialog } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { churchesActions } from '../../store/churches.slice';
import {
    selectClergy,
    selectClergyTableLoading,
    selectClergyRefreshKey,
    selectChurches,
} from '../../store/churches.selectors';
import type { IClergy } from '../../models/churches.types';
import { getClergyColumns } from './clergy.columns';

const ClergyListing: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { confirm } = useDialog();

    const items = useSelector(selectClergy);
    const loading = useSelector(selectClergyTableLoading);
    const refreshKey = useSelector(selectClergyRefreshKey);
    const churches = useSelector(selectChurches);

    useEffect(() => {
        dispatch(churchesActions.loadClergyTable({}));
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

    const handleCreate = () => navigate('/clergy/new');
    const handleEdit = (row: IClergy) => navigate(`/clergy/${row.ref}/edit`);
    const handleDelete = (row: IClergy) => {
        const name =
            [row.firstNameLatin, row.lastNameLatin].filter(Boolean).join(' ') ||
            [row.firstNameArabic, row.lastNameArabic].filter(Boolean).join(' ') ||
            row.ref;
        confirm({
            message: `Delete clergy "${name}"?`,
            header: 'Confirm Delete',
            acceptClassName: 'p-button-danger',
            accept: () => dispatch(churchesActions.destroyClergy({ ref: row.ref })),
        });
    };

    const columns = useMemo(
        () =>
            getClergyColumns({
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
                    Clergy
                </Text>
                <Button label="Add Clergy" icon="pi pi-plus" onClick={handleCreate} />
            </Flex>
            <GoTable
                id="clergy-table"
                keyColumn="ref"
                data={items}
                columns={columns}
                loading={loading}
                emptyMessage="No clergy found"
                globalSearch
            />
        </Flex>
    );
};

export default ClergyListing;
