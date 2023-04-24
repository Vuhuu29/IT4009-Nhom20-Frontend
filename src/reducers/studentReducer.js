import * as types from '../commons/index';
const DEFAULT_STATE = {
    listStudent: null,
    studentById: {},
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null,
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_STUDENT_REQ:
            return {
                ...state,
                isFetching: true
            };
        case types.GET_STUDENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listStudent: action.payload
            };
        case types.GET_STUDENT_FAIL:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            };
        default:
            return state;
    }
};