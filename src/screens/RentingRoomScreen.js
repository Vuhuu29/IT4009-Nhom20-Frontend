import { useState, useEffect } from 'react';
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
  const [roomServices, setRoomServices] = useState([]) //Danh sách id của dịch vụ có trong room
  const roomStatus = {"EMPTY_ROOM": "Còn trống", "USING_ROOM": "Đã cho thuê", "DEPOSIT_ROOM": "Đang đặt cọc", "STOP_ROOM": "Dừng cho thuê"}

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

  async function fetchRoom(){
    if(houseId){
      const d = await callApi('/room/house/' + houseId, false, 'GET')
      if (d.status) 
        setRooms(d.data)
      else 
        props.toastNoti(d.msg)
    }
  }

  useEffect(() => {
    fetchHouse()
  }, [])

  useEffect( () => {
    fetchServices()
    fetchRoom()
  } ,[houseId])

  useEffect( () => {
    fetchRoom()
  }, [fetch])

  const deleteRoom = () => {
    async function deleteRoom(){
      let s = true
      for (var i in checked) {
        const d = await callApi('/room/' + checked[i] , false, 'DELETE')
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
    deleteRoom()
  }

  const createRoom = () => {
    if (houses.filter((item) => item.id === houseId)[0]) 
      setHouseName(houses.filter((item) => item.id === houseId)[0].name)
    setForm1({house_id: houseId})
    setShow1(true)
  }

  const editRoom = (data) => {
    if (houses.filter((item) => item.id === houseId)[0]) 
      setHouseName(houses.filter((item) => item.id === houseId)[0].name)

    async function fetchRoomService(roomId){
      const d = await callApi('/service/room/' + roomId, false, 'GET')
      if (d.status) {
        setRoomServices(d.data)
      } else props.toastNoti(d.msg)

      setForm2(data)
      setShow2(true);
    }

    fetchRoomService(data.id)
  }

  return (
    <>
      <div className="container container-screen" style={{display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh'}}>
        <div className="d-flex rounded-1 flex-column main-tab">
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
                  <input class="form-check-input" type="checkbox" checked={checked.length === rooms.length} 
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
                <th scope="col">Đơn giá (đ/tháng) </th>
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
                  <td> {roomStatus[data.status]} </td>
                  <td> {data.description} </td>
                  <td>
                    <img alt='edit' src="./edit.svg" onClick={() => editRoom(data)}/>
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
        toastNoti={props.toastNoti}
        roomServices={roomServices}
        setRoomServices = {setRoomServices}
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
        toastNoti={props.toastNoti}
        roomServices={roomServices}
        setRoomServices = {setRoomServices}
        a = "Lưu"/>
    </>
    
    
  )
}