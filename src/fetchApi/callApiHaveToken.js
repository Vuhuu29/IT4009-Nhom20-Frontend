import * as constants from '../commons/index';
export default async function callApi(path, data, method) {
    let objFetch = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "authorization": 'Bearer ' + localStorage.getItem("token")
        }
    }
    if (data) {
        objFetch = { ...objFetch, body: JSON.stringify(data) }
    }

    try{
        const res = await fetch(constants.HOST + path, objFetch)
        const data = await res.json()
        if (data.msg === 'TokenExpiredError'){
            localStorage.removeItem("token")
            localStorage.removeItem("UserRole")
            localStorage.removeItem("UserId")
            if(!alert('Phiên đăng nhập hết hạn. Đăng nhập lại')) window.location = '/auth'
            return
        }
            
        return data
    }catch(e){
        console.log(e)
    }
}


