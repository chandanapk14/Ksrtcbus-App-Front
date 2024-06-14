import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Login = () => {
    const [data, changeData] = useState(
        {
            "emailid": "",
            "password": ""
        }
    )
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8061/login", data).then(
            (response) => {  
                console.log(response.data)     
                if (response.data.status == "success") {
                    alert("Successfully added")
                    
                } else {
                    alert("Error")
                }
            }).catch()
    }
  return (
    <div>
        <Navbar/><br></br>
        <h1 align="center">Welcome to KSRTC Website</h1><br></br><br></br>
        <h5 align="center">SignIn</h5><br></br>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
            
                            <center><div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <input type="email" className="form-control" placeholder='Email ID' name="email" value={data.email} onChange={inputHandler} />
                            </div></center><br></br>
                            
                            <center><div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br></br>    <input type="password" className="form-control" placeholder='Password' name="password" value={data.password} onChange={inputHandler}/>
                            </div></center>
                            
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                            <center><button className="btn btn-primary" onClick={readValue}>Login</button></center>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center><Link to='/reg'>New User</Link></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login