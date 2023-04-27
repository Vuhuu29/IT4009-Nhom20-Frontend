import * as types from '../commons/index';

//Reducers là các hàm thuần túy lấy trạng thái hiện tại của ứng dụng, thực hiện một hành động và trả về trạng thái mới. 
//Các trạng thái này được lưu trữ dưới dạng đối tượng
//chúng xác định trạng thái của ứng dụng thay đổi như thế nào để đáp ứng với hành động được gửi đến "store".

export default (state = 'null', action) => {
    switch (action.type) {
        case types.GETDATA_REQ:
            return 'isloading'
        case types.GETDATA_SUCCESS:
            console.log(action.payload)
            return action.payload.a
        case types.GETDATA_FAIL:
            return action.payload
        default:
            return state;
    }
};
