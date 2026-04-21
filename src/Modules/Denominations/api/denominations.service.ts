import api, { resolveUrl } from 'Tools/Axios';
import URLs from 'Services/URLs';
import { IDenominationForm } from '../models/denominations.types';

const denominationsService = {
    table: (params?: any) => api.post(URLs.denominations.table, params),
    show: (ref: string) => api.get(resolveUrl(URLs.denominations.show, { ref })),
    store: (data: IDenominationForm) => api.post(URLs.denominations.store, data),
    update: (ref: string, data: Partial<IDenominationForm>) =>
        api.put(resolveUrl(URLs.denominations.update, { ref }), data),
    destroy: (ref: string) =>
        api.delete(resolveUrl(URLs.denominations.destroy, { ref })),
};

export default denominationsService;
