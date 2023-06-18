import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const EmpEdit = () => {
    const{ empid } = useParams();
    const[name,namechange] = useState("");
    const[email,emailchange] = useState("");
    const[phone,phonechange] = useState("");
    const[active,activechange] = useState(false);
    const[validation,valchange] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empid).then((res) => {
            return res.json();
        }).then((resp) =>{
            console.log(resp);
            namechange(resp.name);
            emailchange(resp.email);
            phonechange(resp.phone);
            activechange(resp.active);
        }).catch((err) => {
            console.log(err.message);
        });
    },[]);
    const handleUpdate = (e) => {
        e.preventDefault();
       const empdata = {name,email,phone,active};
       fetch("http://localhost:8000/employee/"+empid,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(empdata)
       }).then((resp) =>{
            alert("Update successfully");
            navigate("/");
       }).catch((err)=>{
            console.log(err.message);
       })
    }
    return ( 
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleUpdate}>
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Edit Employee</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <lable>ID</lable>
                                            <input  disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <lable>Name</lable>
                                            <input value={name} onChange={ e =>namechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <lable>Email</lable>
                                            <input value={email} onChange={ e =>emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <lable>Phone</lable>
                                            <input value={phone}  onChange={ e =>phonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input  checked={active} onChange={(e)=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <lable>Is Active</lable>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button  className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-info">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
} 
export default EmpEdit;
