export const PAGES = '[Pages]';
export const GET_PAGE = `${PAGES} GET`;

export const getPage = payload => ({
    type: GET_PAGE,
    request: {
        url: 'wp/v2/pages',
        params: {
            slug: payload
        },
    },
    meta: {
        cache: 5,
        cacheKey: 'pages',
        normalize: true,
        requestKey: payload,
    },
});