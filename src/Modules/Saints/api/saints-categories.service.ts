import api, { resolveUrl } from 'Tools/Axios';
import URLs from 'Services/URLs';
import { ISaintsCategoryForm } from '../models/saints.types';

const saintsCategoriesService = {
    table: (params?: any) => api.post(URLs.saints.saintsCategories.table, params),
    show: (ref: string) => api.get(resolveUrl(URLs.saints.saintsCategories.show, { ref })),
    store: (data: ISaintsCategoryForm) => api.post(URLs.saints.saintsCategories.store, data),
    update: (ref: string, data: Partial<ISaintsCategoryForm>) =>
        api.put(resolveUrl(URLs.saints.saintsCategories.update, { ref }), data),
    destroy: (ref: string) =>
        api.delete(resolveUrl(URLs.saints.saintsCategories.destroy, { ref })),
};

export default saintsCategoriesService;
