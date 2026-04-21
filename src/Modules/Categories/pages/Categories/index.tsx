import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    Flex,
    Text,
    TreeView,
    useDialog,
    type ITreeItem,
} from '@lmb-it/kitsconcerto-web';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { categoriesActions } from '../../store/categories.slice';
import {
    selectCategories,
    selectCategoriesRefreshKey,
    selectCategoriesTableLoading,
} from '../../store/categories.selectors';
import type { ICategory } from '../../models/categories.types';

// Convert a flat list of categories to KitsConcerto ITreeItem shape.
// Each node is "a category" — `isItem: false` means it's a branch (category),
// which lets users add sub-nodes below it.
export const toTreeNodes = (categories: ICategory[]): ITreeItem<ICategory>[] =>
    categories.map((c) => ({
        isItem: false,
        label: c.slug,
        value: c.ref,
        parentId: c.parentRef ?? null,
        data: c,
        selectable: true,
    }));

const CategoriesListing: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { confirm } = useDialog();

    const items = useSelector(selectCategories);
    const loading = useSelector(selectCategoriesTableLoading);
    const refreshKey = useSelector(selectCategoriesRefreshKey);

    useEffect(() => {
        dispatch(categoriesActions.loadTable({}));
    }, [dispatch, refreshKey]);

    const treeNodes = useMemo(() => toTreeNodes(items), [items]);

    const handleCreateRoot = () => navigate('/categories/new');

    const handleEdit = (row: ICategory) => navigate(`/categories/${row.ref}/edit`);

    const handleDelete = (row: ICategory) => {
        confirm({
            message: `Are you sure you want to delete "${row.slug}"?`,
            header: 'Confirm Delete',
            acceptClassName: 'p-button-danger',
            accept: () =>
                dispatch(categoriesActions.destroy({ ref: row.ref })),
        });
    };

    return (
        <Flex flexDirection="column" gap={16} p={16}>
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="24px" fontWeight="700" style={{ color: 'var(--text-color)' }}>
                    Categories
                </Text>
                <Button label="Add root" icon="pi pi-plus" onClick={handleCreateRoot} />
            </Flex>

            <TreeView<ICategory>
                tree={treeNodes}
                isLoading={loading}
                isExpended
                hideToolbar
                isReadOnly
                onSelectItem={(node) => {
                    if (node.data) handleEdit(node.data);
                }}
                renderedItemTemplate={(node) => {
                    const cat = node.data?.data;
                    if (!cat) return <span>{String(node.label ?? '')}</span>;
                    return (
                        <Flex
                            justifyContent="space-between"
                            alignItems="center"
                            gap={8}
                            style={{ width: '100%' }}
                        >
                            <Flex gap={8} alignItems="center">
                                <Text>{cat.slug}</Text>
                                <Tag
                                    value={cat.isActive ? 'active' : 'inactive'}
                                    severity={cat.isActive ? 'success' : 'warning'}
                                    style={{ fontSize: '10px' }}
                                />
                            </Flex>
                            <Flex gap={4}>
                                <Button
                                    icon="pi pi-plus"
                                    rounded
                                    text
                                    size="small"
                                    tooltip="Add sub-category"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/categories/new?parent=${cat.ref}`);
                                    }}
                                />
                                <Button
                                    icon="pi pi-pencil"
                                    rounded
                                    text
                                    size="small"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleEdit(cat);
                                    }}
                                />
                                <Button
                                    icon="pi pi-trash"
                                    rounded
                                    text
                                    severity="danger"
                                    size="small"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(cat);
                                    }}
                                />
                            </Flex>
                        </Flex>
                    );
                }}
            />
        </Flex>
    );
};

export default CategoriesListing;
