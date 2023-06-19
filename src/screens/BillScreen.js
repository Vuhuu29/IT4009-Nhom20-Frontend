import { useState, useEffect } from "react";
import NarBar from "../components/NavBar";
import {Modal, Button} from 'react-bootstrap';

export default function BillScreen(){
  const [bills, setBills] = useState([]) 
  const [show, setShow] = useState(false);
  const [checked1, setChecked1] = useState([])
  const [checked2, setChecked2] = useState([])
  const [services, setServices] = useState([])

  useEffect(() => {
    // async function fetchDataBills(){
    //   try{
    //     const res = await fetch('http://localhost:3000/bill')
    //     const data = await res.json().data
    //     setBills(data)
    //   }catch(e){
    //       console.log(e)
    //   }
    // }
    // fetchDataBills()
  }, [])

  return (
      <>
        <NarBar/>
        <div className="container" style={{display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh'}}>
            <div className="d-flex rounded-1 flex-column" style={{backgroundColor: '#fff', width: '100%', padding: 20, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)'}}>
                <div className="d-flex flex-row align-items-center mb-2 border-bottom">
                    <div style={{fontSize: 30}}>
                        Quản lý khách thuê
                    </div>
                    <select class="form-select ms-auto w-25" aria-label=".form-select-lg example">
                        <option value="1">Khu trọ 1</option>
                        <option value="2">Khu trọ 2</option>
                        <option value="3">Khu trọ 3</option>
                    </select>
                </div>

                <div className="d-flex flex-row align-items-center mb-2">
                    <button type="button" class="btn btn-outline-info ms-auto">
                        Xuất nhiều
                    </button>
                    <button type="button" class="btn btn-outline-info ms-2">
                        Gửi mail nhiều
                    </button>
                    <button type="button" class="btn btn-outline-info ms-2">
                        Xuất excel nhiều
                    </button>
                    <button type="button" class="btn btn-outline-info ms-2">
                        Đánh dấu xóa
                    </button>
                    <button type="button" class="btn btn-outline-info ms-2">
                        Hủy đánh dấu
                    </button>

                    
                </div>

                <div className="d-flex flex-row align-items-center mb-2">
                  <div className="col-1" style={{fontWeight: 700}}>Tháng xuất</div>
                  <div className="col-4">
                      <input id="startDate" class="form-control" type="date" />
                  </div>
                  <div className="col-1 ms-2" style={{fontWeight: 700}}>Trạng thái</div>
                  <div className="col-5">
                    <input class="form-check-input" type="radio" name="radio2" id="r21"/>
                    <label class="form-check-label ms-1" for="r21">
                      Tất cả
                    </label>
                    <input class="form-check-input ms-2" type="radio" name="radio2" id="r22"/>
                    <label class="form-check-label ms-1" for="r22">
                      Chưa thanh toán
                    </label>
                    <input class="form-check-input ms-2" type="radio" name="radio2" id="r23"/>
                    <label class="form-check-label ms-1" for="r23">
                      Đã thanh toán
                    </label>
                    <input class="form-check-input ms-2" type="radio" name="radio2" id="r24"/>
                    <label class="form-check-label ms-1" for="r24">
                      Chưa xuất
                    </label>
                  </div>
              </div>

                <table class="table table-bordered rounded-1">
                  <thead>
                    <tr>
                      <th><input class="form-check-input" type="checkbox" checked={checked1.length === bills.length} 
                      onChange={(e) => {
                        if (e.target.checked) {
                          const allBills = bills.map((b) => b.name);
                          setChecked1(allBills);
                        } else {
                          setChecked1([]);
                        }
                      }}/></th>
                      <th scope="col">Sửa</th>
                      <th scope="col">Tháng / năm</th>
                      <th scope="col">Phòng</th>
                      <th scope="col">Người thuê</th>
                      <th scope="col">Loại hóa đơn</th>
                      <th scope="col">Thành tiền</th>
                      <th scope="col">Thanh toán</th>
                      <th scope="col">Dư / nợ mới</th>
                      <th scope="col">Ngày thanh toán</th>
                      <th scope="col">Đã thanh toán</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bills.map((data) => (
                      <tr>
                        <td><input class="form-check-input" type="checkbox" checked={checked1.includes(data.name)} 
                        onChange={(e) =>{
                          if (e.target.checked) {
                            setChecked1([...checked1, data.name]);
                          } else {
                            setChecked1(checked1.filter((item) => item !== data.name));
                          }
                        }}/></td>
                        <td><img src="./edit.svg" onClick = {() => setShow(true)}/></td>
                        <td scope="row">{data.time}</td>
                        <td>{data.room}</td>
                        <td>{data.renter}</td>
                        <td>{data.type}</td>
                        <td>{data.cost}</td>
                        <td>{data.pay}</td>
                        <td>{data.debt}</td>
                        <td>{data.pay_time}</td>
                        <td><input class="form-check-input" type="checkbox" checked={data.is_pay}/></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Modal className="modal-xl" show={show} onHide = {() => setShow(false)}>  
                    <Modal.Header closeButton>  
                      <Modal.Title>Xuất hóa đơn - Khu trọ 1</Modal.Title>  
                    </Modal.Header>  
                    
                    <Modal.Body>
                      <div className="row d-flex align-items-center mb-2">
                          <div className="col-2" style={{fontWeight: 500}}>Tháng năm</div>
                          <div className="col-4">
                              <input id="startDate" class="form-control" type="date" />
                          </div>
                          <div className="col-2" style={{fontWeight: 500}}>Mã hợp đồng</div>
                          <div className="col-4">
                              <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                          </div>
                          
                      </div>
                      <div className="row d-flex align-items-center mb-2">
                        <div className="col-2" style={{fontWeight: 500}}>Mã hóa đơn</div>
                        <div className="col-4">
                            <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                      </div>
                      <div className="row d-flex align-items-center mb-2">
                        <div className="ms-auto">Tổng tiền trả còn lại trước đó: 800000 đ</div>
                      </div>
                      <table class="table table-bordered rounded-1 mb-2">
                        <thead>
                          <tr>
                            <th><input class="form-check-input" type="checkbox"/></th>
                            <th scope="col">Tên dịch vụ</th>
                            <th scope="col">Đơn vị</th>
                            <th scope="col">Đơn giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Trả trước</th>
                            <th scope="col">Thành tiền</th>
                          </tr>
                        </thead>
                        <tbody>
                          {services.map((data) => (
                            <tr>
                              <td><input class="form-check-input" type="checkbox"/></td>
                              <td scope="row">{data.name}</td>
                              <td>{data.unit}</td>
                              <td>{data.cost}</td>
                              <td>{data.num}</td>
                              <td>{data.pre_pay}</td>
                              <td>{data.sum}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="row d-flex align-items-center mb-2">
                        <div className="col-2" style={{fontWeight: 500}}>Tổng tiền dịch vụ</div>
                        <div className="col-4">
                            <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                        <div style={{fontWeight: 500, width: '20%'}}>
                          Tất toán tiền trả trước
                        </div>
                        <div style={{width: '3%'}}><input class="form-check-input ms-auto" type="checkbox"/></div>
                        <div style={{width: '27%'}}>
                          <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                      </div>

                      <div className="row d-flex align-items-center mb-2">
                        <div className="col-2" style={{fontWeight: 500}}>Chi phí khác</div>
                        <div className="col-4">
                            <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                        <div style={{fontWeight: 500, width: '20%'}}>
                          Tất toán tiền đặt cọc
                        </div>
                        <div style={{width: '3%'}}><input class="form-check-input ms-auto" type="checkbox"/></div>
                        <div style={{width: '27%'}}>
                          <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                      </div>

                      <div className="row d-flex align-items-center mb-2">
                        <div className="col-2" style={{fontWeight: 500}}>Dư nợ cũ</div>
                        <div className="col-4">
                            <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                        <div className="col-2" style={{fontWeight: 500}}>Thanh toán</div>
                        <div className="col-4">
                            <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                      </div>

                      <div className="row d-flex align-items-center mb-2">
                        <div className="col-2" style={{fontWeight: 500}}>Tổng tiền</div>
                        <div className="col-4">
                            <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                        <div className="col-2" style={{fontWeight: 500}}>Dư nợ mới</div>
                        <div className="col-4">
                            <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                      </div>

                      <div className="row d-flex align-items-center mb-2">
                        <div className="col-2" style={{fontWeight: 500}}>Khấu trừ</div>
                        <div className="col-4">
                            <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                      </div>

                      <div className="row d-flex align-items-center mb-2">
                        <div className="col-2" style={{fontWeight: 500}}>Thành tiền</div>
                        <div className="col-4">
                            <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                      </div>

                      <div className="row d-flex align-items-center mb-2">
                        <div className="col-2" style={{fontWeight: 500}}>Chú thích</div>
                        <div className="col-4">
                            <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1"/>
                        </div>
                      </div>
                    </Modal.Body>  
                    <Modal.Footer>  
                      <Button variant="secondary" onClick = {() => setShow(false)}>Hủy bỏ</Button>  
                      <Button variant="primary" onClick = {() => setShow(false)}>Xuất hóa đơn</Button>  
                    </Modal.Footer>  
                  </Modal>
            </div>
        </div>
    </>
)}