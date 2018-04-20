/**
 * Gets the repositories of the user from Github
 */
import {SY_API} from 'utils/api';
import request from 'utils/request';
import {call, put, takeLatest} from 'redux-saga/effects';
import {APPLICATION_LOAD_START, DELETE_APPLICATION} from './constants';
import {getDataDone, getDataError} from './actions';

export function* getApplicationData(state) {
    const requestURL = SY_API.Risk_Portfolio;
    try {
        const data = yield call(request, requestURL);
        const totalPage = Math.ceil(data.applications.length / state.itemPerPage);
        yield put(getDataDone(data, totalPage));
    } catch (err) {
        yield put(getDataError(err));
    }
}

export function* deleteApplication(state) {
    const requestURL = SY_API.Risk_Portfolio;
    try {
        yield call(request, requestURL);
        const newApplicationData = state.data.filter(item => item.id !== state.id);
        yield put(getDataDone({applications: newApplicationData}));
    } catch (err) {
        yield put(getDataError(err));
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchGetData() {
    yield takeLatest(APPLICATION_LOAD_START, getApplicationData);
    yield takeLatest(DELETE_APPLICATION, deleteApplication);
}
