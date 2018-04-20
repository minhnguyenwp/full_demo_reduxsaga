/**
 * Gets the repositories of the user from Github
 */
import request from 'utils/request';
import {call, put, takeLatest} from 'redux-saga/effects';
import {GENERAL_LOAD_START, USER_LOAD_START} from './constants';
import {getDataDone, getDataError} from './actions';

export function* getGeneralData() {
    const requestURL = 'http://md5.jsontest.com/?text=role';

    try {
        const data = yield call(request, requestURL);
        const mockData = [
            {
                id: 1,
                name: 'Organization Admin',
                permisions: [{
                    name: 'Manager Users (Add/Remove/Assign)'
                }, {
                    name: 'Manager Tools (Add/Remove)'
                }],
                user: 3
            }, {
                id: 2,
                name: 'Tech Manager',
                permisions: [{
                    name: 'Manager Users (Add/Remove/Assign)'
                }, {
                    name: 'Manager Tools (Add/Remove)'
                }],
                user: 7
            }, {
                id: 3,
                name: 'Excutive',
                permisions: [{
                    name: 'View Project'
                }],
                user: 10
            }
        ];
        yield put(getDataDone(mockData));
    } catch (err) {
        yield put(getDataError(err));
    }
}

export function* getUserData() {
    const requestURL = 'http://md5.jsontest.com/?text=user';

    try {
        const data = yield call(request, requestURL);
        const mockData = [
            {
                id: 1,
                name: 'Kenneth Sellers',
                username: 'ksellers',
                email: 'ksellers@synopsys.com',
                firstName: 'Sellers',
                lastName: 'Kenneth',
                role: 'Tech Manager'
            }, {
                id: 2,
                name: 'Micheal',
                username: 'mjardine',
                email: 'mjardine@synopsys.com',
                firstName: 'Micheal',
                lastName: 'Micheal',
                role: 'Executive'
            }
        ];
        yield put(getDataDone(mockData));
    } catch (err) {
        yield put(getDataError(err));
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchGetData() {
    yield takeLatest(GENERAL_LOAD_START, getGeneralData);
    yield takeLatest(USER_LOAD_START, getUserData);
}
