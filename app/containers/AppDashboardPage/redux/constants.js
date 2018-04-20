/*
 * Sy - Featuress
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// 1. LOAD DOWNLOAD LIST
export const LOAD_START   = 'RGP/ReportDownload/LOAD_START';
export const LOAD_SUCCESS = 'RGP/ReportDownload/LOAD_SUCCESS';
export const LOAD_FAILURE = 'RGP/ReportDownload/LOAD_FAILURE';

// 2. LOAD REPORT PAGE
export const LOAD_REPORT_START   = 'RGP/ReportPage/LOAD_REPORT_START';
export const LOAD_REPORT_SUCCESS = 'RGP/ReportPage/LOAD_REPORT_SUCCESS';
export const LOAD_REPORT_FAILURE = 'RGP/ReportPage/LOAD_REPORT_FAILURE';

// 3. LOAD REPORT PAGE
export const DOWNLOAD_PDF_START   = 'RGP/ReportPage/DOWNLOAD_PDF_START';
export const DOWNLOAD_PDF_SUCCESS = 'RGP/ReportPage/DOWNLOAD_PDF_SUCCESS';
export const DOWNLOAD_PDF_FAILURE = 'RGP/ReportPage/DOWNLOAD_PDF_FAILURE';
