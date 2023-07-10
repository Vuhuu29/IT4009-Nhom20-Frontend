import { Card, CardContent, Container, Divider, Grid, Typography } from "@mui/material";
import callApi from "../../../fetchApi/callApiHaveToken";
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';

export default function Myhouse() {
    const [allInfo, setAllInfor] = useState([]);
    const [allService, setAllService] = useState([]);
    async function getInfor() {
        try {
            // const response = await callApi('/room/3', false , 'get')

            const rs = await callApi('/covenant/renter/' + localStorage.getItem("userId"), false, 'get')
            console.log(rs.data)
            setAllInfor(rs.data)
            // const room = await callApi('/room/3', false , 'get')
        } catch (error) {
            console.log(error)
        }
    }

    async function getService() {
        try {
            const rs = await callApi('/service/room/' + allInfo.room?.id, false, 'get')
            console.log(rs.data)
            setAllService(rs.data)
            // const room = await callApi('/room/3', false , 'get')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getInfor();
    }, []);

    useEffect(() => {
        console.log(allInfo.owner);
        // if (allInfo && allInfo.room)
        //     getService();
    }, [allInfo]);

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1>Phòng tôi thuê</h1>
                </div>
            </div>
            <Divider variant="middle" sx={{ fontWeight: 'bold' }} />

            {/* info khu trọ : tên khu trọ, chủ nhà, sđt, địa chỉ */}
            <Container sx={{ marginTop: 6 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5">Thông tin khu trọ</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardContent>
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Chủ nhà:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">{allInfo?.owner?.name || null}</Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Số điện thoại:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">{allInfo?.owner?.phone}</Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Địa chỉ:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">{allInfo?.owner?.email}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            {/* Thông tin phòng trọ  */}
            <Container sx={{ marginTop: 6 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5">Thông tin phòng trọ</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardContent>
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Tên phòng:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">{allInfo?.room?.name}</Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                {/* <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Diện tích:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">20m2</Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" /> */}
                                {allInfo?.room?.maxUser || allInfo?.room?.maxUser < 0 ?
                                    <>
                                        <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                            <Grid item xs={4}>
                                                <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Số người ở tối đa:</Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="h6" component="div">{allInfo?.room?.maxUser}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Divider variant="middle" />
                                    </>
                                : null}
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Giá phòng:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">{allInfo?.room?.cost}</Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Mô tả:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">{allInfo?.room?.description}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            {/* Thông tin hợp đồng  kèm bảng dịch vụ hàng tháng*/}
            <Container sx={{ marginTop: 6 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5">Thông tin hợp đồng</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardContent>
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Người thuê:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">
                                            {allInfo?.user?.name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Ngày bắt đầu:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">
                                            {allInfo?.covenant?.end_date ? format(new Date(allInfo?.covenant?.started_date), 'dd/MM/yyyy') : null}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>
                                            Ngày kết thúc:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">
                                            {allInfo?.covenant?.end_date ? format(new Date(allInfo?.covenant?.end_date), 'dd/MM/yyyy') : null}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>
                                        <b> Danh sách dịch vụ hàng tháng:</b>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className="pt-2">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">STT</th>
                                                <th scope="col">Tên dịch vụ</th>
                                                <th scope="col">Đơn giá</th>
                                                <th scope="col">Mô tả</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allInfo?.room?.service
                                                ? allInfo?.room?.service.map((item, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{item.name}</td>
                                                        <td>{item.cost}</td>
                                                        <td>{item.description}</td>
                                                    </tr>
                                                ))
                                                : null
                                            }
                                        </tbody>
                                        {/* <tfoot>
                                            <tr>
                                                <th scope="row" colSpan="3">Tổng tiền</th>
                                                <td>86.000đ</td>
                                            </tr>
                                        </tfoot> */}
                                    </table>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>



        </>

    );

}



