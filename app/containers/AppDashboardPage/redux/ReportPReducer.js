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
  LOAD_REPORT_START,
  LOAD_REPORT_SUCCESS,
  LOAD_REPORT_FAILURE
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  data: null
});

// Control States For View
export default function ReportPReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPORT_START:
      return {
        ...state,
        loading: true,
        error: false,
        data: null
      };
    case LOAD_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data
      };
    case LOAD_REPORT_FAILURE:
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