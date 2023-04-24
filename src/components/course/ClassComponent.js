import React, { useState, useEffect, Component } from 'react'
import { Button, Card, Tabs, Tab, Row, Col } from 'react-bootstrap';
import "../.././style/css/student/screen_student.css";
import { useHistory, useLocation } from 'react-router';
export default function CourseComponent() {
    const location = useLocation();
    const history = useHistory();
    const [classs, setClasss] = useState(location.state);
    const [activity, setActivity] = useState([]);
    const [rate, setRate] = useState([]);
    const [userId, setUserId] = useState(localStorage.getItem("UserId"));
    useEffect(() => {

        const fetchDataActivity = async () => {
            await fetch(`http://localhost:8080/activityInClass/${classs.id}`, {
                method: "GET",

                headers: {
                    "Content-type": "application/json",
                    "Token": localStorage.getItem("token")
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    setActivity(data.data);
                    console.log("Hoat dong trong lop", data.data);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        const fetchDataRate = async () => {
            await fetch(`http://localhost:8080/rateByStudent/`, {
                method: "POST",

                headers: {
                    "Content-type": "application/json",
                    "Token": localStorage.getItem("token")
                },
                body : JSON.stringify({
                    "id_class" : classs.id,
                    "id_student" : userId
                })
            })
               
            
                .then((res) => res.json())
                .then((data) => {
                    setRate(data);
                    console.log("Danh gia", data);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        fetchDataActivity();
        fetchDataRate();
        
    }, [])
    return (
        <div className="Class">
            <img src={classs.image} />
            <div className='content' style={{ textAlign: 'left', marginLeft: '15%', marginRight: '15%' }}>
                <Tabs defaultActiveKey="class-infor" id="uncontrolled-tab-example" >
                    <Tab eventKey="class-infor" title="Thông tin lớp học">
                        <div>
                            <img src={classs.avatar} style={{ width: '100%' }} />
                            <p style={{ fontFamily: 'courier', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{classs.content}</p>
                        </div>
                    </Tab>
                    <Tab eventKey="activityinclass" title="Hoạt động trong lớp">
                        <div>
                            {activity && activity.map((item) => (
                                <Col>
                                    <Card style={{ width: '60%', margin: '10px', marginLeft: '20%' }}>
                                        <Card.Img variant="top" src={item.image} />

                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.content}
                                                <br />
                                                <i style={{ fontSize: '13px' }}>Thời gian từ {item.time_start} đến {item.time_end}</i>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </div>
                    </Tab>
                    <Tab eventKey="rate" title="Đánh giá của giáo viên">
                        <div>
                            {rate && rate.map((data)=> (
                                <Card style={{ width: '60%', margin: '10px', marginLeft: '20%' }}>
                                <Card.Img variant="top" src={data.activity.avatar} />

                                <Card.Body>
                                    <Card.Title>{data.activity.title}</Card.Title>
                                    <Card.Text>
                                        <strong>ĐIỂM : </strong>
                                        <i>{data.point}</i>
                                        <br/><strong>ĐÁNH GIÁ CỦA GIÁO VIÊN : </strong>
                                        <i>{data.activity.content}</i>
                                        <br />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}