import * as React from 'react';
import { Modal, Button, ModalBody, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import callApi from '../../fetchApi/callApiHaveToken';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';


export default function AddServiceIntoRoomModal(props) {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [listRoom, setListRoom] = useState([])
    const [beginRowsSlected, setBeginRowsSlected] = useState([])

    async function fetchRooms() {
        try {
            const d = await callApi('/room/house/' + props.service.house_id, false, 'GET')
            if (d.status) {
                setListRoom(d.data)
                // console.log(d.data)
            } else {
                //xử lý error
            }
        } catch (e) {
            console.log(e)
        }
    }
    async function fetchDetailsService() {
        try {
            const d = await callApi('/service/' + props.service.id + '/room', false, 'GET')
            if (d.status) {
                // console.log(d.data)
                let roomAddedService = d.data.rooms.map((item) => item.id).filter((item) => listRoom.map((item) => item.id).includes(item))
                // console.log(roomAddedService)
                setSelectedRows(roomAddedService)
                setBeginRowsSlected(roomAddedService)
            }
            // console.log(props)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchRooms();
    }, [])

    useEffect(() => {
        if (listRoom.length != 0)
            fetchDetailsService();
    }, [listRoom])

    useEffect(() => {
        if (selectedRows.length === 0) {
            setSelectAll(false)
        } else
            if ((selectedRows.length === listRoom.length)) {
                setSelectAll(true)
            }

    }, [selectedRows])

    async function onsubmitAddSvInRoom() {
        try {
            // check beginRowsSlected and selectedRows to delete or add
            let deleteRows = beginRowsSlected.filter((item) => !selectedRows.includes(item))
            let addRows = selectedRows.filter((item) => !beginRowsSlected.includes(item))

            // delete
            for (let i = 0; i < deleteRows.length; i++) {
                const d = await callApi('/service/room/' + deleteRows[i], { service_id: props.service.id }, 'DELETE')
                if (d.status) {
                    console.log(d.data)
                } else {
                    //xử lý error
                }
            }
            // add
            for (let i = 0; i < addRows.length; i++) {
                let body = {
                    id_services: [
                        props.service.id,
                    ]
                }
                const d = await callApi('/service/room/' + addRows[i], body, 'POST')
                if (d.status) {
                    // console.log(d.data)
                } else {
                    //xử lý error
                }
            }
            props.setShow(false)

        } catch (e) {

            console.log(e)
        }
    }


    const handleSelectAllClick = (event) => {
        const checked = event.target.checked;
        setSelectAll(checked);
        if (checked) {
            const selectedIds = listRoom.map((row) => row.id);
            setSelectedRows(selectedIds);
        } else {
            setSelectedRows([]);
        }
    };

    const handleRowCheckboxClick = (event, row) => {
        const checked = event.target.checked;
        const selectedId = row.id;
        if (checked) {
            setSelectedRows([...selectedRows, selectedId]);
        } else {
            setSelectedRows(selectedRows.filter((id) => id !== selectedId));
        }
        // check all


    };


    const isRowSelected = (row) => selectedRows.includes(row.id);

    return (
        <Modal className="modal-xl" show={props.show} onHide={() => props.setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm dịch vụ cho phòng</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {/* list dịch vụ trong props */}

                <div className="row mb-2">
                    <div className="col-3 pl-4  align-self-center">
                        Tên dịch vụ:
                    </div>
                    <div className="col-9">
                        <b> {{ ...props.service }.name}</b>
                    </div>
                </div>
                <div className="row mb-2 pt-4">
                    <React.Fragment>
                        <h6>Phòng trọ</h6>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            color="primary"
                                            inputProps={{
                                                'aria-label': 'select all desserts',
                                            }}
                                            checked={selectAll}
                                            indeterminate={selectedRows.length > 0 && selectedRows.length < listRoom.length}
                                            onChange={handleSelectAllClick}

                                        />
                                    </TableCell>
                                    <TableCell>id</TableCell>
                                    <TableCell>Tên phòng</TableCell>
                                    <TableCell>Số người tối đa</TableCell>
                                    <TableCell>Giá</TableCell>
                                    {/* <TableCell>Payment Method</TableCell>
                                    <TableCell align="right">Sale Amount</TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listRoom.map((row) => (
                                    <TableRow key={row.id} >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isRowSelected(row)}
                                                onChange={(event) => handleRowCheckboxClick(event, row)}
                                            />
                                        </TableCell>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.maxUser}</TableCell>
                                        <TableCell>{row.cost}</TableCell>
                                        {/* <TableCell>{row.shipTo}</TableCell>
                                        <TableCell>{row.paymentMethod}</TableCell>
                                        <TableCell align="right">{`$${row.amount}`}</TableCell> */}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </React.Fragment>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.setShow(false)}> Hủy bỏ </Button>

                <Button variant="primary"
                    onClick={() => onsubmitAddSvInRoom()}
                > Xác nhận </Button>

            </Modal.Footer>
        </Modal>
    )
}

