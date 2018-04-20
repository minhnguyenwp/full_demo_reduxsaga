/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  DOWNLOAD_PDF_START,
  DOWNLOAD_PDF_SUCCESS,
  DOWNLOAD_PDF_FAILURE
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  data: null
});

// Control States For View
export default function DownloadPDFReducer(state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_PDF_START:
      return {
        ...state,
        loading: true,
        error: false,
        data: null
      };
    case DOWNLOAD_PDF_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data
      };
    case DOWNLOAD_PDF_FAILURE:
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