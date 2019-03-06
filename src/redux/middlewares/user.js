import { requestUserToken, FETCH_USER_FULFILLED } from '../actions/actions';
import { showSpinner } from '../actions/ui';

export const getUserToken = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === FETCH_USER_FULFILLED) {
        dispatch(requestUserToken());
        dispatch(showSpinner());
    }
}

export const userMdl = [getUserToken];