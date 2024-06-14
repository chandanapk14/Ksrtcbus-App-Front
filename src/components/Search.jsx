import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () =>{
    const [data, setData] = useState(

        {
            "bname": ""

        }

    )
    const [result, setResult] = useState([])


    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8061/search",data).then(
          (response)=>{
            setResult(response.data)
          }
        ).catch().finally()
 
    }

    const deletebus=(id)=>{
        let input={"_id":id}
        axios.post("http://localhost:8061/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully Deleted")
                } else {
                    alert("Error")
                }

            }
        ).catch().finally()
    }
    return (
        <div>
            <Navbar/><br></br>
            <br></br><h3><u><center>Search Bus</center></u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12-col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Bus Name</label>
                                <input type="text" className="form-control" name='bname' value={data.bname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center><button className="btn btn-success" onClick={readValue}>Search</button></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-dark table-striped-columns">
                        
                            <thead>
                                <tr>
                                    <th scope="col">Bus Name</th>
                                    <th scope="col">Route</th>
                                    <th scope="col">Bus No</th>
                                    <th scope="col">Driver Name</th>
                                    <th></th>
                                    
                                    
                                </tr>
                            </thead>
                            <tbody>
                               {result.map(
                                (value,index)=>{
                                    return <tr>
                                    <td>{value.bname}</td>
                                    <td>{value.route}</td>
                                    <td>{value.busno}</td>
                                    <td>{value.drname}</td>
                                   
                                    <td><button className="btn btn-danger" onClick={()=>{deletebus(value._id)}}>Delete</button></td>
                                </tr>
                                }
                               )}
                                
                            </tbody>
                        </table>
                   
                </div>
            </div>
        </div>
    )
}

export default Search