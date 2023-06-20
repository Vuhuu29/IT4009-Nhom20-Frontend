import { useEffect, useState } from "react";
import NarBar from "../components/NavBar";
import callApi from "../fetchApi/callApiHaveToken";
import RenterModal from "../components/Modal/RenterModal";

export default function RenterScreen(props){
    const [renters, setRenters] = useState([])
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({})
    const [houses, setHouses] = useState([])
    const [houseName, setHouseName] = useState()
    const [houseId, setHouseId] = useState()
    const [fetch, setFetch] = useState(true)
    const [checked, setChecked] = useState([])

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

    async function fetchRenter(){
      try{
        // lấy danh sách người thuê của khu trọ đang chọn
        const d = await callApi('/renter/house/' + houseId, false, 'GET')
        if (d.status) {
          setRenters(d.data)
        } else {
          //xử lý error
        }
      }catch(e){
          console.log(e)
      }
    }

    useEffect(()=> {
      fetchHouse()
    }, [])

    useEffect(()=> {
      fetchRenter()
    }, [houseId, fetch])

    const deleteRenter = () => {
      async function deleteRenter(){
        try{
          for (var i in checked) {
            const d = await callApi('/renter/' + checked[i] , false, 'DELETE')
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
      deleteRenter()
    }

    const editRenter = (data) => {
      if (houses.filter((item) => item.id == houseId)[0]) 
        setHouseName(houses.filter((item) => item.id == houseId)[0].name)
      setForm(data)
      setShow(true)
    }

    return (
      <>
        <NarBar/>
        <div className="container" style={{display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh'}}>
            <div className="d-flex rounded-1 flex-column" style={{backgroundColor: '#fff', width: '100%', padding: 20, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)'}}>
                <div className="d-flex flex-row align-items-center mb-2 border-bottom">
                    <div style={{fontSize: 30}}>
                        Quản lý khách thuê
                    </div>
                    <select class="form-select ms-auto w-25" value={houseId} 
                      onChange={(e) => {setHouseId(e.target.value)}}>
                        {houses && houses.map((data) => (<option value={data.id}>{data.name}</option>))}
                    </select>
                </div>

                <div className="d-flex flex-row align-items-center mb-2">
                  
                    <button type="button" class="btn btn-outline-info ms-auto" onClick={deleteRenter}>
                        Xóa
                    </button>

                </div>

                <table class="table table-bordered rounded-1">
                  <thead>
                    <tr>
                      <th>
                        <input class="form-check-input" type="checkbox" checked={checked.length == renters.length} 
                          onChange={(e) => {
                            if (e.target.checked) {
                              const all= renters.map((r) => r.id);
                              setChecked(all);
                            } else {
                              setChecked([]);
                            }
                          }}
                        />  
                      </th>
                      <th scope="col"> Họ và tên </th>
                      <th scope="col"> Số điện thoại </th>
                      <th scope="col"> Giới tính </th>
                      <th scope="col"> Năm sinh </th>
                      <th scope="col"> Phòng </th> {/* Có thể trống */}
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {renters && renters.map((data) => (
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
                        <td> {data.phone} </td>
                        <td> {data.gender} </td>
                        <td> {data.birthday} </td>
                        <td> {data.room} </td>
                        <td>
                          <img src="./edit.svg" onClick={() => editRenter(data)}/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
        </div>

        <RenterModal title="Sửa thông tin khách thuê" a="Lưu" show={show} setShow={setShow} form={form} setForm={setForm} fetch={fetch} setFetch={setFetch} houseName={houseName}/>
    </>
)}