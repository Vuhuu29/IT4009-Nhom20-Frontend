import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
export default function AdminPage(params) {
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem("token")
        const role = localStorage.getItem("UserRole")
        if (!(token && role)) {
            history.push("/login")
        }
        else {
            if (role != "ROLE_ADMIN") {
                history.push("/login")
            }
        }
    }, [])
    return (
        <div>
            <h1>Admin Screen</h1>
        </div>
    )
}