import {Modal, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react'; 
import callApi from '../../fetchApi/callApiHaveToken';

export default function UpdateDepositModal (props) {

    const updateDeposit = () => {
        async function updateDeposit(){
            let deposit = {
                tien_coc: props.form.tien_coc,
                start_time: props.form.start_time,
                end_time: props.form.end_time,
                note: props.form.note
            }
            
            const d = await callApi('/deposit/' + props.form.id, deposit, 'PUT')
            
            props.toastNoti(d.msg)
            if (d.status) 
                props.setFetch(!props.fetch)
        }
        updateDeposit()
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
                        {(props.form) ? props.form.room_name : undefined}
                    </div>

                </div>
                
                <div className="row d-flex align-items-center mb-2">

                    <div className="col-2" style={{fontWeight: 500}}> Người thuê * </div>

                    <div className="col-4">
                        {(props.form) ? props.form.renter_name : undefined}
                    </div>

                    <div className="col-2" style={{fontWeight: 500}}> Số điện thoại * </div>

                    <div className="col-4">
                        {(props.form) ? props.form.renter_phone : undefined}
                    </div>

                </div>

                <div className="row d-flex align-items-center mb-2">

                    <div className="col-2" style={{fontWeight: 500}}> Ngày sinh </div>

                    <div className="col-4">
                        {(props.form) ? props.form.birthday : undefined}
                    </div>

                    <div className="col-2" style={{fontWeight: 500}}> Giới tính </div>

                    <div className="col-4">
                        {(props.form) ? ((props.form.renter_gender == 'male') ? 'Nam' : 'Nữ' ) : undefined}
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
                        onClick = {updateDeposit}
    
                    > Lưu lại </Button>  
                </Modal.Footer>  
        </Modal> 
    )
}