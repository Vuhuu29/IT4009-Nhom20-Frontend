import React, { useState } from 'react';
import { Image, Tab, Container, Row, Col, Tabs
 } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function tienTrinhPhatTrien(params) {
    return (
        <div style={{paddingRight: "6%", paddingLeft: "6%",color: "#000", textAlign: "left"}}>
        <div style={{backgroundColor:"#fdeeee"}}>
        <p >Bằng những hiểu biết và kinh nghiệm của mình trong lĩnh vực tâm lý học, giáo dục học và các chủ đề Kỹ năng thế kỷ 21, chúng tôi xây dựng nên những hoạt động giáo dục tương ứng với từng giai đoạn phát triển của một học sinh, bắt đầu từ 5 tuổi.
        </p>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="home" title="Độ tuổi 1-6">
                <p>Trẻ em ở độ tuổi này được ví như một tờ giấy thấm bởi não bộ của trẻ trong giai đoạn này không ngừng ghi nhận những thông tin mới và hình thành những sự phản xạ đầu đời. Trong giai đoạn này, bởi sự gắn bó với cha mẹ mang tính quyết định bởi vậy chúng tôi lựa chọn cách tiếp cận gia tăng cơ hội kết nối giữa cha mẹ và trẻ em thông qua việc tổ chức các chương trình trải nghiệm dành cho các nhóm gia đình, các trường mầm non.
                </p>
              </Tab>
              <Tab eventKey="profile" title="Độ tuổi 5-9" style={{}}>
                <p>Trẻ em trong giai đoạn này bắt đầu hình thành rõ rệt về tính cách (giá trị sống) thông qua những vòng tròn tương tác rộng hơn gia đình như nhà trường, xã hội. Trong giai đoạn hết sức nhạy cảm này, gia đình vẫn đóng một vai trò quan trọng trong việc tạo ra những cảm giác an toàn và tin tưởng.
                </p><p>Trọng tâm giáo dục của Dream&Do trong giai đoạn này là giáo dục giá trị sống (nhân cách) thông qua các trải nghiệm mang tính tương tác với thiên nhiên, thầy cô và bè bạn. Những ưu tiên phát triển trong giai đoạn này bao gồm:
                </p><p>Phát triển thân: Tăng cường sức khỏe thể chất, gia tăng sức đề kháng qua các hoạt động trải nghiệm trong thiên nhiên. Tăng cường sự nhạy bén của 5 giác quan.
                </p><p>Phát triển tâm: Sử dụng liệu pháp thiên nhiên để chữa lành các tổn thương về tinh thần của trẻ. Xây dựng và hình thành các giá trị sống cơ bản đầu đời bao gồm: hòa bình, yêu thương, kiên trì, dũng cảm.
                </p><p>Phát triển trí: Trau dồi hiểu biết của trẻ về thế giới tự nhiên thông qua các hoạt động trải nghiệm trong thiên nhiên. Xây dựng năng lực cơ bản: tự lập, tự chăm sóc bản thân, kiên trì, vượt khó, thích nghi, vượt qua nghịch cảnh.Chương trình phụ huynh có thể tham khảo: cho con trong giai đoạn này:
                </p>
                <Image src={"./tientrinhphattrien.png"} style ={{width: "100%"}}/>
              </Tab>
              <Tab eventKey="contact" title="Độ tuổi 7-12">
                <p>Empty tab. Edit page to add content here.</p>
              </Tab>
              <Tab eventKey="1" title="Độ tuổi 10-14">
                <p>Empty tab. Edit page to add content here.</p>
              </Tab>
              <Tab eventKey="2" title="Độ tuổi 14-17">
                <p>Empty tab. Edit page to add content here.</p>
              </Tab>
            </Tabs>
            </div>
        </div>
)}