import {Modal, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react'; 
import callApi from '../../fetchApi/callApiHaveToken';

const SumMonths =  (d1, months) => {
    const d = new Date(d1)
    d.setMonth(d.getMonth() + months)
    return d.toLocaleDateString("sv-SE")
}

export default function CreateCovenantModal(props) {

    const [roomId, setRoomId] = useState()
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        if (props.show){
            async function fetchRoom(){
                    const d = await callApi('/room/house/' + props.form.house_id, false, 'GET')
                    if (d.status) {
                        let r = d.data.filter((r) => r.status === 'EMPTY_ROOM')
                        setRooms(r)
                        if (r[0]) setRoomId(r[0].id)
                    }
                        
                    else 
                        props.toastNoti(d.msg)
            }

            fetchRoom()
        }
        
    }, [props.show])

    const createCovenant = () => {
        async function createCovenant(){
            const renter = {
                name: props.form.name,
                phone: props.form.phone,
                birthday: props.form.birthday,
                gender: props.form.gender, 
                state: 'RENTING'
            }

            const renterData = await callApi('/renter', renter, 'POST')

            if (renterData.status) {
                const covenant = {
                    room_id: roomId,
                    renter_id: renterData.data.newRenter.id,
                    duration: props.form.duration,
                    started_date: props.form.started_date,
                    end_date: props.endDate,
                    pre_pay: props.form.pre_pay,
                    pay_time: props.form.pay_time,
                    note: props.form.note
                }
                const d = await callApi('/covenant', covenant, 'POST')
                props.toastNoti(d.msg)
                if (d.status) 
                    props.setFetch(!props.fetch)
                else 
                    await callApi('/renter/' + renterData.data.newRenter.id, renter, 'DELETE')

            } else props.toastNoti(renterData.msg)
          }
        createCovenant()
        props.setShow(false)
    }

    return(
        <Modal className="modal-xl" show={props.show} onHide = {() => props.setShow(false)}>  
            <Modal.Header closeButton>  
                <Modal.Title>{'Thêm mới - ' + props.houseName}</Modal.Title>  
            </Modal.Header>  
            
            <Modal.Body>
                <div className="row d-flex align-items-center mb-2">

                    <div class="form-text"> Chọn phòng tiến hành ký hợp đồng </div>

                    <div className='col-6'>

                        <select class="form-select" value={roomId}
                            onChange={(e) => {setRoomId(e.target.value)}}>

                            {rooms && rooms.map(
                                (data) => (<option value={data.id}> {data.name} </option>)
                            )}

                        </select>
                    </div>

                </div>

                <div className="row d-flex align-items-center mb-2">

                    <div className="col-2" style={{fontWeight: 500}}> Người thuê * </div>

                    <div className="col-4">
                        <input type="text" class="form-control text-input" required placeholder='Họ và tên'
                            value={(props.form) ? props.form.name : undefined}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form,
                                    name: e.target.value
                                })
                            }}
                        />
                    </div>

                    <div className="col-2" style={{fontWeight: 500}}> Số điện thoại * </div>

                    <div className="col-4">
                        <input type="text" class="form-control text-input" required
                            value={(props.form) ? props.form.phone : undefined}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form,
                                    phone: e.target.value
                                })
                            }}
                        />
                    </div>

                </div>

                <div className="row d-flex align-items-center mb-2">

                    <div className="col-2" style={{fontWeight: 500}}> Ngày sinh </div>

                    <div className="col-4">
                        <input id="startDate" class="form-control" type="date" 
                            value={(props.form) ? props.form.birthday : undefined}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form,
                                    birthday: e.target.value
                                })
                            }}
                        />
                    </div>

                    <div className="col-2" style={{fontWeight: 500}}> Giới tính </div>

                    <div className="col-4">

                        <input class="form-check-input" type="radio" name="radio1" id="r11"
                            checked={(props.form) ? (props.form.gender == "male") : undefined}  
                            onChange={() => {props.setForm({...props.form, gender: 'male'})
                                }}
                        />
                        <label class="form-check-label ms-1" htmlFor="r11"> Nam </label>

                        <input class="form-check-input ms-3" type="radio" name="radio1" id="r12"
                            checked={(props.form) ? (props.form.gender == "female") : undefined}  
                            onChange={() => { props.setForm({...props.form, gender: 'female'})
                            }}
                        />
                        <label class="form-check-label ms-1" htmlFor="r12"> Nữ </label>

                    </div>
                </div>

                <div className="row d-flex align-items-center mb-2 overflow-auto h-40">

                    <div className="col-2" style={{fontWeight: 500}}> Thời hạn hợp đồng * </div>

                    <div className="col-4 d-flex align-items-center">
                        <input type="text" class="form-control text-input" required
                            value={props.form.duration}
                            onChange={(e) => {
                                if (props.form.started_date) 
                                    props.setEndDate(SumMonths(props.form.started_date, parseInt(e.target.value)))
                                props.setForm({
                                    ...props.form, 
                                    duration: e.target.value
                                })
                            }}
                        /> Tháng 
                    </div>

                    <div style={{fontWeight: 500, width: '12%'}}> Ngày bắt đầu * </div>

                    <div style={{width: '16%'}}>
                        <input class="form-control" type="date" 
                            value={props.form.started_date}
                            onChange={(e) => {
                                if(props.form.duration)    
                                    props.setEndDate(SumMonths(e.target.value, parseInt(props.form.duration)))
                                props.setForm({
                                    ...props.form,
                                    started_date: e.target.value
                                })
                            }}
                        />
                    </div>

                    <div style={{fontWeight: 500, width: '6%'}}> đến * </div>
                    <div style={{width: '16%'}}>
                        <input class="form-control" type="date" readonly
                            value={props.endDate}/>
                    </div>

                </div>

                <div className="row d-flex align-items-center mb-2 overflow-auto h-40">

                    <div className="col-2" style={{fontWeight: 500}}> Trả trước </div>

                    <div className="col-4 d-flex align-items-center">
                        <input type="text" class="form-control text-input"
                            value={props.form.pre_pay}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form, 
                                    pre_pay: e.target.value
                                })
                            }}
                        /> Đồng 
                    </div>

                    <div className="col-2" style={{fontWeight: 500}}> Ngày trả </div>

                    <div className="col-4">
                        <input type="date" class="form-control"
                            value={props.form.pay_time}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form, 
                                    pay_time: e.target.value
                                })
                            }}
                        />
                    </div>

                </div>

                <div className="row d-flex align-items-center mb-2 overflow-auto h-40">

                    <div className="col-2" style={{fontWeight: 500}}> Ghi chú </div>
                    <div className="col-6">
                        <input type="text" class="form-control text-input" 
                            value={props.form.note}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form, 
                                    note: e.target.value
                                })
                            }}
                        />
                    </div>

                </div>
            </Modal.Body>
            <Modal.Footer>  
                <Button variant="secondary" onClick = {() => {props.setShow(false)}}> Hủy bỏ </Button> 
                 
                <Button variant="primary" 
                    onClick = {createCovenant}

                > Thêm </Button>  
            </Modal.Footer>  
        </Modal> 
    )
}