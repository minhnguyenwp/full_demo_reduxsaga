/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

//** 1. Actions: Load Download list 
import {
  LOAD_START,
  LOAD_SUCCESS,
  LOAD_FAILURE
} from './constants';

// Step 1: Start getting Repos
export function getDataDL(params) {
  return {
    type: LOAD_START,
    params
  };
}
// Step 2: Success getting Repos
export function getDataDLDone(data) {
  return {
    type: LOAD_SUCCESS,
    data: data,
  };
}
// Step 3: Error getting Repos
export function getDataDLError(error) {
  return {
    type: LOAD_FAILURE,
    error,
  };
}

//** 2. Actions: Load Report page
import {
  LOAD_REPORT_START,
  LOAD_REPORT_SUCCESS,
  LOAD_REPORT_FAILURE
} from './constants';

// Step 1: Start getting Repos
export function getAppById(params) {
  // console.log('getAppById', params);
  return {
    type: LOAD_REPORT_START,
    params
  };
}
// Step 2: Success getting Repos
export function getAppByIdDone(data) {
  return {
    type: LOAD_REPORT_SUCCESS,
    data: data,
  };
}
// Step 3: Error getting Repos
export function getAppByIdError(error) {
  return {
    type: LOAD_REPORT_FAILURE,
    error,
  };
}

//** 3. Actions: Download PDF FILE
import {
  DOWNLOAD_PDF_START,
  DOWNLOAD_PDF_SUCCESS,
  DOWNLOAD_PDF_FAILURE
} from './constants';

// Step 1: Start getting Repos
export function downloadPDF(params) {
  return {
    type: DOWNLOAD_PDF_START,
    params
  };
}
// Step 2: Success getting Repos
export function downloadPDFDone(data) {
  return {
    type: DOWNLOAD_PDF_SUCCESS,
    data: data,
  };
}
// Step 3: Error getting Repos
export function downloadPDFError(error) {
  return {
    type: DOWNLOAD_PDF_FAILURE,
    error,
  };
}