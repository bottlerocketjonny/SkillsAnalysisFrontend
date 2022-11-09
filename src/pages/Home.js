import React, { useEffect, useState } from 'react';
import axios, { AxiosHeaders } from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [employee, setEmployees] = useState([]);                // react useState to init employees to an empty array

    const { id } = useParams()

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {                              // async/await coz js executes line by line
        const result = await axios.get("http://localhost:8080/employee/getAll");
        setEmployees(result.data);
    };

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:8080/employee/delete/${id}`)
        loadEmployees()

    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Role</th>
                            <th scope="col">Company</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.map((employee, id) => (
                                <tr>
                                    <th scope="row" key={employee.id}>{employee.id}</th>
                                    <td>{employee.firstName} {employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.address}</td>
                                    <td>{employee.role}</td>
                                    <td>{employee.companyName}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-2"
                                            to={`/viewemployee/${employee.id}`}
                                        >View</Link>
                                        <Link className="btn btn-secondary mx-2"
                                            to={`/editemployee/${employee.id}`}
                                        >Edit</Link>
                                        <button className="btn btn-danger mx-2"
                                            onClick={() => deleteEmployee(employee.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
