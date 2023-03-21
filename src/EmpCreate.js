import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const EmpCreate = () => {
    //const[id,idchange] = useState("");
    const[name,namechange] = useState("");
    const[email,emailchange] = useState("");
    const[phone,phonechange] = useState("");
    const[active,activechange] = useState(true);
    const navigate = useNavigate();
    const handlesubmit = (e) =>{
        e.preventDefault();
        const empdata = {name,email,phone,active};
        console.log(JSON.stringify(empdata));
        fetch("http://localhost:8000/employee",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(empdata)
        }).then((res)=>{
            alert("Saved successfully");
            navigate("/");
        }).catch((err)=>{
            console .log(err.message);
        });
    }
    return ( 
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Create Employee</h2>
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
                                            <input value={phone} onChange={ e =>phonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input value={active} onChange={(e)=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
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
 
export default EmpCreate;