import {Modal, Button} from 'react-bootstrap'
import React, {useEffect, useState } from 'react'
import callApi from '../../fetchApi/callApiHaveToken'

export default function RentingRoomModal(props) {
    

    async function addRoomService(){
        const d = await callApi('/service/room/' + props.form.id, {id_services: props.roomServices}, 'POST')
        return d.status
    }

    async function deleteRoomService(){
        const d = await callApi('/service/room/' + props.form.id, false, 'DELETE')
        return d.status
    }

    const createRoom = () => {
        async function createRoom(){
            const d = await callApi('/room', props.form, 'POST')
            
            if (props.roomServices.length != 0) {
                let status = await addRoomService()
                if (!status) props.toastNoti('Add service to room fail')
            }
            
            if (d.status) 
              props.setFetch(!props.fetch)
              
            props.toastNoti(d.msg)
        }

        createRoom()
      }
  
    const updateRoom = () => {
        async function updateRoom(){
            const d = await callApi('/room/' + props.form.id, props.form, 'PUT')

            if (props.roomServices.length != 0) {
                let s1 = await deleteRoomService()
                let s2 = await addRoomService()
                if (!(s1 && s2)) props.toastNoti('Update service in room fail')
            }

            props.toastNoti(d.msg)
            if (d.status) 
                props.setFetch(!props.fetch)
        }
        updateRoom()
    }
    return (
        <Modal className="modal-lg" show={props.show} onHide = {() => props.setShow(false)}>  
            <Modal.Header closeButton>  
                <Modal.Title>{props.title}</Modal.Title>  
            </Modal.Header>  
            
            <Modal.Body>  
                <div className="row d-flex align-items-center mb-2">
                    <div className="col-3">
                        Tên Khu / tòa nhà
                    </div>
                    <div className="col-9">{props.houseName}</div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-3"> Tên phòng * </div>
                    <div className="col-9">
                        <input type="text" className="form-control text-input" id="input1" required
                            value={(props.form) ? props.form.name : undefined}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form,
                                    name: e.target.value
                                })
                            }}
                        />
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-3"> Số người tối đa </div>
                    <div className="col-9">
                        <input type="text" className="form-control text-input" id="input1"
                        value={(props.form) ? props.form.max_user : undefined}
                        onChange={(e) => {
                        props.setForm({
                            ...props.form,
                            max_user: e.target.value
                        })
                        }}/>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-3"> Đơn giá * </div>
                    <div className="col-7 ">
                        <input type="text" className="form-control text-input" id="input1" required
                        value={(props.form) ? props.form.cost : undefined}
                        onChange={(e) => {
                        props.setForm({
                            ...props.form,
                            cost: e.target.value
                        })
                        }}/>
                        
                    </div>
                    <div className="col-2 "> Đồng / tháng </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-3">Mô tả</div>
                    <div className="col-9">
                        <input type="text" class="form-control text-input" id="input1"
                        value={(props.form) ? props.form.description : undefined}
                        onChange={(e) => {
                        props.setForm({
                            ...props.form,
                            description: e.target.value
                        })
                        }}/>
                    </div>
                </div>
                <div className="row d-flex align-items-start  mt-4">
                    <div className="col-3">
                      Danh sách dịch vụ
                    </div>
                    <div className="col-9" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
                        {props.services && props.services.map((data) => (
                            <div>
                                <input class="form-check-input me-2 mb-1" type="checkbox" 
                                checked={props.roomServices.includes(data.id)}
                                onChange={(e) =>{
                                    if (e.target.checked) {
                                        props.setRoomServices([...props.roomServices, data.id]);
                                    } else {
                                        props.setRoomServices(props.roomServices.filter((item) => item !== data.id));
                                    }
                                  }}
                                />
                               {data.name} 
                            </div>
                        ))}
                    </div>
                </div>
            </Modal.Body>  
            
            <Modal.Footer>  
                <Button variant="secondary" onClick = {() => props.setShow(false)}>Hủy bỏ</Button>  
                <Button variant="primary" 
                onClick = {() => {
                    if(props.a == "Thêm") createRoom()
                    else updateRoom()
                        
                    props.setShow(false)
                }}>{props.a}</Button>  
            </Modal.Footer>  
        </Modal>
    )
    
}
//form 