import NarBar from "../components/NavBar";
import {Modal, Button} from 'react-bootstrap'; 
import { useState } from 'react'; 

export default function RentingRoomScreen(){
    const room = [
        {
          'name': 'Phòng có ma', 
          'max_num': 5,
          'cost': '200 000 đ',
          'state': 'Còn trống',
          'description': 'Cân nhắc thuê nếu sợ ma'
        },
        {
            'name': 'Phòng chống trộm', 
            'max_num': 5,
            'cost': '800 000 đ',
            'state': 'Còn trống',
            'description': 'Cân nhắc trước khi trộm'
        }
      ]
      const [show, setShow] = useState(false); 
        return (
          <>
            <NarBar/>
            <div className="container" style={{display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh'}}>
              <div className="d-flex rounded-1 flex-column" style={{backgroundColor: '#fff', width: '100%', padding: 20, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)'}}>
                <div className="d-flex flex-row align-items-center mb-2 border-bottom">
                    <div style={{fontSize: 30}}>
                        Danh sách phòng trọ
                    </div>
                    <select class="form-select ms-auto w-25" aria-label=".form-select-lg example">
                        <option value="1">Khu trọ 1</option>
                        <option value="2">Khu trọ 2</option>
                        <option value="3">Khu trọ 3</option>
                    </select>
                </div>

                <div className="d-flex flex-row align-items-center mb-2">
                    <button type="button" class="btn btn-outline-info ms-auto" onClick = {() => setShow(true)}>
                        Thêm mới
                    </button>

                    <Modal className="modal-lg" show={show} onHide = {() => setShow(false)}>  
                        <Modal.Header closeButton>  
                            <Modal.Title>Thêm mới phòng</Modal.Title>  
                        </Modal.Header>  
                        
                        <Modal.Body>  
                            <div className="row d-flex align-items-center mb-2">
                                <div className="col-3">
                                    Tên Khu / tòa nhà
                                </div>
                                <div className="col-9">
                                    Dãy nhà trọ không tên 
                                </div>
                            </div>
                            {['Tên phòng', 'Số người ở tối đa', 'Đơn giá', 'Mô tả']
                            .map((data) => (
                                <div className="row d-flex align-items-center">
                                <div className="col-3">{data}</div>
                                <div className="col-9">
                                    <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0" id="input1"/>
                                </div>
                            </div>
                            ))}
                        </Modal.Body>  
                        
                        <Modal.Footer>  
                            <Button variant="secondary" onClick = {() => setShow(false)}>Hủy bỏ</Button>  
                            <Button variant="primary" onClick = {() => setShow(false)}>Lưu lại</Button>  
                        </Modal.Footer>  
                    </Modal> 

                    <button type="button" class="btn btn-outline-info ms-2">
                        Thêm nhiều
                    </button>
                    <button type="button" class="btn btn-outline-info ms-2">
                        Nhập Excel
                    </button>
                    <button type="button" class="btn btn-outline-info ms-2">
                        Xuất excel
                    </button>
                    <button type="button" class="btn btn-outline-info ms-2">
                        Tìm kiếm
                    </button>
                    <button type="button" class="btn btn-outline-info ms-2">
                        Xóa nhiều
                    </button>
                </div>
                
                <table class="table table-bordered rounded-1">
                  <thead>
                    <tr>
                      <th><input class="form-check-input" type="checkbox"/></th>
                      <th scope="col">Tên phòng</th>
                      <th scope="col">Số người ở tối đa</th>
                      <th scope="col">Đơn giá</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Mô tả</th>
                    </tr>
                  </thead>
                  <tbody>
                    {room.map((data) => (
                      <tr>
                        <td><input class="form-check-input" type="checkbox"/></td>
                        <td scope="row">{data.name}</td>
                        <td>{data.max_num}</td>
                        <td>{data.cost}</td>
                        <td>{data.state}</td>
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