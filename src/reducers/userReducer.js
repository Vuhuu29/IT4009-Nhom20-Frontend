import * as types from '../commons/index';

//Reducers là các hàm thuần túy lấy trạng thái hiện tại của ứng dụng, thực hiện một hành động và trả về trạng thái mới. 
//Các trạng thái này được lưu trữ dưới dạng đối tượng
//chúng xác định trạng thái của ứng dụng thay đổi như thế nào để đáp ứng với hành động được gửi đến "store".

const DEFAULT_STATE = { //form của state
    dataFetched: false,
    isFetching: false
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.LOGIN_REQ:
            return {
                ...state,
                isFetching: true
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                status: action.payload.status,
                msg: action.payload.msg,
                data: action.payload.data
            };
        case types.LOGIN_FAIL:
            return {
                ...state,
                isFetching: false,
                status: false,
                errorMessage: action.payload.errorMessage
            };
        case types.REGISTER_REQ:
            return {
                ...state,
                isFetching: true
            };
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                status: action.payload.status,
                msg: action.payload.msg,
                data: action.payload.data
            };
        case types.REGISTER_FAIL:
            return {
                ...state,
                isFetching: false,
                status: false,
                errorMessage: action.payload.errorMessage
            };
        default:
            return state;
    }
};
