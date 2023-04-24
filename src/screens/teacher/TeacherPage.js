import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../.././style/css/menu/teacherpage.css'
import { Row, Col, Table } from 'react-bootstrap'
import avt from '../.././images/avt.png'
import ClassTeacher from './ClassTeacher'
import MenuBar from './MenuBar.js';


export default function TeacherPage() {
    const history = useHistory()
    const [searchinput, setSearchInput] = useState('');
    const [teacher, setTeacher] = useState('');
    const [activity, setActivity] = useState('');

    useEffect(() => {
        let teacher_id = localStorage.getItem("UserId")
        console.log(teacher_id)
        const token = localStorage.getItem("token")
        const role = localStorage.getItem("UserRole")
        if (!(token && role)) {
            history.push("/login")
        }
        else {
            if (role != "ROLE_TEACHER") {
                history.push("/login")
            } else {history.push("/teacher")}
        }

        const fetchData = async () => {
            await fetch('http://localhost:8080/teacher/'  + teacher_id )
                .then((res) => res.json())
                .then((res) => {
                    setTeacher(res);
                    console.log(res);}) 
            }
            
        fetchData();
        
    }, [])
    return (
    <div className='container'>
        <div className='teacherpage' style={{backgroundColor:'whitesmoke'}}>
            <div className='header' style={{ display: 'block', height: '10px', marginTop: '20px'}}>
            </div>
            <MenuBar />
            <div>
                <div className='main-content'>
                    <Row>
                        <h4>
                            THÔNG TIN CÁ NHÂN
                        </h4>
                        <hr />
                        <Col className='avatar' style={{ float: 'left', width: '300px' }}>
                            <img src={teacher.avatar} />
                        </Col>
                        <Col style={{ textAlign: 'left', color: 'black', fontSize: '13px' }}>
                            <p>
                                <strong>Họ và tên :</strong> {teacher.full_name} <br />
                                <strong>Giới tính :</strong> {teacher.gender} <br />
                                <strong>Số điện thoại liên hệ : </strong> {teacher.phone_number} <br />
                                <strong>Email liên hệ : </strong> {teacher.email} <br />
                            </p>
                        </Col>
                        <Col style={{ textAlign: 'left', color: 'black', fontSize: '13px' }}>
                            <p>
                                <strong> Username : </strong> {teacher.username} <br />
                                <strong> Major : </strong> {teacher.major} <br />
                                <strong> Achievement :</strong> {teacher.achievement} <br />
                            </p>
                        </Col>
                    </Row>
                   
                </div>
            </div>
        </div >
        </div>
    )
}
