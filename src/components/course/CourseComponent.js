import React, {useState, useEffect, Component} from 'react'
import {Button, Card, Tabs, Tab, Row, Col, Modal} from 'react-bootstrap';
import "../.././style/css/student/screen_student.css";
import {useHistory, useLocation} from 'react-router';
import callApi from '../../fetchApi/index'

export default function CourseComponent() {
    const location = useLocation();
    const history = useHistory();
    const [itemClass, setItemClass] = useState()
    const [listClass, setListClass] = useState([]);
    const [teacher, setTeacher] = useState('');
    const [course, setCourse] = useState(location.state)
    const [input, setInput] = useState('http://localhost:8080/classInCourse/' + course.id);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    useEffect(() => {
        const fetchClassinCourse = async () => {
            await fetch(input)
                .then((res) => res.json())
                .then((data) => {
                    setListClass(data.data);
                    // console.log(data.data);
                })
                .catch((err) => console.log(err));
        }
        fetchClassinCourse();
    }, [])


    const handleDangky = async (item) => {
        Dangky(item)
        handleClose()
        handleShow1()

    };
    const Dangky = async (item) => {
        //console.log("id_class.....", item.id)
        //const res = await callApi("/student/class", {
          //  id_student: localStorage.getItem("UserId"),
            //id_class: item.id,
          //  state: "Đã thanh toán"
        //}, "POST")
        //console.log("res....",res)
         const change = await fetch(`http://localhost:8080/student/class` ,{
                 method:"POST",

                 headers:{
                     "Content-type": "application/json",
                     "Token":localStorage.getItem("token")
                 },
             body:
             JSON.stringify({
                     id_student: localStorage.getItem("UserId"),
                     id_class:item.id,
                     state:"Chưa thanh toán"
                 }),
         })
             .then((res) => res.json())
             .catch((error) => {
                 console.log("error fetch....",error)
             })
    };
    const Class = () => {

        if (listClass == null) return (
            <div>Khóa học hiện chưa có lớp học nào!!!</div>
        )
        else
            return (
                <div>
                    {listClass.map((item) => (
                        <Col>
                            <Card style={{width: '60%', margin: '10px', marginLeft: '20%'}}>
                                <Card.Img variant="top" src={item.avatar}/>

                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.content}
                                        <br/><i style={{fontSize: '13px'}}>Thời gian
                                        từ {item.time_start} đến {item.time_end}</i>
                                        <br/><i style={{fontSize: '13px'}}>Địa điểm : {item.location}</i>
                                    </Card.Text>
                                    <Button onClick={() => {
                                        handleShow()
                                        setItemClass(item)
                                    }}>Đăng ký ngay</Button>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Đăng ký lớp học</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <p><strong>Bạn có chắc chắn muốn đăng ký khóa học này?</strong></p>
                                <p>Nếu có hãy nhấn Đăng ký và làm theo hướng dẫn sau:</p>
                                <p>Chuyển học phí khóa học vào tài khoản: <br/> <strong>01234578905423 - Ngân hàng
                                    TechComeBank </strong><br/> Trường học DreamDo</p>
                                <p>Sau khi nhấn Đăng ký, đơn xin học của bé sẽ được gửi đến cơ sở dữ liệu của trường,
                                    nhà trường sẽ liên hệ lại bạn trong vòng 24 giờ</p>
                                <p>Nếu có thắc mắc liên hệ số điện thoại: <br/> 0845591201 - Thầy Đạt đẹp zai </p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Đóng
                            </Button>
                            <Button variant="primary" onClick={() => handleDangky(itemClass)}>Đăng ký</Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal
                        show={show1}
                        onHide={handleClose1}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Thông báo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <div>
                                    <p>Đơn đăng ký của bé đã được gửi đến cơ sở dữ liệu của trường, nhà trường sẽ liên
                                        hệ lại bạn trong vòng 24 giờ</p>
                                    <p>Nếu có thắc mắc liên hệ số điện thoại: <br/> 0845591201 - Thầy Đạt đẹp zai </p>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose1}>
                                Đóng
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )
    }
    return (
        <div className="Courses">
            <div id="slide-course">

                <div id="courses_banner" className="banner"></div>

                <div className="course_brief">
                    <div className="CourseName" style={{textTransform: 'uppercase'}}>
                        <h1>{course.name_course}</h1>
                    </div>
                    <div className="BriefMain">
                        <div className="BriefContent col-md-5 brief">
                            <p>{course.title}</p>
                        </div>
                        <div className="BriefInf col-md-4 brief">
                            <div className="InforItem">
                                Học phí : {course.fee} VND
                            </div>
                            <div className="InforItem">
                                Số lượng tối đa : 30 học sinh
                            </div>
                            <div className="InforItem">
                                Thời gian từ : {course.time_start} đến {course.time_end}
                            </div>
                        </div>
                        <div className="BriefStatus col-md-2 brief">
                            <Button variant="outline-info"><a href="#uncontrolled-tab-example-tab-class-in-course">Đăng
                                ký lớp học</a></Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
            <div className='content' style={{textAlign: 'left', marginLeft: '15%', marginRight: '15%'}}>
                <Tabs defaultActiveKey="course-infor" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="course-infor" title="Thông tin khóa học">
                        <div>
                            <img src={course.avatar} style={{width: '100%'}}/>
                            <p style={{
                                fontFamily: 'courier',
                                whiteSpace: 'pre-wrap',
                                wordWrap: 'break-word'
                            }}>{course.about}</p>
                        </div>
                    </Tab>
                    <Tab eventKey="class-in-course" title="Thông tin lớp học">
                        <div>
                            <Class/>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}