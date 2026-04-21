import api, { resolveUrl } from 'Tools/Axios';
import URLs from 'Services/URLs';
import { ICategoryForm } from '../models/categories.types';

const categoriesService = {
    table: (params?: any) => api.post(URLs.categories.categories.table, params),
    show: (ref: string) => api.get(resolveUrl(URLs.categories.categories.show, { ref })),
    store: (data: ICategoryForm) => api.post(URLs.categories.categories.store, data),
    update: (ref: string, data: Partial<ICategoryForm>) =>
        api.put(resolveUrl(URLs.categories.categories.update, { ref }), data),
    destroy: (ref: string) =>
        api.delete(resolveUrl(URLs.categories.categories.destroy, { ref })),
};

export default categoriesService;
