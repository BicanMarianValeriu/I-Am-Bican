import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import reducer from "./reducers";
import uiReducer from "./ui";
import menusReducer from "./menus";
import pagesReducer from "./pages";
import clientsReducer from "./clients";

export default function ({ history }) { 
    return combineReducers({
        router: connectRouter(history),
        api: reducer,
        ui: uiReducer,
        menus: menusReducer,
        pages: pagesReducer,
        clients: clientsReducer
    });
}; 