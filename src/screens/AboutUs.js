export default function () {
    return (
        <div>
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
                <div style={{fontSize: '42px', marginBottom: '30px', marginTop: '50px'}}> Team20 </div>
                <div style={{fontSize: 30}}> Phần mềm quản lý nhà trọ, căn hộ, dịch vụ </div>
                <div style={{fontSize: 30}}> Thiết kế đơn giản, dễ dàng sử dụng, tiết kiệm tối đa chi phí </div>
            </div>
        </div>
    )
}