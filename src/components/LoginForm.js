import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import *as actions from '../actions/index'

export default function LoginFormComponent(props) {
  const [isAlert, setIsAlert] = useState(false)
  const [alertMsg, setAlertMsg] = useState()
  const userState = useSelector((state) => state.userState)
  const dispatch = useDispatch()
  const [form, setForm] = useState({})
  useEffect(() => {
    async function storeState() {
      if (userState.dataFetched) {
        if (userState.status == true) {
          setIsAlert(false)
          await localStorage.setItem("token", userState.data.token)
          await localStorage.setItem("userId", userState.data.user.id)
          await localStorage.setItem("userRole", userState.data.user.role)
          window.location.href = "/"
        } else 
          props.toastNoti(userState.msg)
      }
    }
    storeState()
  }, [userState])
  
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center pb-5 mt-2">
          <h2 class="heading-section">Team20</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-10">
          <div class="d-md-flex" style={{width: '100%', overflow: 'hidden', background: '#fff', borderRadius: 5, boxShadow: '0px 10px 34px -15px rgba(0, 0, 0, 0.24)'}}>
            <img src='./download.jpg' style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', width: '50%'}}/>
            <div class="p-4 p-md-5" style={{position: 'relative', width: '50%'}}>
              <form class="signin-form">
                <div class="form-group mb-3">
                  <label class="label" htmlFor="phone"> Số điện thoại * </label>
                  <input type="text" class="form-control" id="phone" required
                    onChange={(e) => {
                          setForm({
                              ...form,
                              phone: e.target.value
                          })
                      }}/>
                </div>
                <div class="form-group mb-3">
                  <label class="label" htmlFor="password"> Mật khẩu * </label>
                  <input type="password" id="password" class="form-control" required
                    onChange={(e) => {
                      setForm({
                          ...form,
                          password: e.target.value
                      })
                    }}/>
                </div>
                <div className='form-group'>
                  <button type='button' class="form-control btn btn-primary rounded px-3" onClick={() => {dispatch(actions.login(form))}} >Đăng nhập</button> 
                </div>
                <div className={'form-group ' + (isAlert ? "d-block" : "d-none")}>
                  <div class="alert alert-danger" role="alert" >{alertMsg}</div>
                </div>
                <div class="form-group d-md-flex">
                  <div class="w-50 ms-auto" style={{textAlign: 'right'}}>
                    <a href="#" style={{color: 'gray'}}>Quên mật khẩu</a>
                  </div>
                </div>
              </form>
              <p style={{textAlign: 'center'}}>
                Chưa có tài khoản? 
                <a data-toggle="tab" href="#" onClick={() => { props.setCheckLogin(!props.checkLogin) }}>Đăng ký</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}