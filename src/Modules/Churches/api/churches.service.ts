import api, { resolveUrl } from 'Tools/Axios';
import URLs from 'Services/URLs';
import { IChurchForm } from '../models/churches.types';

const churchesService = {
    table: (params?: any) => api.post(URLs.churches.churches.table, params),
    show: (ref: string) => api.get(resolveUrl(URLs.churches.churches.show, { ref })),
    store: (data: IChurchForm) => api.post(URLs.churches.churches.store, data),
    update: (ref: string, data: Partial<IChurchForm>) =>
        api.put(resolveUrl(URLs.churches.churches.update, { ref }), data),
    destroy: (ref: string) =>
        api.delete(resolveUrl(URLs.churches.churches.destroy, { ref })),
};

export default churchesService;
