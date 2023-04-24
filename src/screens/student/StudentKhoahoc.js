import React, { Component } from "react";
import '../../style/css/student/screen_student.css'
import {useHistory} from 'react-router'
import { Col, Row } from 'react-bootstrap'
export default function StudentKhoahoc (params){
        const listClass = params.data;
        const history = useHistory();
        return (
            <div className="courselearned">
                <p className="titleKhoahoc"> ĐÃ THAM GIA</p>
                {listClass && listClass.map((data) => (
                    < Row >
                        <Col>
                            <div className="card-course" >
                                <div className="row no-gutters">
                                    <div className="col-md-5">
                                        <a
                                            onClick={() => {
                                                history.push({
                                                    pathname: '/class-',
                                                    search: data.title,
                                                    state: data
                                                })
                                            }} ><img src={data.avatar} className="card-img" /></a>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <a onClick={() => {
                                                history.push({
                                                    pathname: '/class-',
                                                    search: data.title,
                                                    state: data
                                                })
                                            }} className="card-title"><strong>{data.title}</strong></a>
                                            <p className="card-sub">Bắt đầu từ {data.time_start} đến {data.time_end}</p>
                                            <div className="card-text"><p>{data.content} </p> </div>
                                            <p className="read-more">
                                                <a
                                                    onClick={() => {
                                                        history.push({
                                                            pathname: '/class-',
                                                            search: data.title,
                                                            state: data
                                                        })
                                                    }}
                                                >Xem thông tin chi tiết ➤</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                ))}

            </div>
        );
    }