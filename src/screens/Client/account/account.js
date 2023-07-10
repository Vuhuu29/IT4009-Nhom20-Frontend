import React, { useEffect, useState } from 'react'
import callApi from '../../../fetchApi/callApiHaveToken'

export default function AccountRenterScreen(props) {
    const defaulUser = {
        "phone": "",
        "password": "",
        "name": "",
        "birthday": null,
        "gender": null,
        "address": null,
        "email": ""
    }
    const [active, setActive] = useState("button1")
    const [user, setUser] = useState(defaulUser)
    const [form1, setForm1] = useState(defaulUser)
    const [form2, setForm2] = useState()

    useEffect(() => {
        console.log('fetch data user');
        async function fetchDataUser() {
            const data = await callApi('/renter/' + localStorage.getItem('userId'), false, 'GET')
            if (data.status) {
                setUser(data.data)
                setForm1(data.data)
            } else
                props.toastNoti(data.msg)
        }
        fetchDataUser()
    }, [])

    const updateInfo = () => {
        console.log(form1);
        async function updateInfo() {
            const data = await callApi('/renter/' + localStorage.getItem('userId'), form1, 'PUT')
            props.toastNoti(data.msg)
            if (data.status) setUser(form1)
        }
        updateInfo()
    }

    const updatePassword = () => {
        async function updatePassword() {
            console.log(form2);
            const data = await callApi('/renter/password/' + localStorage.getItem('userId'),
                { newPassword: form2.newPassword, oldPassword: form2.oldPassword }, 'PUT')
                props.toastNoti(data.msg)
            }
        if (form2.newPassword !== form2.newRePassword)
            props.toastNoti({ msg: 'RePassword not match' })
        else
            updatePassword()
    }

    return (
        <div className="container container-screen">
            <div className="d-flex rounded-1 flex-column main-tab">
                <div className="d-flex flex-row align-items-center mb-2 border-bottom" style={{ fontSize: 30 }}>
                    Hồ sơ
                </div>

                <div className="d-flex flex-row align-items-center mb-2 h-100">

                    <div className="d-flex flex-column align-items-center p-4 h-100 border border-2 round-1" style={{ width: '25%' }}>
                        <img src="./person.svg" style={{ width: '80%', marginBottom: 8 }} />
                        {user.name}
                    </div>

                    <div className="py-2 px-4 h-100 border border-2 round-1 ms-auto" style={{ width: '70%' }}>

                        <ul class="nav nav-tabs justify-content-end mb-4">

                            <li class="nav-item">
                                <button class={"nav-link " + (active === "button1" ? "active" : "")} data-bs-toggle="tab"
                                    onClick={() => { if (active !== "button1") setActive("button1") }}>

                                    Thông tin cá nhân

                                </button>
                            </li>

                            <li class="nav-item">
                                <button class={"nav-link " + (active === "button2" ? "active" : "")} data-bs-toggle="tab"
                                    onClick={() => { if (active !== "button2") setActive("button2") }}>

                                    Đổi mật khẩu

                                </button>
                            </li>

                        </ul>

                        <div class="tab-content">

                            <div class={"tab-pane fade " + (active === "button1" ? "show active" : "")}>
                                <div className="row d-flex align-items-center">

                                    <div className="col-3"> Họ tên </div>
                                    <div className="col-9">
                                        <input type="text" class="form-control text-input" value={form1.name}
                                            onChange={(e) => {
                                                setForm1({
                                                    ...form1,
                                                    name: e.target.value
                                                })
                                            }}
                                        />
                                    </div>

                                </div>

                                <div className="row d-flex align-items-center mb-2">

                                    <div className="col-3"> Ngày sinh </div>
                                    <div className="col-9">
                                        <input id="startDate" class="form-control py-0 my-2" type="date" value={form1.birthday}
                                            onChange={(e) => {
                                                setForm1({
                                                    ...form1,
                                                    birthday: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="row d-flex align-items-center mb-2">

                                    <div className="col-3"> Giới tính </div>
                                    <div className="col-9">

                                        <input class="form-check-input" type="radio" name="radio1" id="r11"
                                            checked={form1.gender === 'male'}
                                            onChange={() => setForm1({ ...form1, gender: 'male' })}
                                        />
                                        <label class="form-check-label ms-1" htmlFor="r11"> Nam </label>

                                        <input class="form-check-input ms-3" type="radio" name="radio1" id="r12"
                                            checked={form1.gender === 'female'}
                                            onChange={() => setForm1({ ...form1, gender: 'female' })}
                                        />
                                        <label class="form-check-label ms-1" htmlFor="r12"> Nữ </label>

                                    </div>
                                </div>

                                <div className="row d-flex align-items-center mb-2">

                                    <div className="col-3"> Địa chỉ </div>
                                    <div className="col-9">
                                        <input type="text" class="form-control text-input" value={form1.address}
                                            onChange={(e) => {
                                                setForm1({
                                                    ...form1,
                                                    address: e.target.value
                                                })
                                            }}
                                        />
                                    </div>

                                </div>

                                <div className="row d-flex align-items-center mb-2">

                                    <div className="col-3"> Số điện thoại </div>
                                    <div className="col-9">
                                        <input type="text" class="form-control text-input" value={form1.phone}
                                            onChange={(e) => {
                                                setForm1({
                                                    ...form1,
                                                    phone: e.target.value
                                                })
                                            }}
                                        />
                                    </div>

                                </div>



                                <div className="row d-flex align-items-center mb-2">

                                    <div className="col-3"> Email </div>
                                    <div className="col-9">
                                        <input type="text" class="form-control text-input" value={form1.email}
                                            onChange={(e) => {
                                                setForm1({
                                                    ...form1,
                                                    email: e.target.value
                                                })
                                            }}
                                        />
                                    </div>

                                </div>

                                <div className="d-flex justify-content-center">
                                    <button type="button" class="btn btn-outline-info" onClick={updateInfo}>
                                        Cập nhật
                                    </button>
                                </div>

                            </div>

                            <div class={"tab-pane fade " + (active === "button2" ? "show active" : "")}>

                                <div className="row d-flex align-items-center">
                                    <div className="col-3"> Mật khẩu cũ * </div>
                                    <div className="col-9">
                                        <input type="password" class="form-control text-input" id="oldPassword"
                                            onChange={(e) => {
                                                setForm2({
                                                    ...form2,
                                                    oldPassword: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="row d-flex align-items-center">
                                    <div className="col-3"> Mật khẩu mới * </div>
                                    <div className="col-9">
                                        <input type="password" class="form-control text-input" id="newPassword"
                                            onChange={(e) => {
                                                setForm2({
                                                    ...form2,
                                                    newPassword: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="row d-flex align-items-center mb-2">
                                    <div className="col-3"> Nhập lại mật khẩu mới * </div>
                                    <div className="col-9">
                                        <input type="password" class="form-control text-input" id="reNewPassword"
                                            onChange={(e) => {
                                                setForm2({
                                                    ...form2,
                                                    reNewPassword: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mb-2">
                                    <button type="button" class="btn btn-outline-info" onClick={updatePassword}>Cập nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}