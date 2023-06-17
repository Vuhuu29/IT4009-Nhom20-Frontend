import { useState } from "react";
import NarBar from "../components/NavBar";
import { Modal, Button } from 'react-bootstrap';

export default function RenterScreen() {
  const renters = [
    {
      'name': 'Raiden Shortgun',
      'phone': '0123583',
      'status': 'Đã ngừng thuê',
      'room': 'Phòng không người'
    }
  ]
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="d-flex flex-row align-items-center mb-2 border-bottom">
        <div style={{ fontSize: 30 }}>
          Quản lý khách thuê
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
          Nhập exel
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

        <Modal centered className="modal-lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm mới</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="row d-flex align-items-center mb-2">
              <div className="col-2" style={{ fontWeight: 500 }}>Khu trọ</div>
              <div className="col-4">Dãy nhà trọ không tên</div>
            </div>
            <div className="row d-flex align-items-center mb-2">
              <div className="col-2" style={{ fontWeight: 500 }}>Khách thuê</div>
              <div className="col-4">
                <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" />
              </div>
            </div>
            <div className="row d-flex align-items-center mb-2">
              <div className="col-2" style={{ fontWeight: 500 }}>Số điện thoại</div>
              <div className="col-4">
                <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" />
              </div>
              <div className="col-2" style={{ fontWeight: 500 }}>Email</div>
              <div className="col-4">
                <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" />
              </div>
            </div>
            <div className="row d-flex align-items-center mb-2">
              <div className="col-2" style={{ fontWeight: 500 }}>Ngày sinh</div>
              <div className="col-4">
                <input id="startDate" class="form-control" type="date" />
              </div>
              <div className="col-2" style={{ fontWeight: 500 }}>Giới tính</div>
              <div className="col-4">
                <input class="form-check-input" type="radio" name="radio1" id="r11" />
                <label class="form-check-label ms-1" for="r11">
                  Nam
                </label>
                <input class="form-check-input ms-3" type="radio" name="radio1" id="r12" />
                <label class="form-check-label ms-1" for="r12">
                  Nữ
                </label>
              </div>
            </div>
            <div className="row d-flex align-items-center mb-2">
              <div className="col-2" style={{ fontWeight: 500 }}>Số CCCD</div>
              <div className="col-4">
                <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" />
              </div>
              <div className="col-2" style={{ fontWeight: 500 }}>Ngày cấp</div>
              <div className="col-4">
                <input id="startDate" class="form-control" type="date" />
              </div>
            </div>
            <div className="row d-flex align-items-center mb-2">
              <div className="col-2" style={{ fontWeight: 500 }}>Nơi cấp</div>
              <div className="col-4">
                <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" />
              </div>
              <div className="col-2" style={{ fontWeight: 500 }}>Hộ khẩu</div>
              <div className="col-4">
                <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" />
              </div>
            </div>
            <div className="row d-flex align-items-center mb-2">
              <div className="col-2" style={{ fontWeight: 500 }}>Nghề nghiệp</div>
              <div className="col-4">
                <input class="form-check-input" type="radio" name="radio2" id="r21" />
                <label class="form-check-label ms-1" for="r21">
                  Sinh viên
                </label>
                <input class="form-check-input ms-3" type="radio" name="radio2" id="r22" />
                <label class="form-check-label ms-1" for="r22">
                  Người đi làm
                </label>
              </div>
              <div className="col-2" style={{ fontWeight: 500 }}>Nơi công tác</div>
              <div className="col-4">
                <input type="text" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" id="input1" />
              </div>
            </div>
            <div className="row d-flex align-items-center mb-2">
              <div className="col-2" style={{ fontWeight: 500 }}>Ghi chú</div>
              <div className="col-8">
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
            <th scope="col">Tên khách thuê</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Phòng</th>
          </tr>
        </thead>
        <tbody>
          {renters.map((data) => (
            <tr>
              <td><input class="form-check-input" type="checkbox" /></td>
              <td scope="row">{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.status}</td>
              <td>{data.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}