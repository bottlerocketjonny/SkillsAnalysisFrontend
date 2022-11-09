import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewEmployee() {

    const [employee, setEmployee] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "address": "",
        "role": "",
        "companyName": ""
    })

    const { id } = useParams();

    useEffect(() => {
        loadEmployee()
    }, [])

    const loadEmployee = async () => {
        const result = await axios.get(`http://localhost:8080/employee/getOne/${id}`)
        setEmployee(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Employee Information</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of Employee ID {employee.id}:
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Name: </b>
                                    {employee.firstName} {employee.lastName}
                                </li>
                                <li className="list-group-item">
                                    <b>Email: </b>
                                    {employee.email}
                                </li>
                                <li className="list-group-item">
                                    <b>Address: </b>
                                    {employee.address}
                                </li>
                                <li className="list-group-item">
                                    <b>Role: </b>
                                    {employee.role}
                                </li>
                                <li className="list-group-item">
                                    <b>Company: </b>
                                    {employee.companyName}
                                </li>

                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>Back to Homepage</Link>
                </div>
            </div>
        </div>
    )
}
