export const isUAT = () => {
    const VITE_ENV = import.meta.env.VITE_ENV;
    return VITE_ENV === 'development';
};

export const isLocal = () => {
    const VITE_ENV = import.meta.env.VITE_ENV;
    return VITE_ENV === 'local';
};

export const isDev = () => {
    const VITE_ENV = import.meta.env.VITE_ENV;
    return VITE_ENV === 'development' || VITE_ENV === 'local';
};