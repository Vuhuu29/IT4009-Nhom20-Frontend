import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';


export default function NarBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top navbar-light px-4 ">
                {/* <Container> */}
                    <Navbar.Brand href="/">Team20</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <li className="nav-item active">
                                <a href="/" className="nav-link" >Trang chủ</a>
                            </li> */}

                        </Nav>
                        <Nav>
                            <li className="nav-item dropdown">
                                <a href="rentinghouse" className="nav-link dropdown-toggle">Khu trọ</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" href="rentinghouse">Khu trọ</a></li>
                                    <li><a className="dropdown-item" href="rentingroom">Phòng trọ</a></li>
                                    <li><a className="dropdown-item" href="services">Dịch vụ</a></li>
                                    <li><a className="dropdown-item" href="#">Thiết bị</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="system" className="nav-link dropdown-toggle">Hệ thống</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" href="account">Hồ sơ</a></li>
                                    <li><a className="dropdown-item" href="configuration">Cấu hình chung</a></li>
                                    <li><a className="dropdown-item" href="services">Dịch vụ</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="convenant" className="nav-link dropdown-toggle">Hợp đồng</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" href="covenant">Hợp đồng</a></li>
                                    <li><a className="dropdown-item" href="deposit">Đặt cọc</a></li>
                                    <li><a className="dropdown-item" href="renter">Khách thuê</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="bill" className="nav-link dropdown-toggle">Hóa đơn</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" href="bill">Hóa đơn</a></li>
                                    <li><a className="dropdown-item" href="#">Xuất phiếu chi</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="finance" className="nav-link" >Thu chi</a>
                            </li>

                            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                            <Nav.Link eventKey={2} href="/login"    className="d-flex">
                                Đăng xuất
                            </Nav.Link>
                        </Nav>
            
                    </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
            <div className="container" style={{ position: "fixed", left: 0, top: 0, maxWidth: "100%" }}>
                <nav className="navbar navbar-expand-lg navbar-light px-4 mt-10" style={{ boxSizing: 'border-box', backgroundColor: '#fff', borderRadius: 5, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)' }}>

                    <a className="navbar-brand" href="#" style={{ fontWeight: 700 }}>Team20</a>
                    <ul className="navbar-nav ms-auto">


                    </ul>
                </nav>
            </div >
        </>
    )
}