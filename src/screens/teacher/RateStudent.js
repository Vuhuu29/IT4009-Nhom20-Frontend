import React, { useState, useEffect } from 'react'
import {
    Container, Row, Col, InputGroup, Button, FormControl, Table, Modal,FloatingLabel,Form
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { Trash, BoxArrowUpRight, Pen } from 'react-bootstrap-icons';
import '../.././style/css/menu/teacherpage.css'
import avt from '../.././images/avt.png'
import { TextField } from '@material-ui/core';
import MenuBar from './MenuBar.js';
import axios from 'axios';

export default function RateStudent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let today = day + "/" + month + "/" + year
    console.log(today);
    const [rate, setRate] = useState('');
    const [updateRates, setUpdateRates] = useState('');
    const [updateContent, setUpdateContent] = useState('');
    const [updateType, setUpdateType] = useState('');
    const [updatePoint, setUpdatePoint] = useState('');

    const [newid, setId] = useState('');
    const [id_classes, setIdClasses] = useState('');
    const [id_student, setIdStudent] = useState('');
    const [id_activity, setIdActivity] = useState('');
    const [type, setType] = useState('');
    const [content, setContent] = useState('');
    const [point, setPoint] = useState('');

    const [activi, setActivi] = useState('');
    const [classes, setClasses]= useState('');
    const [studentInfor, setStudentInfor]= useState('');

    const history = useHistory()
    let teacher_id = 5

     useEffect(() => {
        const fetchData = async () => {
            const teacher_id = localStorage.getItem("UserId")
            // let teacher_id = 5;
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

            await fetch('http://localhost:8080/rate/'  + teacher_id)
                .then((res) => res.json())
                .then((res) => {
                    setRate(res.data);
                    console.log(res.data);
                })}

        fetchData();
    }, [])
     const updateRate = () => {
        var teacher_id = localStorage.getItem("UserId")
        const rateStudent = {
           content: updateContent,
           point: updatePoint,
           type: updateType,
           id: updateRates.id,
           id_activity: updateRates.id_activity,
           id_class: updateRates.id_class,
           id_student: updateRates.id_student,
           id_teacher: teacher_id

        }
        setShow(false);
        window.location.reload ()
        axios.put('http://localhost:8080/rate/'+  updateRates.id, rateStudent)
            .then(data => console.log(data))
            .catch(err => console.log(err))
     }

     const createRate = () => {
        var teacher_id = localStorage.getItem("UserId")
        const rateStudent = {
            point: point,
            content: content,
            type: type,
            id_activity: id_activity,
            id_class: id_classes,
            id_student: id_student,
            id_teacher: teacher_id

        }
        axios.post('http://localhost:8080/rate', rateStudent)
            .then(data => console.log(data))
            .catch(err => console.log(err))
     }

     const deleteRate = (id) => {
        const deleteRateData = {
            id: id
        }

        console.log(deleteRateData)
        window.location.reload ()

        axios.delete(`http://localhost:8080/rate/${id}`,  {data: deleteRateData})
            .then(data => console.log(data))
            .catch(err => console.log(err))
     }
    //if (!rate.length) return <div>Loading...</div>
    console.log(updateRates);
    return (
        <div style={{ paddingTop: '3%', backgroundColor: 'whitesmoke' }}>
            <div className='container'>
                <MenuBar />
                <Container>
                    <Row style={{ fontSize: '13px' }}>
                        <Col>
                            <div>
                                <h3 style={{ float: "left", color: "#cf4747", fontSize: '16px' }}>ĐÁNH GIÁ HỌC SINH</h3>
                                <Button variant="primary" onClick={handleShow1}>
                                    Thêm đánh giá
                                  </Button>

                                  <Modal show={show1} onHide={handleClose1}>
                                    <Modal.Header closeButton>
                                      <Modal.Title>Thêm đánh giá</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                          <Form.Group className="mb-3" controlId="formIdStudent">
                                            <Form.Label>Học sinh:</Form.Label>
                                            <Form.Control type="text" placeholder="Mã học sinh" 
                                            onChange={(e => {setIdStudent(e.target.value)})}/>
                                          </Form.Group>
                                          <Form.Group className="mb-3" controlId="formIdClass">
                                            <Form.Label>Hoạt động:</Form.Label>
                                            <Form.Control type="text" placeholder="Mã hoạt động" 
                                            onChange={(e => {setIdActivity(e.target.value)})}/>
                                          </Form.Group>

                                          <Form.Group className="mb-3" controlId="formIdActivity">
                                            <Form.Label>Lớp:</Form.Label>
                                            <Form.Control type="text" placeholder="Mã lớp" 
                                            onChange={(e => {setIdClasses(e.target.value)})}/>
                                          </Form.Group>
                                           <Form.Group className="mb-3" controlId="formIdType">
                                            <Form.Label>Loại:</Form.Label>
                                            <Form.Control type="text" placeholder="Loại" 
                                            onChange={(e => {setType(e.target.value)})}/>
                                          </Form.Group>
                                          <Form.Group className="mb-3" controlId="formPoint">
                                            <Form.Label>Điểm:</Form.Label>
                                            <Form.Control type="number" placeholder="Điểm" 
                                            onChange={(e => {setPoint(e.target.value)})}/>
                                          </Form.Group>

                                          <Form.Group className="mb-3" controlId="formComment">
                                            <Form.Label>Nhận xét: </Form.Label>
                                            <Form.Control type="text" placeholder="Nhận xét" 
                                            onChange={(e => {setContent(e.target.value)})}/>
                                          </Form.Group>

                                          
                                          <Button variant="primary" type="submit" onClick={createRate}>
                                            Submit
                                          </Button>
                                        </Form>
                                    </Modal.Body>
                                    
                                  </Modal>
                            </div>
                            <div style={{paddingTop: "2%"}}>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Stt</th>
                                            <th>Mã học sinh</th>
                                            <th>Mã lớp học</th>
                                            <th>Mã hoạt động</th>
                                            <th>Điểm</th>
                                            <th>Nhận xét</th>
                                            <th>Phân loại</th>
                                            <th> </th>
                                            <th> </th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        rate && rate.map((data, index) => (
                                        <tr>
                                            <td>{index}</td>
                                            <td>{data.id_student}</td>
                                            <td>{data.id_class}</td>
                                            <td>{data.id_activity}</td>
                                            <td>{data.point}</td>
                                            <td>{data.content}</td>
                                            <td>{data.type}</td>
                                            <td><a onClick={() => {handleShow(); setUpdateRates(data); setUpdateType(data.type); setUpdatePoint(data.point);setUpdateContent(data.content)}}><Pen /></a></td>
                                            <td><a 
                                            onClick={() => deleteRate(data.id)}><Trash /></a></td>
                                        </tr>))
                                    }
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                    <Modal show={show} onHide={handleClose} size="lg" centered>
                        <Modal.Title style={{fontSize:'15px',textAlign:'center',paddingTop:'10px'}}>ĐÁNH GIÁ HỌC SINH</Modal.Title>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="point" as={Col} sm="4">
                                <Form.Label style={{ float: 'left' }} type="text" > Phân loại </Form.Label>
                                 <Form.Control defaultValue={updateRates.type}
                                    onChange={(e => setUpdateType(e.target.value))} required></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="point" as={Col} sm="4">
                                <Form.Label style={{ float: 'left' }} type="number" > Điểm </Form.Label>
                                 <Form.Control defaultValue={updateRates.point}
                                    onChange={(e => setUpdatePoint(e.target.value))} required></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="content" as={Col} sm="8">
                                    <Form.Label style={{ float: 'left' }} type="text" > Nội dung </Form.Label>
                                    <Form.Control defaultValue={updateRates.content}
                                        onChange={(e => {setUpdateContent(e.target.value)})}

                                     required></Form.Control>
                                </Form.Group>
                                
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={updateRate} size="sm" type="submit">
                                Đồng ý
                            </Button>
                            <Button variant="secondary" onClick={handleClose} size="sm">
                                Đóng
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </Container>
            </div>
        </div>
    );
}