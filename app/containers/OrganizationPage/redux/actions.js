/*
 * Organization Actions
 *
 */

import {
    ROLE_LOAD_START,
    USER_LOAD_START,
    LOAD_SUCCESS,
    LOAD_FAILURE
} from './constants';

export function getRoleData() {
    return {type: ROLE_LOAD_START};
}

export function getUserData() {
    return {type: USER_LOAD_START};
}

export function getDataDone(data) {
    return {type: LOAD_SUCCESS, data};
}

export function getDataError(error) {
    return {type: LOAD_FAILURE, error};
}
