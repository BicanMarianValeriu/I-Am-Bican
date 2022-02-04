export const MENU = '[Menu]';
export const GET_MENU = `${MENU} GET`;

export const getMenu = payload => ({
    type: GET_MENU,
    request: {
        url: `wp/v2/menus/${payload}`
    },
    meta: {
        cache: 5,
        cacheKey: 'menus',
        normalize: true,
        requestKey: payload,
    },
});