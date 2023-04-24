import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {Button, Col, Image, Nav, Row, Tab, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import'../../style/css/student/screen_student.css'
import StudentKhoahoc from "./StudentKhoahoc";
import StudentThongtin from "./StudentThongtin";
import StudentTKB from "./StudentTKB";
import CoursePage from "../user/CoursePage";
import Dangkykhoahoc from './Dangkykhoahoc';

export default function StudentPage(params) {
    const history = useHistory()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [oldPass, setOldPass] = useState("");

    const [newPass, setNewPass] = useState("");
    const [full_name, setFull_name] = useState("");
    const [Avatar, setAvatar] = useState("");
    const [dob, setDoB] = useState("");
    console.log(oldPass);
    console.log(newPass);

    useEffect(() => {
        const token = localStorage.getItem("token")
        const role = localStorage.getItem("UserRole")

        if (!(token && role)) {
            history.push("/login")
        }
        else {
            if (!(role == "ROLE_STUDENT" || role == "ROLE_PARENT")) {
                history.push("/login")
            } else {history.push("/student")}
        }
    }, [])


    const [student, setStudent]=useState("");
    const [listCourseLearned,setListCourseLearned] =useState("");

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`http://localhost:8080/student/${localStorage.getItem("UserId")}`, {
                method: "GET",

                headers: {
                    "Content-type": "application/json",
                    "Token":localStorage.getItem("token")
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    setStudent(data);
                    console.log("data_student......",data);
                })
                .catch((error) => {

                })
        }
        const fetchCourseLearned = async () => {
                await fetch(`http://localhost:8080/student/learned/${localStorage.getItem("UserId")}`, {
                    method: "GET",
    
                    headers: {
                        "Content-type": "application/json",
                        "Token":localStorage.getItem("token")
                    }
                })
                .then((res) => res.json())
                .then((data) => {
                    setListCourseLearned(data.data);
                    console.log("KHOA HOC DA THAM GIA " +data);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        fetchCourseLearned();
        fetchData();
    }, [])
    const updatePass = async () => {
         const change = await fetch(`http://localhost:8080/student/${localStorage.getItem("UserId")}` ,{
            method:"PUT",

            headers:{
                "Content-type": "application/json",
                "Token":localStorage.getItem("token")
            },
            body:
                JSON.stringify({
                    username: student.username,
                    password: newPass,
                    full_name: full_name,
                    gender: student.gender,
                    birthday: dob,
                    date_register: student.date_register,
                    date_pay: student.date_pay,
                    avatar: Avatar
            })
        })
            .then((res) => res.json())
    }

///////////NOTE LẠI: DO KHÔNG CÓ TRƯỜNG AVATAR CŨNG NHƯ TRƯỜNG DATE_REGISTER QUÁ VÔ DỤNG NÊN TÔI SẼ
// THAY TRƯỜNG DATE_REGISTER ĐỂ LƯU SRC AVATAR
    return(
        <div className="student">
            <div className="banner">
                <Image src= {student.avatar}
                       roundedCircle
                       height="100%"
                />
                <div className="thongtin_hs">
                    <p  id="hovaten">{student.full_name}</p>
                    <p>2022000{student.id}</p>
                </div>
                <Button variant="outline-info" onClick={handleShow}>
                    Cập nhật thông tin
                </Button>{' '}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cập nhật thông tin</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Mật khẩu cũ</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Small"
                                       aria-describedby="inputGroup-sizing-sm"
                                       value={oldPass}
                                       onChange={e => setOldPass(e.target.value)}
                                />
                            </div>
                            <br />
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Mật khẩu mới</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Small"
                                       aria-describedby="inputGroup-sizing-sm"
                                       value={newPass}
                                       onChange={e => setNewPass(e.target.value)}
                                />
                            </div>
                            <br />
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Họ và tên</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Small"
                                       aria-describedby="inputGroup-sizing-sm"
                                       value={full_name}
                                       onChange={e => setFull_name(e.target.value)}
                                />
                            </div>
                            <br />
                            <br />
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Ngày sinh</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Small"
                                       aria-describedby="inputGroup-sizing-sm"
                                       value={dob}
                                       onChange={e => setDoB(e.target.value)}
                                />
                            </div>
                            <br />
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Link Avatar:</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Small"
                                       aria-describedby="inputGroup-sizing-sm"
                                       value={Avatar}
                                       onChange={e => setAvatar(e.target.value)}
                                />
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={updatePass} >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
            <div className="noidung">
                <Tab.Container id="left-tabs-example" defaultActiveKey="thongtincanhan">
                    <Row>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="thongtincanhan">Thông tin cá nhân</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="khoahoc">Khóa học của bạn</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="thoikhoabieu">Thời khóa biểu</Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link  eventKey="dangkymonhoc" href="/course"> Đăng ký khóa học</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="thongtincanhan">
                                    <StudentThongtin/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="khoahoc">
                                    <StudentKhoahoc data={listCourseLearned}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="thoikhoabieu">
                                    <StudentTKB/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="dangkymonhoc">
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    )
}