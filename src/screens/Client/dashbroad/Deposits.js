import * as React from 'react';
import { useEffect, useState } from "react"
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { format } from 'date-fns';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({ listBill }) {
  function sumTotal() {
    let sum = 0
    listBill.map((data) => {
      console.log(data)
      sum += data.total_price - data.debt;
    })
    return sum
  }
  return (
    <React.Fragment>
      <Title>Tổng tiền</Title>
      <Typography component="p" variant="h4">
        {sumTotal().toLocaleString('en-US')} VNĐ
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Ngày { format(new Date(), 'dd/MM/yyyy')}
      </Typography>
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link> */}
      </div>
    </React.Fragment>
  );
}
