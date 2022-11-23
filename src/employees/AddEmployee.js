import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
    let navigate = useNavigate();

    const [employee, setEmployee] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "dob": "",
        "address": "",
        "role": "",
        "companyName": ""
    });

    const { firstName, lastName, email, dob, address, role, companyName } = employee;

    const onInputChange = (e) => {

        setEmployee({ ...employee, [e.target.name]: e.target.value })
    };

    let headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json"
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://skillsanalysisapp-production.up.railway.app/employee/create", employee, { "headers": headers });
        navigate("/");
    };

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add Employee</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="FirstName" className="form-label">
                                First Name
                            </label>
                            <input type={"text"}
                                className="form-control"
                                placeholder="Enter employee's first name"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="LastName" className="form-label">
                                Last Name
                            </label>
                            <input type={"text"}
                                className="form-control"
                                placeholder="Enter employee's last name"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Email
                            </label>
                            <input type={"text"}
                                className="form-control"
                                placeholder="Enter employee's email (example@domain.com)"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="DOB" className="form-label">
                                Date of Birth
                            </label>
                            <input type={"text"}
                                className="form-control"
                                placeholder="Enter employee's dob (yyyy-mm-dd)"
                                name="dob"
                                value={dob}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Address" className="form-label">
                                Address
                            </label>
                            <input type={"text"}
                                className="form-control"
                                placeholder="Enter employee's address"
                                name="address"
                                value={address}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Role" className="form-label">
                                Role
                            </label>
                            <input type={"text"}
                                className="form-control"
                                placeholder="Enter employee's role"
                                name="role"
                                value={role}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Company" className="form-label">
                                Company
                            </label>
                            <input type={"text"}
                                className="form-control"
                                placeholder="Enter company name"
                                name="companyName"
                                value={companyName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        <button type="cancel" className="btn btn-outline-danger mx-2">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
