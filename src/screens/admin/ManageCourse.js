import React, { useState, useEffect } from 'react'
import {
  Container, Row, Col, InputGroup, Button, FormControl, Table, Modal, Form
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import MenuAdmin from './MenuAdmin'
import { Trash, BoxArrowUpRight, ThreeDots } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/index'
const ModelEdit = (props) => {
  const dispatch = useDispatch()
  console.log("lalala....", props.item);
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const updateCourse = () => {
    dispatch(actions.updateCourse(props.item))
  }
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Body>
        <Row><h3>THÊM KHÓA HỌC</h3></Row>


        <Col xs={10}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-1">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Tên khóa học</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Tên khóa học"
                  value={props.item.name_course}
                  onChange={(e) => props.setCourse({ ...props.item, name_course: e.target.value })}
                />
                <Form.Label>Tiêu đề</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Tiêu đề"
                  value={props.item.title}
                  onChange={(e) => props.setCourse({ ...props.item, title: e.target.value })}
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
                  value={props.item.about}
                  onChange={(e) => props.setCourse({ ...props.item, about: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập nội dung.
                </Form.Control.Feedback>
              </Form.Group>

            </Row>
            <Row>
              <Form.Group md="3" controlId="validationCustom04">
                <Form.Label>Thời gian bắt đầu</Form.Label>
                <Form.Control
                  required
                  type="date"
                  required
                  value={props.item.time_start}
                  onChange={(e) => props.setCourse({ ...props.item, time_start: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">

                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationCustom04">
                <Form.Label>Thời gian kết thúc</Form.Label>
                <Form.Control
                  required
                  type="date"
                  required
                  value={props.item.time_end}
                  onChange={(e) => props.setCourse({ ...props.item, time_end: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label>Giá tiền</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Giá tiền" required
                  value={props.item.fee}
                  onChange={(e) => props.setCourse({ ...props.item, fee: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập giá tiền.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label>Loại lớp học</Form.Label>
                <select value={props.item.state} onChange={(e) => {
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
                  props.setCourse({ ...props.item, state: text})
                }} class="form-control" id="exampleFormControlSelect1">
                  <option>Mặc định</option>
                  <option>Đặc biệt</option>

                </select>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="formGridState">
                <Form.Label>Link ảnh</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="link ảnh"
                  value={props.item.avatar}
                  onChange={(e) => props.setCourse({ ...props.item, avatar: e.target.value })}
                />
              </Form.Group>
              <Form.Control.Feedback type="invalid">
                điền link ảnh
              </Form.Control.Feedback>
            </Row>
          </Form>
        </Col>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={()=>{
          props.handleClose()
          updateCourse()
          }}>
          Chỉnh sửa
        </Button>
        <Button variant="secondary" onClick={props.handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default function ManageCourse(params) {
  const dispatch = useDispatch()
  const history = useHistory()
  const courseState = useSelector((state) => state.courseState)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [itemEdit, setItemEdit] = useState({})
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  useEffect(() => {
    dispatch(actions.getCourse());
    dispatch(actions.getTeacher())
  }, [])
  console.log("course...", courseState);
  let listCourse
  if (courseState.listCourse) {
    listCourse = courseState.listCourse.map((item, key) => {
      return (
        <tr key={key}>
          <td>{item.id}</td>
          <td>{item.name_course}</td>
          <td>{item.title}</td>
          <td>{item.state}</td>
          <td>{item.fee}</td>
          <td><a onClick={() => {
            history.push({
              pathname: "/manage-class",
              state: item
            })
          }} ><ThreeDots /></a></td>
          <td><a onClick={() => {
            setItemEdit(item)
            handleShowEdit()

          }}><BoxArrowUpRight /></a></td>
          <td><a onClick={handleShow}><Trash /></a></td>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body><h3>Xác nhận xóa</h3></Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => {
                handleClose()
                dispatch(actions.deleteCourse({ id: item.id }))
              }}>
                Xóa khóa học
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>

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
              QUẢN LÝ KHÓA HỌC
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
            <Button variant="outline-danger"><a href="/create-course">Thêm khóa học</a></Button>
            <Table striped bordered hover size="sm" style={{ marginTop: "2%" }}>
              <thead>
                <tr>
                  <th>Mã số</th>
                  <th>Khóa học</th>
                  <th>Tiêu đề</th>
                  <th>Trạng thái</th>
                  <th>Giá</th>
                  <th>Lớp học</th>
                </tr>
              </thead>
              <tbody>
                {listCourse}
              </tbody>
            </Table>

          </Col>
        </Row>
        <ModelEdit item={itemEdit} setCourse={setItemEdit} show={showEdit} handleClose={handleCloseEdit} />
      </Container>
    </div>
  )
}