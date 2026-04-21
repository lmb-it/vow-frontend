import api, { resolveUrl } from 'Tools/Axios';
import URLs from 'Services/URLs';
import { IClergyForm } from '../models/churches.types';

const clergyService = {
    table: (params?: any) => api.post(URLs.churches.clergy.table, params),
    show: (ref: string) => api.get(resolveUrl(URLs.churches.clergy.show, { ref })),
    store: (data: IClergyForm) => api.post(URLs.churches.clergy.store, data),
    update: (ref: string, data: Partial<IClergyForm>) =>
        api.put(resolveUrl(URLs.churches.clergy.update, { ref }), data),
    destroy: (ref: string) =>
        api.delete(resolveUrl(URLs.churches.clergy.destroy, { ref })),
};

export default clergyService;
