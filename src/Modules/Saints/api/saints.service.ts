import api, { resolveUrl } from 'Tools/Axios';
import URLs from 'Services/URLs';
import { ISaintForm } from '../models/saints.types';

const saintsService = {
    table: (params?: any) => api.post(URLs.saints.saints.table, params),
    show: (ref: string) => api.get(resolveUrl(URLs.saints.saints.show, { ref })),
    store: (data: ISaintForm) => api.post(URLs.saints.saints.store, data),
    update: (ref: string, data: Partial<ISaintForm>) =>
        api.put(resolveUrl(URLs.saints.saints.update, { ref }), data),
    destroy: (ref: string) =>
        api.delete(resolveUrl(URLs.saints.saints.destroy, { ref })),
    detachDenomination: (ref: string, denominationRef: string) =>
        api.delete(resolveUrl(URLs.saints.saints.detachDenomination, { ref, denominationRef })),
};

export default saintsService;
