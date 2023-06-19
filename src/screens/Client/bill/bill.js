import { Modal } from "bootstrap"
import { useEffect, useState } from "react"
import callApi from "../../../fetchApi/callApiHaveToken"

export default function MyBill() {
    const [listBill, setListBill] = useState([])
    const [listBillDetail, setListBillDetail] = useState([])
    const [billId, setBillId] = useState()



    
    useEffect(() => {
        async function fetchBill(){
            let idRenter = localStorage.getItem("userId")
            try{
                const d = await callApi('/bill/' + idRenter, false, 'GET')
                if (d.status) {
                    console.log(d.data)
                    setListBill(d.data)
                } else {
                    //xử lý error
                }
            }catch(e){
                console.log(e)
            }
        }
        fetchBill();
    }, [])


    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1>Hóa đơn</h1>
                </div>
            </div>
            {/* Bảng tổng quan hóa đơn hàng tháng : dtt, tháng, ngày nộp, tổng tiền, trạng thái, button chi tiết */}
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Mã hóa đơn</th>
                                <th scope="col">Ngày nộp</th>
                                <th scope="col">Tổng tiền</th>
                                <th scope="col">Trạng thái</th>
                                <th scope="col">Chi tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listBill && listBill.map((data) => (
                                <tr>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.date}</td>
                                    <td>{data.total}</td>
                                    <td>{data.status}</td>
                                    <td><button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#billDetail" onClick={() => setBillId(data.id)}>Chi tiết</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Bảng chi tiết hóa đơn : tên dịch vụ, đơn giá, số lượng, thành tiền */}
            <div className="modal fade" id="billDetail" tabIndex={-1} aria-labelledby="billDetailLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="billDetailLabel">Chi tiết hóa đơn</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setBillId()}></button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Tên dịch vụ</th>
                                        <th scope="col">Đơn giá</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listBillDetail && listBillDetail.map((data) => (
                                        <tr>
                                            <th scope="row">{data.name}</th>
                                            <td>{data.cost}</td>
                                            <td>{data.quantity}</td>
                                            <td>{data.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-info" data-bs-dismiss="modal" onClick={() => setBillId()}>Đóng</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
