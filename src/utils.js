export const isDev = process.env.NODE_ENV === 'development';

export const getAssets = (filename) => `/assets/${filename}`;