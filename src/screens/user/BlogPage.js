import React, { useState } from 'react'
import'../../style/css/menu/screen_user_BlogPage.css'
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"
import slidedreamdo from './imageBlog/slidedreamdo.png'
import anhnews2 from './imageBlog/anhnews2.png'
import anhnews3 from './imageBlog/anhnews3.png'
import anhnews4 from './imageBlog/anhnews4.jpg'
import anhnews5 from './imageBlog/anhnews5.png'
import anhnews6 from './imageBlog/anhnews6.jpg'
import s1 from'./imageBlog/blob.jpg'
import Footer from '../Footer'
export default function BlogPage(params) {
    return (
        <div className="Blog">
            <div id="slide"></div>
            <div id="sli-con"></div>
            <div id="content">
                <div className="card content_news" id="first_new" >
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={s1} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <a href="" className="card-title">CHÍNH SÁCH BẢO LƯU CÁC CHƯƠNG TRÌNH CỦA DREAM&DO (đã cập nhật trong bối cảnh COVID 19)</a>
                                <p className="card-sub">11/1/2020</p>
                                <p className="card-text">Tổng hợp chính sách bảo lưu của các chương trình Dream&Do 2020: chính sách bảo lưu khóa học Survival Kid và các trại hè Survival Camp, Green Leaders Camp, Vietnam...</p>
                                <p className="card-text"><a href="">Xem tiếp</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card content_news" >
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={anhnews2} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <a href="" className="card-title">[THÔNG BÁO] Lịch tổ chức MỚI NHẤT các chương trình Trại hè 2021</a>
                                <p className="card-sub">26/06/2021</p>
                                <p className="card-text">Dựa theo những điều chỉnh gần đây nhất của Sở GD ĐT Hà Nội liên quan tới thời gian nghỉ hè năm học 2020 - 2021, để đảm bảo việc...</p>
                                <p className="card-text"><a href="">Xem tiếp</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card content_news" >
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={anhnews3} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <a href="" className="card-title">[THÔNG BÁO] Lịch tổ chức MỚI các chương trình Trại hè 2021</a>
                                <p className="card-sub">18/05/2021</p>
                                <p className="card-text">Dựa theo những điều chỉnh gần đây nhất của Sở GD ĐT Hà Nội liên quan tới thời gian nghỉ hè năm học 2020 - 2021, để đảm bảo việc...</p>
                                <p className="card-text"><a href="">Xem tiếp</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card content_news" >
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={anhnews4} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <a href="" className="card-title">GIẢI THÍCH VỀ GÓI BẢO HIỂM DU LỊCH ĐANG ÁP DỤNG</a>
                                <p className="card-sub">18/01/2020</p>
                                <p className="card-text">Tổng hợp những thông tin về bảo hiểm du lịch của Dream&Do 2020: về quyền lợi bảo hiểm, mức phí, phạm vi bảo hiểm, các thủ tục, hồ sơ,......</p>
                                <p className="card-text"><a href="">Xem tiếp...</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card content_news" >
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={anhnews5} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <a href="" className="card-title">HỎI VÀ ĐÁP CHƯƠNG TRÌNH DU HỌC HÈ GREEN CAMP BALI – 2020</a>
                                <p className="card-sub">11/1/2020</p>
                                <p className="card-text">Quý phụ huynh thân mến, hẳn các bậc làm cha mẹ đã gặp khá nhiều thắc mắc về khóa học SurvivalKid của trường ngoại khóa phát triển kỹ năng và...</p>
                                <p className="card-text"><a href="">Xem tiếp</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card content_news" >
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={anhnews6} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <a href="" className="card-title">CHÍNH SÁCH BẢO LƯU CHƯƠNG TRÌNH TRAVEL&LEARN</a>
                                <p className="card-sub">11/1/2020</p>
                                <p className="card-text">Chính sách bảo lưu các chương trình Travel&Learn của Dream&Do...</p>
                                <p className="card-text"><a href="">Xem tiếp</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}