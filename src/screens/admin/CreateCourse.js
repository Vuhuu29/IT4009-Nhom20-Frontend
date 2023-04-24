import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../actions/index'
import "react-datepicker/dist/react-datepicker.css";
export default function CreateCourse() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [validated, setValidated] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [course, setCourse] = useState({ state: "default" })
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const addCourse = () => {
    dispatch(actions.insertCourse(course))
    history.push("/manage-course")
  }
  console.log(course);
  return (
    <Container style={{ paddingTop: "5%" }}>
      <Row><h3>THÊM KHÓA HỌC</h3></Row>
      <Row>
        <Col></Col>
        <Col xs={10}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-1">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Tên khóa học</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Tên khóa học"
                  onChange={(e) => setCourse({ ...course, name_course: e.target.value })}
                />
                <Form.Label>Tiêu đề</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Tiêu đề"
                  onChange={(e) => setCourse({ ...course, title: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập tiêu đề.
                </Form.Control.Feedback>
              </Form.Group>

            </Row>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Nội dung</Form.Label>
                <Form.Control as="textarea" rows={4}
                  onChange={(e) => setCourse({ ...course, about: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập nội dung.
                </Form.Control.Feedback>
              </Form.Group>

            </Row>
            <Row>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Thời gian bắt đầu</Form.Label>
                <Form.Control
                  required
                  type="date"
                  required
                  onChange={(e) => setCourse({ ...course, time_start: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">

                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Thời gian kết thúc</Form.Label>
                <Form.Control
                  required
                  type="date"
                  required
                  onChange={(e) => setCourse({ ...course, time_end: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">

                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Giá tiền</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Giá tiền" required
                  onChange={(e) => setCourse({ ...course, fee: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập giá tiền.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>

              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Loại khóa học</Form.Label>

                <select onChange={(e) => {
                  let text
                  switch (e.target.value) {
                    case "Mặc định":
                      text = "default"
                      break;
                    case "Đặc biệt":
                      text = "special"
                      break;
                    default:
                      text = null
                      break;
                  }
                  setCourse({ ...course, state: text})
                }} class="form-control" id="exampleFormControlSelect1">
                  <option>Mặc định</option>
                  <option>Đặc biệt</option>

                </select>

              </Form.Group>
              <Form.Group as={Col} md="9" controlId="formGridState">
                <Form.Group controlId="form" className="mb-3">
                  <Form.Label>Ảnh đại diện</Form.Label>
                  <Form.Control
                  required
                  type="text"
                  placeholder="Link ảnh"
                  onChange={(e) => setCourse({ ...course, avatar: e.target.value })}
                />
                </Form.Group>
              </Form.Group>
            </Row>

            <Button type="submit" onClick={() => addCourse()}>Tạo khóa học mới</Button>

          </Form>

        </Col>
        <Col></Col>
      </Row>
      <Row><h6 style={{ float: "left", paddingTop: "2%" }}><a href="/manage-course">Quay lại</a></h6></Row>

    </Container>
  );
}


