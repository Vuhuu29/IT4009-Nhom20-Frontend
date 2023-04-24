import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../.././style/css/menu/teacherpage.css'
import { Container, Row, Col, InputGroup, Button, FormControl, Table, Modal,FloatingLabel,Form, Image }
 from 'react-bootstrap'
import avt from '../.././images/avt.png'
import ClassTeacher from './ClassTeacher.js'
import MenuBar from './MenuBar.js';
import { Trash, BoxArrowUpRight, Pen } from 'react-bootstrap-icons';
import axios from 'axios';

export default function ViewClass() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const history = useHistory();
    const currentURL = window.location.href;
    var path = currentURL.replace('localhost:3000/class', 'localhost:8080/class');
    var classes_id1 = currentURL.replace('http://localhost:3000/class/', '');
     var classes_id = classes_id1.replace('?', '');

    console.log(classes_id);


    const [updateRates, setUpdateRates] = useState('');
    const [updateContent, setUpdateContent] = useState('');
    const [updateType, setUpdateType] = useState('');
    const [updatePoint, setUpdatePoint] = useState('');

    const [id_classes, setIdClasses] = useState('');
    const [id_student, setIdStudent] = useState('');
    const [id_activity, setIdActivity] = useState('');

    const [type, setType] = useState('');
    const [content, setContent] = useState('');
    const [point, setPoint] = useState('');

    const [titleActivity, setTitleActivity] = useState('');
    const [timeStartActivity, setTimeStartActivity] = useState('');
    const [timeEndActivity, setTimeEndActivity] = useState('');
    const [imageActivity, setImageActivity] = useState('');
    const [contentActivity, setContentActivity] = useState('');
    const [stateActivity, setStateActivity] = useState('');

   const [updateActivity, setUpdateActivity] = useState('');
   const [updateStateActivity, setUpdateStateActivity]  = useState('');
   const [updateContentActivity, setUpdateContentActivity] = useState('');
   const [updateTitleActivity, setUpdateTitleActivity] = useState('');
   const [updateImageActivity, setUpdateImageActivity] = useState('');
   const [updateTimeEndActivity, setUpdateTimeEndActivity] = useState('');
    const [updateTimeStartActivity, setUpdateTimeStartActivity] = useState('');


    const [teacher, setTeacher] = useState('');
    const [rates, setRates] = useState('');
    const [classes, setClasses] = useState('');
    const [studentInClass, setStudentInClass] = useState('');
    const [activity, setActivity] = useState('');

    let teacher_id = localStorage.getItem("UserId")
    useEffect(() => {
        let teacher_id = localStorage.getItem("UserId")
        const token = localStorage.getItem("token")
        const role = localStorage.getItem("UserRole")
        if (!(token && role)) {
            history.push("/login")
        }
        else {
            if (role != "ROLE_TEACHER") {
                history.push("/login")
            }}

        const fetchData = async () => {
            await fetch('http://localhost:8080/teacher/'  + teacher_id )
                .then((res) => res.json())
                .then((res) => {
                    setTeacher(res.data);
                    console.log(res.data);}) 
            }

            const fetchData2 = async () => {
            await fetch('http://localhost:8080/class/'  + classes_id )
                .then((res) => res.json())
                .then((res) => {
                    setClasses(res.data);
                    console.log(res.data);}) 
            }
            const fetchData3 = async () => {
            await fetch('http://localhost:8080/activityInClass/' + classes_id )
                .then((res) => res.json())
                .then((res) => {
                    setActivity(res.data);
                    console.log(res.data);
                    }) 
            }
            const fetchData4 = async () => {
            await fetch('http://localhost:8080/student/class/' + classes_id )
                .then((res) => res.json())
                .then((res) => {
                    setStudentInClass(res.data);
                    console.log(res.data);
                    }) 
            }
            const fetchData5 = async () => {
            await fetch('http://localhost:8080/rateByClass/' + classes_id )
                .then((res) => res.json())
                .then((res) => {
                    setRates(res);
                    console.log(res);
                    }) 
            }
        fetchData();
        fetchData2();
        fetchData3();
        fetchData4();
        fetchData5();
        console.log(classes);
        
    }, [])

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

     const deleteActivity = (id) => {
        const deleteActivityData = {
            id_teacher: teacher_id
        }

        console.log(deleteActivityData)
        window.location.reload ()

        axios.delete(`http://localhost:8080/activity/${id}`,  deleteActivityData)
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

     const updateRate = () => {
        var teacher_id = localStorage.getItem("UserId")
        const rateStudent = {
           content: updateContent,
           point: updatePoint,
           type: updateType,
           id_activity: updateRates.activity.id,
           id_class: updateRates.class_infor.id,
           id_student: updateRates.stdent_infor.id,
           id_teacher: teacher_id

        }
        setShow(false);
        window.location.reload ()
        axios.put('http://localhost:8080/rate/'+  updateRates.id, rateStudent)
            .then(data => console.log(data))
            .catch(err => console.log(err))
     }

     const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImageActivity(URL.createObjectURL(img));
    }
  };
  const onImageChange1 = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setUpdateImageActivity(URL.createObjectURL(img));
    }
  };

    const createActivity = () => {
        var teacher_id = localStorage.getItem("UserId")
        const activity = {
           content: contentActivity,
           state: stateActivity,
           id_class: classes_id,
           id_teacher: teacher_id,
           title: titleActivity,
           image: imageActivity,
           time_start: timeStartActivity,
           time_end: timeEndActivity

        }
        setShow2(false);
        window.location.reload ()
        axios.post('http://localhost:8080/activity', activity)
            .then(data => console.log(data))
            .catch(err => console.log(err))
     }

     const updateInforActivity = () => {
        var teacher_id = localStorage.getItem("UserId")
        const activityUpdating = {
           content: updateContentActivity,
           state: updateStateActivity,
           id_class: classes_id,
           id_teacher: teacher_id,
           title: updateTitleActivity,
           image: updateImageActivity,
           time_start: updateTimeStartActivity,
           time_end: updateTimeEndActivity

        }
        console.log(activityUpdating);
        setShow3(false);
        //window.location.reload ()
        axios.put('http://localhost:8080/activity/' + updateActivity.id, activityUpdating)
            .then(data => console.log(data))
            .catch(err => console.log(err))
     }
    //if (!classes.length) return <div>Loading...</div>
    return (
    <div className='container'>
        <div className='teacherpage' style={{backgroundColor:'whitesmoke'}}>
            <div className='header' style={{ display: 'block', height: '10px', marginTop: '20px'}}>
            </div>
            <MenuBar style={{position: "fixed"}}/>
            <div>
                <div className='main-content'>
                    <Row>
                        <h4>
                            THÔNG TIN LỚP HỌC
                        </h4>
                        <hr />
                        <Col className='avatar'>
                            <Row>
                                <h3>Lớp học: {classes.title}</h3>
                                <h4>Mã lớp: {teacher_id}</h4>
                            </Row>
                            <Row>
                            <p><strong>Ngày bắt đầu: </strong>{classes.time_start}</p>
                            <p><strong>Ngày kết thúc: </strong> {classes.time_end}</p><br />
                            <p><strong>Địa điểm: </strong> {classes.location}</p><br />
                           <p>  <strong>Nội dung: </strong> {classes.content}</p><br />
                            <p> <strong>Giáo viên: </strong> {classes && classes.teacher.full_name}</p><br />
                            </Row>
                        </Col>
                        <Col><Image src={classes.avatar} style={{width: "100%"}}/></Col>

                        
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col xs="10">
                            <h3 style={{paddingTop: "3%"}}>HOẠT ĐỘNG</h3>
                            <Button variant="primary" onClick={handleShow2} style={{marginBottom: "2%"}}>
                                    Thêm hoạt động
                                  </Button>
                            <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Stt</th>
                                            <th>Mã hoạt động</th>
                                            <th>Tên</th>
                                            <th>Thời gian bắt đầu</th>
                                            <th>Thời gian kết thúc</th>
                                            <th>Nội dung</th>
                                            <th>Trạng thái</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {

                                        activity && activity.map((data, index) => (
                                        <tr>
                                            <td>{index}</td>
                                            <td>{data.id}</td>
                                            <td>{data.title}</td>
                                            <td>{data.time_start}</td>
                                            <td>{data.time_end}</td>
                                            <td>{data.content}</td>
                                            <td>{data.state}</td>
                                            <td><a onClick={() => {handleShow3(); setUpdateActivity(data); setUpdateStateActivity(data.type); setUpdatePoint(data.point);setUpdateContentActivity(data.content); setUpdateTitleActivity(data.title); setUpdateImageActivity(data.image);}}><Pen /></a></td>
                                            <td><a 
                                            onClick={() => deleteActivity(data.id)}><Trash /></a></td>
                                        </tr>))
                                    }
                                    </tbody>
                                </Table>
                                <h3>DANH SÁCH HỌC SINH</h3>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Stt</th>
                                            <th>Mã số học sinh</th>
                                            <th>Họ tên</th>
                                            <th>Giới tính</th>
                                            <th>Ngày sinh</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        studentInClass && studentInClass.map((data, index) => (
                                        <tr>
                                            <td>{index}</td>
                                            <td>{data.id}</td>
                                            <td>{data.full_name}</td>
                                            <td>{data.gender}</td>
                                            <td>{data.birthday}</td>
                                        </tr>))
                                    }
                                    </tbody>
                                </Table>
                                <h3>ĐÁNH GIÁ HỌC SINH</h3>
                                <Button variant="primary" onClick={handleShow1} style={{marginBottom: "2%"}}>
                                    Thêm đánh giá
                                  </Button>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>STT</th>   
                                            <th>Họ tên</th>
                                            <th>Điểm</th>
                                            <th>Đánh giá</th>
                                            <th>Hoạt động</th>
                                            <th>Phân loại</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        rates && rates.map((data, index) => (
                                        <tr>
                                            <td>{index}</td>
                                            <td>{data.stdent_infor.full_name}</td>
                                            <td>{data.point}</td>
                                            <td>{data.content}</td>
                                            <td>{data.activity.title}</td>
                                            <td>{data.type}</td>
                                            <td><a onClick={() => {handleShow(); setUpdateRates(data); setUpdateType(data.type); setUpdatePoint(data.point);setUpdateContent(data.content)}}><Pen /></a></td>
                                            <td><a 
                                            onClick={() => deleteRate(data.id)}><Trash /></a></td>
                                        </tr>))
                                    }
                                    </tbody>
                                </Table>
                        </Col>
                        <Col></Col>
                    </Row>
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
                                            <Form.Label>Phân loại:</Form.Label>
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
                        <Modal show={show} onHide={handleClose} size="lg" centered>
                        <Modal.Title style={{fontSize:'15px',textAlign:'center',paddingTop:'10px'}}>ĐÁNH GIÁ HỌC SINH</Modal.Title>
                        <Modal.Body>
                            <Form>
                                
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
                                <Form.Group controlId="point" as={Col} sm="4">
                                <Form.Label style={{ float: 'left' }} type="text" > Phân loại </Form.Label>
                                 <Form.Control defaultValue={updateRates.type}
                                    onChange={(e => setUpdateType(e.target.value))} required></Form.Control>
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

                    <Modal show={show2} onHide={handleClose2}>
                                    <Modal.Header closeButton>
                                      <Modal.Title>Thêm hoạt động</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                          <Form.Group className="mb-3" controlId="formIdStudent">
                                            <Form.Label>Tên hoạt động</Form.Label>
                                            <Form.Control type="text" placeholder="Tên hoạt động" 
                                            onChange={(e => {setTitleActivity(e.target.value)})}/>
                                          </Form.Group>
                                          <Form.Group className="mb-3" controlId="formContentewwent">
                                            <Form.Label>Nội dung:</Form.Label>
                                            <Form.Control type="text" placeholder="Nội dung"  as="textarea" rows={4}
                                            onChange={(e => {setContentActivity(e.target.value)})}/>
                                          </Form.Group>
                                          <Form.Group className="mb-3" controlId="formImage">
                                            <Form.Label>Avatar:</Form.Label>
                                            <Form.Control type="file" size="sm" onChange={onImageChange}
                                     />
                                          </Form.Group>

                                          <Form.Group className="mb-3" controlId="formtimestart">
                                            <Form.Label>Thời gian bắt đầu:</Form.Label>
                                            <Form.Control type="date" 
                                            onChange={(e => {setTimeStartActivity(e.target.value)})}/>
                                          </Form.Group>
                                           <Form.Group className="mb-3" controlId="formIdType">
                                            <Form.Label>Thời gian kết thúc:</Form.Label>
                                            <Form.Control type="date"
                                            onChange={(e => {setTimeEndActivity(e.target.value)})}/>
                                          </Form.Group>
                                          <Form.Group className="mb-3" controlId="formstate">
                                            <Form.Label>Trạng thái:</Form.Label>
                                            <Form.Control type="text" placeholder="Trạng thái" 
                                            onChange={(e => {setStateActivity(e.target.value)})}/>
                                          </Form.Group>
                                          
                                          <Button variant="primary" type="submit" onClick={createActivity}>
                                            Submit
                                          </Button>
                                        </Form>
                                    </Modal.Body>
                                    
                                  </Modal>

                                  <Modal show={show3} onHide={handleClose3}>
                                    <Modal.Header closeButton>
                                      <Modal.Title>Chỉnh sửa đánh giá</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                          <Form.Group className="mb-3" controlId="formIdStudent">
                                            <Form.Label>Tiêu đề:</Form.Label>
                                            <Form.Control type="text" placeholder="Tiêu đề"  defaultValue={updateActivity.title}
                                            onChange={(e => {setUpdateTitleActivity(e.target.value)})}/>
                                          </Form.Group>
                                          <Form.Group className="mb-3" controlId="formIdClass">
                                            <Form.Label>Nội dung:</Form.Label>
                                            <Form.Control type="text" as="textarea" rows={4} placeholder="Nội dung" defaultValue={updateActivity.content}
                                            onChange={(e => {setUpdateContentActivity(e.target.value)})}/>
                                          </Form.Group>

                                          <Form.Group className="mb-3" controlId="formImage">
                                            <Form.Label>Ảnh:</Form.Label>
                                            <Form.Control type="file" size="sm" onChange={onImageChange1}
                                     />
                                          </Form.Group>

                                           <Form.Group className="mb-3" controlId="formIdType">
                                            <Form.Label>Trạng thái:</Form.Label>
                                            <Form.Control type="text" placeholder="Trạng thái" defaultValue={updateActivity.state} 
                                            onChange={(e => {setUpdateStateActivity(e.target.value)})}/>
                                          </Form.Group>
                                          <Form.Group className="mb-3" controlId="formPoint">
                                            <Form.Label>Thời gian bắt đầu:</Form.Label>
                                            <Form.Control type="date" defaultValue={updateActivity.time_start}
                                            onChange={(e => {setUpdateTimeStartActivity(e.target.value)})}/>
                                          </Form.Group>
                                          <Form.Group className="mb-3" controlId="formPoint">
                                            <Form.Label>Thời gian kết thúc:</Form.Label>
                                            <Form.Control type="date" defaultValue={updateActivity.time_end}
                                            onChange={(e => {setUpdateTimeEndActivity(e.target.value)})}/>
                                          </Form.Group>

                                          
                                          <Button variant="primary" type="submit" onClick={updateInforActivity}>
                                            Submit
                                          </Button>
                                        </Form>
                                    </Modal.Body>
                                    
                                  </Modal>
                </div>
            </div>
        </div >
        </div>
    )
}
