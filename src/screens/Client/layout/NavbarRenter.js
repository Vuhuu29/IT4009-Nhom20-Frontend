import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from "react-router-dom";


export default function NarBarRenter() {
    const navigate = useNavigate()
    const logoutHandle = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("UserRole")
        localStorage.removeItem("UserId")
        navigate('/')
        window.location.reload(false)
    }

    return (
        <div className="container" style={{ position: "fixed", left: 0, top: 0, maxWidth: "100%", zIndex: 1 }}>
            <nav className="navbar navbar-expand-lg navbar-light px-4 mt-1" style={{ boxSizing: 'border-box', backgroundColor: '#fff', borderRadius: 5, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)' }}>

                <a className="navbar-brand" href="#" style={{ fontWeight: 700 }}>Team20</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="room" className="nav-link">Phòng trọ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="bill" className="nav-link">Hóa đơn</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Khu trọ
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="myhouse">Phòng trọ</a></li>
                                <li><a className="dropdown-item" href="services">Dịch vụ</a></li>
                                <li><a className="dropdown-item" href="#">Thiết bị</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <Link to="" className="nav-link" onClick={() => logoutHandle()}>Đăng xuất</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    );


}