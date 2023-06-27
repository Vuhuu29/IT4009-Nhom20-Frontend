import { useState, useEffect } from "react";
import CreateDepositModal from "../components/Modal/CreateDepositModal";
import UpdateDepositModal from "../components/Modal/UpdateDepositModal";
import callApi from "../fetchApi/callApiHaveToken";



export default function DepositScreen(props){
    const [deposits, setDeposits] = useState([])
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

    async function fetchDeposit(){
      if(houseId){
        const d = await callApi('/deposit/house/' + houseId, false, 'GET')
        if (d.status) 
          setDeposits(d.data)
        else 
          props.toastNoti(d.msg)
      }
    }

    useEffect(() => {
      fetchHouse()
    }, [])

    useEffect( () => {
      fetchDeposit()
    } ,[houseId, fetch])

    const deleteDeposit = () => {
      async function deleteDeposit(){
        let s = true
        for (var i in checked) {
          const d = await callApi('/deposit/' + checked[i] , false, 'DELETE')
          if (!d.status) s = false 
        }

        setChecked([])
        if (s) 
          props.toastNoti("Delete success")
        else 
          props.toastNoti("Delete fail")
        setFetch(!fetch)
      }
      deleteDeposit()
    }

    const addDeposit = () => {
      if (houses.filter((h) => h.id == houseId)[0])
        setHouseName(houses.filter((h) => h.id == houseId)[0].name)
      setShow1(true)
      setForm1({house_id: houseId})
    }

    const updateDeposit = (data) => {
      setForm2(data)
      setShow2(true);
    }


    return (
      <>
          <div className="container" style={{display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh'}}>
            <div className="d-flex rounded-1 flex-column" style={{backgroundColor: '#fff', width: '100%', padding: 20, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)'}}>
              <div className="d-flex flex-row align-items-center mb-2 border-bottom">
                  <div style={{fontSize: 30}}>
                      Quản lý đặt cọc
                  </div>
                  <select class="form-select ms-auto w-25" value={houseId} 
                    onChange={(e) => {setHouseId(e.target.value)}}>
                      {houses && houses.map((data) => (<option value = { data.id }> {data.name} </option>))}
                  </select>
              </div>

              <div className="d-flex flex-row align-items-center mb-2">

                  <button type="button" class="btn btn-outline-info ms-auto" onClick={addDeposit}>
                      Thêm mới
                  </button>
                  <button type="button" class="btn btn-outline-info ms-2" onClick={deleteDeposit}>
                      Xóa
                  </button>

              </div>

              <table class="table table-bordered rounded-1">

                <thead>
                  <tr>
                    <th>
                      <input class="form-check-input" type="checkbox" checked={checked.length === deposits.length} 
                        onChange={(e) => {
                          if (e.target.checked) {
                            const all= deposits.map((r) => r.id);
                            setChecked(all);
                          } else {
                            setChecked([]);
                          }
                        }}
                      />
                    </th>
                    <th scope="col"> Tên phòng </th>
                    <th scope="col"> Người đặt cọc </th>
                    <th scope="col"> Số điện thoại </th>
                    <th scope="col"> Tiền đặt cọc </th>
                    <th scope="col"> Ngày đặt cọc </th>
                    <th scope="col"> Ngày hết hạn </th>
                    <th scope="col"> </th>
                  </tr>
                </thead>

                <tbody>
                  {deposits && deposits.map((data) => (
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
                      <td> {data.renter_phone} </td>
                      <td> {data.tien_coc} </td>
                      <td> {data.start_time} </td>
                      <td> {data.end_time} </td>
                      <td>
                        <img src="./edit.svg" onClick={() => {updateDeposit(data)}}/>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
              
            </div>
          </div>  

          <CreateDepositModal show={show1} setShow={setShow1} toastNoti={props.toastNoti} houseName={houseName} fetch={fetch} setFetch={setFetch} form = {form1} setForm = {setForm1}/>
          <UpdateDepositModal show={show2} setShow={setShow2} toastNoti={props.toastNoti} fetch={fetch} setFetch={setFetch} form = {form2} setForm = {setForm2}/>
      </>
    )
}