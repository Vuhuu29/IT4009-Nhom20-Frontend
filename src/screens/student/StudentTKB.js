import React, { useEffect, useState} from "react";
import '../../style/css/student/screen_student.css'

export default function StudentTKB(params){
    const [student, setStudent]=useState("");
    const [activity,setActivity]=useState("");


    useEffect(() => {
        const fetchData = async () => {
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
                    console.log("data_student......",data);
                })
                .catch((error) => {

                })
        }
        fetchData();
    }, [])

    useEffect(() => {
        const fetchActivity = async () => {
            await fetch(`http://localhost:8080/activity/student/${localStorage.getItem("UserId")}`, {
                method: "GET",

                headers: {
                    "Content-type": "application/json",
                    "Token":localStorage.getItem("token")
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    setActivity(data);
                    console.log("data_student......",data);
                })
                .catch((error) => {

                })
        }
        fetchActivity();
    }, [])
    var row=[];
    for (var i=0; i<activity.length; i++){
        row.push(
            <tr>
                <th scope="row">{i}</th>
                <td>{activity[i].title}</td>
                <td>{activity[i].time_start}-{activity[i].time_end}</td>
                <td>{activity[i].content}</td>
            </tr>
        )
    }

    return(
        <div className="Thoikhoabieu">
            <p className="titleThongtin">Thời khóa biểu</p>
            <div className="noidungThongtin">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên hoạt động</th>
                        <th scope="col">Thời gian</th>
                        <th scope="col">Nội dung</th>
                    </tr>
                    </thead>
                    <tbody>
                        {row}
                    </tbody>

                </table>

            </div>
        </div>
    )
}
