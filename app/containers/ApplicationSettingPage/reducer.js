import {fromJS} from 'immutable';

import {SELECT_MENU} from './actions';

// The initial state of the Organization menu
const initialState = fromJS({
    menu: 'general'
});

function organizationReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_MENU:
            return state.set('menu', action.menu);
        default:
            return state;
    }
}

export default organizationReducer;
