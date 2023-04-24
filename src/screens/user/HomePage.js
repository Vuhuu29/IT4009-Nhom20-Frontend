
import React, { useState, useEffect } from 'react';
import {
  Carousel, Container, Col, Row, Image, Card, Button, Alert, Navbar,Modal
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
function MyVerticallyCenteredModal(props) {
 const history = useHistory()
 const routerHandle=()=>{
   history.push("/course")
 }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <img onClick={routerHandle}  class="aligncenter wp-image-13112 size-full td-animation-stack-type2-2" src="https://blog.hocmai.vn/wp-content/uploads/2017/05/banner-li.png" alt="banner-li" width="100%"  srcset="https://blog.hocmai.vn/wp-content/uploads/2017/05/banner-li.png 1200w, https://blog.hocmai.vn/wp-content/uploads/2017/05/banner-li-300x157.png 300w, https://blog.hocmai.vn/wp-content/uploads/2017/05/banner-li-696x364.png 696w, https://blog.hocmai.vn/wp-content/uploads/2017/05/banner-li-1068x559.png 1068w, https://blog.hocmai.vn/wp-content/uploads/2017/05/banner-li-803x420.png 803w" sizes="(max-width: 1200px) 100vw, 1200px"/>
      </Modal.Body>
    </Modal>
  );
}
export default function HomePage(params) {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(()=>{
    setModalShow(true)
  },[])
  return (
    <div >
      <Carousel style={{ marginTop: "3%", backgroundColor: "#fdeeee" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./homepage1.jpg"
            alt="First slide"
            width="100%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./homepage2.png"
            alt="Second slide"
            width="100%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./homepage3.png"
            alt="Third slide"
            width="100%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./homepage4.png"
            alt="Third slide"
            width="100%"
          />
        </Carousel.Item>
      </Carousel>

      <div style={{
        paddingLeft: "6%", paddingRight: "6%",
        backgroundColor: "#fdeeee"
      }}>
        <Container style={{ paddingTop: "2%" }}>
          <Row style={{ backgroundImage: "url('./homepageintro1.png')" }}>
            <Col xs={6}>
            </Col>
            <Col xs={3} style={{ backgroundColor: "#c1e1dc", opacity: "0.92" }}>
              <h5 style={{ color: "#020202", paddingTop: "16%" }}>LEADERSHIP – TINH THẦN LÃNH ĐẠO
                LỘ TRÌNH PHÁT TRIỂN CỦA HỌC SINH DREAM&DO
              </h5>
              <h6 style={{ color: "#020202", paddingTop: "4%", paddingBottom: "16%" }}>
                Dựa trên một bộ khung phát triển năng lực dành cho học sinh từ 5 – 18 tuổi, Dream&Do trở thành đơn vị giáo dục ngoại khóa đầu tiên tại Việt Nam có khả năng cung cấp các phẩm giáo dục có tính kế thừa và tiếp nối từ K – 12.
              </h6>
            </Col>
            <Col xs={3} style={{ backgroundColor: "#fdd475", opacity: "0.92" }}>
              <h5 style={{ color: "#020202", paddingTop: "16%" }}>
                GRIT – BẢN LĨNH VƯƠN RA THẾ GIỚI
              </h5>
              <h6 style={{ color: "#020202", paddingTop: "4%", paddingBottom: "16%" }}>
                Con sẽ được trang bị những kỹ năng cần thiết của thế kỷ 21 và cả những tư duy toàn cầu để đủ bản lĩnh vươn ra thế giới.
              </h6>
            </Col>
          </Row >
          <Row style={{ paddingTop: "0", backgroundImage: "url('./homepageintro2.png')" }}>
            <Col xs={3} style={{ backgroundColor: "#c1e1dc", opacity: "0.92" }}>
              <h5 style={{ color: "#020202", paddingTop: "16%" }}>
                CHARACTERISTICS – XÂY DỰNG PHẨM CHẤT
              </h5>
              <h6 style={{ color: "#020202", paddingTop: "4%", paddingBottom: "16%" }}>
                Xây dựng giá trị sống nhân văn và phổ quát, giúp học sinh trở thành những công dân tích cực, có khả năng giải quyết những vấn đề của xã hội.
              </h6>
            </Col>
            <Col xs={3} style={{ backgroundColor: "#fdd475", opacity: "0.92" }}>
              <h5 style={{ color: "#020202", paddingTop: "16%" }}>LEADERSHIP – TINH THẦN LÃNH ĐẠO
                PHÁT TRIỂN BỀN VỮNG
              </h5>
              <h6 style={{ color: "#020202", paddingTop: "4%", paddingBottom: "16%" }}>
                Dream&Do thúc đẩy những sáng kiến vì một lương lai phát triển bền vững qua giáo dục về nhận thức sinh thái – ecology literature.
              </h6>
            </Col>
            <Col xs={6}></Col>
          </Row>


          <Row style={{ paddingTop: "2%", paddingBottom: "2%" }}>
            <Navbar style={{ borderTop: "solid", borderBottom: "solid" }}>
              <Container>
                <Navbar.Brand href="blog"><h3>TIN TỨC & SỰ KIỆN</h3></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text style={{ paddingRight: "2%" }}>
                    TIN TUYỂN SINH
                  </Navbar.Text>
                  <Navbar.Text style={{ paddingRight: "2%" }}>
                    TRẠI HÈ & TRẠI ĐÔNG
                  </Navbar.Text>
                  <Navbar.Text style={{ paddingRight: "2%" }}>
                    SỰ KIỆN KHÁC
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Row>

          <Row paddingTop="2%">
            <Col xs={0.1}></Col>
            <Col xs={8} style={{ paddingRight: "0", paddingLeft: "0" }}>
              <Image src="./khoahoc1.png"
                width="100%" height="400px" rounded />
            </Col>
            <Col style={{ backgroundColor: "#c1e1dc", color: "#020202" }} xs={4}>
              <Row>
                <h5 style={{ padding: "6%", color: "#212529" }}>CHÍNH SÁCH BẢO LƯU CÁC CHƯƠNG TRÌNH CỦA DREAM&DO (đã cập nhật trong bối cảnh COVID 19)</h5>
              </Row>
              <Row>
                <p style={{ textAlign: "left", paddingLeft: "5%", paddingRight: "5%", paddingBottom: "5%" }}>Tổng hợp chính sách bảo lưu của các chương trình Dream&Do 2020: chính sách bảo lưu khóa học Survival Kid và các trại hè Survival Camp, Green Leaders Camp, Vietnam......</p>
              </Row>

            </Col>
            <Col xs={0.2}></Col>
          </Row>


          <Row style={{ paddingTop: "3%" }}>
            <h2 style={{
              borderTop: "solid", borderBottom: "solid", borderColor: "#808080", borderBottomColor: "#808080",
              color: "#24292d", paddingTop: "1%", paddingBottom: "1%"
            }}>
              BLOG
            </h2>
          </Row>
          <Row style={{ paddingTop: "2%" }}>
            <Col xs={3}>
              <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src={"./thumbblog1.jpg"}
                  width="200px" height="200px" />
                <Card.Body>
                  <Card.Title>Cha mẹ và thầy cô cần quan tâm điều gì khi học sinh sắp “đi học” trở lại?</Card.Title>
                  <Card.Text>
                    Đại dịch đã khiến hàng trăm triệu trẻ em không thể đến trường trên khắp thế giới. Nhưng ở Mỹ, lần đầu tiên sau 18 tháng đại dịch, học sinh ở nhiều nơi được cho...
                  </Card.Text>
                  <Button variant="primary">Xem thêm</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3}>
              <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src={"./khoahoc1.png"}
                  width="200px" height="200px" />
                <Card.Body>
                  <Card.Title>HỎI VÀ ĐÁP CHƯƠNG TRÌNH DU HỌC HÈ GREEN CAMP BALI – 2020</Card.Title>
                  <Card.Text>
                    Quý phụ huynh thân mến, hẳn các bậc làm cha mẹ đã gặp khá nhiều thắc mắc về khóa học SurvivalKid của trường ngoại khóa phát triển kỹ năng và...
                  </Card.Text>
                  <Button variant="primary">Xem thêm</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3}>
              <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src={"./thumbblog1.jpg"}
                  width="200px" height="200px" />
                <Card.Body>
                  <Card.Title>CHÍNH SÁCH BẢO LƯU CHƯƠNG TRÌNH TRAVEL&LEARN</Card.Title>
                  <Card.Text>
                    Chính sách bảo lưu các chương trình Travel&Learn của Dream&Do..: chính sách bảo lưu khóa học Survival Kid và các trại hè Survival Camp, Green Leaders Camp, Vietnam...
                  </Card.Text>
                  <Button variant="primary">Xem thêm</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3}>
              <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src={"./san-pham-giao-duc1.jpg"}
                  width="200px" height="200px" />
                <Card.Body>
                  <Card.Title>Cha mẹ và thầy cô cần quan tâm điều gì khi học sinh sắp “đi học” trở lại?</Card.Title>
                  <Card.Text>
                    Đại dịch đã khiến hàng trăm triệu trẻ em không thể đến trường trên khắp thế giới. Nhưng ở Mỹ, lần đầu tiên sau 18 tháng đại dịch, học sinh ở nhiều nơi được cho...
                  </Card.Text>
                  <Button variant="primary">Xem thêm</Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>
          <Row style={{ paddingTop: "3%" }}>
            <h2 style={{
              borderTop: "solid", borderBottom: "solid", borderColor: "#808080", borderBottomColor: "#808080",
              color: "#24292d", paddingTop: "1%", paddingBottom: "1%"
            }}>
              SẢN PHẨM GIÁO DỤC
            </h2>
            <Carousel style={{ paddingTop: "3%", color: "#524e4e" }}>
              <Carousel.Item>
                <Container style={{ paddingBottom: "5%", textAlign: "left" }}>
                  <Row style={{ backgroundImage: "url('./san-pham-giao-duc1.jpg')" }}>
                    <Col xs={6}></Col>
                    <Col xs={6} style={{ paddingLeft: "4%", paddingTop: "2%", backgroundColor: "#c1e1dc", opacity: "0.92" }}>
                      <h3>
                        Vietnam International Peace Camp – Trại hè Tiếng Anh và Kỹ năng Quốc tế
                      </h3>
                      <span >
                        Trại hè quốc tế PEACE CAMP giúp học sinh 9-14 tuổi có sự chuẩn bị tốt nhất trước khi bước vào cánh cửa du học, là nơi giúp các trại sinh khám phá bản thân, vượt qua những rào cản ngôn ngữ hay sự thiếu tự tin để dễ dàng hòa nhập vào một môi trường đa văn hóa trong tương lai.
                      </span>
                      <p style={{ marginBottom: "0.5%", marginTop: "4%" }}><strong>Phân loại</strong>: Trại hè trong nước</p>
                      <p style={{ marginBottom: "0.5%" }}><strong>Độ tuổi</strong>: 9 - 14</p>
                      <p style={{ marginBottom: "0.5%" }}><strong>Thời gian</strong>: 31/05/2020 – 22/06/2020</p>
                      <p style={{ marginBottom: "0.5%" }}><strong>Địa điểm</strong>: Bavi Family Resort, Ba Vì, Hà Nội</p>
                      <p style={{ marginBottom: "7%" }}><strong>Chi phí</strong>: 18.400.000 <span class="woocommerce-Price-currencySymbol">₫</span></p>
                      <Button variant="danger" style={{ marginBottom: "11%", marginLeft: "12%" }}>
                        Xem thêm
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>

              <Carousel.Item>
                <Container style={{ paddingBottom: "5%", textAlign: "left" }}>
                  <Row style={{ backgroundImage: "url('./Untitled222.png')" }}>
                    <Col xs={6}></Col>
                    <Col xs={6} style={{ paddingLeft: "4%", paddingTop: "2%", backgroundColor: "#c1e1dc", opacity: "0.92" }}>
                      <h3>
                        Vietnam International Peace Camp – Trại hè Tiếng Anh và Kỹ năng Quốc tế
                      </h3>
                      <span >
                        GREEN LEADERS CAMP  là mô hình trại hè nội trú tiên phong tại Việt Nam dành cho học sinh từ 11 -15 tuổi được phát triển bởi Dream&Do kể từ năm 2019 và nhận được sự ủng hộ lớn từ phụ huynh, học sinh. Đây là trại hè duy nhất tại Việt Nam phát triển năng lực LEADERSHIP thông qua KHAI MỞ nhận thức các vấn đề MÔI TRƯỜNG & KHÍ HẬU TOÀN CẦU…
                      </span>
                      <p style={{ marginBottom: "0.5%", marginTop: "4%" }}><strong>Phân loại</strong>: Trại hè trong nước</p>
                      <p style={{ marginBottom: "0.5%" }}><strong>Độ tuổi</strong>: 11 -14</p>
                      <p style={{ marginBottom: "0.5%" }}><strong>Thời gian</strong>: Camp 1: Dream&Do Happy Farm 14/06/2021 – 20/6/2021 – Camp 2: Đà Lạt – VQG Bidoup 07/07/2020 – 14/7/2021</p>
                      <p style={{ marginBottom: "0.5%" }}><strong>Địa điểm</strong>: Hà Nội & Đà Lạt</p>
                      <p style={{ marginBottom: "7%" }}><strong>Chi phí</strong>: 18.900.000 <span class="woocommerce-Price-currencySymbol">₫</span></p>
                      <Button variant="danger" style={{ marginBottom: "11%", marginLeft: "12%" }}>
                        Xem thêm
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>

              <Carousel.Item>
                <Container style={{ paddingBottom: "5%", textAlign: "left" }}>
                  <Row style={{ backgroundImage: "url('./homepage2.png')" }}>
                    <Col xs={6}></Col>
                    <Col xs={6} style={{ paddingLeft: "4%", paddingTop: "2%", backgroundColor: "#c1e1dc", opacity: "0.92" }}>
                      <h3>
                        Trại hè nội trú SURVIVAL CAMP 2021
                      </h3>
                      <span >
                        Survival Camp là mô hình trại hè nội trú tiên phong tại Việt Nam dành cho học sinh từ 7-12 tuổi được phát triển bởi Dream&Do kể từ năm 2017. Survival Camp được ví như một bước khởi đầu trong hành trình trang bị những kỹ năng sống cần thiết, sự TỰ LẬP, TỰ TIN và BẢN LĨNH cho con trong thế kỷ 21.
                      </span>
                      <p style={{ marginBottom: "0.5%", marginTop: "4%" }}><strong>Phân loại</strong>: Trại hè trong nước</p>
                      <p style={{ marginBottom: "0.5%" }}><strong>Độ tuổi</strong>: 7 - 12</p>
                      <p style={{ marginBottom: "0.5%" }}><strong>Thời gian</strong>: Đợt 1: 29/5 – 03/6 – Đợt 2: 29/6 – 4/7
                      </p>
                      <p style={{ marginBottom: "0.5%" }}><strong>Địa điểm</strong>: Khu bảo tồn làng nhà sàn Thái Hải - Thái Nguyên</p>
                      <p style={{ marginBottom: "7%" }}><strong>Chi phí</strong>: 7.900.000  <span class="woocommerce-Price-currencySymbol">₫</span></p>
                      <Button variant="danger" style={{ marginBottom: "11%", marginLeft: "12%" }}>
                        Xem thêm
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Row>

          <Row style={{ paddingTop: "2%", paddingBottom: "4%" }}>
            <h2 style={{ borderTop: "solid", borderBottom: "solid", borderColor: "#808080", color: "#24292d", paddingTop: "1%", paddingBottom: "1%" }}>
              CẢM NHẬN TỪ PHỤ HUYNH
            </h2>
            <Carousel style={{ paddingTop: "3%", color: "#524e4e" }}>
              <Carousel.Item>
                <Container style={{ paddingBottom: "5%" }}>
                  <Row >
                    <Col xs={1}></Col>
                    <Col xs={3}>
                      <Image src={"./cam-nhan-phu-huynh1.jpg"}
                        width="300rem" height="300rem" roundedCircle />
                    </Col>
                    <Col xs={7} style={{ paddingLeft: "4%", paddingTop: "2%" }}>
                      <p><em>Thế là đã kết thúc 1 tuần trại hè xa nhà, bạn nào về cũng đen nhẻm, luyến thoắng kể chuyện, nói vừa nhanh vừa vấp kiểu như sợ ko nói nhanh thì ko kịp những thứ hay ho thú vị đã làm được trong chừng ấy ngày
                      </em></p>
                      <h5>MC Minh Trang </h5>
                      <p>Phụ huynh bạn Daisy - Học viên Trại hè Survival Camp 2019</p>
                    </Col>
                    <Col xs={1}></Col>
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <Container style={{ paddingBottom: "5%" }}>
                  <Row >
                    <Col xs={1}></Col>
                    <Col xs={3}>
                      <Image src="./cam-nhan-phu-huynh2.jpg"
                        width="300rem" height="300rem" roundedCircle />
                    </Col>
                    <Col xs={7} style={{ paddingLeft: "4%", paddingTop: "2%" }}>
                      <p><em>"Trại năm ngoái mang lại cho Thỏ rất nhiều cảm xúc và chị thực sự bất ngờ với cách Dream&Do có thể làm cho bọn trẻ có được nhiều cảm xúc như thế"
                      </em></p>
                      <h5>Chị Lê Nguyệt </h5>
                      <p>Phụ huynh bạn Nguyệt Linh - Học viên Trại hè International Peace Camp 2019</p>
                    </Col>
                    <Col xs={1}></Col>
                  </Row>
                </Container>
              </Carousel.Item>

              <Carousel.Item>
                <Container style={{ paddingBottom: "5%" }}>
                  <Row >
                    <Col xs={1}></Col>
                    <Col xs={3}>
                      <Image src="./cam-nhan-phu-huynh3.jpg"
                        width="300rem" height="300rem" roundedCircle />
                    </Col>
                    <Col xs={7} style={{ paddingLeft: "4%", paddingTop: "2%" }}>
                      <p><em>"Mọi lời nói đều không bằng cảm xúc của con. Lần nào gọi điện cũng nhận thấy ở con sự hào hứng và vui vẻ. Cảm ơn Dream&Do đã xây dựng 1 chương trình rất thú vị với con."
                      </em></p>
                      <h5>Chị Huyền Phạm </h5>
                      <p>Phụ huynh bạn Hữu Khánh - Học viên Trại hè Survival Camp 2018</p>
                    </Col>
                    <Col xs={1}></Col>
                  </Row>
                </Container>
              </Carousel.Item>

              <Carousel.Item>
                <Container style={{ paddingBottom: "5%" }}>
                  <Row >
                    <Col xs={1}></Col>
                    <Col xs={3}>
                      <Image src="./cam-nhan-phu-huynh4.jpg"
                        width="300rem" height="300rem" roundedCircle />
                    </Col>
                    <Col xs={7} style={{ paddingLeft: "4%", paddingTop: "2%" }}>
                      <p><em>"Mình rất thích Dream&Do, các bạn ấy có tư duy giáo dục rất văn minh. Nếu bố mẹ nào muốn cho con đi một mình thì có thể hoàn toàn yên tâm tin tưởng."
                      </em></p>
                      <h5>Chị THU TRANG</h5>
                      <p>Phụ huynh bạn Khôi Nguyên - Học viên Trại hè Survival Camp 2017, 2018
                      </p>

                    </Col>
                    <Col xs={1}></Col>
                  </Row>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Row>

        </Container>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}