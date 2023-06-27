import RentingHouseModal from "../components/Modal/RentingHouseModal"
import React, {useEffect, useState } from 'react'
import callApi from "../fetchApi/callApiHaveToken"


export default function RentingHouseScreen(props){
  const [houses, setHouses] = useState([])
  const [checked1, setChecked1] = useState([])
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [form1, setForm1] = useState({})
  const [form2, setForm2] = useState({})
  const [fetch, setFetch] = useState(true)

  async function fetchHouses(){
    const d = await callApi('/house/owner/' + localStorage.getItem('userId') , false, 'GET')
      if (d.status) 
        setHouses(d.data)
      else props.toastNoti(d.msg)
  }

  useEffect(() => {
    fetchHouses()
  }, [fetch])

  const deleteHouse = () => {
    async function deleteHouse(){
      let s = true
        for (var i in checked1) {
          const d = await callApi('/house/' + checked1[i] , false, 'DELETE')
          if (!d.status) s = false 
        } 
        if (s) props.toastNoti("Delete success")
        else props.toastNoti("Delete fail")
        setFetch(!fetch)
        setChecked1([])
    }
    deleteHouse()
  }
  
  return (
    <>
      <div className="container" style={{display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh'}}>
        <div className="d-flex rounded-1 flex-column" style={{backgroundColor: '#fff', width: '100%', padding: 20, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)'}}>
          <div className="d-flex flex-row align-items-center mb-2 border-bottom">
            <div style={{fontSize: 30}}>
              Danh sách khu trọ
            </div>
            <button type="button" class="btn btn-outline-info ms-auto" onClick = {() => {setForm1({});setShow1(true)}}>
              Thêm mới
            </button>
            <button type="button" class="btn btn-outline-info ms-2" onClick={deleteHouse}>
              Xóa
            </button>
          </div>
          
          <table class="table table-bordered rounded-1">
            <thead>
              <tr>
                <th>
                  <input class="form-check-input" type="checkbox" checked={checked1.length === houses.length} 
                    onChange={(e) => {
                      if (e.target.checked) {
                        const allHouses = houses.map((h) => h.id);
                        setChecked1(allHouses);
                      } else {
                        setChecked1([]);
                      }
                    }}/>
                </th>
                <th scope="col"> Tên khu / tòa nhà </th>
                <th scope="col"> Địa chỉ </th>
                <th scope="col"> Mô tả </th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              {houses && houses.map((data) => (
                <tr>
                  <td>
                    <input class="form-check-input" type="checkbox" checked={checked1.includes(data.id)} 
                      onChange={(e) =>{
                        if (e.target.checked) {
                          setChecked1([...checked1, data.id]);
                        } else {
                          setChecked1(checked1.filter((item) => item !== data.id));
                        }
                      }}/>
                  </td>
                  <td> {data.name} </td>
                  <td> {data.location} </td>
                  <td> {data.description} </td>
                  <td>
                    <img alt="edit" src="./edit.svg" onClick={() => {setForm2(data);setShow2(true);}}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <RentingHouseModal show = {show1}  setShow = {setShow1} fetch={fetch} setFetch={setFetch} title = "Thêm mới" form = {form1} setForm = {setForm1} a = "Thêm" />
      <RentingHouseModal show = {show2}  setShow = {setShow2} fetch={fetch} setFetch={setFetch} title = "Sửa" form = {form2} setForm = {setForm2} a = "Lưu"/>
    </>
    
    
  )
}