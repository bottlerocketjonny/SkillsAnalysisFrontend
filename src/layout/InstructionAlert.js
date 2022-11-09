import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function AlertDismissibleExample() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <div className='container px-5'>
                <Alert variant="success" align="center" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Instructions</Alert.Heading>
                    <p align="center"><br />
                        <h6>
                            To begin, please add an employee and their relevant soft skills using the buttons at the top right of this page.
                            <br /><br />Upon creation, you may edit, view and delete employees here on the homepage.
                            Feel free to close me using the 'x'.
                        </h6>

                    </p>
                </Alert>
            </div>
        );
    }
    return <div className='container px-5' align="center"><Button onClick={() => setShow(true)}>Show Instructions</Button></div>;
}