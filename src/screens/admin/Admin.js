import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table, Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import MenuAdmin from './MenuAdmin'
import { Trash, BoxArrowUpRight } from 'react-bootstrap-icons';
export default function Admin(params) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (

        <div style ={{paddingTop: "2%"}}>
        <Container>
          <Row>
            <Col xs={3} style={{}}><MenuAdmin /></Col>
            <Col>
                <Row>
                    <Col>
                        <div style={{height: "10rem", backgroundColor: "#d78383"}}>
                            <h4 style ={{padding:"5%", color: "#3a3131"}}>
                                Tổng số học sinh:
                            </h4>
                            <h4><strong>6</strong></h4>
                        </div>
                    </Col>
                    <Col>
                        <div style={{height: "10rem", backgroundColor: "#969ded"}}>
                            <h4 style ={{padding:"5%", color: "#3a3131"}}>
                                Tổng số giáo viên:
                            </h4>
                            <h4><strong>6</strong></h4>
                        </div>
                    </Col>
                    <Col>
                        <div style={{height: "10rem", backgroundColor: "#4ca6af", marginRight: "1rem"}}>
                            <h4 style ={{padding:"5%", color: "#3a3131"}}>
                                Tổng số khóa học:
                            </h4>
                            <h4><strong>6</strong></h4>
                        </div>
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
            </Col>
          </Row>
        </Container>
        </div>
    )
}