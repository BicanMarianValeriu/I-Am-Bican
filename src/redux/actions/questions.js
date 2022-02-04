export const QA = '[QA]';
export const GET_QA = `${QA} GET`;

export const getQA = payload => ({
    type: GET_QA,
    request: {
        url: 'wp/v2/q_and_a',
        params: payload
    },
    meta: {
        cache: 200,
        cacheKey: 'questions',
        normalize: true,
    },
});