import { Form, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/employee/';

function Register(){
    const [employeeData, setemployeeData]=useState({
        'name':'',
        'email':'',
        'job':'',
        'salary':'',
        'password':'',
    });

    const handleChange=(event)=>{
        setemployeeData({
            ...employeeData,
            [event.target.name]:event.target.value
        })
    };
    console.log(employeeData);
    
    const submitForm=()=>{
        
        const employeeFormData= new FormData()
        employeeFormData.append("name", employeeData.name)
        employeeFormData.append("email", employeeData.email)
        employeeFormData.append("job", employeeData.job)
        employeeFormData.append("salary", employeeData.salary)
        employeeFormData.append("password", employeeData.password)
        
        try{
            axios.post(baseUrl,employeeFormData).then((response)=>{
                setemployeeData({
                    'name':'',
                    'email':'',
                    'job':'',
                    'salary':'',
                    'password':'',
                })
            });
        }catch(error){
            console.log(error);
        }
    };

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Register Employee</h5>
                        <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input value={employeeData.name} onChange={handleChange} name ="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input value={employeeData.email} onChange={handleChange} name="email" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Job</label>
                                <input value={employeeData.job} onChange={handleChange} name="job" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Salary</label>
                                <input value={employeeData.salary} onChange={handleChange} name="salary" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input value={employeeData.password} onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button onClick={submitForm} type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;