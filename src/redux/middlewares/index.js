import { compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { api } from "./api";
import { pageMdl } from "./pages";
import { isServer } from '../store';

export default function ({ history, enhancers }) {
    const arr = [ // In reverse order @see `compose`
        routerMiddleware(history),
        promise(),
        thunk,
        ...pageMdl,
        api
    ];
    if (process.env.NODE_ENV === 'development' && !isServer) arr.push(createLogger());

    return compose(applyMiddleware(...arr), ...enhancers)
};