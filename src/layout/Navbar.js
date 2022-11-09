import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Employee Skills Analysis</Link>
               
                    <Link className="btn btn-outline-light ms-auto" to="/addemployee">
                        Add Employee
                    </Link>
                    <Link className="btn btn-outline-light mx-3" to="/addsoftskills">
                        Add Soft Skills
                    </Link>

                </div>
            </nav>
        </div>
    )
}
