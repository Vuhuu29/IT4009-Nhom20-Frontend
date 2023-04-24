import * as constants from '../commons/index';
export default function callApi(path, data, method) {
    let objFetch = {
        method,
        headers: {
            "Content-type": "application/json",
            "Token": localStorage.getItem("token")
        }
    }
    if (data) {
        objFetch = { ...objFetch, body: JSON.stringify(data) }
    }

    return new Promise((resolve, reject) => {
        const url = constants.HOST + path;
        fetch(url, objFetch)
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error)
            })
    })
}


