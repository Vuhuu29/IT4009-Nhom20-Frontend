//action là sự kiện. 
//Chúng là cách duy nhất bạn có thể gửi dữ liệu từ ứng dụng của mình đến "store" Redux. 
//Dữ liệu có thể là từ các tương tác của người dùng, các lệnh gọi API hoặc là gửi form. 
//Các hành động được gửi bằng phương thức store.
import * as types from '../commons/index'

export function login(payload) {
    return ({
        type: types.LOGIN_REQ,
        payload
    })
};
export function register(payload) {
    return ({
        type: types.REGISTER_REQ,
        payload
    })
};