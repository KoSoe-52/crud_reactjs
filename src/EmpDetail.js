import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
    const{ empid } = useParams();
    const[empdata,empdatachange] = useState({});
    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empid).then((res) => {
            return res.json();
        }).then((resp) =>{
            empdatachange(resp);
            //console.log(resp);
        }).catch((err) => {
            console.log(err.message);
        });
    },[]);
    return ( 
        <div>
            <div className="container">
                <div className="row" style={{"textAlign":"left"}}>
                    <div className="offset-lg-3 col-lg-6">
                        <div className="col-lg-12">
                            <label>Name</label>
                            <input type="text" value={empdata.name} className="form-control"></input>
                        </div>
                        <div className="col-lg-12">
                            <label>Email</label>
                            <input type="text" value={empdata.email} className="form-control"></input>
                        </div>
                        <div className="col-lg-12">
                            <label>Phone</label>
                            <input type="text" value={empdata.phone} className="form-control"></input>
                        </div>
                        <div className="col-lg-12">
                            <Link to="/" className="btn btn-info">Back To Listing</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default EmpDetail;