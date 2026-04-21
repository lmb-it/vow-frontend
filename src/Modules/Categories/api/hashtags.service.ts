import api, { resolveUrl } from 'Tools/Axios';
import URLs from 'Services/URLs';
import { IHashtagForm } from '../models/categories.types';

// Hashtags are route-bound by `name`, not `ref`.
const hashtagsService = {
    table: (params?: any) => api.post(URLs.categories.hashtags.table, params),
    show: (name: string) =>
        api.get(resolveUrl(URLs.categories.hashtags.show, { name })),
    store: (data: IHashtagForm) => api.post(URLs.categories.hashtags.store, data),
    update: (name: string, data: Partial<IHashtagForm>) =>
        api.put(resolveUrl(URLs.categories.hashtags.update, { name }), data),
    destroy: (name: string) =>
        api.delete(resolveUrl(URLs.categories.hashtags.destroy, { name })),
};

export default hashtagsService;
