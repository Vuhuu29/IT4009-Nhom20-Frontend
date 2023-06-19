import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import *as actions from '../actions/index'

export default function RegisterForm(props) {
  const [form, setForm] = useState({})
  const [isAlert, setIsAlert] = useState(false)
  const [alertMsg, setAlertMsg] = useState()
  const navigate = useNavigate()
  const userState = useSelector((state) => state.userState)
  const dispatch = useDispatch()

  useEffect(() => {
    async function storeState() {
      if (userState.dataFetched) {
        if (userState.status == true) {
          setIsAlert(false)
          await localStorage.setItem("token", userState.data.token)
          await localStorage.setItem("userId", userState.data.newOwner.id)
          await localStorage.setItem("userRole", userState.data.newOwner.role)
          navigate("/")
        }else {
          if (userState.msg == "Server Error") 
            setAlertMsg("Lỗi đăng ký")
          else 
            setAlertMsg(userState.msg)
          setIsAlert(true)
        }
      }
    }
    storeState()
  }, [userState])
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-5 mt-2">
          <h2 class="heading-section">Team20</h2>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-md-12 col-lg-10">
          <div class="d-md-flex" style={{width: '100%', overflow: 'hidden', background: '#fff', borderRadius: 5, boxShadow: '0px 10px 34px -15px rgba(0, 0, 0, 0.24)'}}>
            <img src='./download.png' style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', width: '50%'}}/>
            <div class="p-4 p-md-5" style={{position: 'relative', width: '50%'}}>
              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4">Đăng ký</h3>
                </div>
              </div>

              <form action="#" class="signin-form">
                <div class="form-group mb-3">
                  <label class="label" for="name">Họ và tên</label>
                  <input type="text" class="form-control" id="name" required placeholder="Họ và tên" 
                  onChange={(e) => {
                      setForm({
                          ...form,
                          name: e.target.value
                      })
                  }}/>
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="birthday">Ngày sinh</label>
				          <input id="birthday" class="form-control" type="date" 
                  onChange={(e) => {
                    setForm({
                        ...form,
                        birtday: e.target.value
                    })
                  }}/>
                </div>

                <div class="form-group mb-3">
                  <label class="label" for="phone">Số điện thoại</label>
                  <input type="text" id='phone' class="form-control" required placeholder="Số điện thoại"
                  onChange={(e) => {
                    setForm({
                        ...form,
                        phone: e.target.value
                    })
                  }}/>
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="email">Email</label>
                  <input type="email" id='email' class="form-control" placeholder="Email"
                  onChange={(e) => {
                    setForm({
                        ...form,
                        email: e.target.value
                    })
                  }}/>
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Mật khẩu</label>
                  <input type="password" id="password" class="form-control" required placeholder="Mật khẩu"
                  onChange={(e) => {
                    setForm({
                        ...form,
                        password: e.target.value
                    })
                  }}/>
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="repassword">Nhập lại mật khẩu</label>
                  <input type="password" id="repassword" class="form-control" required placeholder="Nhập lại mật khẩu"
                  onChange={(e) => {
                    setForm({
                        ...form,
                        rePassword: e.target.value
                    })
                  }}/>
                </div>
                <div className='form-group'>
                  <button type='button' class="form-control btn btn-primary rounded px-3" 
                  onClick={() => { 
                    if(form.password != form.rePassword) {
                      setAlertMsg("Mật khẩu nhập lại không trùng")
                      setIsAlert(true)
                    }else {
                      setIsAlert(false)
                      dispatch(actions.register(form))
                    }
                  }}>Đăng ký</button>
                </div>
                <div className={'form-group ' + (isAlert ? "d-block" : "d-none")}>
                  <div class="alert alert-danger" role="alert" >{alertMsg}</div>
                </div>
              </form>

              <p style={{textAlign: 'center', color: "gray"}}>
                Có tài khoản rồi? 
                <a data-toggle="tab" href="#" onClick={() => { props.setCheckLogin(!props.checkLogin) }}>Đăng Nhập</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>);
}