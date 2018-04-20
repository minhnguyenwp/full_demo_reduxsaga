/*
 * Application Actions
 *
 */

import {
    APPLICATION_LOAD_START,
    DELETE_APPLICATION,
    LOAD_SUCCESS,
    LOAD_FAILURE,
    GO_PAGE
} from './constants';

export function getApplicationData(itemPerPage) {
    return {type: APPLICATION_LOAD_START, itemPerPage};
}

export function deleteApplication(id, data) {
    return {type: DELETE_APPLICATION, id, data};
}

export function getDataDone(data, totalPage) {
    return {type: LOAD_SUCCESS, data, totalPage};
}

export function getDataError(error) {
    return {type: LOAD_FAILURE, error};
}

export function goPage(page) {
    return {type: GO_PAGE, page};
}
