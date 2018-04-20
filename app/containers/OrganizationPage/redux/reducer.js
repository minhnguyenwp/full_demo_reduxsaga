/*
 * Organization Reducer
 *
 */

import {fromJS} from 'immutable';

import {
    ROLE_LOAD_START,
    USER_LOAD_START,
    LOAD_SUCCESS,
    LOAD_FAILURE
} from './constants';

// The initial state of the App
const initialState = fromJS({loading: false, error: false, data: []});

// Control States For View
export default function organizationReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOAD_START:
        case ROLE_LOAD_START:
            return {
                ...state,
                loading: true,
                error: false,
                data: []
            };
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.data
            };
        case LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                data: null
            };
        default:
            return state;
    }
}
