/**
 * Gets the repositories of the user from Github
 */
import request from 'utils/request';
import {call, put, takeLatest} from 'redux-saga/effects';
import {ROLE_LOAD_START, USER_LOAD_START} from './constants';
import {getDataDone, getDataError} from './actions';

export function* getRoleData() {
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
                roles: [
                    {
                        name: 'Organization Admin'
                    }
                ],
                userAvailability: [
                    {
                        name: 'Disable User'
                    }
                ],
                locked: false
            }, {
                id: 2,
                name: 'Micheal',
                username: 'mjardine',
                email: 'mjardine@synopsys.com',
                firstName: 'Micheal',
                lastName: 'Micheal',
                roles: [
                    {
                        name: 'Organization Admin'
                    }
                ],
                userAvailability: [
                    {
                        name: 'Disable User'
                    }
                ],
                locked: true
            }, {
                id: 3,
                name: 'Khuyen Vo',
                username: 'khuyenvo',
                email: 'khuyenvo@synopsys.com',
                firstName: 'Vo',
                lastName: 'Khuyen',
                roles: [
                    {
                        name: 'Organization Admin'
                    }
                ],
                userAvailability: [
                    {
                        name: 'Remove User'
                    }
                ],
                locked: false
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
    yield takeLatest(ROLE_LOAD_START, getRoleData);
    yield takeLatest(USER_LOAD_START, getUserData);
}
