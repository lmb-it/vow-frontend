import api, { resolveUrl } from 'Tools/Axios';
import URLs from 'Services/URLs';
import { ILanguageFormData } from '../models/languages.types';

const languagesService = {
    table: (params?: any) => api.post(URLs.languages.table, params),
    show: (ref: string) => api.get(resolveUrl(URLs.languages.show, { ref })),
    store: (data: ILanguageFormData) => api.post(URLs.languages.store, data),
    update: (ref: string, data: Partial<ILanguageFormData>) =>
        api.put(resolveUrl(URLs.languages.update, { ref }), data),
    destroy: (ref: string, del: boolean) =>
        api.delete(resolveUrl(URLs.languages.destroy, { ref, delete: del })),
    deactivate: (ref: string, activate: boolean) =>
        api.patch(resolveUrl(URLs.languages.deactivate, { ref, activate })),
};

export default languagesService;