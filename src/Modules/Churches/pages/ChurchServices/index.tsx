import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Flex, GoTable, Text, useDialog } from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { churchesActions } from '../../store/churches.slice';
import {
    selectChurchServices,
    selectChurchServicesTableLoading,
    selectChurchServicesRefreshKey,
    selectChurches,
} from '../../store/churches.selectors';
import { languagesActions, selectLanguages } from 'Modules';
import type { IChurchServiceItem } from '../../models/churches.types';
import { getChurchServicesColumns } from './churchServices.columns';

const ChurchServicesListing: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { confirm } = useDialog();

    const items = useSelector(selectChurchServices);
    const loading = useSelector(selectChurchServicesTableLoading);
    const refreshKey = useSelector(selectChurchServicesRefreshKey);
    const churches = useSelector(selectChurches);
    const languages = useSelector(selectLanguages);

    useEffect(() => {
        dispatch(churchesActions.loadServicesTable({}));
    }, [dispatch, refreshKey]);

    useEffect(() => {
        if (!churches.length) dispatch(churchesActions.loadTable({}));
        if (!languages.length) dispatch(languagesActions.loadTable({}));
    }, [dispatch]);

    const getChurchLabel = useCallback(
        (ref: string | null) => {
            if (!ref) return '';
            return churches.find((c) => c.ref === ref)?.name ?? ref;
        },
        [churches],
    );
    const getLanguageLabel = useCallback(
        (ref: string | null) => {
            if (!ref) return '';
            const l: any = languages.find((x: any) => x.ref === ref);
            return l?.title ?? l?.name ?? l?.code ?? ref;
        },
        [languages],
    );

    const handleCreate = () => navigate('/church-services/new');
    const handleEdit = (row: IChurchServiceItem) =>
        navigate(`/church-services/${row.ref}/edit`);
    const handleDelete = (row: IChurchServiceItem) => {
        confirm({
            message: `Delete service "${row.serviceType}"?`,
            header: 'Confirm Delete',
            acceptClassName: 'p-button-danger',
            accept: () => dispatch(churchesActions.destroyService({ ref: row.ref })),
        });
    };

    const columns = useMemo(
        () =>
            getChurchServicesColumns({
                getChurchLabel,
                getLanguageLabel,
                onEdit: handleEdit,
                onDelete: handleDelete,
            }),
        [getChurchLabel, getLanguageLabel],
    );

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    Church Services
                </Text>
                <Button label="Add Service" icon="pi pi-plus" onClick={handleCreate} />
            </Flex>
            <GoTable
                id="church-services-table"
                keyColumn="ref"
                data={items}
                columns={columns}
                loading={loading}
                emptyMessage="No services found"
                globalSearch
            />
        </Flex>
    );
};

export default ChurchServicesListing;
