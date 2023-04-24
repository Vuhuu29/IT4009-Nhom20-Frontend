import React, { useState } from 'react';
import { Image, Tab, Container, Row, Col
 } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StoryDD(params) {
    return (
        <div style={{paddingRight: "6%", paddingLeft: "6%", backgroundColor:"#fdeeee",color: "#000", textAlign:"left"}}>
           <h2>Dream&Do và câu chuyện mới về giáo dục trong thế kỷ 21</h2>
           <Container style={{paddingTop: "2%"}}>
                <Row>
                  <Col xs="6">
                    <p>Nếu như trong thế kỷ trước, chúng ta nói nhiều về câu chuyện thế giới phẳng và vai trò của giáo dục trong việc giúp trang bị những kiến thức, kỹ năng để mỗi công dân có thể dễ dàng gia nhập thị trường lao động toàn cầu thì câu chuyện của thế kỷ này đã hoàn toàn khác.  Thế kỷ 21 chứng kiến những thay đổi ngoạn mục của xã hội loài người với cuộc cách mạng công nghiệp lần thứ 4 và đi kèm với đó là những cuộc khủng hoảng mang tính toàn cầu vô tiền khoáng hậu như biến đổi khí hậu, xung đột xã hội. Trong bối cảnh này, những nhà giáo dục phải gánh thêm cho mình một trách nhiệm giúp cho mỗi cá nhân sinh ra và lớn lên trong thế kỳ 21 có một nhận thức đúng đắn về sự tồn tại của mình, hay nói cách khác là có một nền tảng về thế giới quan, nhân sinh quan đúng đắn và vững chắc trước những biến đổi khôn lường của thời cuộc.
                    Trong bối cảnh hiện nay, học sinh Việt Nam là nhóm đang phải đối mặt với nhiều thách thức hơn cả. Các em không chỉ đang phải đối mặt với những thách thức đến từ bên ngoài như sự cạnh tranh, đáp ứng nhu cầu năng lực công dân toàn cầu mà còn phải đối mặt với những thách thức từ bên trong. Ở phạm vi lãnh thổ quốc gia là những thách thức đến từ tư duy giáo dục cũ của các nhà trường, còn ở trong phạm vi gia đình đó là những xung đột mang tính ý thức hệ  với chính cha mẹ của mình. Những thế hệ người Việt kế tiếp sẽ tiếp tục lớn lên trong trạng thái tổn thương về mặt tinh thần, yếu ớt về thể chất, hoang mang về bản sắc cá nhân, kém cỏi về năng lực nếu không có bất kỳ một sự thay đổi nào xảy đến với các em ngày hôm nay.</p>
                  </Col>
                  <Col>
                    <Image src="./dreamdd.jpg"  style={{width: "35rem", height: "40rem"}}/>
                  </Col>
                </Row>
                <Row>
                  <p>
                  Ở Dream&Do, chúng tôi tập hợp xung quanh mình những nhà giáo dục nhân văn và khai phóng, lấy giá trị phổ quát làm nền tảng cho các phương pháp sư phạm, lấy phát triển cá nhân mỗi người là mục tiêu của các chương trình giáo dục, lấy phát triển bền vững làm nhân sinh quan của mình. Những chương trình giáo dục của Dream&Do xây dựng không nhằm đưa những học sinh đạt tới những mục tiêu định sẵn (bởi một ai đó) mà giúp mỗi em có năng lực tự xây dựng và thực hành các mục tiêu phát triển của bản thân mình. Thế giới quan và năng lực của mỗi học sinh Dream&Do được bồi đắp dần dần dựa trên những tương tác và kết nối của các em với thế giới thiên nhiên, với cộng đồng con người và với chính bản thân mình. Trong tiến trình trưởng thành về nhận thức này của học sinh, chúng tôi đóng vai trò đồng hành và hỗ trợ hơn là những người chỉ dẫn. Ở bất kỳ giai đoạn nào trong tiền trình ấy, học sinh hay phụ huynh đều có thể tìm đến chúng tôi không phải để được chỉ bảo mà để được lắng nghe, được tin tưởng, và được truyền cảm hứng. Đó là sứ mệnh lớn nhất đồng thời khó khăn nhất mà chúng tôi đặt ra cho bản thân mình.</p>
                </Row>
                <Image src={"./Untitled222.png"} style ={{backgroundColor:"#fdeeee"}}/>
                <Row style={{textAlign: "left"}}>
                <p>
                Ở Dream&Do, chúng tôi tập hợp xung quanh mình những nhà giáo dục nhân văn và khai phóng, lấy giá trị phổ quát làm nền tảng cho các phương pháp sư phạm, lấy phát triển cá nhân mỗi người là mục tiêu của các chương trình giáo dục, lấy phát triển bền vững làm nhân sinh quan của mình. Những chương trình giáo dục của Dream&Do xây dựng không nhằm đưa những học sinh đạt tới những mục tiêu định sẵn (bởi một ai đó) mà giúp mỗi em có năng lực tự xây dựng và thực hành các mục tiêu phát triển của bản thân mình. Thế giới quan và năng lực của mỗi học sinh Dream&Do được bồi đắp dần dần dựa trên những tương tác và kết nối của các em với thế giới thiên nhiên, với cộng đồng con người và với chính bản thân mình. Trong tiến trình trưởng thành về nhận thức này của học sinh, chúng tôi đóng vai trò đồng hành và hỗ trợ hơn là những người chỉ dẫn. Ở bất kỳ giai đoạn nào trong tiền trình ấy, học sinh hay phụ huynh đều có thể tìm đến chúng tôi không phải để được chỉ bảo mà để được lắng nghe, được tin tưởng, và được truyền cảm hứng. Đó là sứ mệnh lớn nhất đồng thời khó khăn nhất mà chúng tôi đặt ra cho bản thân mình.
                </p><p>Trong phần giới thiệu này quý phụ huynh sẽ nhận ra sứ mệnh, tầm nhìn và triết lý giáo dục của Dream&Do được thể hiện rõ rệt và nhất quán trong hệ thống sản phẩm giáo dục trải nghiệm dành cho học sinh trong độ tuổi 5 – 17 mà chúng tôi bắt đầu xây dựng kể từ 1/2016. Các chương trình đã được xây dựng và triển khai bao gồm:
                </p><p>1. Khóa học Survival Kid – học kỹ năng sống qua trải nghiệm thiên nhiên dành cho học sinh 5 – 10 tuổi với 4 chủ đề học: Tự lập, kiên trì, thích nghị, vượt khó.
                </p><p>2. Trại hè kỹ năng sinh tồn Survival Camp – mô hình trại hè nội trú 6 ngày 5 đêm dành cho học sinh trong độ tuổi 7 – 12.
                </p><p>3. Trại hè Green Leaders Camp – trại hè phát triển kỹ năng lãnh đạo thông qua kiến tạo giải pháp cho các vấn đề môi trường và khí hậu toàn cầu dành cho học sinh 10 – 14 tuổi
                </p><p>4. Trại hè Vietnam International Peace Camp – trại hè phát triển năng lực công dân toàn cầu thông qua kiến tạo giải pháp thúc đẩy giáo dục vì hòa bình thế giới dành cho học sinh 8 – 14 tuổi. (Trại hè Anh ngữ)
                </p><p>5. Trại tập huấn Thủ lĩnh cộng đồng trẻ – Vietnam Young Community Leaders Camp – phát triển năng lực lãnh đạo thông qua xây dựng và triển các sáng kiến xã hội.
                </p><p>6. Các trại hè nước ngoài hợp tác với tổ chức quốc tế:
                </p><p>+ Indonesia: Trại hè Dream&Do hợp tác Green Camp Bali dành cho học sinh 10 – 17 tuổi
                tuổi.</p>
                </Row>
            </Container>
        </div>
    )
}