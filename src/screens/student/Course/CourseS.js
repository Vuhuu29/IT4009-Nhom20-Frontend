import React, {Component} from 'react'
import {Button, Modal, Tab, Tabs} from "react-bootstrap";

import'../../../style/css/student/screen_student.css'
class CourseS extends Component{
    state={
        student: "",
        show: false,
        show1:false
    }
    handleClose1 = e =>{
        this.setState({show1:false})
    };
    handleClose = e =>{
        this.setState({show:false})
    };
    handleShow = e =>{
        this.setState({show:true})
    };

    setStudent = async() =>{
            const get = await fetch(`http://localhost:8080/student/${localStorage.getItem("UserId")}`, {
                method: "GET",

                headers: {
                    "Content-type": "application/json",
                    "Token":localStorage.getItem("token")
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    this.setState({student:data});
                    console.log("data_student......",data);
                })
                .catch((error) => {

                })
    };
    Dangky = async () => {
        const change = await fetch(`http://localhost:8080/student/class}` ,{
            method:"POST",

            headers:{
                "Content-type": "application/json",
                "Token":localStorage.getItem("token")
            },
            body:
                JSON.stringify({
                    id_student: this.state.student.id,
                    id_class:this.props.id,
                    state:"Đã thanh toán"
                })
        })
            .then((res) => res.json())
            .catch((error) => {

            })
    };
    handleDangky = async() =>{
        await this.setStudent()
        await this.Dangky()
        this.setState({
          show:false,
          show1:true})

    };
    render(){

        const { name_course,id, about,fee,time_start, time_end, Thongtinkhoahoc}=this.props;

        return (
            <div className="Courses">
                <div id="slide-course">

                    <div id="courses_banner" className="banner"></div>

                    <div className="course_brief">
                        <div className="CourseName">
                            <h1>{name_course}</h1>
                        </div>
                        <div className="BriefMain">
                            <div className="BriefContent col-md-5 brief">
                                <p>{about}</p>
                            </div>
                            <div className="BriefInf col-md-4 brief">
                                <div className="InforItem">
                                    <span className="float-left">Học phí</span>
                                    <span className="float-right">{fee}VND</span>
                                </div>
                                <div className="InforItem">
                                    <span className="float-left">Mã khóa học</span>
                                    <span className="float-right">{id}</span>
                                </div>
                                <div className="InforItem">
                                    <span className="float-left">Thời gian</span>
                                    <span className="float-right">{time_start} - {time_end}</span>
                                </div>
                            </div>
                            <div className="BriefStatus col-md-2 brief">
                                <Button variant="outline-info" onClick={this.handleShow}>
                                    Đăng ký ngay
                                </Button>{' '}

                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Đăng ký lớp học</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>
                                            <p><strong>Bạn có chắc chắn muốn đăng ký khóa học này?</strong></p>
                                            <p>Nếu có hãy nhấn Đăng ký và làm theo hướng dẫn sau:</p>
                                            <p>Chuyển học phí khóa học vào tài khoản: <br/> <strong>01234578905423 - Ngân hàng TechComeBank </strong><br/>  Trường học DreamDo</p>
                                            <p>Sau khi nhấn Đăng ký, đơn xin học của bé sẽ được gửi đến cơ sở dữ liệu của trường, nhà trường sẽ liên hệ lại bạn trong vòng 24 giờ</p>
                                            <p>Nếu có thắc mắc liên hệ số điện thoại: <br/> 0845591201 - Thầy Đạt đẹp zai </p>
                                        </div>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose}>
                                            Đóng
                                        </Button>
                                        <Button variant="primary" onClick={this.handleDangky} >
                                            Đăng ký
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <Modal show={this.state.show1} onHide={this.handleClose1}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Thông báo</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>
                                            <p>Đơn đăng ký của bé đã được gửi đến cơ sở dữ liệu của trường, nhà trường sẽ liên hệ lại bạn trong vòng 24 giờ</p>
                                            <p>Nếu có thắc mắc liên hệ số điện thoại: <br/> 0845591201 - Thầy Đạt đẹp zai </p>
                                        </div>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose1}>
                                            Đóng
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                            </div>

                        </div>
                    </div>
                </div>

                <div id="content">
                    <Tabs defaultActiveKey="ThongtinKhoahoc" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="ThongtinKhoahoc" title="Thông tin khóa học">
                            {Thongtinkhoahoc}
                        </Tab>
                        <Tab eventKey="Thongtincaclophoc" title="Thongtincaclophoc">

                        </Tab>
                    </Tabs>


                </div>

            </div>
        );
    }
}
export default CourseS;