// this function constructs a URL for an image asset based on the provided path - to reuse across the application 
export const getImageUrl = (path) => {
    return new URL (`/assets/${path}`, import.meta.url).href;
}