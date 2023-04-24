import * as types from '../commons/index';
const DEFAULT_STATE = {
    stateLogin: {},
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null,
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
                error: false,
                errorMessage: null,
                stateLogin: action.payload
            };
        case types.LOGIN_FAIL:
            return {
                ...state,
                isFetching: false,
                error: true,
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
                error: false,
                errorMessage: null,
                stateLogin: action.payload
            };
        case types.REGISTER_FAIL:
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
