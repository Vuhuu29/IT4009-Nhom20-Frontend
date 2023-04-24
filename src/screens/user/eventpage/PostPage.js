import React, { useEffect, useState } from 'react'
import Slider from '../HomePage'
import Nav from './EventPage'
import '../../../style/css/menu/post.css'
import { Carousel } from 'react-bootstrap'
import Footer from '../../Footer'
export default function PostPage(params) {
    const [path, setPath] = useState()
    useEffect(() => {
        setPath(window.location.pathname)
        console.log("path", path);
    })
    return (
        <div className="postpage">
            <Carousel className="slide" style={{marginTop: "3%", backgroundColor: "#fdeeee"}}>
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
            <nav class="dd-top-nav">
                <div class="container">
                    <ul class="nav">
                        <li class="nav-item"><a class="nav-link" href="">Tất cả</a></li>
                        <li class="nav-item"><a class="nav-link" href="">Trại hè/Trại đông</a></li>
                        <li class="nav-item"><a class="nav-link" href="">Đang tuyển sinh</a></li>
                        <li class="nav-item"><a class="nav-link" href="">Tuyển dụng</a></li>
                    </ul>
                </div>
            </nav>
            <div id="content">
                <h2 className="post-title" style={{ fontSize: '24px', fontWeight: 'bold' }}>CHÍNH SÁCH BẢO LƯU CÁC CHƯƠNG TRÌNH CỦA DREAM&DO (đã cập nhật trong bối cảnh COVID 19) </h2>
                <div className="post-body">
                    <p>Cập nhật chính sách bảo lưu 2020-2021: Sự xuất hiện của dịch bệnh COVID 19</p>
                    <p>Cập nhật chính sách bảo lưu 2020-2021: Sự xuất hiện của dịch bệnh COVID 19

                        Kể từ khi dịch bệnh Covid 19 bùng phát, các chương trình của Dream&Do cũng phải đối mặt nhiều hơn với các rủi ro phải tạm hoãn, ngưng tổ chức trong bất cứ thời điểm nào. Trong bối cảnh mang tính chất BẤT KHẢ KHÁNG của dịch bệnh, phụ huynh có thể lựa chọn 1 trong 2 chính sách BẢO LƯU hoặc HOÀN TRẢ như sau:</p>
                    <p><strong>PHẦN 1: QUY TRÌNH BẢO LƯU</strong></p>
                    <p>
                        <strong>Bước 1: </strong>
                        Khách hàng gửi email tới bộ phận CSKH của Trường Dream&Do theo địa chỉ tuyensinh@dreamdo.edu.vn
                    </p>
                    <p>
                        <strong>Bước 2: </strong>
                        Bộ phận CSKH của Dream&Do gửi email xác nhận thông tin về số tiền mà khách hàng sẽ được bảo lưu kèm thời hạn và các quy định liên quan nếu có.
                    </p>
                    <p><strong>PHẦN 2: QUY ĐỊNH VỀ HỦY DỊCH VỤ VÀ BẢO LƯU DỊCH VỤ:</strong></p>
                    <p>
                            1. CHÍNH SÁCH BẢO LƯU CỦA CÁC CHƯƠNG TRÌNH TRẠI HÈ TRONG NƯỚC: SURVIVAL CAMP, GREEN LEADERS CAMP, TRẠI HÈ QUỐC TẾ PEACE CAMP.<br />
                        <span>➤Thông tin chi tiết </span>
                        <a href="" style={{ color: 'red', fontWeight: '500'}}>TẠI ĐÂY</a>
                    </p>
                    <p>
                        
                            2. KHÓA HỌC KỸ NĂNG SỐNG SURVIVAL KID<br />
                            2.1. CHÍNH SÁCH BẢO LƯU KHOÁ HỌC KỸ NĂNG SỐNG SURVIVAL KID KỲ HỌC MÙA HÈ <br/>
                        <span>➤Thông tin chi tiết </span>
                        <a href="" style={{ color: 'red', fontWeight: '500' }}>TẠI ĐÂY</a> <br/>
                        2.2. CHÍNH SÁCH BẢO LƯU CHO KHÁCH HÀNG ĐĂNG KÝ KHOÁ HỌC KỸ NĂNG SỐNG SURVIVAL KID – MÙA THƯỜNG ( XUÂN, THU, ĐÔNG) <br/>
                        <span>➤Thông tin chi tiết </span>
                        <a href="" style={{ color: 'red', fontWeight: '500' }}>TẠI ĐÂY</a> <br/>
                    </p>
                    <p>
                        3. CHÍNH SÁCH BẢO LƯU CÁC CHƯƠNG TRÌNH TRAVEL&LEARN.<br />
                        <span>➤Thông tin chi tiết </span>
                        <a href="" style={{ color: 'red', fontWeight: '500' }}>TẠI ĐÂY</a>
                    </p>
                    <p>
                    Mọi thắc mắc về nội dung chương trình, quý phụ huynh vui lòng liên hệ tới số <strong>Hotline: 0763 270116</strong>.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}