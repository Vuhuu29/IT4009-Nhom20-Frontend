import React, { useEffect, useState} from "react";
import'../../style/css/student/screen_student.css'

export default function StudentThongtin(params){
    const [student, setStudent]=useState("");
    const [parent, setParent]= useState("");
    useEffect(() => {
        const fetchStudent = async () => {
            await fetch(`http://localhost:8080/student/${localStorage.getItem("UserId")}`, {
                method: "GET",

                headers: {
                    "Content-type": "application/json",
                    "Token":localStorage.getItem("token")
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setStudent(data);
                setParent(data.parent);
                console.log("data_student......",data);
            })
            .catch((error) => {

            })
    }
    fetchStudent();
}, [])
        return(
            <div className="thongtin" >
                <div className="hocsinh ">
                    <p className="titleThongtin">THÔNG TIN HỌC SINH</p>
                        <img
                            src='./cam-nhan-phu-huynh1.jpg'
                            className='img-thumbnail '
                            alt='...'
                            style={{ maxWidth: '20rem',
                            }}
                        />
                    <div className="noidungThongtin ">
                        <p><strong>Họ và tên: </strong>{student.full_name} </p>
                        <p><strong>Giới tính: </strong>{student.gender}</p>
                        <p><strong>MSHV: </strong>2022000{student.id}</p>
                        <p><strong>Ngày sinh: </strong>{student.birthday}</p>
                    </div>

                </div>

                <div className="phuhuynh">
                    <p className="titleThongtin">THÔNG TIN PHỤ HUYNH</p>
                    <div className="noidungThongtin ">
                        <p><strong>Họ và tên: </strong> {parent.full_name} </p>
                        <p><strong>Số điện thoại: </strong>{parent.phone_number}</p>
                        <p><strong>Email: </strong>{parent.email}</p>
                        <p><strong>CCCD: </strong>{parent.id_card}</p>
                        <p><strong>Ngày sinh :</strong>{parent.birthday}</p>
                    </div>
                </div>
            </div>
        )
}