import React, { useState, useEffect } from 'react'
import {
  Container, Row, Col, InputGroup, Button, Form, FormControl, Table, Modal
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import MenuAdmin from './MenuAdmin'
import { Trash, BoxArrowUpRight } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/index'

const ModelUpdate = (props) => {
  const [validated, setValidated] = useState(false);
  const [teacher, setTeacher] = useState(props.item)
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
  console.log("teacher....",teacher);
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Body>
        <Container>
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
                      value={teacher.username}
                      onChange={(e) => setTeacher({ ...props.teacher, username: e.target.value })}
                    />
                    <Form.Control.Feedback type="invalid">
                      username
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="password"
                      value={teacher.password}
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
                      value={teacher.full_name}
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
                      value={teacher.email}
                      onChange={(e) => setTeacher({ ...teacher, email: e.target.value })}
                    />
                    <Form.Control.Feedback type="invalid">
                      Vui lòng nhập email
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationCustom05">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control type="text" placeholder="Số điện thoại" required
                      value={teacher.phone_number}
                      onChange={(e) => setTeacher({ ...teacher, phone_number: e.target.value })}
                    />
                    <Form.Control.Feedback type="invalid">
                      Vui lòng nhập số điện thoại.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom06">
                    <Form.Label>Cn</Form.Label>
                    <Form.Control type="text" placeholder="Chuyên ngành" required
                      value={teacher.major}
                      onChange={(e) => setTeacher({ ...teacher, major: e.target.value })}
                    />
                    <Form.Control.Feedback type="invalid">
                      Cn
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="formGridState">
                    <Form.Label>Giới tính</Form.Label>
                    <Form.Select defaultValue="Nam"
                      value={teacher.gender}
                      onChange={(e) => setTeacher({ ...teacher, gender: e.target.value })}>
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
                         value={teacher.avatar}
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
                      value={teacher.achievement}
                      onChange={(e) => setTeacher({ ...teacher, achievement: e.target.value })}
                    />
                    <Form.Control.Feedback type="invalid">
                      Vui lòng nhập nội dung.
                    </Form.Control.Feedback>
                  </Form.Group>

                </Row>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => {
          props.handleClose()
          dispatch(actions.updateTeacher(teacher))
        }}>
          Cập nhật thông tin
        </Button>
        <Button variant="secondary" onClick={props.handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default function ManageTeacher(params) {
  const dispatch = useDispatch()
  const teacherState = useSelector((state) => state.teacherState)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  useEffect(() => {
    dispatch(actions.getTeacher())
  }, [])
  console.log(teacherState.listTeacher);
  let listTeacher
  if (teacherState.listTeacher) {
    listTeacher = teacherState.listTeacher.map((item, key) => {
      return (
        <tr key={key}>
          <td>{item.id}</td>
          <td>{item.full_name}</td>
          <td>{item.username}</td>
          <td>{item.gender}</td>
          <td>{item.email}</td>
          <td>{item.phone_number}</td>
          <td><a onClick={handleShowEdit}><BoxArrowUpRight /></a></td>
          <td><a onClick={handleShow}><Trash /></a></td>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body><h3>Xác nhận xóa</h3></Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => {
                handleClose()
                dispatch(actions.deleteTeacher({ id: item.id }))
              }}>
                Đồng ý
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
          <ModelUpdate item={item} show={showEdit} handleClose={handleCloseEdit} />
        </tr>
      )
    })
  }
  return (
    <div style={{ paddingTop: "2%", color: "" }}>
      <Container>
        <Row></Row>
        <Row>
          <Col xs={3} style={{}}><MenuAdmin /></Col>
          <Col>
            <h2 style={{ float: "left", color: "#cf4747" }}><strong>
              QUẢN LÝ GIÁO VIÊN
            </strong></h2>
            <InputGroup className="mb-3" style={{ width: "60%", paddingLeft: "15%" }}>
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
              <Button variant="outline-secondary" id="button-addon1">
                Tìm kiếm
              </Button>
            </InputGroup>
            <Button variant="outline-danger"><a href="/create-teacher">Thêm giáo viên</a></Button>
            <Table striped bordered hover size="sm" style={{ marginTop: "2%" }}>
              <thead>
                <tr>
                  <th>Mã số</th>
                  <th>Họ tên</th>
                  <th>Username</th>
                  <th>Giới tính</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                </tr>
              </thead>
              <tbody>
                {listTeacher}
              </tbody>
            </Table>
          </Col>
        </Row>

      </Container>
    </div>
  )
}