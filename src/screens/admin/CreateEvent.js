import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, InputGroup,Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function CreateEvent() {
  const [validated, setValidated] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container style={{paddingTop: "5%"}}>
    <Row><h3>THÊM SỰ KIỆN</h3></Row>
    <Row>
    <Col></Col>
    <Col xs={10}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-1">
            <Form.Group as={Col}  controlId="validationCustom01">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Tiêu đề"

              />
              <Form.Control.Feedback type="invalid">
                  Vui lòng nhập tiêu đề.
                </Form.Control.Feedback>
            </Form.Group>
                
          </Row>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Nội dung</Form.Label>
            <Form.Control as="textarea" rows={4} />
            <Form.Control.Feedback type="invalid">
                  Vui lòng nhập nội dung.
                </Form.Control.Feedback>
          </Form.Group>

          </Row>
          <Row>

            <Form.Group as={Col}  md="6" controlId="validationCustom04">
              <Form.Label>Giáo viên</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Giáo viên" required
              />
              <Form.Control.Feedback type="invalid">
                  Vui lòng nhập giáo viên.
                </Form.Control.Feedback>
            </Form.Group>
          <Form.Group className="mb-3">
            <Form.Group as={Col} md="3" controlId="formGridState">
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Ảnh đại diện</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Form.Group>
          </Form.Group>
          </Row>

          <Button type="submit">Tạo</Button>

        </Form>

    </Col>
    <Col></Col>
    </Row>
    <Row><h6 style={{float: "left", paddingTop: "2%"}}><a href="/manage-event">Quay lại</a></h6></Row>

    </Container>
  );
}


