export const SY_HOST  = 'http://cim-reporting.cigital.com:60285';
// export const SY_HOST  = 'http://10.144.160.94:60285'
export const version  = '/v1/api/';
export const SY_API   = {

    Risk_Portfolio : SY_HOST + version + 'application/inventory',
    // REPORT Dashboard
    Rep_Dashboard : SY_HOST + version + 'application',
    // REPORT Download
    Rep_DownloadFiles : SY_HOST + version + 'application/val_1/reports', // val_1 : app_id, ?type={protocode}
    Rep_DownloadPDF   : SY_HOST + version + 'application/reports/download', // Action down. POST
    Rep_DownloadOneFile: SY_HOST + version + 'application/val_1/reports/val_2/download' // GET val_1: app_id, val_2_ file_ID
}