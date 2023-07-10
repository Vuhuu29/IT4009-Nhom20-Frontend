import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';
import Title from './Title';
import { useEffect, useState } from "react"
import { format } from 'date-fns';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}


export default function Chart({ listBill }) {
  const theme = useTheme();
  const [money, setMoney] = useState([])

  useEffect(() => {
    let arr = []
    listBill.slice(0, 10).map((data) => {
      arr.push(createData(format(new Date(data.created_at), 'MM/yyyy'), (data.total_price - data.debt)))
    })
    // console.log(arr)
    setMoney(arr.reverse())
  }, [listBill])

  return (
    <React.Fragment>
      <Title>Tiền nhà</Title>
      <ResponsiveContainer>
        <LineChart
          data={money}
          margin={{
            top: 16,
            right: 24,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Hóa đơn
            </Label>
          </YAxis>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            name='Tiền: '
            stroke={theme.palette.primary.main}
            dot={false}
          />

        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
