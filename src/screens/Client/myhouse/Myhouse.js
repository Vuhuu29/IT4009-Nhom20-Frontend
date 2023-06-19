import { Card, CardContent, Container, Divider, Grid, Typography } from "@mui/material";

export default function Myhouse() {


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
                                        <Typography variant="h6" component="div">Nguyễn Văn A</Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Số điện thoại:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">0123456789</Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Địa chỉ:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">123 Nguyễn Văn A, Phường B, Quận C, TP. D</Typography>
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
                                        <Typography variant="h6" component="div">Phòng 1</Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Diện tích:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">20m2</Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Số người ở tối đa:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">2</Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Giá phòng:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">1.000.000đ</Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Trạng thái:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">Đang cho thuê</Typography>
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
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Ngày bắt đầu:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">01/01/2021</Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Grid item xs={4}>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Ngày kết thúc:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" component="div">01/01/2022</Typography>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="div" sx={{ fontWeight: 'normal' }}>Danh sách dịch vụ hàng tháng:</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">STT</th>
                                                <th scope="col">Tên dịch vụ</th>
                                                <th scope="col">Đơn giá</th>
                                                <th scope="col">Số lượng</th>
                                                <th scope="col">Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Nước</td>
                                                <td>10.000đ</td>
                                                <td>2</td>
                                                <td>20.000đ</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Điện</td>
                                                <td>3.000đ</td>
                                                <td>2</td>
                                                <td>6.000đ</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Wifi</td>
                                                <td>50.000đ</td>
                                                <td>1</td>
                                                <td>50.000đ</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Rác</td>
                                                <td>10.000đ</td>
                                                <td>1</td>
                                                <td>10.000đ</td>
                                            </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th scope="row" colSpan="4">Tổng tiền</th>
                                                    <td>86.000đ</td>
                                                </tr>
                                            </tfoot>
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



