import NarBar from "../components/NavBar"; 
import { useState, useEffect } from 'react'; 
import '../style/css/form.css';
import callApi from "../fetchApi/callApiHaveToken";
import RentingRoomModal from "../components/Modal/RentingRoomModal";

export default function RentingRoomScreen(props){
  const [houses, setHouses] = useState([])
  const [houseId, setHouseId] = useState()
  const [rooms, setRooms] = useState([])
  const [checked, setChecked] = useState([])
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [form1, setForm1] = useState({})
  const [form2, setForm2] = useState({})
  const [fetch, setFetch] = useState(true)
  const [houseName, setHouseName] = useState()
  const [services, setServices] = useState([])

  useEffect(() => {
    async function fetchHouse(){
      try{
        const d = await callApi('/house', false, 'GET')
        if (d.status) {
          setHouses(d.data)
          if (d.length != 0)
            setHouseId(d.data[0].id)
        } else {
          //xử lý error
        }
      }catch(e){
          console.log(e)
      }
    }
    async function fetchServices(){
      try{
        const d = await callApi('/service', false, 'GET')
        if (d.status) {
          setServices(d.data)
        } else {
          //xử lý error
        }
      }catch(e){
          console.log(e)
      }
    }

    fetchServices()
    fetchHouse()
  }, [])

  async function fetchRoom(){
    try{
      if(houseId){
        const d = await callApi('/room/house/' + houseId, false, 'GET')
        if (d.status) {
          setRooms(d.data)
        } else {
          //xử lý error
        }
      }
    }catch(e){
        console.log(e)
    }
  }

  useEffect( () => {
    fetchRoom()
  } ,[houseId, fetch])

  const deleteRoom = () => {
    async function deleteRoom(){
      try{
        for (var i in checked) {
          const d = await callApi('/room/' + checked[i] , false, 'DELETE')
          if (d.status) {
            setFetch(!fetch)
            setChecked([])  
          } else {
            //xử lý error
          }
        }
      }catch(e){
          console.log(e)
      }
    }
    deleteRoom()
  }

  const createRoom = () => {
    if (houses.filter((item) => item.id == houseId)[0]) 
      setHouseName(houses.filter((item) => item.id == houseId)[0].name)
    setForm1({...form1, house_id: houseId})
    setShow1(true)
  }

  const editRoom = (data) => {
    if (houses.filter((item) => item.id == houseId)[0]) 
      setHouseName(houses.filter((item) => item.id == houseId)[0].name)
    setForm2(data)
    setShow2(true);
  }

  return (
    <>
      <NarBar/>
      <div className="container" style={{display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh'}}>
        <div className="d-flex rounded-1 flex-column" style={{backgroundColor: '#fff', width: '100%', padding: 20, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)'}}>
          <div className="d-flex flex-row align-items-center mb-2 border-bottom">
              <div style={{fontSize: 30}}>
                  Danh sách phòng trọ
              </div>
              {/* Chọn khu trọ */}
              <select class="form-select ms-auto w-25" value={houseId} 
                onChange={(e) => {setHouseId(e.target.value)}}>
                  {houses && houses.map((data) => (<option value={data.id}>{data.name}</option>))}
              </select>
          </div>

          <div className="d-flex flex-row align-items-center mb-2">
              {/* Button thêm mới phòng */}
              <button type="button" class="btn btn-outline-info ms-auto" onClick = {createRoom} >
                  Thêm mới
              </button> 
              {/* Thêm được thì thêm phần nhập excel, xuất excel, tìm kiếm */}
              <button type="button" class="btn btn-outline-info ms-2" onClick = {deleteRoom} >
                  Xóa 
              </button>
          </div>
          
          <table class="table table-bordered rounded-1">
            <thead>
              <tr>
                <th>
                  <input class="form-check-input" type="checkbox" checked={checked.length == rooms.length} 
                    onChange={(e) => {
                      if (e.target.checked) {
                        const all= rooms.map((r) => r.id);
                        setChecked(all);
                      } else {
                        setChecked([]);
                      }
                    }}
                  />
                </th>
                <th scope="col">Tên phòng</th>
                <th scope="col">Số người ở tối đa</th>
                <th scope="col">Đơn giá</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Mô tả</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {rooms && rooms.map((data) => (
                <tr>
                  <td>
                    <input class="form-check-input" type="checkbox" checked={checked.includes(data.id)} 
                      onChange={(e) =>{
                        if (e.target.checked) {
                          setChecked([...checked, data.id]);
                        } else {
                          setChecked(checked.filter((item) => item !== data.id));
                        }
                      }}/>
                  </td>
                  <td> {data.name} </td>
                  <td> {data.max_user} </td>
                  <td> {data.cost} </td>
                  <td> {data.state} </td>
                  <td> {data.description} </td>
                  <td>
                    <img src="./edit.svg" onClick={() => editRoom(data)}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <RentingRoomModal 
        show = {show1} 
        houseName={houseName} 
        setShow = {setShow1} 
        fetch={fetch} 
        setFetch={setFetch} 
        title = "Thêm mới" 
        form = {form1} 
        setForm = {setForm1} 
        houseId={houseId} 
        services={services}
        a = "Thêm"/>
      <RentingRoomModal 
        show = {show2} 
        houseName={houseName} 
        setShow = {setShow2} 
        fetch={fetch} 
        setFetch={setFetch} 
        title = "Sửa" 
        form = {form2} 
        setForm = {setForm2} 
        houseId={houseId} 
        services={services}
        a = "Lưu"/>
    </>
    
    
  )
}