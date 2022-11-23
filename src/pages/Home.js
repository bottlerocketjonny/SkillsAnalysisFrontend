import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import InstructionAlert from "../layout/InstructionAlert";

export default function Home() {

    const [employee, setEmployees] = useState([]);                // react useState to init employees to an empty array

    const { id } = useParams()

    useEffect(() => {
        loadEmployees();
    }, []);

    async function loadEmployees() {
        const result = await axios.get("https://skillsanalysisapp-production.up.railway.app/employee/getAll");
        setEmployees(result.data);
    }

    async function deleteEmployee(id) {
        await axios.delete(`https://skillsanalysisapp-production.up.railway.app/employee/delete/${id}`);
        loadEmployees();

    }

    return (
        <div className='container'>
            <div className='py-4'>


                <table className="table border shadow-sm table-hover table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
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
                <div className='container-sm py-4'>
                    <InstructionAlert />
                </div>
            </div>
        </div>
    )
}


