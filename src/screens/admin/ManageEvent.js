import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table, thead, Modal, tbody, tr, th, td, InputGroup, Button, FormControl
 } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import MenuAdmin from './MenuAdmin'
import { Trash, BoxArrowUpRight } from 'react-bootstrap-icons';
export default function ManageEvent(params) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div style ={{paddingTop: "2%", color: ""}}>
        <Container>
            <Row></Row>
          <Row>
            <Col xs={3} style={{}}><MenuAdmin /></Col>
            <Col>
            <h2 style={{float:"left", color:"#cf4747"}}><strong>
                QUẢN LÝ LỚP HỌC
            </strong></h2>
                <InputGroup className="mb-3" style={{width: "60%", paddingLeft: "15%"}}>
                    <FormControl
                      aria-label="Example text with button addon"
                      aria-describedby="basic-addon1"
                    />
                    <Button variant="outline-secondary" id="button-addon1">
                      Tìm kiếm
                    </Button>
                </InputGroup>
                <Button variant="outline-danger" ><a href="/create-event" >Thêm Lớp học</a></Button>
                <Table striped bordered hover size="sm" style={{marginTop: "2%"}}>
                  <thead>
                    <tr>
                      <th>Mã số</th>
                      <th>Tên lớp học</th>
                      <th>Giáo viên</th>
                      <th>Bắt đầu</th>
                      <th>Kết thúc</th>
                      <th>Trạng thái</th>
                      <th> </th>
                      <th> </th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td><a href="#"><BoxArrowUpRight /></a></td>
                      <td><a onClick={handleShow}><Trash /></a></td>
                    </tr>
                    
                  </tbody>
                </Table>
            </Col>
              <Modal show={show} onHide={handleClose}>
                    <Modal.Body><h3>Xác nhận xóa</h3></Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Đồng ý
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Đóng
                            </Button>
                            </Modal.Footer>
                </Modal>              
          </Row>
        </Container>
        </div>
    )
}