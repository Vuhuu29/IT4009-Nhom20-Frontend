import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table, Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { Trash, BoxArrowUpRight } from 'react-bootstrap-icons';
import '../.././style/css/menu/teacherpage.css'

export default function MenuBar() {
const [teacher, setTeacher] = useState('');
    useEffect(() => {
         let teacher_id = localStorage.getItem("UserId")
        //let teacher_id = 5;
        const fetchData1 = async () => {
            await fetch('http://localhost:8080/teacher/'  + teacher_id )
                .then((res) => res.json())
                .then((res) => {
                    setTeacher(res);
                    console.log(res)
                    }) 
            }
            
        fetchData1();
    }, [])

    return (
    <div className='container' style={{marginBottom: "7%"}}>
                <div className='left' style={{ width: '15%', height: '100%', float: 'left', background: '#F2F1EB' }}>
                    <div className='left-main'>
                        <h3>
                            <img src={teacher.avatar} style={{ width: ' 30px', height: '30px', borderRadius: '50%' }} />
                            <p>{teacher.full_name}</p>
                        </h3>
                        <a className='left-link' href="/change-password">Đổi mật khẩu</a>
                        <a className='left-link' href="/login">Đăng xuất</a>
                    </div>
                    <div className='left-main'>
                        <h3>
                            QUẢN LÝ HỒ SƠ
                        </h3>
                        <a className='left-link' href="/teacher">Thông tin cá nhân</a>
                        <a className='left-link' href="/manage-profile">Cập nhật thông tin cá nhân</a>
                    </div>
                    <div className='left-main'>
                        <h3>
                            QUẢN LÝ LỚP HỌC
                        </h3>
                        <a className='left-link' href="/class-teacher">Danh sách lớp học</a>
                       {/* <a className='left-link' href="/rate-student">Đánh giá học sinh</a>*/}
                    </div>
</div>
</div>
)}