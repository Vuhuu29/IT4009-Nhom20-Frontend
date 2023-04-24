export function getClass(payload) {
    return({
        type:types.GET_CLASS_REQ,
        payload
    })
};

export function insertClass(payload) {
    return({
        type:types.ADD_CLASS_REQ,
        payload
    })
};
export function updateClass(payload) {
    return({
        type:types.UPDATE_CLASS_REQ,
        payload
    })
};
export function deleteClass(payload) {
    return({
        type:types.DELETE_CLASS_REQ,
        payload
    })
}