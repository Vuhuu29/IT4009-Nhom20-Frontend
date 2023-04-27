import * as constants from '../commons/index';

//hàm gọi api
export default async function callApi(path, data, method) {
    
    let objFetch = {
        method,
        headers: {
            "Content-type": "application/json"
        }
    }

    if (data) {
        objFetch = { ...objFetch, body: JSON.stringify(data) }
    }

    const url = constants.HOST + path;

    try{
        const res = await fetch(url, objFetch)
        const data = await res.json()
        return data
    }catch(e){
        console.log(e)
    }
}
