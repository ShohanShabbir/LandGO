import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './Admin.css'


const Admin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const eventData = {
            
            email:data.email
            
        }
        const url = `http://localhost:5055/addAdmin`;
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };
    return (
        <section>
            <div className="row w-100">
                <div className="col-md-5 col-sm-6 col-12 w-100">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6 col-sm-12 col-12 admin">
                    <h1>Make Admin</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <input name="email" className="form-control" type="email" ref={register} /> 
                        <input style={{marginLeft:'120px'}} className="form-control btn-brand text-white w-50" type="submit" />
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Admin;