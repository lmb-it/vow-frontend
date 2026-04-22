export default {
    saints: {
        table:             'saint/table',
        store:             'saint',
        show:              'saint/:ref',
        update:            'saint/:ref',
        destroy:           'saint/:ref',
        detachDenomination:'saint/:ref/denomination/:denominationRef',
    },
    saintsCategories: {
        table:   'saint-category/table',
        store:   'saint-category',
        show:    'saint-category/:ref',
        update:  'saint-category/:ref',
        destroy: 'saint-category/:ref',
    },
};
