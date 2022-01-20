import { apiRequest } from './../actions/api';
import { GET_QA, GET_QA_SUCCESS, GET_QA_ERROR, updateQA } from './../actions/questions';
import { setPendingQA } from './../actions/ui';

export const qaMiddleware = ({ dispatch }) => next => action => {
    next(action);

    const { type, payload } = action;

    switch (type) {
        case GET_QA:
            dispatch(setPendingQA(true));
            dispatch(apiRequest('wp/v2/q_and_a', payload, { success: GET_QA_SUCCESS, error: GET_QA_ERROR }));
            break;

        case GET_QA_SUCCESS:
            dispatch(updateQA(payload));
            dispatch(setPendingQA(false));
            break;

        default: return null;
    }
} 