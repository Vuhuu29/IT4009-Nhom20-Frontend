import { useState, useEffect } from "react";
import CreateCovenantModal from "../components/Modal/CreateCovenantModal";
import UpdateCovenantModal from "../components/Modal/UpdateCovenantModal";
import callApi from "../fetchApi/callApiHaveToken";
import '../style/css/form.css'

export default function CovenantScreen(props){
    const [covenants, setCovenants] = useState([])
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [form1, setForm1] = useState({})
    const [form2, setForm2] = useState({})
    const [houseId, setHouseId] = useState()
    const [houses, setHouses] = useState([]) 
    const [houseName, setHouseName] = useState()
    const [checked, setChecked] = useState([])
    const [fetch, setFetch] = useState(true)

    async function fetchHouse(){
      const d = await callApi('/house/owner/' + localStorage.getItem('userId'), false, 'GET')
      if (d.status) {

        for (let i in d.data) 
          setHouses(d.data)

        if (d.data.length > 0) 
          setHouseId(d.data[0].id)
      }
        
      else 
      props.toastNoti(d.msg)
    }

    async function fetchCovenant(){
      if(houseId){
        const d = await callApi('/covenant/house/' + houseId, false, 'GET')
        if (d.status) 
          setCovenants(d.data)
        else 
          props.toastNoti(d.msg)
      }
    }

    useEffect(() => {
      fetchHouse()
    }, [])

    useEffect( () => {
      fetchCovenant()
    } ,[houseId, fetch])

    const deleteCovenant = () => {
      async function deleteCovenant(){
        let s = true
        for (var i in checked) {
          const d = await callApi('/covenant/' + checked[i] , false, 'DELETE')
          if (!d.status) s = false 
        }

        setChecked([])
        if (s) 
          props.toastNoti("Delete success")
        else 
          props.toastNoti("Delete fail")
        setFetch(!fetch)
      }
      deleteCovenant()
    }

    const addCovenant = () => {
      if (houses.filter((h) => h.id == houseId)[0])
        setHouseName(houses.filter((h) => h.id == houseId)[0].name)
      setShow1(true)
      setForm1({house_id: houseId})
    }

    const updateCovenant = (data) => {
      setForm2(data)
      setShow2(true);
    }

    return (
      <>
        <div className="container" style={{display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh'}}>
          <div className="d-flex rounded-1 flex-column main-tab">
            <div className="d-flex flex-row align-items-center mb-2 border-bottom">
                <div style={{fontSize: 30}}>
                    Quản lý hợp đồng
                </div>

                {/* Chọn khu trọ để hiển thị danh sách hợp đồng của khu trọ đó */}
                <select class="form-select ms-auto w-25" value={houseId} 
                  onChange={(e) => {setHouseId(e.target.value)}}>
                    {houses && houses.map((data) => (<option value = { data.id }> {data.name} </option>))}
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
                    <th scope="col"> Thời hạn hợp đồng (tháng) </th>
                    <th scope="col"> Ngày bắt đầu </th>
                    <th scope="col"> Ngày hết hạn </th>
                    <th scope="col"> Trả trước </th>
                    <th scope="col"> Ngày trả </th>
                    <th></th>
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
                      <td> {data.room_name} </td>
                      <td> {data.renter_name} </td>
                      <td> {data.duration} </td>
                      <td> {data.started_date} </td>
                      <td> {data.end_date} </td>
                      <td> {data.pre_pay} </td>
                      <td> {data.pay_time} </td>
                      <td>
                        <img src="./edit.svg" onClick={() => {updateCovenant(data)}}/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            
          </div>
        </div>  

        <CreateCovenantModal 
          houseName={houseName}
          show = {show1} 
          setShow = {setShow1} 
          fetch={fetch} 
          setFetch={setFetch} 
          form = {form1} 
          setForm = {setForm1} 
          toastNoti={props.toastNoti}
        />

        <UpdateCovenantModal
          show = {show2} 
          setShow = {setShow2} 
          fetch={fetch} 
          setFetch={setFetch} 
          form = {form2} 
          setForm = {setForm2} 
          toastNoti={props.toastNoti}
        />
      </>
    )
}