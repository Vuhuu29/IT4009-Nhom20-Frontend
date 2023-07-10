import * as React from 'react';
import { useEffect, useState } from "react"
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import callApi from '../../../fetchApi/callApiHaveToken';
import ChartService from './ChartService';
import { format } from 'date-fns';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function DashbroadRenter() {
  const [listBill, setListBill] = useState([])
  const [service1, setService1] = useState([])
  const [num,  setNum] = useState(0);
  const [service2, setService2] = useState([])
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

  }, [])
  useEffect(() => {
    let service1_id
    let service2_id 

    let listService1 = []
    let listService2 = []
    listBill.map((data) => {
      let month = format(new Date(data.created_at), 'MM/yyyy')
      data.services.map((services) => {
        if(service1_id === undefined) service1_id = services.id
        if(service2_id === undefined && services.id !== service1_id) service2_id = services.id
        services['month'] = month
        if (services.id === service1_id) {
          listService1.push(services)
        }
        if (services.id === service2_id) {
          listService2.push(services)
        }
      })
    })
    let countSv = 0;
    if(listService1.length >0) countSv+=1;
    if(listService2.length > 0) countSv+=1;
    setNum(countSv)
    setService1(listService1.reverse())
    setService2(listService2.reverse())
    console.log(countSv)
    // console.log("listService1", listService1)
    // console.log("listService2", listService2)
  }, [listBill])
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>

        {/* <Container sx={{ mt: 4, mb: 4 }}> */}
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 350,
              }}
            >
              <Chart listBill={listBill} />
            </Paper>
          </Grid>

          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 350,
              }}
            >
              <Deposits listBill={listBill} />
            </Paper>
          </Grid>

          {num > 0?<Grid item xs={12} md={12/num}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 350,
              }}
            >
              <ChartService service={service1} />
            </Paper>
          </Grid>: null}
          {num > 1 ? <Grid item xs={12} md={12/num}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 350,
              }}
            >
              <ChartService service={service2} />
            </Paper>
          </Grid>: null}


          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Orders listBill={listBill} />
            </Paper>
          </Grid>
        </Grid>
        {/* </Container> */}
      </Box>
    </ThemeProvider>
  );
}
