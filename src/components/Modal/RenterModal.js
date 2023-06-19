import { Modal, Button } from "react-bootstrap"

export default function RenterModal (props) {


    return (
        <Modal className="modal-lg" show={props.show} onHide = {() => props.setShow(false)}>  
            <Modal.Header closeButton>  
                <Modal.Title> Sửa thông tin </Modal.Title>  
            </Modal.Header>  
            
            <Modal.Body>
                <div className="row d-flex align-items-center mb-2">
                    <div className="col-2" style={{fontWeight: 500}}> Khu trọ </div>
                    <div className="col-4">{props.houseName}</div>
                </div>

                <div className="row d-flex align-items-center mb-2">
                    <div className="col-2" style={{fontWeight: 500}}> Họ và tên </div>
                    <div className="col-4">
                        <input type="text" class="form-control text-input" required
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

                <div className="row d-flex align-items-center mb-2">

                    <div className="col-2" style={{fontWeight: 500}}> Số điện thoại </div>
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

                    <div className="col-2" style={{fontWeight: 500}}> Email </div>
                    <div className="col-4">
                        <input type="text" class="form-control text-input"
                            value={(props.form) ? props.form.email : undefined}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form,
                                    email: e.target.value
                                })
                            }}
                        />
                    </div>

                </div>

                <div className="row d-flex align-items-center mb-2">

                    <div className="col-2" style={{fontWeight: 500}}> Ngày sinh </div>
                    <div className="col-4">
                        <input id="startDate" class="form-control" type="date" 
                            value={(props.form) ? props.form.name : undefined}
                            onChange={(e) => {
                                props.setForm({
                                    ...props.form,
                                    name: e.target.value
                                })
                            }}
                        />
                    </div>

                    <div className="col-2" style={{fontWeight: 500}}> Giới tính </div>
                    <div className="col-4">

                        <input class="form-check-input" type="radio" name="radio1" id="r11"
                            checked={(props.form) ? (props.form.gender == "male") : undefined}  
                            onChange={() => props.setForm({...props.form, gender: 'male'})}
                        />
                        <label class="form-check-label ms-1" for="r11"> Nam </label>

                        <input class="form-check-input ms-3" type="radio" name="radio1" id="r12"
                            checked={(props.form) ? (props.form.gender == "female") : undefined}  
                            onChange={() => props.setForm({...props.form, gender: 'female'})}
                        />
                        <label class="form-check-label ms-1" for="r12"> Nữ </label>

                    </div>
                </div>

                <div className="row d-flex align-items-center mb-2">

                    <div className="col-2" style={{fontWeight: 500}}> Ghi chú </div>
                    <div className="col-8">
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
                <Button variant="secondary" onClick = {() => props.setShow(false)}> Hủy bỏ </Button>  
                <Button variant="primary" onClick = {() => props.setShow(false)}> Lưu </Button>  
            </Modal.Footer>  
        </Modal> 
    )
}