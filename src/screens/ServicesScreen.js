import NarBar from "../components/NavBar";
import { useState, useEffect } from 'react';
import ServiceModal from "../components/Modal/ServiceModal";
import callApi from "../fetchApi/callApiHaveToken";
import AddServiceIntoRoomModal from "../components/Modal/AddServiceIntoRoomModal";

export default function ServiceScreen(props) {
  const [services, setServices] = useState([])
  const [checked1, setChecked1] = useState([])
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [form1, setForm1] = useState({})
  const [form2, setForm2] = useState({})
  const [fetch, setFetch] = useState(true)

  const [houses, setHouses] = useState([])
  const [houseId, setHouseId] = useState()
  const [showAddServiceIntoRoom, setShowAddServiceIntoRoom] = useState(false)
  const [room, setRoom] = useState()

  async function fetchHouse() {
    try {
      const d = await callApi('/house', false, 'GET')
      if (d.status) {
        setHouses(d.data)
        if (d.length != 0)
          setHouseId(d.data[0].id)

      } else {
        //xử lý error
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function fetchServices() {
    try {
      const d = await callApi('/service/house/' + houseId, false, 'GET')
      if (d.status) {
        setServices(d.data)
      } else {
        //xử lý error
      }
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    fetchHouse()
  }, [])
  
  useEffect(() => {
    if(houses.length != 0)
      setHouseId(houses[0].id)
  }, [houses])


  useEffect(() => {
    if (houseId)
    fetchServices()
  }, [houseId,fetch])


  const deleteServices = () => {
    async function deleteServices() {
      try {
        for (var i in checked1) {
          console.log(checked1)
          const d = await callApi('/service/' + checked1[i], false, 'DELETE')
          if (d.status) {
            setChecked1([])
            setFetch(!fetch)
          } else {
            //xử lý error
          }
        }
      } catch (e) {
        console.log(e)
      }
    }
    deleteServices()
  }

  return (
    <>
      <NarBar />
      <div className="container" style={{ display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh' }}>
        <div className="d-flex rounded-1 flex-column" style={{ backgroundColor: '#fff', width: '100%', padding: 20, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)' }}>
          <div className="d-flex flex-row align-items-center mb-2 border-bottom">
            <div style={{ fontSize: 30 }}>
              Quản lý dịch vụ
            </div>
            {/* Chọn khu trọ */}
            <select class="form-select ms-auto w-25" value={houseId}
              onChange={(e) => { setHouseId(e.target.value) }}>
              {houses && houses.map((data) => (<option key={data.id} value={data.id}>{data.name}</option>))}
            </select>
          </div>
          <div className="d-flex flex-row align-items-center mb-2">
            <button type="button" class="btn btn-outline-info ms-auto" onClick={() => setShow1(true)}>
              Thêm mới
            </button>
            <button type="button" class="btn btn-outline-info ms-2" onClick={deleteServices}>
              Xóa
            </button>
          </div>

          <table class="table table-bordered rounded-1">
            <thead>
              <tr>
                <th style={{ width: 30 }}>
                  <input class="form-check-input" type="checkbox" checked={checked1.length == services.length} 
                    onChange={(e) => {
                      if (e.target.checked) {
                        const allServices = services.map((s) => s.id);
                        setChecked1(allServices);
                      } else {
                        setChecked1([]);
                      }
                    }} />
                </th>
                <th scope="col"> Tên dịch vụ </th>
                <th scope="col"> Đơn giá </th>
                <th scope="col"> Đơn vị </th>
                <th scope="col"> Mô tả </th>
                <th scope="col"> </th>
              </tr>
            </thead>

            <tbody>
              {services.map((data, index) => (
                <tr key={index}>
                  <td>
                    <input class="form-check-input" type="checkbox" checked={checked1.includes(data.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setChecked1([...checked1, data.id]);
                        } else {
                          setChecked1(checked1.filter((item) => item !== data.id));
                        }
                      }} />
                  </td>
                  <td> {data.name} </td>
                  <td> {data.cost} </td>
                  <td> {data.unit} </td>
                  <td> {data.description} </td>
                  <td style={{ width: 60 }}>
                    <img src="./edit.svg" onClick={() => { setForm2(data); setShow2(true) }} />
                    <img src="./add.svg" className="px-1" onClick={() => { setForm2(data); setShowAddServiceIntoRoom(true) }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {show1 ? <ServiceModal show={show1} setShow={setShow1} fetch={fetch} setFetch={setFetch} title="Thêm mới" form={{...form1, house_id: houseId}} setForm={setForm1} a="Thêm" /> : null}
      {show2 ? <ServiceModal show={show2} setShow={setShow2} fetch={fetch} setFetch={setFetch} title="Sửa" form={form2} setForm={setForm2} a="Lưu" /> : null}
      {showAddServiceIntoRoom ? <AddServiceIntoRoomModal show={showAddServiceIntoRoom} setShow={setShowAddServiceIntoRoom} service={form2} /> : null}
    </>
  )
}