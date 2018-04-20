/*
 * Organization Reducer
 *
 */

import {fromJS} from 'immutable';

import {
    APPLICATION_LOAD_START,
    DELETE_APPLICATION,
    LOAD_SUCCESS,
    LOAD_FAILURE,
    GO_PAGE
} from './constants';

// The initial state of the App
const initialState = fromJS({
    loading: false,
    error: false,
    data: [],
    currentPage: 1,
    totalPage: 0
});

// Control States For View
export default function applicationReducer(state = initialState, action) {
    switch (action.type) {
        case APPLICATION_LOAD_START:
            return {
                ...state,
                loading: true,
                error: false,
                data: [],
                currentPage: 1,
                totalPage: 0
            };
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.data,
                totalPage: action.totalPage
            };
        case LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                data: null
            };
        case DELETE_APPLICATION:
            return {
                ...state,
                loading: true,
                error: false
            };
        case GO_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        default:
            return state;
    }
}
