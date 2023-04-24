import React, { useState, useEffect } from 'react'
import {
    Container, Row, Col, Table, thead, Form, Modal, tbody, tr, th, td, InputGroup, Button, FormControl
} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom'
import MenuAdmin from './MenuAdmin'
import { Trash, BoxArrowUpRight } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/index'
const ModelClass = (props) => {
    const dispatch = useDispatch()
    const teacherState = useSelector((state) => state.teacherState)
    let listTeacher
    if (teacherState.listTeacher) {
        listTeacher = teacherState.listTeacher.map((item, key) => {
            return (
                <option key={key}>{item.full_name}-{item.id}</option>
            )
        })
    }
    console.log("props.item", props.itemClass);
    const handleSubmit = () => {
        console.log(props.itemClass);
        if (props.type) {
            dispatch(actions.insertClass({ ...props.itemClass, id_course: props.itemCourse.id }))
        }
        else {
            dispatch(actions.updateClass({ ...props.itemClass, id_course: props.itemCourse.id }))
        }
    }
    return (
        <Modal
            size="lg"
            show={props.show}
            onHide={() => props.handleClose()}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {props.type ? "Thêm mới lớp học" : "Thông tin chi tiết lớp học"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container >
                    <Row>

                        <Form>
                            <Row>
                                <Form.Group className="mb-2" >
                                    <Form.Label>Tiêu đề lớp học</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập tiêu đề"
                                        value={props.itemClass.title}
                                        onChange={(e) => props.setItemClass({ ...props.itemClass, title: e.target.value })}
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-2" >
                                    <Form.Label>Địa điểm</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập địa điểm"
                                        value={props.itemClass.location}
                                        onChange={(e) => props.setItemClass({ ...props.itemClass, location: e.target.value })}
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-2">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Nội dung</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder='Nhập Nội dung'
                                        value={props.itemClass.content}
                                        onChange={(e) => props.setItemClass({ ...props.itemClass, content: e.target.value })}
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
                                        value={props.itemClass.time_start}
                                        onChange={(e) => props.setItemClass({ ...props.itemClass, time_start: e.target.value })}
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
                                        value={props.itemClass.time_end}
                                        onChange={(e) => props.setItemClass({ ...props.itemClass, time_end: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group md="3" >
                                    <Form.Label>Loại lớp học</Form.Label>
                                    <select
                                        value={props.itemClass.state}
                                        onChange={(e) => {
                                            let text = e.target.value
                                            props.setItemClass({ ...props.itemClass, state: text })
                                        }}
                                        className="form-control" id="exampleFormControlSelect2"
                                    >
                                        <option >Mặc định</option>
                                        <option >Lớp học đặc biệt</option>
                                    </select>
                                    <Form.Control.Feedback type="invalid">
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="formGridState">
                                    <Form.Group controlId="form" className="mb-3">
                                        <Form.Label>Ảnh đại diện</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            value={props.itemClass.avatar}
                                            placeholder="Link ảnh"
                                            onChange={(e) => props.setItemClass({ ...props.itemClass, avatar: e.target.value })}
                                        />
                                    </Form.Group>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group md="3" >
                                    <Form.Label>Giáo viên phụ trách</Form.Label>
                                    <select
                                   
                                        onChange={(e) => {
                                            let text = e.target.value
                                            if (text != "Chưa có giáo viên phụ trách") {
                                                let x = text.split("-")
                                                props.setItemClass({ ...props.itemClass, id_teacher: parseInt(x[x.length - 1]) })
                                            }
                                            else {
                                                props.setItemClass({ ...props.itemClass, id_teacher: null })
                                            }


                                        }} className="form-control" id="exampleFormControlSelect1">
                                        <option >Chưa có giáo viên phụ trách</option>
                                        {listTeacher}

                                    </select>
                                    <Form.Control.Feedback type="invalid">
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                        </Form>

                    </Row>
                </Container>
            </Modal.Body >
            <Modal.Footer>
                <Button variant="success " onClick={() => {
                    props.handleClose()
                    handleSubmit()
                }}>
                    {props.type ? "Thêm lớp học" : "Chỉnh sửa lớp học"}

                </Button>
                <Button variant="secondary" onClick={props.handleClose}>
                    Đóng
                </Button>
            </Modal.Footer>
        </Modal >
    )
}
export default function ManageClass(props) {
    const location = useLocation()
    const dispatch = useDispatch()
    const classState = useSelector((state) => state.classState)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [type, setType] = useState(true)
    const [showModelInit, setShowModelInit] = useState(false);
    const handleCloseModelInit = () => setShowModelInit(false);
    const handleShowModelInit = () => setShowModelInit(true);
    const [item, setItem] = useState(location.state)
    const [itemClass, setItemClass] = useState({})
    useEffect(() => {
        dispatch(actions.getClassByIdCourse({ idCourse: item.id }))
    }, [])
    let listClass
    if (classState.listClass) {

        if (classState.listClass.data) {

            listClass = classState.listClass.data.map((itemCla, key) => {
                return (
                    <tr key={key}>
                        <td>{itemCla.id}</td>
                        <td>{itemCla.title}</td>
                        <td>{itemCla.location}</td>
                        <td>{itemCla.teacher != null ? itemCla.teacher.name : "chưa có"}</td>
                        <td>{itemCla.teacher != null ? itemCla.teacher.avatar : "chưa có"}</td>
                        <td>{itemCla.time_start}</td>
                        <td>{itemCla.time_end}</td>
                        <td><a onClick={() => {
                            setItemClass(() =>
                                itemCla.teacher != null ?
                                    {
                                        avatar: itemCla.avatar,
                                        content: itemCla.content,
                                        id: itemCla.id,
                                        location: itemCla.location,
                                        state: itemCla.state,
                                        time_end: itemCla.time_end,
                                        time_start: itemCla.time_start,
                                        title: itemCla.title,
                                        id_teacher: itemCla.teacher.id
                                    }
                                    :
                                    {
                                        avatar: itemCla.avatar,
                                        content: itemCla.content,
                                        id: itemCla.id,
                                        location: itemCla.location,
                                        state: itemCla.state,
                                        time_end: itemCla.time_end,
                                        time_start: itemCla.time_start,
                                        title: itemCla.title,
                                        id_teacher: null
                                    }
                            )
                            handleShowModelInit()
                            setType(false)
                        }}><BoxArrowUpRight /></a></td>
                        <td><a onClick={handleShow}><Trash /></a></td>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Body><h3>Xác nhận xóa</h3></Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={() => {
                                    handleClose()
                                    dispatch(actions.deleteClass({ ...itemCla, idCourse: item.id }))
                                }}>
                                    Đồng ý
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

    }
    return (
        <div style={{ paddingTop: "2%", color: "" }}>
            <Container>
                <Row></Row>
                <Row>
                    <Col xs={3} style={{}}><MenuAdmin /></Col>
                    <Col>
                        <h2 style={{ float: "left", color: "#cf4747" }}><strong>
                            Khóa học : {item.name_course}
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
                        <Button variant="outline-danger" ><a onClick={() => {
                            handleShowModelInit()
                            setItemClass({})
                            setType(true)
                        }}>Thêm Lớp học</a></Button>
                        <Table striped bordered hover size="sm" style={{ marginTop: "2%" }}>
                            <thead>
                                <tr>
                                    <th>Mã số</th>
                                    <th>Tên lớp học</th>
                                    <th>Địa điểm</th>
                                    <th>Tên giáo viên</th>
                                    <th>Số điện thoại</th>
                                    <th>Bắt đầu</th>
                                    <th>Kết thúc</th>
                                    <th> </th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {listClass}

                            </tbody>
                        </Table>
                    </Col>

                </Row>
                <ModelClass itemCourse={item} setItemClass={setItemClass} itemClass={itemClass} type={type} show={showModelInit} handleClose={handleCloseModelInit} />
            </Container>
        </div>
    )
}