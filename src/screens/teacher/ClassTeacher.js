import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../.././style/css/menu/teacherpage.css'
import { Row, Col, Table, Button, Modal, Image } from 'react-bootstrap'
import avt from '../.././images/avt.png'
import MenuBar from './MenuBar.js';


export default function ClassTeacher() {
    const history = useHistory()

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const [show, setShow] = useState(false);

    const [classes, setClasses] = useState('');
    useEffect(() => {
            const teacher_id = localStorage.getItem("UserId")
            const token = localStorage.getItem("token")
            const role = localStorage.getItem("UserRole")
            if (!(token && role)) {
                history.push("/login")
            }
            else {
                if (role != "ROLE_TEACHER") {
                    history.push("/login")
                }
            }

            const fetchData2 = async () => {
            await fetch('http://localhost:8080/classByTeacher/' + teacher_id)
                .then((res) => res.json())
                .then((data) => {
                    setClasses(data);
                    //console.log(data);
                    }) 
            }

        fetchData2();
        console.log(classes);
        
    }, [])

if (!classes.length) return <div>Loading...</div>
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
                            DANH SÁCH LỚP HỌC
                        </h4>
                        <hr />
                        <Table striped bordered hover size='sm' style={{ fontSize: '13px' }}>
                            <thead>
                                <tr>
                                    <th>ID Class</th>
                                    <th>Ảnh </th>
                                    <th>Lớp học</th>
                                    <th>Thời gian bắt đầu</th>
                                    <th>Thời gian kết thúc</th>
                                    <th>Địa điểm</th>
                                    <th>Nội dung</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                               {classes && classes.map((data, index) => (
                                    <tr>
                                    <td>{data.id}</td>
                                    <td style={{width: "7%"}}>
                                    <Image src={data.avatar} style={{width: "100%"}}/></td> 
                                    <td>{data.title}</td>
                                    <td>{data.time_start}</td>
                                    <td>{data.time_end}</td>
                                    <td>{data.location}</td>
                                    <td>{data.content}</td>
                                    <td><a href={"/class/" + data.id}>View</a></td>
                                    </tr>
                                    ))
                               }
                                
                            </tbody>
                        </Table>
                    </Row>
                   
                </div>
            </div>
        </div >
        
        </div>
    )
}
