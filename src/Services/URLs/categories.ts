export default {
    categories: {
        table:   'category/table',
        store:   'category',
        show:    'category/:ref',
        update:  'category/:ref',
        destroy: 'category/:ref',
    },
    hashtags: {
        table:   'hashtag/table',
        store:   'hashtag',
        show:    'hashtag/:name',
        update:  'hashtag/:name',
        destroy: 'hashtag/:name',
    },
};
