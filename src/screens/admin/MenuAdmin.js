import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
export default function MenuAdmin(params) {
    return (
        <div style={{backgroundColor:"#fdeeee", paddingTop: "19%", paddingBottom: "60%"}}>
            <h4 style={{paddingTop:"4%"}}><a href="/admin1" >Dashboard</a></h4>
            <h4 style={{paddingTop:"4%"}}><a href="/manage-student" >Quản lý học sinh</a></h4>
            <h4 style={{paddingTop:"4%", paddingBottom: "0"}}><a href="/manage-teacher" >Quản lý giáo viên</a></h4>
            <h4 style={{paddingTop:"4%"}}><a href="/manage-course" >Quản lý khóa học</a></h4>
        </div>
    )
}