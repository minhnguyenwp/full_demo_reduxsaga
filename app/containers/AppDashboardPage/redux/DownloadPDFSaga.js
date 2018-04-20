/**
 * Gets the repositories of the user from Github
 */
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { DOWNLOAD_PDF_START } from './constants';
import { downloadPDFDone, downloadPDFError } from './actions';

// Sy - Use request API Lib - GET method
import request, {postDownload} from '../../../utils/request';

// API
import {SY_API} from '../../../utils/api'
import {replaceByStr} from '../../../utils/helper'
/**
 * Github repos request/response handler
 */
export function* downloadPDF(actions) {
  console.log('acts', actions.params)
  //const id      = actions.params.app_id;
  let requestURL = replaceByStr(SY_API.Rep_DownloadFiles, 'val_1', actions.params.appId)
  const params   = actions.params
  requestURL = requestURL + '/download?reportids=' + params.reportIds.join()

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(downloadPDFDone(data));
  } catch (err) {
    yield put(downloadPDFError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchGetData() {

  // Watches for LOAD_REPORT_START actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(DOWNLOAD_PDF_START, downloadPDF);
}