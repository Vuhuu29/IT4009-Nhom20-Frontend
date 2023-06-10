import NarBar from "../components/NavBar";
import {Modal, Button} from 'react-bootstrap'; 
import { useState } from 'react'; 

export default function ServiceScreen(){
    const services = [
        {
          'name': 'Tiền phòng',
          'cost': '--',
          'unit': 'Phòng',
          'description': 'Tiền thuê phòng hàng tháng', 
          'is_stop': false,
        }, 
        {
            'name': 'Internet',
            'cost': '100 000đ',
            'unit': 'Phòng',
            'description': 'Tiền sử dụng wifi', 
            'is_stop': true,
        },
        {
            'name': 'Tiền điện',
            'cost': '4 500đ',
            'unit': 'Số KWh',
            'description': 'Tiền điện', 
            'is_stop': false,
        }, 
        {
            'name': 'Vệ sinh',
            'cost': '10 000',
            'unit': 'Người',
            'description': 'Tiền vệ sinh', 
            'is_stop': true,
        }
      ]
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false); 
    return (
        <>
        <NarBar/>
        <div className="container" style={{display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh'}}>
          <div className="d-flex rounded-1 flex-column" style={{backgroundColor: '#fff', width: '100%', padding: 20, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)'}}>
            <div className="d-flex flex-row align-items-center mb-2 border-bottom">
              <div style={{fontSize: 30}}>
                Quản lý dịch vụ
              </div>
              <select class="form-select ms-auto w-25" aria-label=".form-select-lg example">
                  <option value="1">Khu trọ 1</option>
                  <option value="2">Khu trọ 2</option>
                  <option value="3">Khu trọ 3</option>
              </select>
            </div>
            <div className="d-flex flex-row align-items-center mb-2">
                <button type="button" class="btn btn-outline-info ms-auto" onClick = {() => setShow1(true)}>
                  Thêm mới
                </button>
                <button type="button" class="btn btn-outline-info ms-2" >
                  Xóa nhiều
                </button>
            </div>
              

              <Modal className="modal-lg" show = {show1} onHide = {() => setShow1(false)}>  
                <Modal.Header closeButton>  
                  <Modal.Title>Thêm mới </Modal.Title>  
                </Modal.Header>  
                
                <Modal.Body>  
                    {['Tiền nhà', 'Tiền nước', 'Tiền điện', 'Internet', 'Máy giặt', 'Vệ sinh', 'Thang máy']
                    .map((data) => (<div><input class="form-check-input me-2 mb-1" type="checkbox"/>{data}</div>))}
                </Modal.Body>  
                
                <Modal.Footer>  
                  <Button variant="secondary" onClick = {() => setShow1(false)}>Hủy bỏ</Button>  
                  <Button variant="primary" onClick = {() => setShow1(false)}>Lưu lại</Button>  
                </Modal.Footer>  
              </Modal> 

              <Modal className="modal-lg" show = {show2} onHide = {() => setShow2(false)}>  
                <Modal.Header closeButton>  
                  <Modal.Title>Chỉnh sửa</Modal.Title>  
                </Modal.Header>  
                
                <Modal.Body>  
                    <div className="row mb-2">
                        <div className="col-3">
                            Khu trọ
                        </div>
                        <div className="col-5">
                            Khu trọ không tên
                        </div>
                        <div className="col-2">
                            Tạm dừng
                        </div>
                        <div className="col-2">
                            <input class="form-check-input me-2" type="checkbox"/>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-3">
                            Tên dịch vụ
                        </div>
                        <div className="col-5">
                            <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                        <div className="col-2">
                            Mặc định
                        </div>
                        <div className="col-2">
                            <input class="form-check-input me-2" type="checkbox"/>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-3">
                            Mô tả
                        </div>
                        <div className="col-9">
                            <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-3">
                            Đơn giá
                        </div>
                        <div className="col-5">
                            <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                        <div className="col-2">
                            Đơn vị
                        </div>
                        <div className="col-2">
                            <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                    </div>
                </Modal.Body>  
                
                <Modal.Footer>  
                  <Button variant="secondary" onClick = {() => setShow2(false)}>Hủy bỏ</Button>  
                  <Button variant="primary" onClick = {() => setShow2(false)}>Lưu lại</Button>  
                </Modal.Footer> 
              </Modal>
            
            <table class="table table-bordered rounded-1">
              <thead>
                <tr>
                  <th><input class="form-check-input" type="checkbox"/></th>
                  <th scope="col">Tên dịch vụ</th>
                  <th scope="col">Đơn giá</th>
                  <th scope="col">Đơn vị</th>
                  <th scope="col">Mô tả</th>
                  <th scope="col">Tạm dừng</th>
                  <th scope="col">Xóa</th>
                  <th scope="col">Sửa</th>
                </tr>
              </thead>
              <tbody>
                {services.map((data) => (
                  <tr>
                    <td><input class="form-check-input" type="checkbox"/></td>
                    <td scope="row">{data.name}</td>
                    <td>{data.cost}</td>
                    <td>{data.unit}</td>
                    <td>{data.description}</td>
                    <td><input class="form-check-input" type="checkbox" checked={data.is_stop}/></td>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                        </svg>
                    </td>
                    <td>
                      <button onClick = {() => setShow2(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                      </button>
                    
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
}