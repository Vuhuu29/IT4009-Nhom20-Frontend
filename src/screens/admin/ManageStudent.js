import React, { useState, useEffect } from 'react'
import {
  Container, Row, Col, InputGroup, Button, FormControl, Table, Modal
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import MenuAdmin from './MenuAdmin'
import { FormGroup, Input, Label } from 'reactstrap'
import { Trash, BoxArrowUpRight } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/index';
import TextField from '@material-ui/core/TextField';
const ModelInformationStudent = (props) => {
  console.log("item...", props.item);
  const BodyModel = () => {
    return (
      <div>
        <TextField
          fullWidth
          margin="normal"
          label="Họ và tên"
          color="secondary"
          value={props.item.full_name}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Ngày sinh"
          color="secondary"
          value={props.item.birthday}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Giới tính"
          color="secondary"
          value={props.item.gender}
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Thông tin"
          color="secondary"
          value={props.item.about}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Họ và tên phụ huynh"
          color="secondary"
          value={props.item.parent.full_name}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Số điện thoại phụ huynh"
          color="secondary"
          value={props.item.parent.phone_number}
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    )
  }
  return (
    <Modal show={props.showInfor} onHide={props.handleCloseInfor}>
      <Modal.Header closeButton>
        <Modal.Title><h3>Thông tin chi tiết</h3></Modal.Title>
      </Modal.Header>
      <Modal.Body><BodyModel /></Modal.Body>
      <Modal.Footer>
        {/* {
          props.item.date_pay != null ?
            <Button variant="success" onClick={props.handleCloseInfor}>
              Đã thanh toán
            </Button>
            :
            <Button variant="danger" onClick={() => {
              props.handleShow(false)
              props.handleCloseInfor()
              }}>
              Thanh toán ngay
            </Button>
        } */}
        <Button variant="secondary" onClick={props.handleCloseInfor}>
          Đóng
        </Button>

      </Modal.Footer>
    </Modal>
  );
}
const ModelConfirm = (props) => {
  const dispatch = useDispatch()
  const submitModel = () => {
    if (props.typeModel) {
      dispatch(actions.deleteStudentById({ id: props.item.id }))
    }
  }
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Body><h3>{props.typeModel ? "Xác nhận xóa" : "Xác nhận thanh toán"}</h3></Modal.Body>
      <Modal.Footer>
        <Button variant={props.typeModel ? "danger" : "success"} onClick={() => {
          props.handleClose()
          submitModel()
        }}>
          {props.typeModel ? " Xóa học sinh" : "Thanh toán"}
        </Button>
        <Button variant="secondary" onClick={props.handleClose}>
          Đóng
        </Button>

      </Modal.Footer>
    </Modal>
  )
}
export default function ManageStudent(params) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [typeModel, setTypeModel] = useState(true)
  const [showModelDetail, setShowModelDetail] = useState(false);
  const handleClose = (type) => {
    if (type) {
      setTypeModel(true)
    }
    else {
      setTypeModel(false)
    }
    setShow(false)
  };
  const handleShow = (type) => {
    if (type) {
      setTypeModel(true)
    }
    else {
      setTypeModel(false)
    }
    setShow(true)
  };
  const handleCloseDetail = () => setShowModelDetail(false);
  const handleShowDetail = () => setShowModelDetail(true);
  const studentState = useSelector((state) => state.studentState)
  useEffect(() => {
    dispatch(actions.getAllStudent())
  }, [])

  console.log(studentState.listStudent);
  let listDataStudent
  if (studentState.listStudent != null) {
    console.log("..............",studentState.listStudent);
    listDataStudent = studentState.listStudent.map((item, key) => {
      if (item) {
            return (
        <tr key={key}>
          <td>{item.id}</td>
          <td>{item.full_name}</td>
          <td>{item.username}</td>
          <td>{item.birthday}</td>
          <td>{item.gender}</td>
          <td>{item.parent.full_name}</td>
          {/* <td>{item.date_pay == null ? "Chưa thanh toán" : "Đã thanh toán"}</td> */}
          <td><a onClick={handleShowDetail}><BoxArrowUpRight /></a></td>
          <td><a onClick={() => handleShow(true)}><Trash /></a></td>
          <ModelInformationStudent typeModel={typeModel} show={show} handleClose={handleClose} handleShow={handleShow} item={item} showInfor={showModelDetail} handleCloseInfor={handleCloseDetail} />
          <ModelConfirm item={item} typeModel={typeModel} show={show} handleClose={handleClose} handleShow={handleShow} />
        </tr>
      )
      }
      else{
        return(<div></div>)
      }
  
    })
  }
  return (
    <div style={{ paddingTop: "2%" }}>
      <Container>
        <Row>
          <Col xs={3}>
            <MenuAdmin style={{}} />
          </Col>
          <Col>
            <div>
              <h2 style={{ float: "left", color: "#cf4747" }}><strong>QUẢN LÝ HỌC SINH</strong></h2>
              <InputGroup className="mb-3" style={{ width: "60%", paddingLeft: "15%" }}>
                <FormControl
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                />
                <Button variant="outline-secondary" id="button-addon1">
                  Tìm kiếm
                </Button>
              </InputGroup>
            </div>
            <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Mã số</th>
                    <th>Họ và tên</th>
                    <th>Username</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Phụ huynh</th>
                    {/* <th>Thanh toán</th> */}
                  </tr>
                </thead>
                <tbody>
                  {listDataStudent}

                </tbody>
              </Table>
            </div>
          </Col>
        </Row>


      </Container>
    </div>
  )
}