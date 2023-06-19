import {Modal, Button} from 'react-bootstrap'
import callApi from '../../fetchApi/callApiHaveToken'
export default function ServiceModal(props) {

    const createService = () => {
        async function createService(){
          try{
            const d = await callApi('/service', props.form, 'POST')
            if (d.status) {
              props.setFetch(!props.fetch)
            } else {
              //xử lý error
            }
          }catch(e){
              console.log(e)
          }
        }
        createService()
      }
  
      const updateService = () => {
        async function updateService(){
          try{
            const d = await callApi('/service/' + props.form.id, props.form, 'PUT')
            if (d.status) {
              props.setFetch(!props.fetch)
            } else {
              //xử lý error
            }
          }catch(e){
              console.log(e)
          }
        }
        updateService()
      }

    return (
        <Modal className="modal-lg" show = {props.show} onHide = {() => props.setShow(false)}>  
            <Modal.Header closeButton>  
            <Modal.Title>Chỉnh sửa</Modal.Title>  
            </Modal.Header>  
            
            <Modal.Body>  
                <div className="row mb-2">
                </div>
                <div className="row mb-2">
                    <div className="col-3">
                        Tên dịch vụ
                    </div>
                    <div className="col-9">
                        <input type="text" class="form-control text-input" required
                        value={(props.form) ? props.form.name : undefined}
                        onChange={(e) => {
                          props.setForm({
                              ...(props.form),
                              name: e.target.value
                          })
                        }}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-3">
                        Mô tả
                    </div>
                    <div className="col-9">
                        <input type="text" class="form-control text-input" required
                        value={(props.form) ? props.form.description : undefined}
                        onChange={(e) => {
                          props.setForm({
                              ...(props.form),
                              description: e.target.value
                          })
                        }}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-3">
                        Đơn giá
                    </div>
                    <div className="col-5">
                        <input type="text" class="form-control text-input" required
                        value={(props.form) ? props.form.cost : undefined}
                        onChange={(e) => {
                          props.setForm({
                              ...(props.form),
                              cost: e.target.value
                          })
                        }}/>
                    </div>
                    <div className="col-2">
                        Đơn vị
                    </div>
                    <div className="col-2">
                        <input type="text" class="form-control text-input" 
                        value={(props.form) ? props.form.unit : undefined}
                        onChange={(e) => {
                          props.setForm({
                              ...(props.form),
                              unit: e.target.value
                          })
                        }}/>
                    </div>
                </div>
            </Modal.Body>  
            
            <Modal.Footer>  
            <Button variant="secondary" onClick = {() => props.setShow(false)}>Hủy bỏ</Button>  
            <Button variant="primary" 
                onClick = {() => {
                    if(props.a === "Thêm")
                        createService()
                    else 
                        updateService()
                    props.setShow(false)
                    props.setFetch(!props.fetch)
                }}>Lưu lại</Button>  
            </Modal.Footer> 
        </Modal>
    )
 }