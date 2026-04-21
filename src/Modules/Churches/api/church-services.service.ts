import api, { resolveUrl } from 'Tools/Axios';
import URLs from 'Services/URLs';
import { IChurchServiceForm } from '../models/churches.types';

const churchServicesService = {
    table: (params?: any) => api.post(URLs.churches.churchServices.table, params),
    show: (ref: string) => api.get(resolveUrl(URLs.churches.churchServices.show, { ref })),
    store: (data: IChurchServiceForm) =>
        api.post(URLs.churches.churchServices.store, data),
    update: (ref: string, data: Partial<IChurchServiceForm>) =>
        api.put(resolveUrl(URLs.churches.churchServices.update, { ref }), data),
    destroy: (ref: string) =>
        api.delete(resolveUrl(URLs.churches.churchServices.destroy, { ref })),
};

export default churchServicesService;
