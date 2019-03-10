import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import uiReducer from "./ui";
import apiReducer from "./api";
import userReducer from "./user";
import menusReducer from "./menus";
import pagesReducer from "./pages";
import mediaReducer from "./media";
import clientsReducer from "./clients";
import projectsReducer from "./projects";

export default function ({ history }) { 
    return combineReducers({
        router: connectRouter(history),
        ui: uiReducer,
        api: apiReducer,
        user: userReducer,
        menus: menusReducer,
        pages: pagesReducer,
        media: mediaReducer,
        clients: clientsReducer,
        projects: projectsReducer
    });
}; 