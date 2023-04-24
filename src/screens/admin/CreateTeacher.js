import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import * as actions from '../../actions/index'
export default function CreateTeacher() {
  const [validated, setValidated] = useState(false);
  const [teacher, setTeacher] = useState({gender:"nam"})
  const dispatch = useDispatch()
  const history = useHistory()
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const addTeacher = () => {
    dispatch(actions.insertTeacher(teacher))
    history.push("/manage-teacher")
  }
  return (
    <Container style={{ paddingTop: "4%" }}>
      <Row><h3>THÊM GIÁO VIÊN</h3></Row>
      <Row>
        <Col></Col>
        <Col xs={10}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="username"
                  onChange={(e) => setTeacher({ ...teacher, username: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  username
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="password"
                  onChange={(e) => setTeacher({ ...teacher, password: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  password
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" >
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Họ và tên"
                  onChange={(e) => setTeacher({ ...teacher, full_name: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  Họ và tên
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">

              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>email</Form.Label>
                <Form.Control type="email" placeholder="email" required
                  onChange={(e) => setTeacher({ ...teacher, email: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập email
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control type="number" placeholder="Số điện thoại" required
                  onChange={(e) => setTeacher({ ...teacher, phone_number: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập số điện thoại.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="9" controlId="validationCustom06">
                <Form.Label>Chuyên ngành</Form.Label>
                <Form.Control type="text" placeholder="Chuyên ngành" required
                  onChange={(e) => setTeacher({ ...teacher, major: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  Chuyên ngành
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="formGridState">
                <Form.Label>Giới tính</Form.Label>
                <Form.Select defaultValue="Nam" onChange={(e) => setTeacher({ ...teacher, gender: e.target.value })}>
                  <option>Nữ</option>
                  <option>Nam</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="formGridState">
                <Form.Group controlId="form" className="mb-3">
                  <Form.Label>Ảnh đại diện</Form.Label>
                  <Form.Control
                  required
                  type="text"
                  placeholder="Link ảnh"
                  onChange={(e) => setTeacher({ ...teacher, avatar: e.target.value })}
                />
                </Form.Group>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Kinh nghiệm</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder='Nhập kinh nghiệm'
                  onChange={(e) => setTeacher({ ...teacher, achievement: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập nội dung.
                </Form.Control.Feedback>
              </Form.Group>

            </Row>
            <Button type="submit" onClick={addTeacher}>Tạo</Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <Row><h6 style={{ float: "left", paddingTop: "2%" }}><a href="/manage-teacher">Quay lại</a></h6></Row>

    </Container>
  );
}


