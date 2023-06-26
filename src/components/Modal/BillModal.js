import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import callApi from '../../fetchApi/callApiHaveToken';
import { format } from 'date-fns';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fontWeight } from '@mui/system';
import { ca } from 'date-fns/locale';
import { async } from 'q';

export default function BillModal({ show, onClose, onHide, data, time, isAddingBill, covenantsCanCreateBill }) {
    // console.log(isAddingBill, covenantsCanCreateBill)
    const [services, setServices] = useState([])
    const [billByRenter, setBillByRenter] = useState(null)
    // edit bill
    const [billDetails, setBillDetails] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [isPayment, setIsPayment] = useState(false)
    // new 
    const [covenantRooms, setCovenantRooms] = useState([])
    const [covenantSlected, setCovenantSlected] = useState(null)


    async function fetchBillDetails() {
        if (data) {
            try {
                const d = await callApi('/bill/' + data.id, false, 'GET')
                if (d.status) {
                    //concact data wwith d.data
                    let temp = { ...data, ...d.data }
                    setBillDetails(temp)
                    setServices(temp.services)
                } else {
                    //xử lý error
                }
            } catch (e) {
                console.log(e)
            }
        } else {


        }
    }





    const onHandlePayment = async () => {
        setIsPayment(true)

    }

    useEffect(() => {
        if (data) fetchBillDetails();
        if (covenantsCanCreateBill) setCovenantSlected(covenantsCanCreateBill[0])
    }, [])

    useEffect(() => {
        console.log("billDetails", billDetails, billDetails?.covenant?.renter_id, billByRenter)
        if (billDetails?.covenant?.renter_id && !billByRenter){
            console.log("billByRenter", billByRenter)
            fetchBillsByRenterId(billDetails?.covenant?.renter_id);
}

    }, [billDetails])

    const handleSubmitPaid = async(e) => {
        e.preventDefault();
        try {
            let body = {
                covenant_id: billDetails.covenant_id,
                paid: billDetails.paid,
                status: 'PAID',
                services: [...services?.filter((item) => item.num > 0)],
            };
            console.log(body)
            const d = await callApi('/bill/' + billDetails.id, body, 'PUT')
            if (d.status) {
                console.log(d.data)
                // onClose({
                //     action : 'edit',
                //     bill: {
                //         ...d.data,
                //         room_name: covenantSlected.room_name,
                //         renter_name: covenantSlected.renter_name,
                //     }})
            } else {
                //xử lý error
            }
        } catch (e) {
            console.log(e)
        }

        // Lấy dữ liệu từ form

        // Gọi callback function để truyền dữ liệu về component cha
        // onClose(formData);
    };

    const handleSubmitAdd = async(e) => {
        e.preventDefault();
        let body = {
            covenant_id: covenantSlected?.id,
            services: [...services?.filter((item) => item.num > 0)],
        }
        try {
            const d = await callApi('/bill', body, 'POST')
            if (d.status) {
                console.log(d.data)
                onClose({
                    action : 'add',
                    bill: {
                        ...d.data,
                        room_name: covenantSlected.room_name,
                        renter_name: covenantSlected.renter_name,
                    }})
                // onHide();
            } else {
                //xử lý error
            }
        }catch(e){
            console.log(e)
        }
        console.log("Add bill", body)
    }
    const onChangeCoventant = (id) => {
        let temp = covenantsCanCreateBill.filter((item) => item.id === parseInt(id))
        setCovenantSlected(temp[0])
    }

    async function fetchServices() {
        // if(covenantSlected.room_id)
        try {
            const d = await callApi('/service/room/' + covenantSlected.room_id, false, 'GET')
            if (d.status) {
                setServices(d.data)
            } else {
                //xử lý error
            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        if (covenantSlected) {
            fetchServices();
            // console.log(covenantSlected);
            let bill = {
                room_id: covenantSlected.room_id,
                room_name: covenantSlected.room_name,
                renter_name: covenantSlected.renter_name,
                renter_id: covenantSlected.renter_id,
                covenant_id: covenantSlected.id,
                covenant: { ...covenantSlected },
                created_at: format(new Date(time), 'dd/MM/yyyy'),
                status: 'UNPAID',
                services: [],
            }
            setBillDetails(bill)
        }


    }, [covenantSlected]);


     function sumMoneyInBillDetails() {
        let sum = 0;
        services?.map((item) => {
            sum += item.cost * (item.num ?? 0)
        })
        sum += billDetails?.covenant?.room_cost;
        // set paid
        let temp = { ...billDetails }
        temp.paid = sum
        

        return sum;
    };

    async function fetchBillsByRenterId(id) {
        try {
            const d = await callApi('/bill/renter/' + id, false, 'GET')
            if (d.status) {
                console.log(d.data)
                // setListRoom(d.data)
                setBillByRenter(d.data)
            } else {
                //xử lý error
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Modal className="modal-xl" show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Hóa đơn tháng: {format(new Date(time), 'MM/yyyy')}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="row  py-2 d-flex align-items-center mt-1">
                        <h5 className="ms-auto">Thông tin hóa đơn</h5>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <div className="row align-items-center">
                                <div className="col-md-4" style={{ fontWeight: 500 }}>Tên phòng:</div>
                                <div className="col-md-6">
                                    {!isAddingBill ? (
                                        <input type="text" className="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" value={billDetails.room_name} disabled />
                                    ) : (
                                        <select className="form-select" aria-label="Default select example" onChange={(e) => { onChangeCoventant(e.target.value) }}>
                                            {covenantsCanCreateBill.map((item) => (
                                                // console.log(item),
                                                <option key={item.id} value={item.id}>{item.room_name}</option>
                                            ))}
                                        </select>
                                    )}
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-md-4" style={{ fontWeight: 500 }}>Người thuê:</div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control border-top-0 border-start-0 border-end-0 rounded-0 py-0" value={billDetails?.renter_name} disabled />
                                </div>
                            </div>
                        </div>
                        {!isAddingBill ?
                            <div className="col-md-6">
                                <div className="row align-items-center py-3">
                                    <div className="col-md-4" style={{ fontWeight: 500 }}>Ngày tạo:</div>
                                    <div className="col-md-6">
                                        {format(new Date(data?.created_at ?? null), 'dd/MM/yyyy')}
                                    </div>
                                </div>
                                <div className="row align-items-center py-3">
                                    <div className="col-md-4" style={{ fontWeight: 500 }}>Trạng thái:</div>
                                    <div className="col-md-6">
                                        <span className={`badge ${billDetails?.status === 'UNPAID' ? 'bg-danger' : billDetails?.status === 'PENDING' ? 'bg-warning' : 'bg-success'}`}>
                                            {billDetails?.status === 'UNPAID' ? 'Chưa thanh toán' : billDetails?.status === 'PENDING' ? 'Đang chờ' : 'Đã thanh toán'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            : null}
                    </div>

                    <div className="row  py-2 d-flex align-items-center mt-4">
                        <h5 className="ms-auto">Chi tiết hóa đơn</h5>
                    </div>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" colSpan={4} style={{ fontSize: '18px', fontWeight: 'bolder', color: 'blue', backgroundColor: 'lightgray' }}>
                                        Dịch vụ phòng: {billDetails?.room_name}
                                    </TableCell>
                                    <TableCell align="right" style={{ fontSize: '18px', fontWeight: 'bolder', color: 'blue', backgroundColor: 'lightgray' }}>
                                        Tiền
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontSize: '14px', fontWeight: 'bold', backgroundColor: 'lightblue' }}>Tên dịch vụ</TableCell>
                                    <TableCell align="right" style={{ fontSize: '14px', fontWeight: 'bold', backgroundColor: 'lightblue' }}>Đơn giá</TableCell>
                                    <TableCell align="left" style={{ fontSize: '14px', fontWeight: 'bold', backgroundColor: 'lightblue' }}>Đơn vị</TableCell>
                                    <TableCell align="right" style={{ fontSize: '14px', fontWeight: 'bold', width: 320, backgroundColor: 'lightblue' }}>Số lượng</TableCell>
                                    <TableCell align="right" style={{ fontSize: '14px', fontWeight: 'bold', width: 160, backgroundColor: 'lightblue' }}>Giá</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bolder' }} colSpan={4}>Tiền phòng</TableCell>

                                    <TableCell align="right" style={{ fontWeight: 'bolder' }}>{billDetails?.covenant?.room_cost?.toLocaleString('en-US')}</TableCell>
                                </TableRow>
                                {/* {billDetails.services ? billDetails.services.map((row) => ( */}
                                {services ? services.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell style={{ fontWeight: 'bolder' }}>{row.name}</TableCell>
                                        <TableCell align="right">{row.cost?.toLocaleString('en-US')} </TableCell>
                                        <TableCell align="left">{row.unit}</TableCell>
                                        {!isAddingBill && !isEdit ?
                                            <TableCell align="right">{row.num?.toLocaleString('en-US')}</TableCell>
                                            : <TableCell align="right">
                                                <input type="number" className="form-control" min="0" value={row.num} onChange={(e) => {
                                                    // set change services
                                                    let temp = [...services]
                                                    temp.map((item) => {
                                                        if (item.id === row.id) {
                                                            item.num = e.target.value
                                                        }
                                                    }
                                                    )
                                                    setServices(temp)
                                                }} />
                                            </TableCell>
                                        }
                                        <TableCell align="right" style={{ fontWeight: 'bolder' }}>{(row.cost * (row.num ?? 0))?.toLocaleString('en-US')}</TableCell>
                                    </TableRow>
                                )) : null}
                                <TableRow>
                                    <TableCell rowSpan={5} colSpan={2} />
                                    <TableCell colSpan={2} style={{ fontWeight: 'bolder' }}>Tổng tiền tháng</TableCell>
                                    <TableCell align="right" style={{ fontWeight: 'bolder' }}>
                                        {isAddingBill? sumMoneyInBillDetails()?.toLocaleString('en-US') : 
                                        (billDetails.total_price - billDetails.debt)?.toLocaleString('en-US')?? 0}
                                        </TableCell>
                                </TableRow>
                                {!isAddingBill ?
                                    <>
                                        <TableRow>
                                            <TableCell style={{ fontWeight: 'bolder' }}>Nợ cũ</TableCell>
                                            <TableCell align="right"></TableCell>
                                            <TableCell align="right" style={{ fontWeight: 'bolder' }}>{(billDetails.debt)?.toLocaleString('en-US')?? 0}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell colSpan={2} style={{ fontWeight: 'bolder' }}> Tổng tiền thanh toán</TableCell>
                                            <TableCell align="right" style={{ fontWeight: 'bolder' }}>{(billDetails.total_price)?.toLocaleString('en-US')}</TableCell>
                                        </TableRow>
                                    </>
                                    : null}
                                {
                                    billDetails?.status !== 'UNPAID' ?
                                        <>
                                            <TableRow>
                                                <TableCell colSpan={2} style={{ fontWeight: 'bolder' }}>Tiền trả:</TableCell>
                                                <TableCell align="right" style={{ fontWeight: 'bolder' }}>{billDetails.paid?.toLocaleString('en-US')}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell colSpan={2} style={{ fontWeight: 'bolder' }}>Nợ mới:</TableCell>
                                                <TableCell align="right" style={{ fontWeight: 'bolder' }}>{(billDetails.total_price -  billDetails.paid??0)?.toLocaleString('en-US')}</TableCell>
                                            </TableRow>
                                        </>
                                        : null
                                }
                                {
                                    isPayment ?
                                        <TableRow>
                                            <TableCell colSpan={2} style={{ fontWeight: 'bolder' }} >Tiền trả:</TableCell>
                                            <TableCell align="right" style={{ fontWeight: 'bolder' }}><input type='number' value={billDetails.paid}
                                                onChange={(e) => {
                                                    let temp = { ...billDetails }
                                                    temp.paid = e.target.value
                                                    setBillDetails(temp)
                                                }}
                                            /></TableCell>
                                        </TableRow>
                                        : null
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>



                </Modal.Body>
                <Modal.Footer>
                    {!isEdit? <Button variant="secondary" onClick={onHide}>Hủy bỏ</Button>: null}
                    {/* <Button variant="primary" onClick={onClose}>Xuất hóa đơn</Button> */}
                    {
                        ((billDetails?.status === 'UNPAID' && !isPayment && !isAddingBill )
                        // check last bill of renter or bill of renner null
                        && (billByRenter?.length === 0 || billByRenter?.[0]?.id === billDetails?.id)
                        ) ?
                            <Button variant="primary" onClick={onHandlePayment}>Thanh toán hộ</Button>
                            : null
                    }
                    {
                        (isAddingBill)?
                        <Button variant="primary" onClick={handleSubmitAdd}>Tạo hóa đơn</Button>
                        : null
                    }
                    {
                        (billDetails?.status === 'PENDING') ?
                            <Button variant="primary" onClick={onClose}>Xác nhận</Button>
                            : null
                    }
                    {
                        isPayment ?
                            <Button variant="primary" onClick={handleSubmitPaid}>Xác nhận thanh toán</Button>
                            : null
                    }
                </Modal.Footer>
            </Modal>
        </>
    );
}

