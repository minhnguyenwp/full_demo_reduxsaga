// SY HELPER
export function replaceByStr(str, olds, news) {
    return str.replace(olds,news);
}

export function getIdsInObj(o, fieldname) {
    if (o.length > 0) {
        let re = []
        o.map((item, i) => {
            re.push(item[fieldname])
        })
        console.log('re',re)
        return re;
    } 
}

export function convertObjToArr(o) {
    return Object.keys(o).map( (key) => { 
        return o[key]; 
    });
}
