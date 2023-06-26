import { useState, useEffect } from "react";
import NarBar from "../components/NavBar";
import { Modal, Button } from 'react-bootstrap';
import callApi from "../fetchApi/callApiHaveToken";
import { format, isWithinInterval, parseISO } from "date-fns";
import BillModal from "../components/Modal/BillModal";

export default function BillScreen(props) {
  const [bills, setBills] = useState(null)
  const [showModal, setShowModal] = useState(false);
  const [houses, setHouses] = useState([])
  const [houseId, setHouseId] = useState()
  const [rooms, setRooms] = useState([])
  const [renters, setRenters] = useState([])
  const [covenants, setCovenants] = useState([])
  const [covenantsCanCreateBill, setCovenantsCanCreateBill] = useState([])
  const [time, setTime] = useState(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
  })

  const [selectedBill, setSelectedBill] = useState(null);
  const [isAddingBill, setIsAddingBill] = useState(false);

  const handleEditBill = (bill) => {
    setSelectedBill(bill);
    setIsAddingBill(false);
    setShowModal(true);
  };

  const handleAddNewBill = () => {
    setSelectedBill(null);
    setIsAddingBill(true);
    setShowModal(true);
  };

  const handleModalClose = (data) => {
    // Xử lý dữ liệu từ modal ở đây
    console.log("close modal", data); // In ra dữ liệu nhận được từ modal
    if(data.action =='add'){
      setBills([
        ...bills,
        data.bill
      ])
    }
    // Đóng modal
    setShowModal(false);
  };


  async function fetchHouse() {
    try {
      const d = await callApi('/house', false, 'GET')
      if (d.status) {
        setHouses(d.data)
        if (d.length != 0)
          setHouseId(d.data[0].id)

      } else {
        //xử lý error
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function fetchRoom() {
    try {
      const d = await callApi('/room/house/' + houseId, false, 'GET')
      if (d.status) {
        setRooms(d.data)
      } else {
        //xử lý error
      }
    } catch (e) {
      console.log(e)
    }
  }


  async function fetchRenter() {
    try {
      const d = await callApi('/renter/house/' + houseId, false, 'GET')
      if (d.status) {
        setRenters(d.data)
      } else {
        //xử lý error
      }
    } catch (e) {
      console.log(e)
    }
  }



  async function fetchCovenance() {
    try {
      const d = await callApi('/covenant/house/' + houseId, false, 'GET')
      if (d.status) {
        const convens = d.data.map((covenant) => {
          const room = rooms.find((r) => r.id === covenant.room_id);
          const renter = renters.find((r) => r.id === covenant.renter_id);
          if (room) {
            covenant = { ...covenant, room_name: room.name, room_cost: room.cost }
          }
          if (renter) {
            covenant = { ...covenant, renter_name: renter.name }
          }
          return covenant
        }
        );
        // console.log("covenants", convens)
        await setCovenants(convens)
      } else {
        //xử lý error
      }
    } catch (e) {
      console.log(e)
    }
  }


  async function fetchBills() {
    try {
      const d = await callApi('/bill/house/' + houseId, false, 'GET')
      if (d.status) {
        const bills = d.data.map((bill) => {
          const covenant = covenants.find((c) => c.id === bill.covenant_id);
          // console.log("covenant", covenant)
          if (covenant) {
            bill = { ...bill, room_name: covenant.room_name, renter_name: covenant.renter_name, covenant: { ...covenant } }
          }
          return bill
        });
        // console.log("bill", bills)
        setBills(bills)
      } else {
        //xử lý error
      }
    } catch (e) {
      console.log(e)
    }
  }



  useEffect(() => {
    fetchHouse()
  }, [])

  useEffect(() => {
    if (houses.length != 0)
      setHouseId(houses[0].id)
    // console.log("fetching house id", houses)
  }, [houses])

  useEffect(() => {
    const fetchData = async () => {
      if (houseId) {
        await fetchRoom();
        await fetchRenter();
      }
    };

    fetchData();
  }, [houseId])

  useEffect(() => {
    if (rooms.length != 0 && renters.length != 0)
      fetchCovenance()
  }, [rooms, renters])

  useEffect(() => {
    if (covenants.length != 0)
      fetchBills()

  }, [covenants])

  useEffect(() => {
    if (bills && time) {
      const billInMonth = bills.filter((bill) => {
        const billDate = new Date(bill.created_at);
        const selectedDate = new Date(time);
        return billDate.getMonth() === selectedDate.getMonth() && billDate.getFullYear() === selectedDate.getFullYear();
      });
      const covenantsUsingInMonth = covenants.filter((covenant) => {
        const startDate = parseISO(covenant.started_date);
        const endDate = parseISO(covenant.end_date);
        const selectedDate = parseISO(time);
        return isWithinInterval(selectedDate, { start: startDate, end: endDate });
      });

      console.log("covenantsUsingInMonth", covenantsUsingInMonth);
      // fill covenantsCanCreateBill not in bills
      const covenantsCanCreateBill = covenantsUsingInMonth.filter((covenant) => {
        return !billInMonth.find((bill) => bill.covenant_id === covenant.id);
      });
      console.log("covenantsCanCreateBill", covenantsCanCreateBill);
      setCovenantsCanCreateBill(covenantsCanCreateBill);
    }


  }, [bills, time])


  return (
    <>
      <NarBar />
      <div className="container" style={{ display: "flex", maxWidth: "100%", padding: '72px 12px 20px 12px', minHeight: '100vh' }}>
        <div className="d-flex rounded-1 flex-column" style={{ backgroundColor: '#fff', width: '100%', padding: 20, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)' }}>
          <div className="d-flex flex-row align-items-center mb-2 border-bottom">
            <div style={{ fontSize: 30 }}>
              Hóa đơn hàng tháng
            </div>
            <select className="form-select ms-auto w-25" aria-label=".form-select-lg example" value={houseId}
              onChange={(e) => { setHouseId(e.target.value) }}>
              {houses && houses.map((data) => (<option key={data.id} value={data.id}>{data.name}</option>))}
            </select>
          </div>

          <div className="d-flex flex-row align-items-center mb-2">
            <div style={{ fontSize: 20 }} className="py-1">
                Đã tạo {bills? bills.
                filter((bill) => {
                  const billDate = new Date(bill.created_at);
                  const selectedDate = new Date(time);
                  return billDate.getMonth() === selectedDate.getMonth() && billDate.getFullYear() === selectedDate.getFullYear();
                }).length : 0} hóa đơn / Số hợp đồng cần tạo thêm: {covenantsCanCreateBill.length}
            </div>  


            {/* <button type="button" className="btn btn-outline-info ms-auto">
              Xuất nhiều
            </button> */}
            <button type="button" className="btn btn-outline-info ms-auto" onClick={handleAddNewBill}
                hidden={
                  !covenantsCanCreateBill.length ||
                  (new Date(time).getFullYear() != new Date().getFullYear() ||
                    new Date(time).getMonth() != new Date().getMonth())
                }

            >Thêm mới</button>



          </div>

          <div className="d-flex flex-row align-items-center mb-2">
            <div className="col-1" style={{ fontWeight: 700 }}>Tháng xuất</div>
            <div className="col-3 px-4">
              <input type="month" className="form-control" id="startDate" value={time}
                onChange={(e) => { setTime(e.target.value) }} />
              {/* <input id="startDate" className="form-control" type="date" /> */}
            </div>
            {/* <div className="col-1 ms-2" style={{ fontWeight: 700 }}>Trạng thái</div>
            <div className="col-7">
              <input className="form-check-input" type="radio" name="radio2" id="r21" />
              <label className="form-check-label ms-1" for="r21">
                Tất cả
              </label>
              <input className="form-check-input ms-2" type="radio" name="radio2" id="r22" />
              <label className="form-check-label ms-1" for="r22">
                Chưa thanh toán
              </label>
              <input className="form-check-input ms-2" type="radio" name="radio2" id="r23" />
              <label className="form-check-label ms-1" for="r23">
                Đã thanh toán
              </label>
            </div> */}
          </div>

          <table className="table table-bordered rounded-1">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Ngày tạo</th>
                <th scope="col">Phòng</th>
                <th scope="col">Người thuê</th>
                <th scope="col">Tiền tháng</th>
                <th scope="col">Nợ cũ</th>
                <th scope="col">Tổng tiền</th>
                <th scope="col">Trạng thái</th>
                <th></th>
              </tr>
            </thead>
            <tbody> 
              {bills? bills.
                filter((bill) => {
                  const billDate = new Date(bill.created_at);
                  const selectedDate = new Date(time);
                  return billDate.getMonth() === selectedDate.getMonth() && billDate.getFullYear() === selectedDate.getFullYear();
                })
                .map((data, index) => {
                  // console.log(data  )
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td scope="row">{format(new Date(data.created_at), 'dd/MM/yyyy')}</td>
                      <td>{data.room_name}</td>
                      <td>{data.renter_name}</td>
                      <td>{(data.total_price - data.debt).toLocaleString('en-US')}</td>
                      <td>{data.debt.toLocaleString('en-US')}</td>
                      <td>{data.total_price.toLocaleString('en-US')}</td>
                      <td>
                        <span
                          className={`badge ${data.status === 'UNPAID' ? 'bg-danger' : data.status === 'PENDING' ? 'bg-warning' : 'bg-success'}`}
                        >
                          {data.status === 'UNPAID' ? 'Chưa thanh toán' : data.status === 'PENDING' ? 'Đang chờ' : 'Đã thanh toán'}
                        </span>
                      </td>
                      <td><img src="./edit.svg" onClick={() => handleEditBill(data)} /></td>
                    </tr>
                  )
                }
                ) : null}
              {bills?bills.filter((bill) => {
                const billDate = new Date(bill.created_at);
                const selectedDate = new Date(time);
                return billDate.getMonth() === selectedDate.getMonth() && billDate.getFullYear() === selectedDate.getFullYear();
              }).length === 0 && (
                  <tr>
                    <td colSpan={9} className="text-center">Không có dữ liệu</td>
                  </tr>
                ) :null}
            </tbody>
          </table>
        </div>
        {showModal && (
          <BillModal data={selectedBill} isAddingBill={isAddingBill}  {...(isAddingBill && { covenantsCanCreateBill })}
          show={showModal} onClose={handleModalClose} onHide={() => setShowModal(false)} time={time} />
        )}

      </div>
    </>
  )
}