import {Modal, Button} from 'react-bootstrap'
import React, {useEffect, useState } from 'react'
import callApi from '../../fetchApi/callApiHaveToken'

export default function RentingHouseModal(props) {
    const createHouse = () => {
      async function createHouse(){
        try{
          const d = await callApi('/house', props.form, 'POST')
          if (d.status) {
            props.setFetch(!props.fetch)
          } else {
            //xử lý error
          }
        }catch(e){
            console.log(e)
        }
      }
      createHouse()
    }

    const updateHouse = () => {
      async function updateHouse(){
        try{
          const d = await callApi('/house/' + props.form.id, props.form, 'PUT')
          if (d.status) {
            props.setFetch(!props.fetch)
          } else {
            //xử lý error
          }
        }catch(e){
            console.log(e)
        }
      }
      updateHouse()
    }

    return (
        <Modal className="modal-lg" show={props.show} onHide = {() => props.setShow(false)}>  
              <Modal.Header closeButton>  
                <Modal.Title>{props.title}</Modal.Title>  
              </Modal.Header>  
              
              <Modal.Body>  
                <div className="row d-flex align-items-center">
                    <div className="col-3">
                      Tên khu / tòa nhà
                    </div>
                    <div className="col-9">
                      <input type="text" class="form-control text-input" placeholder="Tên nhà trọ" required
                      value={(props.form) ? props.form.name : undefined}
                      onChange={(e) => {
                        props.setForm({
                            ...(props.form),
                            name: e.target.value
                        })
                      }}/>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-3">
                      Địa chỉ
                    </div>
                    <div className="col-9">
                      <input type="text" class="form-control text-input" placeholder="Địa chỉ nhà trọ" required
                      value={(props.form) ? props.form.location : undefined}
                      onChange={(e) => {
                        props.setForm({
                            ...props.form,
                            location: e.target.value
                        })
                      }}/>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-3">
                      Mô tả
                    </div>
                    <div className="col-9">
                      <input type="text" class="form-control text-input" rows="3" placeholder="Mô tả về nhà trọ" required
                      value={(props.form) ? props.form.description : undefined}
                      onChange={(e) => {
                        props.setForm({
                            ...props.form,
                            description: e.target.value
                        })
                      }}/>
                    </div>
                </div>
                {/* validate sự thay đổi của thông tin và đã fill hết chưa */}
              </Modal.Body>  
              
              <Modal.Footer>  
                <Button variant="secondary" onClick = {() => props.setShow(false)}>Hủy bỏ</Button>  
                <Button variant="primary" 
                  onClick = {() => {
                    if(props.a === "Thêm") createHouse()
                    else updateHouse()
                    
                    props.setShow(false)
                  }}>{props.a}</Button>  
              </Modal.Footer>  
            </Modal> 
    )
}