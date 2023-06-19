import NarBar from "../components/NavBar";
import React, {useEffect, useState } from 'react'
import callApi from "../fetchApi/callApiHaveToken";
import Toast from 'react-bootstrap/Toast';
import { Navigate } from 'react-router';

export default function AccountScreen(){
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
  const [form, setForm] = useState(defaulUser)
  const [form1, setForm1] = useState()
  const [show, setShow] = useState(false)
  const [noti, setNoti] = useState("Woohoo, you're reading this text in a Toast!")

  useEffect(() => {
    async function fetchDataUser(){
      try{
        const data = await callApi('/user/' + localStorage.getItem('userId'), false, 'GET')
        if (data.status) {
          setUser(data.data)
          setForm(data.data)
        } else {
          setNoti({
            header: 'Fail to load data', 
            msg: data.msg
          })
          setShow(true)
        }
      }catch(e){
          console.log(e)
      }
    }
    fetchDataUser()
  }, [])

  const updateInfo = () => {
    async function updateInfo(){
      try{
        const data = await callApi('/user/' + localStorage.getItem('userId'), form, 'PUT')
        if (data.status) 
          {setNoti({msg: 'Update Success'}) 
          setUser(form)}
        else 
          setNoti({msg: 'Fail to update data'})
        setShow(true)

      }catch(e){
          console.log(e)
      }
    }
    updateInfo()
  }

  const updatePassword = () => {
    async function updatePassword(){
      // try{
      //    const data = await callApi('/user/' + localStorage.getItem('userId'), form, 'PUT')
        
      //   if (data.status) 
      //     {setNoti({msg: 'Update Success'}) 
      //     setUser(form)}
      //   else 
      //     setNoti({msg: 'Fail to update data'})
      //   setShow(true)

      // }catch(e){
      //     console.log(e)
      // }
    }
    if(form1.newPassword !== form1.newRePassword) {
      setNoti({msg: 'Mật khẩu mới nhập lại không trùng'})
      setShow(true)
    }
    else 
      updatePassword()
  }

  const Logged = () => {
    return (
      <>
      <NarBar/>
      <div className="container container-screen">
        <div className="d-flex rounded-1 flex-column main-tab">
          <div className="d-flex flex-row align-items-center mb-2 border-bottom" style={{fontSize: 30}}>
              Hồ sơ
          </div>

          <div className="d-flex flex-row align-items-center mb-2 h-100">

            <div className="d-flex flex-column align-items-center p-4 h-100 border border-2 round-1" style={{width: '25%'}}>
              <img src="./person.svg" style={{width: '80%', marginBottom: 8}}/>
              {user.name}
            </div>

            <div className="py-2 px-4 h-100 border border-2 round-1 ms-auto" style={{width: '70%'}}>

              <ul class="nav nav-tabs justify-content-end mb-4">

                <li class="nav-item">
                  <button class={"nav-link " + (active === "button1" ? "active" : "")} data-bs-toggle="tab" 
                    onClick={() => {if(active !== "button1") setActive("button1")}}>

                    Thông tin cá nhân

                  </button>
                </li>

                <li class="nav-item">
                  <button class={"nav-link " + (active === "button2" ? "active" : "")} data-bs-toggle="tab" 
                    onClick={() => {if(active !== "button2") setActive("button2")}}>

                    Đổi mật khẩu

                  </button>
                </li>

              </ul>

              <div class="tab-content">

                {/* Tab sửa thông tin cá nhân */}
                <div class={"tab-pane fade " + (active === "button1" ? "show active" : "")}>
                  <div className="row d-flex align-items-center">

                    <div className="col-3"> Họ tên </div>
                    <div className="col-9">
                      <input type="text" class="form-control text-input" value={form.name}
                        onChange={(e) => {
                          setForm({
                              ...form,
                              name: e.target.value
                          })
                        }}
                      />
                    </div>

                  </div>

                  <div className="row d-flex align-items-center mb-2">

                    <div className="col-3"> Ngày sinh </div>
                    <div className="col-9">
                      <input id="startDate" class="form-control py-0 my-2" type="date" value={form.birthday}
                        onChange={(e) => {
                          setForm({
                              ...form,
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
                        checked={form.gender === 'male'}  
                        onChange={() => setForm({...form, gender: 'male'})}
                      />
                      <label class="form-check-label ms-1" for="r11"> Nam </label>
                      
                      <input class="form-check-input ms-3" type="radio" name="radio1" id="r12" 
                        checked={form.gender === 'female'}  
                        onChange={() => setForm({...form, gender: 'female'})}
                      />
                      <label class="form-check-label ms-1" for="r12"> Nữ </label>

                    </div>
                  </div>

                  <div className="row d-flex align-items-center mb-2">

                    <div className="col-3"> Địa chỉ </div>
                    <div className="col-9">
                      <input type="text" class="form-control text-input" value={form.address} 
                        onChange={(e) => {
                          setForm({
                              ...form,
                              address: e.target.value
                          })
                        }}
                      />
                    </div>

                  </div>

                  <div className="row d-flex align-items-center mb-2">

                    <div className="col-3"> Số điện thoại </div>
                    <div className="col-9">
                      <input type="text" class="form-control text-input" value={form.phone}
                        onChange={(e) => {
                          setForm({
                              ...form,
                              phone: e.target.value
                          })
                        }}
                      />
                    </div>

                  </div>

                  <div className="row d-flex align-items-center mb-2">

                    <div className="col-3"> Email </div>
                    <div className="col-9">
                      <input type="text" class="form-control text-input" value={form.email} 
                        onChange={(e) => {
                          setForm({
                              ...form,
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

                {/* Tab đôi mật khẩu */}
                <div class={"tab-pane fade " + (active === "button2" ? "show active" : "")}>

                  <div className="row d-flex align-items-center">

                    <div className="col-3"> Mật khẩu cũ </div>
                    <div className="col-9">
                      <input type="text" class="form-control text-input"
                        onChange={(e) => {
                          setForm1({
                              ...form1,
                              oldPassword: e.target.value
                          })
                        }}
                      />
                    </div>

                  </div>

                  <div className="row d-flex align-items-center">

                    <div className="col-3"> Mật khẩu mới </div>
                    <div className="col-9">
                      <input type="text" class="form-control text-input" 
                        onChange={(e) => {
                          setForm1({
                              ...form1,
                              newPassword: e.target.value
                          })
                        }}
                      />
                    </div>

                  </div>

                  <div className="row d-flex align-items-center mb-2">

                    <div className="col-3"> Nhập lại mật khẩu mới </div>
                    <div className="col-9">
                      <input type="text" class="form-control text-input"
                      onChange={(e) => {
                        setForm1({
                            ...form1,
                            newRePassword: e.target.value
                        })
                      }}
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" class="btn btn-outline-info" onClick={updatePassword}>
                      Cập nhật
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toast show={show} onClose={() => setShow(!show)} className="custom-toast">
        <Toast.Header>
          <b className="me-auto">
            {(noti.header) ? noti.header : 'Thông báo'}
          </b>
        </Toast.Header>

        { (noti.msg) ?  <Toast.Body> {noti.msg} </Toast.Body> : <></>}

      </Toast>
      </>
    )
  }

  return (
    <>
      {(localStorage.getItem('token')) ? <Logged /> : <Navigate to="/auth" />}
    </>
  )
}