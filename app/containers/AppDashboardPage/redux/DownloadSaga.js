/**
 * Gets the repositories of the user from Github
 */
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_START } from './constants';
import { getDataDLDone, getDataDLError } from './actions';

// Sy - Use request API Lib - GET method
import request from '../../../utils/request';

// API
import {SY_API} from '../../../utils/api'
import {replaceByStr} from '../../../utils/helper'
/**
 * Github repos request/response handler
 */
export function* getDataDL(actions) {
  console.log('actions', actions);
  const value    = actions.params.app_id;
  let requestURL = replaceByStr(SY_API.Rep_DownloadFiles, 'val_1', value)
  if (actions.params.type) {
    requestURL = requestURL + '/?type=' + actions.params.type
  }
  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(getDataDLDone(data));
  } catch (err) {
    yield put(getDataDLError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchGetData() {

  // Watches for LOAD_START actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_START, getDataDL);
}