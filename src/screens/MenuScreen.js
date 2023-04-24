import React, { useDebugValue, useEffect, useState } from 'react'
import '../style/css/menu/menu.css'
import '../style/css/menu/style.css'
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux'
import { Nav, NavDropdown } from 'react-bootstrap';
export default function MenuScreen() {
    const userState = useSelector((state) => state.userState)
    const [path, setPath] = useState()
    const [accountState, setAccountState] = useState(false);
    const [localData, setLocalData] = useState({})
    const [pathInfor, setPathInfor] = useState("")
    useEffect(() => {
        setPath(window.location.pathname)
    })
    useEffect(() => {
        if (userState.stateLogin != undefined) {
            if (userState.stateLogin.status == "true") {
                setAccountState(true)
            }
        }

    }, [userState])
    useEffect(() => {
        let token = localStorage.getItem("token")
        let role = localStorage.getItem("UserRole")
        let user_id = localStorage.getItem("UserId")
        if (token) {
            setLocalData({
                token: token,
                role: role,
                userId: user_id
            })
            setAccountState(true)
            switch (role) {
                case "ROLE_STUDENT":
                    setPathInfor("/student")
                    break;
                case "ROLE_PARENT":
                    setPathInfor("/student")
                    break;
                case "ROLE_TEACHER":
                    setPathInfor("/teacher")
                    break;
                case "ROLE_ADMIN":
                    setPathInfor("/admin1")
                    break;
                default:
                    setPathInfor("/")
                    break;
            }
            console.log(localData);
        }
    }, [])
    const logoutHandle = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("UserRole")
        localStorage.removeItem("UserId")

    }
    const NoAccount = () => {
        return (
            <ul className="navbar-nav ml-auto mr-md-3">
                <li className={path === "/" ? "nav-item active" : "nav-item"} ><a href="/" className="nav-link" >Trang chủ</a></li>
                <li className={path === "/about" ? "nav-item active" : "nav-item"} ><a href="about" className="nav-link" >Về chúng tôi</a></li>
                <li className={path === "/event" ? "nav-item active" : "nav-item"}><a href="event" className="nav-link" >Sự kiện</a></li>
                <li className={path === "/blog" ? "nav-item active" : "nav-item"}><a href="blog" className="nav-link" >Blog</a></li>
                <li className={path === "/course" ? "nav-item active" : "nav-item"}><a href="course" className="nav-link" >Khóa học</a></li>
                <li className={path === "/login" ? "nav-item active" : "nav-item"}><a href="login" className="nav-link" >Tài khoản</a></li>

            </ul>
        )
    }
    const HaveAccount = () => {
        return (
            <ul className="navbar-nav ml-auto mr-md-3">
                <li className={path === "/" ? "nav-item active" : "nav-item"} ><a href="/" className="nav-link" >Trang chủ</a></li>
                <li className={path === "/about" ? "nav-item active" : "nav-item"} ><a href="about" className="nav-link" >Về chúng tôi</a></li>
                <li className={path === "/event" ? "nav-item active" : "nav-item"}><a href="event" className="nav-link" >Sự kiện</a></li>
                <li className={path === "/blog" ? "nav-item active" : "nav-item"}><a href="blog" className="nav-link" >Blog</a></li>
                <li className={path === "/course" ? "nav-item active" : "nav-item"}><a href="course" className="nav-link" >Khóa học</a></li>
                <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}>
                    <Avatar size="35" name="user" round={true} />
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"

                            title={
                                <span style={path === "/teacher" ? { color: "#fc7fb2" } : { color: "gray" }}>Người dùng</span>
                            }
                        >
                            <NavDropdown.Item href={pathInfor} style={{ fontSize: '12px' }}>Xem trang cá nhân</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => logoutHandle()} href="/login" style={{ fontSize: '12px' }}>Đăng xuất</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </div>
            </ul>

        )
    }
    return (
        <div className="container" style={{
            position: "fixed",
            left: 0,
            top: 0,
            maxWidth: "100%"
        }}>
            <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" >Dream&Do</a>
                    <div className="collapse navbar-collapse" id="ftco-nav" style={{ height: 50 }}>
                        {
                            accountState == true ?
                                <HaveAccount /> : <NoAccount />

                        }
                    </div>
                </div>
            </nav >
        </div >
    )
}
