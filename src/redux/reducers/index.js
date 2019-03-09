import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import reducer from "./reducers";
import pagesReducer from "./pages";

export default function ({ history }) { 
    return combineReducers({
        router: connectRouter(history),
        api: reducer,
        pages: pagesReducer
    });
}; 