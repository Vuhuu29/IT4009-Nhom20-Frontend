import React,{Component} from 'react'
import CourseS from "./CourseS";
import {Tabs, Tab} from 'react-bootstrap'

import'../../../style/css/student/screen_student.css'
class GreenKidCamp extends Component{
    render() {
        return (
            <div className="GreenKidCamp">
                <CourseS name_course ="Green Kid Camp – Trại xuân ở Lá (2 ngày 1 đêm)"
                         about="Các bạn nhỏ ngoài được học mà còn được thực hành ngay tại chỗ lối sống bền vững từ các hoạt động sinh hoạt cơ bản nhất trong đời sống hàng ngày của mỗi người."
                         fee="2.800.000"
                         time_start ="1/1/2021"
                         time_end="2/1/2021"
                         id="HP123456"
                >
                    <div>
                        <img style={{width: "100%"}} src="./GreenKidCamp1.png" alt="langLa"/>
                        <p>Quý phụ huynh thân mến,</p>
                        <p>Chúng ta đang sống trong tiết trời của mùa Xuân, khoảng thời gian mọi sự sống trên hành tinh này sinh sôi nảy nở một cách mạnh mẽ nhất. Nếu như mùa hè là thời điểm dành cho những bài học về sự kiên cường, tinh thần vượt khó thì mùa Xuân lại là thời điểm thích hợp để các bạn nhỏ có thể quan sát và trải nghiệm những bài học về vòng tuần hoàn của sự sống. Làm sao một hạt cây bé xíu có thể vượt qua mùa đông lạnh giá để rồi “sống lại" vào mùa xuân nhỉ.</p>
                        <p>Dream&Do xin giới thiệu với quý phụ huynh và các bạn nhỏ một phiên bản Trại Green Kid Camp 2 ngày 1 đêm dành cho các bạn trong độ tuổi (7-12) với chủ đề “TÁI KẾT NỐI" nới trẻ sẽ trải nghiệm cuộc sống và công việc ở Lá Library, một trung tâm giáo dục, về xây dựng tự nhiên và nông nghiệp bền vững.</p>
                        <p>Trong kỳ trại này, Dream&Do sẽ hợp tác với Lá Library, nơi nghiên cứu, thực hành, thử nghiệm và giáo dục về các mô hình nông nghiệp bền vững (permaculture) và xây dựng tự nhiên (natural building).</p>
                        <p>Tham gia ở Lá Library, các bạn nhỏ không chỉ được học mà còn được thực hành ngay tại chỗ lối sống bền vững từ các hoạt động sinh hoạt cơ bản nhất trong đời sống hàng ngày của mỗi người.</p>
                        <img style={{width: "100%"}}src="./GreenKidCamp2.png" alt=""/>
                        <h4>NHỮNG HOẠT ĐỘNG NỔI BẬT</h4>
                        <p>
                            🌿 1. “Những vị khách hòa bình"
                            <br/>– Trẻ làm quen với không gian học tập và sinh hoạt tại khu vườn: nhà tròn, nhà đất, nhà sàn.
                            <br/>– Tìm hiểu các nguyên tắc sinh hoạt bền vững tại vườn như: không sử dụng sản phẩm hóa chất, đồ nhựa dùng 1 lần.
                            <br/>– Thảo luận và thiết lập nội quy lớp học, đặc biệt là các nguyên tắc an toàn trong kỳ trại.

                            <br/>🌿 2. “Bật mí: Sự sống trong khu vườn"
                            <br/>– Len lỏi quanh các tán lá trong vườn khám phá mô hình vườn – rừng và phương thức nông nghiệp hữu cơ.
                            <br/>– Trò chơi tìm hiểu sự đa dạng các loài sinh vật trong khu vườn canh tác hữu cơ và ý nghĩa riêng các sinh vật đóng góp cho vườn. Qua đó khơi gợi trí tò mò, niềm yêu thích tìm tòi của trẻ.
                            <br/>– Tham gia nấu ăn và thưởng thức bữa trưa được chế biến từ các nông sản hữu cơ trong vườn nhà.

                            <br/>🌿 3. “Làm vườn mùa Xuân"
                            <br/>– Trẻ hoàn thành trọn vẹn một công việc nhà nông cùng với các cô chú nông dân tại vườn, như gieo hạt, trồng cây vì mùa Xuân là thời điểm bắt đầu một năm làm nông, rất thích hợp để gieo trồng.

                            <br/>🌿 4. “Căn bếp kết nối"
                            <br/>Trên chiếc bếp được xây dựng từ đất và chỉ sử dụng củi, trẻ hợp tác với nhau chuẩn bị đồ ăn trưa với tinh thần yêu thương, chăm sóc cho cả khu vườn.
                         </p>
                        <h4>THỜI KHÓA BIỂU HOẠT ĐỘNG</h4>
                        <img style={{width: "100%"}}  src="./GreenKidCamp3.png" alt=""/>
                        <h4>THÔNG TIN CHUNG</h4>
                        <p>➤ Độ tuổi thích hợp: 7-12
                            <br/> ➤ Địa điểm tổ chức: Lá Library, Ngã Ba Anh Trỗi, Quỳnh Lưu, Nho Quan, Ninh Bình.
                            <br/>➤ Số lượng tối đa: 20 trại sinh.
                            <br/>➤ Thời gian tổ chức: 24-25/4/2021 (T7 – CN)
                            <br/>➤ Các điểm đón trả trong nội thành: Nhà Hát Lớn, Times City  –  R4 Royal City – 34 T Hoàng Đạo Thúy.</p>
                        <h4>THÔNG TIN CHI PHÍ</h4>
                        <p>CHI PHÍ VÀ ƯU ĐÃI
                            <br/>Học phí: 2.800.000 VNĐ/ học sinh
                            <br/>• Chi phí giáo viên, trợ giảng, học liệu, bài giảng, thực hành trải nghiệm trong 2 ngày học
                            <br/>• Xe oto đón trả tại 3 điểm nội thành Hà Nội: Nhà Hát Lớn, R4 Royal City, Charmvit 117 Trần Duy Hưng. (Phụ huynh có thể yêu cầu điểm đón riêng với nhóm 5 học sinh trở lên)
                            <br/>• Ăn: 1 bữa sáng, 2 bữa trưa, 1 bữa tối, 2 bữa chiều nhẹ
                            <br/>• Bảo hiểm du lịch hạn mức 100.000.000/ vụ mỗi ngày học.
                            <br/>• Ảnh kỷ niệm hoạt động từ nhiếp ảnh chuyên nghiệp
                            <br/>
                            <br/><strong>ƯU ĐÃI</strong> (chỉ áp dụng 1 trong các ưu đãi tốt nhất)
                            <br/>– Giảm 500.000/hs cho anh/chị em thứ 2 trong gia đình cùng đăng ký.
                            <br/>– Giảm 500.000/hs cho trại sinh cũ trong thời gian 2019 – 2020
                            <br/>– Giảm 300.000/hs cho nhóm 3,4 trại sinh và 500.000/hs cho nhóm 5 trại sinh trở lên.
                            <br/>
                            <br/>HOTLINE/ZALO tư vấn: 0763270116</p>
                    </div>
                </CourseS>
            </div>
        );
    }
}
export default GreenKidCamp;