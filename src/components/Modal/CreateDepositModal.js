import {Modal, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react'; 
import callApi from '../../fetchApi/callApiHaveToken';

export default function CreateDepositModal (props) {

    const [roomId, setRoomId] = useState()
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        if (props.show){
            async function fetchRoom(){
                const d = await callApi('/room/house/' + props.form.house_id, false, 'GET')
                if (d.status) 
                setRooms(d.data)
                else 
                props.toastNoti(d.msg)
            }

            fetchRoom()
        }
        
    }, [props.show])

    const createDeposit = () => {
        async function createDeposit(){
            const renter = {
                name: props.form.name,
                phone: props.form.phone,
                birthday: props.form.birthday,
                gender: props.form.gender, 
                state: 'DEPOSITING'
            }

            const renterData = await callApi('/renter', renter, 'POST')

            if (renterData.status) {
                const deposit = {
                    room_id: roomId,
                    renter_id: renterData.data.newRenter.id,
                    tien_coc: props.form.tien_coc,
                    start_time: props.form.start_time,
                    end_time: props.form.end_time,
                    note: props.form.note
                }
                const d = await callApi('/deposit', deposit, 'POST')
                props.toastNoti(d.msg)
                if (d.status) 
                    props.setFetch(!props.fetch)

            } else props.toastNoti(renterData.msg)
          }
        createDeposit()
        props.setShow(false)
    }

    return (
        <Modal className="modal-xl" show={props.show} onHide = {() => props.setShow(false)}>  
            <Modal.Header closeButton>  
                <Modal.Title> Thêm mới </Modal.Title>  
            </Modal.Header>  
            
            <Modal.Body>  
                
                <div className="row d-flex align-items-center mb-2">

                    <div className="col-2" style={{fontWeight: 500}}> Khu trọ </div>

                    <div className="col-4"> {props.houseName} </div>
                    
                </div>

                <div className="row d-flex align-items-center mb-2">

                    <div className="col-2" style={{fontWeight: 500}}> Phòng </div>
                    <div className="col-4">
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
                        <input id="startDate" class="form-control text-input" type="date" 
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

                    <div className="col-2" style={{fontWeight: 500}}> Tiền cọc * </div>

                    <div className="col-4">
                        <input type="text" class="form-control text-input"
                            value={(props.form) ? props.form.tien_coc : undefined}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form, 
                                    tien_coc: e.target.value
                                })
                            }}
                        />
                    </div>

                </div>

                <div className="row d-flex align-items-center mb-2 overflow-auto h-40">

                    <div className="col-2" style={{fontWeight: 500}}> Ngày đặt cọc * </div>

                    <div className="col-4 d-flex align-items-center">
                        <input type="date" class="form-control text-input" required
                            value={(props.form) ? props.form.start_time : undefined}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form, 
                                    start_time: e.target.value
                                })
                            }}
                        />
                    </div>

                    <div className="col-2" style={{fontWeight: 500}}> Ngày hết hạn * </div>

                    <div className="col-4 d-flex align-items-center">
                        <input type="date" class="form-control text-input" required
                            value={(props.form) ? props.form.end_time : undefined}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form, 
                                    end_time: e.target.value
                                })
                            }}
                        />
                    </div>

                </div>

                <div className="row d-flex align-items-center mb-2 overflow-auto h-40">

                    <div className="col-2" style={{fontWeight: 500}}> Ghi chú </div>
                    <div className="col-6">
                        <input type="text" class="form-control text-input" 
                            value={(props.form) ? props.form.note : undefined}
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
                        onClick = {createDeposit}
    
                    > Thêm </Button>  
                </Modal.Footer>  
        </Modal> 
    )
}