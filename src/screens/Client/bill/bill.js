import { Modal } from "bootstrap"
import { useEffect, useState } from "react"
import callApi from "../../../fetchApi/callApiHaveToken"
import format from "date-fns/format"

export default function MyBill() {
    const [listBill, setListBill] = useState([])
    const [listBillDetail, setListBillDetail] = useState([])
    const [myRoom, setMyRoom] = useState([{}])

    async function fetch() {
        let idRenter = await localStorage.getItem("userId")
        const d = await callApi('/covenant/renter/3', false, 'GET')
        if (d.status) {
            console.log(d.data)
            setMyRoom(d.data.room)
        } else {
            //xử lý error
        }
    }


    useEffect(() => {
        async function fetchBill() {
            let idRenter = await localStorage.getItem("userId")
            const d = await callApi('/bill/renter/' + idRenter, false, 'GET')
            if (d.status) {
                console.log(d.data)
                setListBill(d.data)
            } else {
                //xử lý error
            }
        }
        fetchBill();
        fetch();

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
                                    <th scope="row">#{data.id}</th>
                                    <td>
                                        {/* {data.created_at} */}
                                        {format(new Date(data.created_at), 'dd/MM/yyyy')}
                                    </td>
                                    <td>{data.total_price?.toLocaleString('en-US')}</td>
                                    <td>
                                        {/* {data.status} */}
                                        <span
                                            className={`badge ${data.status === 'UNPAID' ? 'bg-danger' : data.status === 'PENDING' ? 'bg-warning' : 'bg-success'}`}
                                        >
                                            {data.status === 'UNPAID' ? 'Chưa thanh toán' : data.status === 'PENDING' ? 'Đang chờ' : 'Đã thanh toán'}
                                        </span>
                                    </td>
                                    <td><button type="button" className="btn btn-outline-info" data-bs-toggle="modal"
                                        data-bs-target="#billDetail" onClick={() => setListBillDetail(data)}>Chi tiết</button></td>
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
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setListBillDetail()}></button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-left">Tên dịch vụ</th>
                                        <th className="text-right">Đơn giá</th>
                                        <th className="text-right">Số lượng</th>
                                        <th className="text-right">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" >Giá phòng</th>
                                        <td align="right">{myRoom?.cost?.toLocaleString('en-US')}</td>
                                        <td align="right">1</td>
                                        <td align="right">{myRoom?.cost?.toLocaleString('en-US')}</td>
                                    </tr>

                                    {listBillDetail?.services && listBillDetail?.services.map((data) => (
                                        <tr>
                                            <th scope="row" align="right">{data.name}</th>
                                            <td align="right">{data.cost?.toLocaleString('en-US')}</td>
                                            <td align="right">{data.num?.toLocaleString('en-US')}</td>
                                            <td align="right">{(data.cost ?? 0 * data.num ?? 0).toLocaleString('en-US')}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-primary">
                                        <th className="text-danger" scope="row" colSpan={3}>Nợ cũ</th>
                                        <td className="text-danger" align="right">{(listBillDetail?.debt ?? 0).toLocaleString('en-US')}</td>
                                    </tr>
                                    <tr>
                                        <th className="text-light bg-info" scope="row" colSpan={3}>Tổng</th>
                                        <td className="text-light bg-info" align="right">{(listBillDetail?.total_price ?? 0).toLocaleString('en-US')}</td>
                                    </tr>

                                </tbody>

                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-info" data-bs-dismiss="modal" onClick={() => setListBillDetail()}>Đóng</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
