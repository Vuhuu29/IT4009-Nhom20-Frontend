import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, InputGroup, Button, FormGroup } from 'react-bootstrap';
import '../.././style/css/menu/teacherpage.css'
import avt from '../.././images/avt.png'
import MenuBar from './MenuBar.js';
import  { Redirect  } from 'react-router-dom'
import axios from 'axios';

export default function ChangePassword() {
    const [validated, setValidated] = useState(false);
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
    const [newPassword, setNewPassword] = useState('');
    const [checkColor, setCheckColor] = useState({color: "#ffffff"});


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

   useEffect(() => {
        
        let teacher_id = localStorage.getItem("UserId")
        // let teacher_id = 5;
        const fetchData = async () => {
            await fetch('http://localhost:8080/teacher/' + teacher_id)
                .then((res) => res.json())
                .then((res) => {
                    console.log(res.data);
                    setTeacher(res.data);
                    setFullName(res.data.full_name)
                    setUsername(res.data.username)
                    setAchievement(res.data.achievement)
                    setPhoneNumber(res.data.phone_number)
                    setMajor(res.data.major)
                    setGender(res.data.gender)
                    setEmail(res.data.email)
                    setAvatar(res.data.avatar)
                    setPassword(res.data.password)
                })
                .catch(err => console.log(err))
            }

        fetchData();

    }, [])
    const updatePassword = () => {
        let teacher_id = localStorage.getItem("UserId")
       // let teacher_id = 5;
        if (password == newPassword) {
        var teacherInfor = {
            full_name: full_name,
            username: username,
            achievement: achievement,
            phone_number: phone_number,
            major: major,
            gender: gender,
            email: email,
            avatar: avatar
        }
        axios.put('http://localhost:8080/teacher/'+ teacher_id, teacherInfor)
            .then(data => console.log(data))
            .catch(err => console.log(err))
        window.location.href = "/teacher";
} else {setCheckColor({color: "#000000"});}

}

   // if (!teacher.length) return <div>Loading...</div>
    return (
        <div className='container' style={{ paddingTop: '10px', backgroundColor: '#FAFAFA' }}>
            <div className='header' style={{ display: 'block', height: '10px', marginTop: '20px'}}>
            </div>
            <MenuBar />
            <div className='main-content'>
                <Row>
                    <h4>
                        ĐỔI MẬT KHẨU
                    </h4>
                    <hr />
                    <Col className='avatar' style={{ float: 'left', marginLeft: '3%', width: '300px' }} sm="2">
                        
                    </Col>
                    <Form as={Col} sm="4" style={{ marginLeft: '10%' }}>
                        <Form.Group>
                            <Form.Label style={{ float: 'left', fontSize: '13px', color: 'black' }}> Mật khẩu hiện tại</Form.Label>
                            <Form.Control type="password" size="sm" required
                            onChange={(e => setNewPassword(e.target.value))}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ float: 'left', fontSize: '13px', color: 'black' ,paddingTop:'10px'}}> Mật khẩu mới</Form.Label>
                            <Form.Control type="password" size="sm" required 
                            ></Form.Control>
                        </Form.Group>
                        <p style={checkColor}>Mật khẩu sai</p>
                        <Button variant="primary" type="submit" size="sm" style={{ marginTop: '10px' }}
                        onClick={updatePassword}> Cập nhật</Button>
                    </Form>
                </Row>
            </div>
        </div>
    );
}