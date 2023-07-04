import RoomView from "../components/RoomView";
import callApi from "../fetchApi/callApiHaveToken";
import React, {useEffect, useState } from 'react'


export default function HomeScreen(props){

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
      if (d.status) {
        setRooms(d.data)
        for(let i in d.data) {
          if (d.data[i].status === "EMPTY_ROOM") setState({...state, empty: state.empty + 1})
          else if (d.data[i].status === "USING_ROOM") setState({...state, using: state.using + 1})
          else if (d.data[i].status === "DEPOSIT_ROOM") setState({...state, deposit: state.deposit + 1})
          else if (d.data[i].status === "STOP_ROOM") setState({...state, stop: state.stop + 1})
        }
        console.log(state)
        console.log(d.data)
      }
        
      else 
        props.toastNoti(d.msg)
    }
  }

  useEffect(() => {
    fetchHouse()
  }, [])

  useEffect( () => {
    fetchRoom()
  } ,[houseId, fetch])


  const NotLogin = () => {
    return (
    <>
    <div className="container" style={{position: "fixed", left: 0, top: 0, maxWidth: "100%"}}>
      <nav class="navbar navbar-expand-lg navbar-light px-4 mt-1" style={{boxSizing: 'border-box', backgroundColor: '#fff', borderRadius: 5, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)'}}>

        <a class="navbar-brand" href="#" style={{fontWeight: 700}}>Team20</a>
        <ul class="navbar-nav ms-auto">
            <li className= "nav-item active">
                <a href="/" className="nav-link" >Trang chủ</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link" >Giới thiệu</a>
            </li>
            <li className="nav-item">
                <a href="auth" className="nav-link" >Đăng nhập</a>
            </li>
        </ul>

      </nav>
    </div >


      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '0px 90px', minHeight: '100vh'}}>
        <div style={{fontSize: '42px', marginBottom: '30px', marginTop: '100px'}}>Bạn đang kinh doanh Nhà trọ, Căn hộ dịch vụ ?</div>
        <div style={{margin: '0 15px 20px 15px', textAlign: 'center', lineHeight: '28px', fontSize: '18px', padding: '15px'}}>
          Cho thuê nhà trọ, căn hộ là loại hình kinh doanh khá hấp dẫn vì có tiềm năng lớn, nhu cầu cao, doanh thu ổn định và an toàn. Tuy nhiên, lĩnh vực kinh doanh này cũng có khá nhiều khó khăn khiến không ít chủ trọ, chủ căn hộ phải đối mặt với nhiều rủi ro về tài chính cũng như hiệu quả quản lý.
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', color: 'rgb(255, 255, 255)'}}>
          <div style={{backgroundColor: 'rgb(0, 124, 126)', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0 15px 30px 15px', padding: '18px', borderRadius: '5px'}}>
            <img src={"./clock.svg"} alt="clock icon" style={{width: '70px', height:'70px', margin: '0 auto'}}/>
            <h3>Thời gian</h3>
            <div>
              Bạn tốn nhiều thời gian cho việc giám sát, quản lý cơ sở, khách thuê, chi phí.
            </div>
          </div>

          <div style={{backgroundColor: 'rgb(0, 124, 126)', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0 15px 30px 15px', padding: '18px', borderRadius: '5px'}}>
            <img src={"./money.svg"} alt="cost icon" style={{width: '70px', height:'70px', margin: '0 auto'}}/>
            <h3>Chi phí</h3>
            <div>
              Bạn thấy đau đầu vì có quá nhiều chi phí phát sinh trong quá trình kinh doanh.
            </div>
          </div>

          <div style={{backgroundColor: 'rgb(0, 124, 126)', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0 15px 30px 15px', padding: '18px', borderRadius: '5px'}}>
            <img src={"./manage.svg"} alt="manage icon" style={{width: '70px', height:'70px', margin: '0 auto'}}/>
            <h3>Công tác quản lý</h3>
            <div>
              Bạn đau đầu khi suốt ngày phải đi xử lý sự cố, hợp đồng, các thủ tục pháp lý, hóa đơn.
            </div>
          </div>

          <div style={{backgroundColor: 'rgb(0, 124, 126)', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0 15px 30px 15px', padding: '18px', borderRadius: '5px'}}>
            <img src={"./risk.svg"} alt="risk icon" style={{width: '70px', height:'70px', margin: '0 auto'}}/>
            <h3>Rủi ro quản lý</h3>
            <div>
            Tình trạng khó khăn trong việc quản lý các khoản hóa đơn, có thể thất thoát tiền bạc trong việc tính toán.
            </div>
          </div>

          <div style={{backgroundColor: 'rgb(0, 124, 126)', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0 15px 30px 15px', padding: '18px', borderRadius: '5px'}}>
            <img src={"./puzzle-piece.svg"} alt="puzzle-piece icon" style={{width: '70px', height:'70px', margin: '0 auto'}}/>
            <h3>Khách thuê</h3>
            <div>
              Bạn cần có một quy trình quản lý khách thuê chuyên nghiệp, hiệu quả để tạo mối quan hệ lâu dài với họ.
            </div>
          </div>

          <div style={{backgroundColor: 'rgb(0, 124, 126)', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0 15px 30px 15px', padding: '18px', borderRadius: '5px'}}>
            <img src={"./effective.svg"} alt="effective icon" style={{width: '70px', height:'70px', margin: '0 auto'}}/>
            <h3>Hiệu quả kinh doanh</h3>
            <div>
              Công việc quản lý đảm bảo tính chính xác, hiệu quả để đảm bảo quyền lợi cả hai bên và tối ưu hóa được doanh thu.
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }

  const Logged = () => {
    return (
    <>
      <div className="container container-screen">
        <div className="d-flex rounded-1 flex-column main-tab" >
          <div className="d-flex flex-row border-bottom pb-2">

            <div className="ms-auto border d-flex flex-row me-5 rounded-1" style={{fontSize: 14}}>
              <div className="d-flex align-items-center w-25 me-1 ms-1 border-end">
                <svg className="me-1" width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 0C0.671573 0 0 0.671574 0 1.5V13.5C0 14.3284 0.671573 15 1.5 15H13.5C14.3284 15 15 14.3284 15 13.5V1.5C15 0.671573 14.3284 0 13.5 0H1.5Z" fill="#39B5E0"/>
                </svg>
                <div style={{width: 134}}>Phòng trống</div>
                <div className="mx-1">{state.empty}</div>
              </div>

              <div className="d-flex align-items-center w-25 me-1 border-end">
                <svg className="me-1" width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 0C0.671573 0 0 0.671574 0 1.5V13.5C0 14.3284 0.671573 15 1.5 15H13.5C14.3284 15 15 14.3284 15 13.5V1.5C15 0.671573 14.3284 0 13.5 0H1.5Z" fill="#A31ACB"/>
                </svg>
                <div style={{width: 134}}>Phòng đã được thuê</div>
                <div className="mx-1">{state.using}</div>
              </div>

              <div className="d-flex align-items-center w-25 me-1 border-end">
                <svg className="me-1" width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 0C0.671573 0 0 0.671574 0 1.5V13.5C0 14.3284 0.671573 15 1.5 15H13.5C14.3284 15 15 14.3284 15 13.5V1.5C15 0.671573 14.3284 0 13.5 0H1.5Z" fill="#FF78F0"/>
                </svg>
                <div style={{width: 134}}>Phòng đặt cọc</div>
                <div className="mx-1">{state.deposit}</div>
              </div>

              <div className="d-flex align-items-center w-25 me-1">
                <svg className="me-1" width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 0C0.671573 0 0 0.671574 0 1.5V13.5C0 14.3284 0.671573 15 1.5 15H13.5C14.3284 15 15 14.3284 15 13.5V1.5C15 0.671573 14.3284 0 13.5 0H1.5Z" fill="#F5EA5A"/>
                </svg>
                <div style={{width: 134}}>Phòng dừng sử dụng</div>
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
  if (localStorage.getItem("token") && localStorage.getItem("userRole") == "renter") {
    window.location = "/client/"

  } else
    return (
      <>
        {localStorage.getItem("token") ? <Logged /> : <NotLogin />}
      </>
      
      
    )
}