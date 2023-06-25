import * as constants from '../commons/index';
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

    try{
        const res = await fetch(constants.HOST + path, objFetch)
        const data = await res.json()
        if ((!data.status) && data.msg === 'TokenExpiredError'){
            localStorage.removeItem("token")
            localStorage.removeItem("UserRole")
            localStorage.removeItem("UserId")
            if(!alert('Phiên đăng nhập hết hạn. Đăng nhập lại')) window.location.href = '/auth'
            return
        }
        return data
    }catch(e){
        console.log(e)
    }
}
