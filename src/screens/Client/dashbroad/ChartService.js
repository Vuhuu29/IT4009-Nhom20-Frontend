import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, BarChart, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';
import Title from './Title';
import { useEffect, useState } from "react"
import { format } from 'date-fns';

// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}


export default function ChartService({ service }) {
    service =  service.slice(0, 10)


    console.log(service)
    const theme = useTheme();

    return (
        <React.Fragment>
            <Title>{service[0]?.name}</Title>
            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={300}
                    data={service}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="num" fill="#8884d8" name='Số lượng' />
                </BarChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}
