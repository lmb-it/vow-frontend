import api, { resolveUrl } from 'Tools/Axios';
import URLs from 'Services/URLs';
import { IChurchResourceForm } from '../models/churches.types';

const churchResourcesService = {
    table: (params?: any) => api.post(URLs.churches.churchResources.table, params),
    show: (ref: string) => api.get(resolveUrl(URLs.churches.churchResources.show, { ref })),
    store: (data: IChurchResourceForm) =>
        api.post(URLs.churches.churchResources.store, data),
    update: (ref: string, data: Partial<IChurchResourceForm>) =>
        api.put(resolveUrl(URLs.churches.churchResources.update, { ref }), data),
    destroy: (ref: string) =>
        api.delete(resolveUrl(URLs.churches.churchResources.destroy, { ref })),
};

export default churchResourcesService;
