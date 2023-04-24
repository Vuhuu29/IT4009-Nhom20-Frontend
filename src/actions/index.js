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
export function logout(payload) {
    return ({
        type: types.LOGOUT_REQ,
        payload
    })
}
//student

export function getAllStudent(payload) {
    return ({
        type: types.GET_STUDENT_REQ,
        payload
    })
};
export function updateStudentById(payload) {
    return ({
        type: types.UPDATE_STUDENT_REQ,
        payload
    })
};
export function deleteStudentById(payload){
    return({
        type:types.DELETE_STUDENT_REQ,
        payload
    })
};
export function insertStudent(payload) {
    return({
        type:types.ADD_STUDENT_REQ,
        payload
    })
};
export function payCourse(payload){
    return({
        type:types.PAY_COURSE_REQ,
        payload
    })
}

//teacher

export function getTeacher(payload) {
    return({
        type:types.GET_TEACHER_REQ,
        payload
    })
};

export function insertTeacher(payload) {
    return({
        type:types.ADD_TEACHER_REQ,
        payload
    })
};
export function updateTeacher(payload) {
    return({
        type:types.UPDATE_TEACHER_REQ,
        payload
    })
};
export function deleteTeacher(payload) {
    return({
        type:types.DELETE_TEACHER_REQ,
        payload
    })
}

//course
export function getCourse(payload) {
    return({
        type:types.GET_COURSE_REQ,
        payload
    })
};

export function insertCourse(payload) {
    return({
        type:types.ADD_COURSE_REQ,
        payload
    })
};
export function updateCourse(payload) {
    return({
        type:types.UPDATE_COURSE_REQ,
        payload
    })
};
export function deleteCourse(payload) {
    return({
        type:types.DELETE_COURSE_REQ,
        payload
    })
}
//class
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
};
export function getClassByIdCourse(payload) {
    return({
        type:types.GET_CLASS_BY_ID_COURSE_REQ,
        payload
    })
}