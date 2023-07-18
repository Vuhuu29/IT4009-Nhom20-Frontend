import RoomView from './RoomView'
import callApi from '../fetchApi/callApiHaveToken';
import React, {useEffect, useState } from 'react'

function BoxIcon (props) {
  return (
    <svg className="me-1" width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 0C0.671573 0 0 0.671574 0 1.5V13.5C0 14.3284 0.671573 15 1.5 15H13.5C14.3284 15 15 14.3284 15 13.5V1.5C15 0.671573 14.3284 0 13.5 0H1.5Z" fill={props.color}/>
    </svg>
  )
}

export default function LoggedHomeScreen (props) {
  const [rooms, setRooms] = useState([])
  const [houses, setHouses] = useState([])
  const [houseId, setHouseId] = useState()
  const [state, setState] = useState({empty: 0, using: 0, deposit: 0, stop: 0})

  async function fetchHouse(){
    const d = await callApi('/house/owner/' + localStorage.getItem('userId'), false, 'GET')
    if (d.status) {
      setHouses(d.data)
      if (d.data.length > 0) setHouseId(d.data[0].id)
    }
      
    else 
      props.toastNoti(d.msg)
  }

  async function fetchRoom(){
    if(houseId){
      const d = await callApi('/room/house/' + houseId, false, 'GET')
      const c = await callApi('/covenant/house/' + houseId, false, 'GET')
      const de = await callApi('/deposit/house/' + houseId, false, 'GET')
      if (d.status && c.status && de.status) {
        
        for(let i in d.data) {
          if (d.data[i].status === "EMPTY_ROOM") setState({...state, empty: state.empty + 1})
          else if (d.data[i].status === "USING_ROOM") setState({...state, using: state.using + 1})
          else if (d.data[i].status === "DEPOSIT_ROOM") setState({...state, deposit: state.deposit + 1})
          else if (d.data[i].status === "STOP_ROOM") setState({...state, stop: state.stop + 1})

          var co = c.data.filter(covenant => covenant.room_id == d.data[i].id)
          console.log(co)
          if (co && co.length != 0) {
            d.data[i]["renter"]= co[0].renter_name
            d.data[i]["renter_phone"] = co[0].renter_phone
            d.data[i]["duration"] = co[0].duration
            d.data[i]["start_time"] = co[0].started_date
            d.data[i]["end_time"] = co[0].end_date
          }

          var dep = de.data.filter(deposit => deposit.room_id == d.data[i].id)
          if (dep && dep.length != 0) {
            d.data[i]["renter"]= dep[0].renter_name
            d.data[i]["renter_phone"] = dep[0].renter_phone
            d.data[i]["state1"] = dep[0].start_time
            d.data[i]["state2"] = dep[0].end_time
          }
        }

        setRooms(d.data)
        console.log(d.data)
      } else 
        props.toastNoti(d.msg)
    }
  }

  useEffect(() => {
    fetchHouse()
  }, [])

  useEffect( () => {
    fetchRoom()
  } ,[houseId, fetch])

  return (
    <>
      <div className="container container-screen">
        <div className="d-flex rounded-1 flex-column main-tab" >
          <div className="d-flex flex-row border-bottom pb-2">

            <div className="ms-auto border d-flex flex-row me-5 rounded-1">
              <div className="d-flex align-items-center w-25 me-1 ms-1 border-end">
                
                <BoxIcon color='#39B5E0'/>
                <div style={{width: 160}}> Phòng trống: </div>
                <div className="mx-1">{state.empty}</div>
              </div>

              <div className="d-flex align-items-center w-25 me-1 border-end">
                <BoxIcon color='#A31ACB' />
                <div style={{width: 160}}> Phòng đã được thuê: </div>
                <div className="mx-1">{state.using}</div>
              </div>

              <div className="d-flex align-items-center w-25 me-1 border-end">
                
                <BoxIcon color='#FF78F0' />
                <div style={{width: 160}}> Phòng đặt cọc: </div>
                <div className="mx-1">{state.deposit}</div>
              </div>

              <div className="d-flex align-items-center w-25 me-1">
                <BoxIcon color='#F5EA5A' />
                <div style={{width: 160}}> Phòng dừng sử dụng: </div>
                <div className="mx-1">{state.stop}</div>
              </div>

            </div>

            <select class="form-select w-25" aria-label=".form-select-lg example" value={houseId} onChange={(e) => {setHouseId(e.target.value)}}>
              {houses && houses.map((data) => (<option value={data.id} >{data.name}</option>))}
            </select>

          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
            {rooms && rooms.map((data) => (<RoomView room = {data}/>))}
          </div> 
          
          
        </div>
      </div>
    </>
  )
    
}