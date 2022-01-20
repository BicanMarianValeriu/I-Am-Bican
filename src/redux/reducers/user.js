import { UPDATE_USER } from './../actions/user';

export default function userReducer(state = {
    authentificated: false,
    data: {}
}, action) {
    switch (action.type) {
        case UPDATE_USER: {
            const { payload: { data, authentificated } } = action;
            delete data.link;
            delete data.slug;
            return { authentificated, data: { ...data } };
        }
        default: return state;
    }
}
