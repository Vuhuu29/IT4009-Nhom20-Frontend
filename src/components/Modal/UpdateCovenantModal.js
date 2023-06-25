import {Modal, Button} from 'react-bootstrap';
import callApi from '../../fetchApi/callApiHaveToken';

export default function UpdateCovenantModal(props) {

    const updateCovenant = () => {
        async function updateCovenant(){
            let covenant = {
                duration: props.form.duration, 
                pay_time: props.form.pay_time, 
                pre_pay: props.form.pre_pay, 
                note: props.form.note, 
                started_date: props.form.started_date, 
                end_date: props.form.end_date
            }
            
            const d = await callApi('/covenant/' + props.form.id, covenant, 'PUT')
            
            props.toastNoti(d.msg)
            if (d.status) 
                props.setFetch(!props.fetch)
        }
        updateCovenant()
        props.setShow(false)
    }

    return(
        <Modal className="modal-xl" show={props.show} onHide = {() => props.setShow(false)}>  
            <Modal.Header closeButton>  
                <Modal.Title> Sửa hợp đồng </Modal.Title>  
            </Modal.Header>  
            
            <Modal.Body>
                <div className="row d-flex align-items-center mb-4">

                    <div className="col-2" style={{fontWeight: 500}}> Phòng </div>

                    <div className="col-4">
                        {(props.form) ? props.form.room_name : undefined}
                    </div>

                </div>

                <div className="row d-flex align-items-center mb-4">

                    <div className="col-2" style={{fontWeight: 500}}> Người thuê </div>

                    <div className="col-4">
                        {(props.form) ? props.form.renter_name : undefined}
                    </div>

                    <div className="col-2" style={{fontWeight: 500}}> Số điện thoại </div>

                    <div className="col-4">
                        {(props.form) ? props.form.renter_phone : undefined}
                    </div>

                </div>

                <div className="row d-flex align-items-center mb-4">

                    <div className="col-2" style={{fontWeight: 500}}> Ngày sinh </div>

                    <div className="col-4">
                        {(props.form) ? props.form.birthday : undefined}
                    </div>

                    <div className="col-2" style={{fontWeight: 500}}> Giới tính </div>

                    <div className="col-4">
                        {(props.form) ? props.form.renter_gender : undefined}
                    </div>
                </div>

                <div className="row d-flex align-items-center mb-2 overflow-auto h-40">

                    <div className="col-2" style={{fontWeight: 500}}> Thời hạn hợp đồng * </div>

                    <div className="col-4 d-flex align-items-center">
                        <input type="text" class="form-control text-input" required
                            value={props.form.duration}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form, 
                                    duration: e.target.value
                                })
                            }}
                        /> Tháng 
                    </div>

                    <div style={{fontWeight: 500, width: '12%'}}> Ngày bắt đầu * </div>

                    <div style={{width: '16%'}}>
                        <input class="form-control" type="date" required
                            value={props.form.started_date}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form,
                                    started_date: e.target.value
                                })
                            }}
                        />
                    </div>

                    <div style={{fontWeight: 500, width: '6%'}}> đến * </div>
                    <div style={{width: '16%'}}>
                        <input class="form-control" type="date" required
                            value={props.form.end_date}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form,
                                    end_date: e.target.value
                                })
                            }}
                        />
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
                <Button variant="secondary" onClick = {() => {props.setShow(false)}}> 
                    Hủy bỏ 
                </Button> 
                 
                <Button variant="primary" onClick = {updateCovenant}> 
                    Lưu lại 
                </Button>  
            </Modal.Footer>  
        </Modal> 
    )
}