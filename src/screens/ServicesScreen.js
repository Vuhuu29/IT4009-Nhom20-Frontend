import { useState, useEffect } from 'react'; 
import ServiceModal from "../components/Modal/ServiceModal";
import callApi from "../fetchApi/callApiHaveToken";
import AddServiceIntoRoomModal from "../components/Modal/AddServiceIntoRoomModal";

export default function ServiceScreen(props) {
  const [services, setServices] = useState([])
  const [checked, setChecked] = useState([])
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [showAddServiceIntoRoom, setShowAddServiceIntoRoom] = useState(false)
  const [form1, setForm1] = useState({})
  const [form2, setForm2] = useState({})
  const [fetch, setFetch] = useState(true)
  const [houseId, setHouseId] = useState()
  const [houses, setHouses] = useState([])

  async function fetchHouse(){
    const d = await callApi('/house/owner/' + localStorage.getItem('userId'), false, 'GET')
    if (d.status) {
      setHouses(d.data)
      if (d.data.length > 0) setHouseId(d.data[0].id)
    }
      
    else 
    props.toastNoti(d.msg)
  }

  async function fetchServices(){
    if(houseId){
      const d = await callApi('/service/house/' + houseId, false, 'GET')
      if (d.status) 
        setServices(d.data)
      else 
        props.toastNoti(d.msg)
    }
  }


  useEffect(() => {

    
    fetchHouse()
  }, [])

  useEffect(() => {
    fetchServices()
  }, [houseId, fetch])

  const createService = () => {
    setForm1({house_id: houseId})
    setShow1(true)
  }

  const deleteServices = () => {
    async function deleteServices(){
      let s = true
      for (var i in checked) {
        const d = await callApi('/service/' + checked[i] , false, 'DELETE')
        if (!d.status) 
          s = false 
      }
      setChecked([])
      if (s) 
        props.toastNoti("Delete success")
      else 
        props.toastNoti("Delete fail")
      setFetch(!fetch)
    }
    deleteServices()
  }

  const updateService = (data) => {
    setForm2(data)
    setShow2(true)
  }

  return (
    <>
      <div className="container container-screen" style={{display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh'}}>
        <div className="d-flex rounded-1 flex-column main-tab">
          <div className="d-flex flex-row align-items-center mb-2 border-bottom">
            <div className="heading">
              Quản lý dịch vụ
            </div>

            <select class="form-select ms-auto w-25" value={houseId} 
              onChange={(e) => {setHouseId(e.target.value)}}>
                {houses && houses.map((data) => (<option value={data.id}>{data.name}</option>))}
            </select>
          </div>
          <div className="d-flex flex-row align-items-center mb-2">
              <button type="button" class="btn btn-outline-info ms-auto" onClick = {createService}>
                Thêm mới
              </button>
              <button type="button" class="btn btn-outline-info ms-2" onClick={deleteServices}>
                Xóa 
              </button>
          </div>

          <table class="table table-bordered rounded-1">
            <thead>
              <tr>
                <th>
                  <input class="form-check-input" type="checkbox" checked={checked.length === services.length} 
                    onChange={(e) => {
                      if (e.target.checked) {
                        const allServices = services.map((s) => s.id);
                        setChecked(allServices);
                      } else {
                        setChecked([]);
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
                    <input class="form-check-input" type="checkbox" checked={checked.includes(data.id)} 
                      onChange={(e) =>{
                        if (e.target.checked) {
                          setChecked([...checked, data.id]);
                        } else {
                          setChecked(checked.filter((item) => item !== data.id));
                        }
                      }} />
                  </td>
                  <td> {data.name} </td>
                  <td> {data.cost} </td>
                  <td> {data.unit} </td>
                  <td> {data.description} </td>
                  <td style={{width: 80}}>
                    <img alt='edit' className='mx-2'  src="./edit.svg" onClick={() => updateService(data)} />
                    <img alt='add' src="./add.svg" onClick={() => {setForm2(data); setShowAddServiceIntoRoom(true)}} />
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