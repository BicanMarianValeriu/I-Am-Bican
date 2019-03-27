//import thunk from 'redux-thunk';
//import { createPromise } from 'redux-promise-middleware';
import { compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';

import { api } from "./api";
import { userMiddleware } from "./user";
import { menuMiddleware } from "./menus";
import { pagesMiddleware } from "./pages";
import { mediaMiddleware } from "./media";
import { clientsMiddleware } from "./clients";
import { projectsMiddleware } from "./projects";
import { isServer } from '../store';

export default function ({ history, enhancers }) {

    const arr = [ // In reverse order @see `compose`
        routerMiddleware(history),
        projectsMiddleware,
        clientsMiddleware,
        mediaMiddleware,
        pagesMiddleware,
        menuMiddleware,
        userMiddleware,
        //thunk,
        api // first, counting from bottom
    ];

    if (process.env.NODE_ENV === 'development' && !isServer) arr.push(createLogger());

    return compose(applyMiddleware(...arr), ...enhancers)
};