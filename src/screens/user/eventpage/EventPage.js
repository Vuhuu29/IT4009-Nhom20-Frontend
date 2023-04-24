import React, { useEffect, useState } from 'react'
import '../../../style/css/menu/eventpage.css'
import anhnews2 from './image/anhnews2.png'
import anhnews3 from './image/anhnews3.png'
import anhnews4 from './image/anhnews4.jpg'
import anhnews5 from './image/anhnews5.png'
import anhnews6 from './image/anhnews6.jpg'
import Footer from '../../Footer'
import s1 from './image/blob.jpg'
import { Carousel,Nav } from 'react-bootstrap'
const Navbar = () => {
    return (
        <Nav justify variant="tabs" defaultActiveKey="/eventpage" style={{backgroundColor: '#fa9695'}} >
            <Nav.Item>
                <Nav.Link href="/event" style={{color: 'black'}}>Tất cả</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/event" style={{color: 'black'}}>Trại hè/Trại đông</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/event" style={{color: 'black'}}>Đang tuyển sinh</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default function EventPage(params) {
    const [path, setPath] = useState()
    useEffect(() => {
        setPath(window.location.pathname)
        console.log("path", path);
    })

    return (
        <div className="eventpage">
            <Carousel className="slide" style={{ marginTop: "3%", backgroundColor: "#fdeeee" }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./homepage1.jpg"
                        alt="First slide"

                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./homepage2.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./homepage3.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./homepage4.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div><Navbar className= "navbar"/></div>
            <div id="content">
                <div className="card content_news" id="first_new" >
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <a href="post"><img src={s1} className="card-img" alt="..." /></a>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <a href="post" className="card-title">CHÍNH SÁCH BẢO LƯU CÁC CHƯƠNG TRÌNH CỦA DREAM&DO (đã cập nhật trong bối cảnh COVID 19)</a>
                                <p className="card-sub">11/1/2020</p>
                                <p className="card-text">Tổng hợp chính sách bảo lưu của các chương trình Dream&Do 2020: chính sách bảo lưu khóa học Survival Kid và các trại hè Survival Camp, Green Leaders Camp, Vietnam...</p>
                                <p className="card-text"><a href="post">Xem tiếp</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card content_news" >
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={anhnews2} className="card-img" alt="..." />
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
                            <img src={anhnews3} className="card-img" alt="..." />
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
                            <img src={anhnews4} className="card-img" alt="..." />
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
                            <img src={anhnews5} className="card-img" alt="..." />
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
                            <img src={anhnews6} className="card-img" alt="..." />
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