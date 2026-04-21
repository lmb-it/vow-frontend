export default {
    saints: {
        table:             'admin/saint/table',
        store:             'admin/saint',
        show:              'admin/saint/:ref',
        update:            'admin/saint/:ref',
        destroy:           'admin/saint/:ref',
        detachDenomination:'admin/saint/:ref/denomination/:denominationRef',
    },
    saintsCategories: {
        table:   'admin/saint-category/table',
        store:   'admin/saint-category',
        show:    'admin/saint-category/:ref',
        update:  'admin/saint-category/:ref',
        destroy: 'admin/saint-category/:ref',
    },
};
