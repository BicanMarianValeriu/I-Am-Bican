import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import uiReducer from './ui';
// import apiReducer from './api';
// import userReducer from './user';
// import menusReducer from './menus';
// import pagesReducer from './pages';
// import mediaReducer from './media';
// import clientsReducer from './clients';
// import projectsReducer from './projects';
// import qaReducer from './questions';

const reducers = ({ history, requestsReducer }) => { 
    return combineReducers({
        router: connectRouter(history),
        requests: requestsReducer,
        ui: uiReducer,
        // qa: qaReducer,
        // api: apiReducer,
        // user: userReducer,
        // menus: menusReducer,
        // pages: pagesReducer,
        // media: mediaReducer,
        // clients: clientsReducer,
        // projects: projectsReducer
    });
};

export default reducers;