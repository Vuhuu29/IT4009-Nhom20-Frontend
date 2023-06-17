import { useState } from "react";
import NarBar from "../components/NavBar";
import { Modal, Button } from 'react-bootstrap';

export default function DepositScreen() {
  const deposits = [
    {
      'room': 'Phòng không người',
      'renter': 'Người không tên',
      'phone': '666 666',
      'cost': '500 000',
      'time_start': '02/03/2023',
      'time_end': '10/03/2023'
    }
  ]
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="d-flex flex-row align-items-center mb-2 border-bottom">
        <div style={{ fontSize: 30 }}>
          Quản lý đặt cọc
        </div>
        <select class="form-select ms-auto w-25" aria-label=".form-select-lg example">
          <option value="1">Khu trọ 1</option>
          <option value="2">Khu trọ 2</option>
          <option value="3">Khu trọ 3</option>
        </select>
      </div>

      <div className="d-flex flex-row align-items-center mb-2">
        <button type="button" class="btn btn-outline-info ms-auto" onClick={() => setShow(true)}>
          Thêm mới
        </button>
        <button type="button" class="btn btn-outline-info ms-2">
          Tìm kiếm
        </button>
        <button type="button" class="btn btn-outline-info ms-2">
          Xuất excel
        </button>

        <Modal centered className="modal-lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm mới</Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <div className="row d-flex align-items-center mb-2">
              <div className="col-2" style={{ fontWeight: 500 }}>Khu trọ</div>
              <div className="col-4">Dãy nhà trọ không tên</div>
              <div className="col-2" style={{ fontWeight: 500 }}>Khách thuê</div>
              <div className="col-4">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label ms-1" for="flexRadioDefault1">
                  Thêm mới
                </label>
                <input class="form-check-input ms-3" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label class="form-check-label ms-1" for="flexRadioDefault2">
                  Đã tồn tại
                </label>
              </div>
            </div>
            <div className="row d-flex align-items-center mb-2">
              <div className="col-2" style={{ fontWeight: 500 }}>Phòng</div>
              <div className="col-4">
                <select class="form-select" aria-label=".form-select-lg example">
                  <option value="1">Khu trọ 1</option>
                  <option value="2">Khu trọ 2</option>
                  <option value="3">Khu trọ 3</option>
                </select>
              </div>
              <div className="col-2" style={{ fontWeight: 500 }}>Tên khách</div>
              <div className="col-4">
                <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" />
              </div>
            </div>

            <div className="row d-flex align-items-center mb-2">
              <div className="col-2" style={{ fontWeight: 500 }}>Ngày đặt cọc</div>
              <div className="col-4">
                <input id="startDate" class="form-control" type="date" />
              </div>
              <div className="col-2" style={{ fontWeight: 500 }}>Số CCCD</div>
              <div className="col-4">
                <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" />
              </div>
            </div>
            <div className="row d-flex align-items-center mb-2">
              <div className="col-2" style={{ fontWeight: 500 }}>Ngày hết hạn</div>
              <div className="col-4">
                <input id="startDate" class="form-control" type="date" />
              </div>
              <div className="col-2" style={{ fontWeight: 500 }}>Ngày sinh</div>
              <div className="col-4">
                <input id="startDate" class="form-control" type="date" />
              </div>
            </div>
            <div className="row d-flex align-items-center mb-2">
              <div className="col-2" style={{ fontWeight: 500 }}>Tiền đặt cọc</div>
              <div className="col-4">
                <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" />
              </div>
              <div className="col-2" style={{ fontWeight: 500 }}>Số điện thoại</div>
              <div className="col-4">
                <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" />
              </div>
            </div>
            <div className="row d-flex align-items-center mb-2">
              <div className="col-2" style={{ fontWeight: 500 }}>Ghi chú</div>
              <div className="col-4">
                <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" />
              </div>
              <div className="col-2" style={{ fontWeight: 500 }}>Email</div>
              <div className="col-4">
                <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" />
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>Hủy bỏ</Button>
            <Button variant="primary" onClick={() => setShow(false)}>Lưu lại</Button>
          </Modal.Footer>
        </Modal>

      </div>
      <table class="table table-bordered rounded-1">
        <thead>
          <tr>
            <th><input class="form-check-input" type="checkbox" /></th>
            <th scope="col">Tên phòng</th>
            <th scope="col">Người đặt cọc</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Tiền đặt cọc</th>
            <th scope="col">Ngày đặt cọc</th>
            <th scope="col">Ngày hết hạn</th>
          </tr>
        </thead>
        <tbody>
          {deposits.map((data) => (
            <tr>
              <td><input class="form-check-input" type="checkbox" /></td>
              <td scope="row">{data.room}</td>
              <td>{data.renter}</td>
              <td>{data.phone}</td>
              <td>{data.cost}</td>
              <td>{data.time_start}</td>
              <td>{data.time_end}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}