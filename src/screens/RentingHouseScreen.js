import NarBar from "../components/NavBar";
import {Modal, Button} from 'react-bootstrap'; 
import { useState } from 'react'; 

export default function RentingHouseScreen(){
  const houses = [
    {
      'name': 'Nhà trọ 0 đồng',
      'address': 'Số 7, Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội',
      'description': 'Nhà đã phá, không cho thuê nữa'
    }, 
    {
      'name': 'Nhà trọ dành cho người có tiền',
      'address': 'Số 7, Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội',
      'description': 'Không thừa tiền không nên thuê'
    }
  ]
  const services = ['Tiền nhà', 'Tiền nước', 'Tiền điện', 'Internet', 'Máy giặt', 'Vệ sinh', 'Thang máy']
  const [show, setShow] = useState(false);  
  return (
    <>
      <NarBar/>
      <div className="container" style={{display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh'}}>
        <div className="d-flex rounded-1 flex-column" style={{backgroundColor: '#fff', width: '100%', padding: 20, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)'}}>
          <div className="d-flex flex-row align-items-center mb-2">
            <div style={{fontSize: 30}}>
              Danh sách khu trọ
            </div>
            <button type="button" class="btn btn-outline-info ms-auto" onClick = {() => setShow(true)}>
              Thêm mới
            </button>
            <Modal className="modal-lg" show={show} onHide = {() => setShow(false)}>  
              <Modal.Header closeButton>  
                <Modal.Title>Thêm mới khu trọ</Modal.Title>  
              </Modal.Header>  
              
              <Modal.Body>  
                <div className="row d-flex align-items-center">
                    <div className="col-3">
                      Tên khu / tòa nhà
                    </div>
                    <div className="col-9">
                      <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" placeholder="Dãy nhà trọ không tên"/>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-3">
                      Địa chỉ
                    </div>
                    <div className="col-9">
                      <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" placeholder="Nơi nào đó"/>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-3">
                      Mô tả
                    </div>
                    <div className="col-9">
                      <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" placeholder="Khu trọ trông như nào vậy"/>
                    </div>
                </div>
                <div className="row d-flex align-items-start  mt-4">
                    <div className="col-3">
                      Danh sách dịch vụ theo khu
                    </div>
                    <div className="col-9" style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
                      {services.map((data) => (<div><input class="form-check-input me-2 mb-1" type="checkbox"/>{data}</div>))}
                    </div>
                </div>
                <div className="row d-flex align-items-start  mt-4">
                    <div className="col-3">
                        Nhắc báo
                    </div>
                    <div className="col-9">
                      {['Nhập điện nước', 'Xuất hóa đơn', 'Đi thu tiền', 'Hết hạn hợp đồng']
                      .map((data) => (
                        <div className="d-flex flex-row align-items-center mb-1">
                            <input class="form-check-input me-2 mb-1" type="checkbox"/>
                            {data}
                        
                          <div className="ms-auto">
                            Từ ngày
                            <input className="mx-1" style={{borderBottom: '1px solid rgb(222, 226, 230)', borderTop: 0, borderLeft: 0, borderRight:0}} size={1}/>
                            đến ngày
                            <input className="mx-1" style={{borderBottom: '1px solid rgb(222, 226, 230)', borderTop: 0, borderLeft: 0, borderRight:0}} size={1}/>
                            Hàng tháng
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
              </Modal.Body>  
              
              <Modal.Footer>  
                <Button variant="secondary" onClick = {() => setShow(false)}>Hủy bỏ</Button>  
                <Button variant="primary" onClick = {() => setShow(false)}>Lưu lại</Button>  
              </Modal.Footer>  
            </Modal> 
          </div>
          
          <table class="table table-bordered rounded-1">
            <thead>
              <tr>
                <th><input class="form-check-input" type="checkbox"/></th>
                <th scope="col">Tên khu / tòa nhà</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Mô tả</th>
              </tr>
            </thead>
            <tbody>
              {houses.map((data) => (
                <tr>
                  <td><input class="form-check-input" type="checkbox"/></td>
                  <td scope="row">{data.name}</td>
                  <td>{data.address}</td>
                  <td>{data.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
    
    
  )
}