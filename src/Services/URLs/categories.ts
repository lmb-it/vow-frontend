export default {
    categories: {
        table:   'admin/category/table',
        store:   'admin/category',
        show:    'admin/category/:ref',
        update:  'admin/category/:ref',
        destroy: 'admin/category/:ref',
    },
    hashtags: {
        table:   'admin/hashtag/table',
        store:   'admin/hashtag',
        show:    'admin/hashtag/:name',
        update:  'admin/hashtag/:name',
        destroy: 'admin/hashtag/:name',
    },
};
