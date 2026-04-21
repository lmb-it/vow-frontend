import api, { resolveUrl } from 'Tools/Axios';
import URLs from 'Services/URLs';
import { IChurchPhotoForm } from '../models/churches.types';

const churchPhotosService = {
    table: (params?: any) => api.post(URLs.churches.churchPhotos.table, params),
    show: (ref: string) => api.get(resolveUrl(URLs.churches.churchPhotos.show, { ref })),
    store: (data: IChurchPhotoForm) =>
        api.post(URLs.churches.churchPhotos.store, data),
    update: (ref: string, data: Partial<IChurchPhotoForm>) =>
        api.put(resolveUrl(URLs.churches.churchPhotos.update, { ref }), data),
    destroy: (ref: string) =>
        api.delete(resolveUrl(URLs.churches.churchPhotos.destroy, { ref })),
};

export default churchPhotosService;
