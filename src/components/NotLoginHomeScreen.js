export default function NotLoginHomeScreen () {
    return (
        <>
            <div className="container" style={{position: "fixed", left: 0, top: 0, maxWidth: "100%"}}>
                <nav class="navbar navbar-expand-lg navbar-light px-4 mt-1" style={{boxSizing: 'border-box', backgroundColor: '#fff', borderRadius: 5, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)'}}>

                    <img src='./logo.svg' style={{height: 40}}/>
                    <ul class="navbar-nav ms-auto">
                        <li className= "nav-item active">
                            <a href="/" className="nav-link navbar-text" >Trang chủ</a>
                        </li>
                        <li className="nav-item">
                            <a href="about" className="nav-link navbar-text" >Giới thiệu</a>
                        </li>
                        <li className="nav-item">
                            <a href="auth" className="nav-link navbar-text" >Đăng nhập</a>
                        </li>
                    </ul>

                </nav>
            </div >


            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '0px 90px', minHeight: '100vh'}}>
                <div style={{fontSize: '42px', marginBottom: '30px', marginTop: '100px'}}>Bạn đang kinh doanh Nhà trọ, Căn hộ dịch vụ ?</div>
                <div style={{margin: '0 15px 20px 15px', textAlign: 'center', lineHeight: '28px', fontSize: '18px', padding: '15px'}}>
                Cho thuê nhà trọ, căn hộ là loại hình kinh doanh khá hấp dẫn vì có tiềm năng lớn, nhu cầu cao, doanh thu ổn định và an toàn. Tuy nhiên, lĩnh vực kinh doanh này cũng có khá nhiều khó khăn khiến không ít chủ trọ, chủ căn hộ phải đối mặt với nhiều rủi ro về tài chính cũng như hiệu quả quản lý.
                </div>
                <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', color: 'rgb(255, 255, 255)'}}>
                <div style={{backgroundColor: 'rgb(0, 124, 126)', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0 15px 30px 15px', padding: '18px', borderRadius: '5px'}}>
                    <img src={"./clock.svg"} alt="clock icon" style={{width: '70px', height:'70px', margin: '0 auto'}}/>
                    <h3>Thời gian</h3>
                    <div>
                    Bạn tốn nhiều thời gian cho việc giám sát, quản lý cơ sở, khách thuê, chi phí.
                    </div>
                </div>

                <div style={{backgroundColor: 'rgb(0, 124, 126)', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0 15px 30px 15px', padding: '18px', borderRadius: '5px'}}>
                    <img src={"./money.svg"} alt="cost icon" style={{width: '70px', height:'70px', margin: '0 auto'}}/>
                    <h3>Chi phí</h3>
                    <div>
                    Bạn thấy đau đầu vì có quá nhiều chi phí phát sinh trong quá trình kinh doanh.
                    </div>
                </div>

                <div style={{backgroundColor: 'rgb(0, 124, 126)', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0 15px 30px 15px', padding: '18px', borderRadius: '5px'}}>
                    <img src={"./manage.svg"} alt="manage icon" style={{width: '70px', height:'70px', margin: '0 auto'}}/>
                    <h3>Công tác quản lý</h3>
                    <div>
                    Bạn đau đầu khi suốt ngày phải đi xử lý sự cố, hợp đồng, các thủ tục pháp lý, hóa đơn.
                    </div>
                </div>

                <div style={{backgroundColor: 'rgb(0, 124, 126)', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0 15px 30px 15px', padding: '18px', borderRadius: '5px'}}>
                    <img src={"./risk.svg"} alt="risk icon" style={{width: '70px', height:'70px', margin: '0 auto'}}/>
                    <h3>Rủi ro quản lý</h3>
                    <div>
                    Tình trạng khó khăn trong việc quản lý các khoản hóa đơn, có thể thất thoát tiền bạc trong việc tính toán.
                    </div>
                </div>

                <div style={{backgroundColor: 'rgb(0, 124, 126)', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0 15px 30px 15px', padding: '18px', borderRadius: '5px'}}>
                    <img src={"./puzzle-piece.svg"} alt="puzzle-piece icon" style={{width: '70px', height:'70px', margin: '0 auto'}}/>
                    <h3>Khách thuê</h3>
                    <div>
                    Bạn cần có một quy trình quản lý khách thuê chuyên nghiệp, hiệu quả để tạo mối quan hệ lâu dài với họ.
                    </div>
                </div>

                <div style={{backgroundColor: 'rgb(0, 124, 126)', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0 15px 30px 15px', padding: '18px', borderRadius: '5px'}}>
                    <img src={"./effective.svg"} alt="effective icon" style={{width: '70px', height:'70px', margin: '0 auto'}}/>
                    <h3>Hiệu quả kinh doanh</h3>
                    <div>
                    Công việc quản lý đảm bảo tính chính xác, hiệu quả để đảm bảo quyền lợi cả hai bên và tối ưu hóa được doanh thu.
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}