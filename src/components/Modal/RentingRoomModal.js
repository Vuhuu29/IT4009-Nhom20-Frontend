import {Modal, Button} from 'react-bootstrap'
import React, {useEffect, useState } from 'react'
import callApi from '../../fetchApi/callApiHaveToken'

export default function RentingRoomModal(props) {
    const [houseServices, setHouseServices] = useState([])
    const [roomServices, setRoomServices] = useState([])
    const [initroomServices, setInitRoomServices] = useState([])

    async function fetchAllService(){
        try{
            const d = await callApi('/service/house/'+ props.houseId , false, 'GET')
            if (d.status) {
                setHouseServices(d.data)
            } else {
                //xử lý error
            }
        }catch(e){
            console.log(e)
        }
    }

    async function fetchRoomService(){
        try{
          const d = await callApi('/service/room/' + props.form.id, false, 'GET')
          if (d.status) {
            setRoomServices(d.data)
            setInitRoomServices(d.data)
          } else {
            //xử lý error
          }
        }catch(e){
            console.log(e)
        }
      }

    async function addRoomService(roomId, services){
        try{
            let body = {
                id_services: services.map((service) => service.id)
            }
            const d = await callApi('/service/room/' + roomId, body, 'POST')
            if (d.status) {
              //Xử lý lỗi
            } else {
              //xử lý error
            }
          }catch(e){
              console.log(e)
          }
    }

    async function deleteRoomService(){
        try{
            const d = await callApi('/service/room/' + props.form.id, false, 'DELETE')
            if (d.status) {
              //Xử lý lỗi
            } else {
              //xử lý error
            }
          }catch(e){
              console.log(e)
          }
    }

    useEffect(() => {
        // if(props.a == 'Lưu') {
            fetchRoomService()
            // }
            console.log("room", roomServices)
    }, [props.form.id])

    useEffect(() => {
        fetchAllService()
        console.log("house",houseServices)
    }, [props.houseId]);

    const createRoom = () => {
        async function createRoom(){
          try{
            const d = await callApi('/room', props.form, 'POST')
            if (d.status) {
                console.log(d.data)
              let roomId = d.data.id;
              if (roomServices.length != 0) await addRoomService(roomId, roomServices)
              props.setForm({})
              props.setFetch(!props.fetch)
              
            } else {
              //xử lý error
            }
          }catch(e){
              console.log(e)
          }
        }
        createRoom()
      }
  
    const updateRoom = () => {
        async function updateHouse(){
            try{
            const d = await callApi('/room/' + props.form.id, props.form, 'PUT')
            if (d.status) {
                props.setFetch(!props.fetch)
            } else {
                //xử lý error
                // if initroomServices và roo not null vaf khác với
                if(initroomServices.length !==0){
                    if(roomServices.length !==0)
                        addRoomService(props.form.id, roomServices)
                }else{
                    let serviceDelete = initroomServices.filter(
                        (service) => !roomServices.some((item) => item.id === service.id)
                        );
                        let serviceAdd = roomServices.filter(
                          (service) => !initroomServices.some((item) => item.id === service.id)
                        );
                        for (let i = 0; i < serviceDelete.length; i++) {
                          const deletedService = serviceDelete[i];
                          deleteRoomService(props.form.id, deletedService.id);
                        }
                        addRoomService(props.form.id, serviceAdd);

                }
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
                <div className="row d-flex align-items-center mb-2">
                    <div className="col-3">
                        Tên Khu / tòa nhà
                    </div>
                    <div className="col-9">{props.houseName}</div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-3">Tên phòng</div>
                    <div className="col-9">
                        <input type="text" className="form-control text-input" id="input1"
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
                    <div className="col-3">Số người tối đa</div>
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
                    <div className="col-3">Đơn giá</div>
                    <div className="col-9">
                        <input type="text" className="form-control text-input" id="input1"
                        value={(props.form) ? props.form.cost : undefined}
                        onChange={(e) => {
                        props.setForm({
                            ...props.form,
                            cost: e.target.value
                        })
                        }}/>
                    </div>
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
                        {houseServices && houseServices.map((data, index) =>{ 
                              const isChecked = roomServices.some((service) => service.id === data.id);
                            return(
                            <div key={index}>
                                <input className="form-check-input me-2 mb-1" type="checkbox" 
                                checked= {isChecked}
                                onChange={(e) =>{
                                    if (e.target.checked) {
                                        setRoomServices([...roomServices, data]);
                                    } else {
                                        setRoomServices(roomServices.filter((item) => item.id !== data.id));
                                    }
                                  }}
                                />
                               {data.name} 
                            </div>
                        )})}
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