import * as React from 'react';
import { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Link } from 'react-router-dom';
import callApi from '../../../fetchApi/callApiHaveToken';
import { format } from 'date-fns';
import { width } from '@mui/system';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];



export default function Orders({ listBill }) {
  // const [listBill, setListBill] = useState([])
  // useEffect(() => {
  //   async function fetchBill() {
  //     let idRenter = await localStorage.getItem("userId")
  //     const d = await callApi('/bill/renter/' + idRenter, false, 'GET')
  //     if (d.status) {
  //       console.log(d.data)
  //       setListBill(d.data)
  //     } else {
  //       //xử lý error
  //     }
  //   }
  //   fetchBill();

  // }, [])

  return (
    <React.Fragment>
      <Title>Hóa đơn hàng tháng</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Mã hóa đơn</TableCell>
            <TableCell align="center">Ngày tạo</TableCell>
            <TableCell align="right">Tổng tiền</TableCell>
            <TableCell align="right">Trạng thái</TableCell>
            {/* <TableCell align="right">Còn nợ</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {listBill && listBill?.slice(0, 5).map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center"><b>#{row.id}</b></TableCell>
              <TableCell align="center">{format(new Date(row.created_at), 'dd/MM/yyyy')}</TableCell>
              <TableCell align="right">{row?.total_price?.toLocaleString('en-US')}</TableCell>
              <TableCell  align="right">
                <span
                  className={`badge ${row.status === 'UNPAID' ? 'bg-danger' : row.status === 'PENDING'
                    ? 'bg-warning' : 'bg-success'}`}>
                  {row.status === 'UNPAID' ? 'Chưa thanh toán' : row.status === 'PENDING' ? 'Đang chờ' : 'Đã thanh toán'}
                </span>
              </TableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link className='pt-3' color="primary" to="bill" sx={{ mt: 3 }}>
        Xem thêm hóa đơn
      </Link>
    </React.Fragment>
  );
}
