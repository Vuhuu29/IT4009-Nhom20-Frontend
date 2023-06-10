import { useState } from "react";
import NarBar from "../components/NavBar";
import {Modal, Button} from 'react-bootstrap';

export default function CovenantScreen(){
    const covenants = [
      {
        'room': '007',
        'renter': 'Blake Mitchell',
        'duration': '6 months',
        'time_start': '01/03/2023',
        'time_end': '30/09/2023',
        'deposit': '700 000',
        'pre_pay': '2 000 000'
      }
    ] 
    const services = [
      {
        'name': 'Tiền phòng',
        'cost': '--',
        'unit': 'Phòng',
        'description': 'Tiền thuê phòng hàng tháng', 
        'num': 1,
      }, 
      {
          'name': 'Internet',
          'cost': '100 000đ',
          'unit': 'Phòng',
          'description': 'Tiền sử dụng wifi', 
          'num': 1,
      },
      {
          'name': 'Tiền điện',
          'cost': '4 500đ',
          'unit': 'Số KWh',
          'description': 'Tiền điện', 
          'num': 1,
      }, 
      {
          'name': 'Vệ sinh',
          'cost': '10 000',
          'unit': 'Người',
          'description': 'Tiền vệ sinh', 
          'num': 3,
      }
    ]
    const [show, setShow] = useState(false)
    return (
      <>
        <NarBar/>
          <div className="container" style={{display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh'}}>
            <div className="d-flex rounded-1 flex-column" style={{backgroundColor: '#fff', width: '100%', padding: 20, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)'}}>
              <div className="d-flex flex-row align-items-center mb-2 border-bottom">
                  <div style={{fontSize: 30}}>
                      Quản lý hợp đồng
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
                  <button type="button" class="btn btn-outline-info ms-2">
                      Xuất excel
                  </button>
                  <button type="button" class="btn btn-outline-info ms-2">
                      Tìm kiếm
                  </button>
                  <button type="button" class="btn btn-outline-info ms-2">
                      Đánh dấu xóa
                  </button>
                  <button type="button" class="btn btn-outline-info ms-2">
                      Hủy đánh dấu
                  </button>
                  <button type="button" class="btn btn-outline-info ms-2">
                      Xóa nhiều
                  </button>

                  <Modal className="modal-xl" show={show} onHide = {() => setShow(false)}>  
                    <Modal.Header closeButton>  
                        <Modal.Title>Thêm mới - Khu trọ không tên</Modal.Title>  
                    </Modal.Header>  
                    
                    <Modal.Body>
                      <div className="row d-flex align-items-center mb-2">
                          <div className="col-6 d-flex flex-column">
                            <div class="form-text">Chọn phòng tiến hành ký hợp đồng</div>
                            <select class="form-select" aria-label=".form-select-lg example">
                                <option value="1">Phòng 007</option>
                                <option value="2">Phòng 113</option>
                                <option value="3">Phòng 101</option>
                            </select>
                          </div>
                          <div className="col-6 d-flex flex-column">
                            <div class="form-text">Loại hợp đồng</div>
                            <div>
                              <input class="form-check-input" type="radio" checked disabled/>
                              <label class="form-check-label ms-1">
                                Thuê phòng
                              </label>
                            </div>
                            
                          </div>
                      </div>
                      <div className="row d-flex align-items-center mb-2 overflow-auto h-40">
                        <div class="form-text">Chọn dịch vụ</div>
                        <table class="table table-bordered rounded-1">
                          <thead>
                            <tr>
                              <th><input class="form-check-input" type="checkbox"/></th>
                              <th scope="col">Tên dịch vụ</th>
                              <th scope="col">Mô tả</th>
                              <th scope="col">Đơn giá</th>
                              <th scope="col">Đơn vị</th>
                              <th scope="col">Số lượng</th>
                            </tr>
                          </thead>
                          <tbody>
                            {services.map((data) => (
                              <tr>
                                <td><input class="form-check-input" type="checkbox"/></td>
                                <td scope="row">{data.name}</td>
                                <td>{data.description}</td>
                                <td>{data.cost}</td>
                                <td>{data.unit}</td>
                                <td>{data.num}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="row d-flex align-items-center mb-2 overflow-auto h-40">
                        <div className="col-2" style={{fontWeight: 500}}>Người đại diện</div>
                        <div className="col-4">
                          <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                        <div className="col-2" style={{fontWeight: 500}}>Tiền đặt cọc</div>
                        <div className="col-4">
                          <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                      </div>

                      <div className="row d-flex align-items-center mb-2 overflow-auto h-40">
                        <div className="col-2" style={{fontWeight: 500}}>Thời hạn hợp đồng</div>
                        <div className="col-4">
                          <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                        <div style={{fontWeight: 500, width: '12%'}}>Ngày bắt đầu</div>
                        <div style={{width: '17%'}}>
                            <input id="startDate" class="form-control" type="date" />
                        </div>
                        <div style={{fontWeight: 500, width: '4%'}}>đến</div>
                        <div style={{width: '17%'}}>
                            <input id="startDate" class="form-control" type="date" />
                        </div>
                      </div>

                      <div className="row d-flex align-items-center mb-2 overflow-auto h-40">
                        <div className="col-2" style={{fontWeight: 500}}>Kỳ thanh toán</div>
                        <div className="col-4">
                          <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                      </div>

                      <div className="row d-flex align-items-center mb-2 overflow-auto h-40">
                        <div className="col-2" style={{fontWeight: 500}}>Ghi chú (nếu có)</div>
                        <div className="col-4">
                          <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>  
                        <Button variant="secondary" onClick = {() => setShow(false)}>Hủy bỏ</Button>  
                        <Button variant="primary" onClick = {() => setShow(false)}>Lưu lại</Button>  
                    </Modal.Footer>  
                  </Modal> 
              </div>

              <div className="d-flex flex-row align-items-center mb-2">
                <div className="col-2" style={{fontWeight: 700}}>Loại hợp đồng</div>
                <div className="col-4">
                  <input class="form-check-input" type="radio" name="radio1"/>
                  <label class="form-check-label ms-1" for="flexRadioDefault1">
                    Thuê phòng
                  </label>
                  <input class="form-check-input ms-2" type="radio" name="radio1"/>
                  <label class="form-check-label ms-1" for="flexRadioDefault2">
                    Đặt cọc
                  </label>
                  <input class="form-check-input ms-2" type="radio" name="radio1" checked/>
                  <label class="form-check-label ms-1" for="flexRadioDefault2">
                    Tất cả
                  </label>
                </div>
                <div className="col-2" style={{fontWeight: 700}}>Trạng thái</div>
                <div className="col-4">
                  <input class="form-check-input" type="radio" name="radio2"/>
                  <label class="form-check-label ms-1" for="flexRadioDefault1">
                    Còn hiệu lực
                  </label>
                  <input class="form-check-input ms-2" type="radio" name="radio2"/>
                  <label class="form-check-label ms-1" for="flexRadioDefault2">
                    Hết hiệu lực
                  </label>
                  <input class="form-check-input ms-2" type="radio" name="radio2" checked/>
                  <label class="form-check-label ms-1" for="flexRadioDefault2">
                    Tất cả
                  </label>
                </div>
              </div>

              <table class="table table-bordered rounded-1">
                  <thead>
                    <tr>
                      <th><input class="form-check-input" type="checkbox"/></th>
                      <th scope="col">Phòng</th>
                      <th scope="col">Người đại diện</th>
                      <th scope="col">Thời hạn hợp đồng</th>
                      <th scope="col">Ngày bắt đầu</th>
                      <th scope="col">Ngày hết hạn</th>
                      <th scope="col">Tiền đặt cọc</th>
                      <th scope="col">Trả trước</th>
                    </tr>
                  </thead>
                  <tbody>
                    {covenants.map((data) => (
                      <tr>
                        <td><input class="form-check-input" type="checkbox"/></td>
                        <td scope="row">{data.room}</td>
                        <td>{data.renter}</td>
                        <td>{data.duration}</td>
                        <td>{data.time_start}</td>
                        <td>{data.time_end}</td>
                        <td>{data.deposit}</td>
                        <td>{data.pre_pay}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              
            </div>
          </div>  
      </>
    )
}