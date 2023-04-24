import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col, Form, InputGroup, Button, Image } from 'react-bootstrap';
import '../.././style/css/menu/teacherpage.css'
import avt from '../.././images/avt.png'
import MenuBar from './MenuBar.js';
import axios from 'axios';

export default function ManageProfile() {
    const [teacher, setTeacher] = useState('');
    const [full_name, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [achievement, setAchievement] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [major, setMajor] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory()
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

           
            await fetch('http://localhost:8080/teacher/' +teacher_id)
                .then((res) => res.json())
                .then((res) => {
                    setTeacher(res);
                    setFullName(res.full_name)
                    setUsername(res.username)
                    setAchievement(res.achievement)
                    setPhoneNumber(res.phone_number)
                    setMajor(res.major)
                    setGender(res.gender)
                    setEmail(res.email)
                    setAvatar(res.avatar)
                    setPassword(res.password)
                    console.log(res)
                })}

        fetchData();
    }, [])
    
    const updateTeacher = () => {
            const teacher_id = localStorage.getItem("UserId")
            
        var teacherInfor = {
            full_name: full_name,
            username: username,
            achievement: achievement,
            phone_number: phone_number,
            major: major,
            gender: gender,
            email: email,
            avatar: avatar,
            password: password
        }
        axios.put('http://localhost:8080/teacher/'+  teacher_id, teacherInfor)
            .then(data => console.log(data))
            .catch(err => console.log(err))
}

    
  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setAvatar(URL.createObjectURL(img));
    }
  };
    return (
        <div style={{ paddingTop: '1%',backgroundColor:'white'}}>
            <Container>            
                    <MenuBar />
                <div className='man-pro'>
                    <h4 style={{ color: '' }}>
                        CẬP NHẬT THÔNG TIN CÁ NHÂN
                    </h4>
                    <hr />
                    <Form style={{ fontSize: '13px', color: 'black' }}>
                        <Row>
                            <Col sm="5">
                            <Image src={avatar} style={{width: '10rem' }} rounded />
                            </Col>
                            <Col sm="7">
                                <Form.Group controlId="avatar" className="mb-3" style={{float:"left"}}>
                                    <Form.Label>Cập nhật ảnh đại diện</Form.Label>
                                    <Form.Control type="file" size="sm" onChange={onImageChange}
                                     />
                                  </Form.Group>
                            </Col>
                        </Row>

                        <Row style={{paddingTop: "5%"}}>
                            <Form.Group controlId="full_name" as={Col} sm="5">
                                <Form.Label style={{ float: 'left' }} type="text" > Họ và tên </Form.Label>
                                 <Form.Control defaultValue={full_name}
                                    onChange={(e => {setFullName(e.target.value)})} required></Form.Control>
                            </Form.Group>

                            <Form.Group controlId="username" as={Col} sm="4">
                                <Form.Label style={{ float: 'left' }} type="text" > Username </Form.Label>
                                <Form.Control defaultValue={username}
                                    onChange={(e => {setUsername(e.target.value)})}

                                 required></Form.Control>
                            </Form.Group>

                            <Form.Group controlId="gender" as={Col} sm="3">
                                <Form.Label style={{ float: 'left' }}> Giới tính </Form.Label>
                                <Form.Select aria-label="Nam"
                                 onChange={(e => {setGender(e.target.value)})}>
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </Form.Select>
                            </Form.Group>

                        </Row>
                        <Row style={{ paddingTop: '15px' }}>
                            <Col>
                                <Row>
                                    <Form.Group controlId="major" as={Col} sm="3" >
                                        <Form.Label style={{ float: 'left' }} > Major</Form.Label>
                                        <Form.Control defaultValue={major}
                                         onChange={(e => {setMajor(e.target.value)})} required></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="achivement" as={Col} sm="3" >
                                        <Form.Label style={{ float: 'left' }} > Achievement</Form.Label>
                                        <Form.Control defaultValue={achievement}
                                          onChange={(e => {setAchievement(e.target.value)})} required></Form.Control>
                                    </Form.Group>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{ paddingTop: '15px' }}>
                            <Form.Group controlId="phone_number" as={Col} sm="4">
                                <Form.Label style={{ float: 'left' }}> Số điện thoại</Form.Label>
                                <Form.Control defaultValue={phone_number}
                                 onChange={(e => {setPhoneNumber(e.target.value)})} required></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="email" as={Col} sm="6">
                                <Form.Label style={{ float: 'left' }}> Email</Form.Label>
                                <Form.Control type="email" defaultValue={email}
                                  onChange={(e => {setEmail(e.target.value); })} required></Form.Control>
                                
                            </Form.Group>
                        </Row>
                        <Row style={{ paddingTop: '15px' }}>
            
                        </Row>
                        <Button variant="primary" type="submit" style={{ marginTop: '20px' }}
                            onClick={updateTeacher}
                        >
                            <a href="http://localhost:3000/teacher" style={{color: "#000000"}}>
                            Cập nhật
                            </a>
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    );

}