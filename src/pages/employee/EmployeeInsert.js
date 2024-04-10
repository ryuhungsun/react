import { useLocation   } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";




const EmployeeInsert = () => {
    const location = useLocation();
    const db= location.state.dbUrl;
    console.log("rhs==========11=====>> "+db);
    
    const [employee, setEmployee] = useState({sabun:'', name : '', depart : '', position : '', age : ''});
    useEffect(() => {
        console.log("rhs===============>> ");
    },[]);
    useEffect(() => {
            console.log("rhs===============>> "+db+`/api/employee/employeeInfo`);
            axios.get(db+`/api/employee/employeeInfo`,{ 
            params:{sabun:location.state.sabun, title:"title"}
        }).then(reponse => { 
            console.log("rhs===============>> "+reponse.data[0]);
            
            setEmployee(reponse.data[0]);
          console.log(reponse.data);
          console.log(location.state.sabun);
        });
    },[db]);
    
    return (
        <>
        <div className="">

            {/* <!-- Page Heading --> */}
            {/* <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                    href="https://datatables.net">official DataTables documentation</a>.</p> */}

            {/* <!-- DataTales Example --> */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">사원 정보 </h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable"  cellSpacing="0">
                        <thead>
                                <tr className="small">
                                    <th>사번</th>
                                    <th>성명</th>
                                    <th>부서</th>
                                    <th>직위</th>
                                    <th>나이</th>
                                    {/* <th>입사일자</th>
                                    <th>퇴사일자</th>
                                    <th>생일</th>
                                    <th>나이</th>
                                    <th>주소</th> */}
                                </tr>
                            </thead>
                            {/* <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </tfoot> */}
                            <tbody>
                                
                                    
                                        <tr  className="small" >
                                            <td>{employee.sabun}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.depart}</td>
                                            <td>{employee.position}</td>
                                            <td>{employee.age}</td>
                                            {/* <td>{employee.entry_date}</td>
                                            <td>{employee.retire_date}</td>
                                            <td>{employee.birth_day}</td>
                                            <td>{employee.age}</td>
                                            <td>{employee.address}</td> */}
                                        </tr>
                                   
                               
                                
                            </tbody><thead>
                                <tr className="small">
                                    <th>생일</th>
                                    <th>나이</th>
                                    <th>입사일</th>
                                    <th>퇴사일</th>
                                    <th></th>
                                    {/* <th>입사일자</th>
                                    <th>퇴사일자</th>
                                    <th>생일</th>
                                    <th>나이</th>
                                    <th>주소</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                
                                    
                                        <tr  className="small" >
                                            <td>{employee.birth_day}</td>
                                            <td>{employee.age}</td>
                                            <td>{employee.entry_date}</td>
                                            <td>{employee.retire_date}</td>
                                            <td></td>
                                            {/* <td>{employee.entry_date}</td>
                                            <td>{employee.retire_date}</td>
                                            <td>{employee.birth_day}</td>
                                            <td>{employee.age}</td>
                                            <td>{employee.address}</td> */}
                                        </tr>
                                   
                               
                                
                            </tbody>
                            <tbody>
                                
                                    
                                        <tr  className="small" >
                                            <th>주소</th>
                                            <td colSpan={4}>{employee.address}</td>
                                            {/* <td>{employee.name}</td>
                                            <td>{employee.depart}</td>
                                            <td>{employee.position}</td>
                                            <td>{employee.age}</td> */}
                                            {/* <td>{employee.entry_date}</td>
                                            <td>{employee.retire_date}</td>
                                            <td>{employee.birth_day}</td>
                                            <td>{employee.age}</td>
                                            <td>{employee.address}</td> */}
                                        </tr>
                                   
                               
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>          
        </>
    );  
}

export default EmployeeInsert;