import { compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { api } from "./api";
import { userMdl } from "./user";
import { menuMdl } from "./menus";
import { pageMdl } from "./pages";
import { mediaMdl } from "./media";
import { clientsMdl } from "./clients";
import { projectsMdl } from "./projects";
import { isServer } from '../store';

export default function ({ history, enhancers }) {
    const arr = [ // In reverse order @see `compose`
        routerMiddleware(history),
        ...projectsMdl,
        ...clientsMdl,
        ...mediaMdl,
        ...pageMdl,
        ...menuMdl,
        ...userMdl,
        promise(),
        thunk,
        api // first, counting from bottom
    ];

    if (process.env.NODE_ENV === 'development' && !isServer) arr.push(createLogger());

    return compose(applyMiddleware(...arr), ...enhancers)
};