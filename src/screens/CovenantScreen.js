import { useState, useEffect } from "react";
import NarBar from "../components/NavBar";
import CreateCovenantModal from "../components/Modal/ConvenantModal";
import UpdateCovenantModal from "../components/Modal/UpdateCovenantModal";
import callApi from "../fetchApi/callApiHaveToken";

export default function CovenantScreen(props){
    const [covenants, setCovenants] = useState([])
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [form1, setForm1] = useState({})
    const [form2, setForm2] = useState({})
    const [houseId, setHouseId] = useState()
    const [houses, setHouses] = useState()
    const [checked, setChecked] = useState([])
    const [fetch, setFetch] = useState(true)
    const [rooms, setRooms] = useState()
    const [renters, setRenters] = useState()
    const [houseName, setHouseName] = useState()

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

    async function fetchCovenant(){
      try{
        if(houseId){
          const d = await callApi('/covenant/house/' + houseId, false, 'GET')
          if (d.status) {
            setCovenants(d.data)
          } else {
            //xử lý error
          }
        }
      }catch(e){
          console.log(e)
      }
    }

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

    async function fetchRenter(){
      try{
        const d = await callApi('/renter/', false, 'GET')
        if (d.status) {
          setRenters(d.data)
        } else {
          //xử lý error
        }
      }catch(e){
          console.log(e)
      }
    }

    useEffect(() => {
      fetchHouse()
    }, [])

    useEffect( () => {
      fetchCovenant()
      fetchRoom()
    } ,[houseId, fetch])

    const deleteCovenant = () => {
      async function deleteCovenant(){
        try{
          for (var i in checked) {
            const d = await callApi('/covenant/' + checked[i] , false, 'DELETE')
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
      deleteCovenant()
    }
  
    

    const addCovenant = () => {
      setShow1(true)
      setForm1({...form1, house_id: houseId})
      if (houses.filter((item) => item.id == houseId)[0]) 
        setHouseName(houses.filter((item) => item.id == houseId)[0].name)
    }

    return (
      <>
        <NarBar/>
        <div className="container container-screen">
          <div className="d-flex rounded-1 flex-column main-tab">
            <div className="d-flex flex-row align-items-center mb-2 border-bottom">
                <div style={{fontSize: 30}}>
                    Quản lý hợp đồng
                </div>

                {/* Chọn khu trọ để hiển thị danh sách hợp đồng của khu trọ đó */}
                <select class="form-select ms-auto w-25"
                  value={houseId} 
                  onChange={(e) => {setHouseId(e.target.value)}}
                >
                  {houses && houses.map((data) => (<option value={data.id}>{data.name}</option>))}
                </select>

            </div>

            <div className="d-flex flex-row align-items-center mb-2">

              {/* Thêm mới hợp đồng */}
                <button type="button" class="btn btn-outline-info ms-auto" onClick = {addCovenant}>
                    Thêm mới
                </button>

              {/* Xóa hợp đồng đã chọn */}
                <button type="button" class="btn btn-outline-info ms-2" onClick={deleteCovenant}>
                    Xóa 
                </button>

                
            </div>

            <div className="d-flex flex-row align-items-center mb-2">

              <div className="col-2" style={{fontWeight: 700}}> Trạng thái </div>
              <div className="col-4">

                <input class="form-check-input" type="radio" id="r1"/>
                <label class="form-check-label ms-1" for="r1">
                  Còn hiệu lực
                </label>

                <input class="form-check-input ms-2" type="radio" id="r2"/>
                <label class="form-check-label ms-1" for="r2">
                  Hết hiệu lực
                </label>

                <input class="form-check-input ms-2" type="radio" id="r3" checked/>
                <label class="form-check-label ms-1" for="r3">
                  Tất cả
                </label>

              </div>

            </div>

            <table class="table table-bordered rounded-1">
                <thead>
                  <tr>
                    <th>
                      <input class="form-check-input" type="checkbox" checked={checked.length === covenants.length} 
                        onChange={(e) => {
                          if (e.target.checked) {
                            const all= covenants.map((r) => r.id);
                            setChecked(all);
                          } else {
                            setChecked([]);
                          }
                        }}
                      />
                    </th>
                    <th scope="col"> Phòng </th>
                    <th scope="col"> Người thuê </th>
                    <th scope="col"> Thời hạn hợp đồng </th>
                    <th scope="col"> Ngày bắt đầu </th>
                    <th scope="col"> Ngày hết hạn </th>
                    <th scope="col"> Trả trước </th>
                    <th scope="col"> Ngày trả </th>
                  </tr>
                </thead>
                <tbody>
                  {covenants && covenants.map((data) => (
                    <tr>
                      <td>
                        <input class="form-check-input" type="checkbox" checked={checked.includes(data.id)} 
                          onChange={(e) =>{
                            if (e.target.checked) {
                              setChecked([...checked, data.id]);
                            } else {
                              setChecked(checked.filter((item) => item !== data.id));
                            }
                          }}
                        />
                      </td>
                      <td> {rooms.filter((room) => room.id == data.room_id)[0].name} </td>
                      <td> {renters.filter((renter) => renter.id == data.renter_id)[0].name} </td>
                      <td> {data.duration} </td>
                      <td> {data.time_start} </td>
                      <td> {data.time_end} </td>
                      <td> {data.pre_pay} </td>
                      <td> {data.pay_time} </td>
                      <td>
                        <img src="./edit.svg" onClick={() => {setForm2(data);setShow2(true);}}/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            
          </div>
        </div>  

        <CreateCovenantModal 
          show = {show1} 
          houseName={houseName} 
          setShow = {setShow1} 
          fetch={fetch} 
          setFetch={setFetch} 
          title = "Thêm mới" 
          form = {form1} 
          setForm = {setForm1} 
          houseId={houseId} 
          rooms={rooms}
          a = "Thêm"/>
        <UpdateCovenantModal
        show = {show2} 
        houseName={houseName} 
        setShow = {setShow2} 
        fetch={fetch} 
        setFetch={setFetch} 
        title = "Sửa" 
        form = {form2} 
        setForm = {setForm2} 
        houseId={houseId} 
        rooms={rooms}
        a = "Lưu"/>
      </>
    )
}