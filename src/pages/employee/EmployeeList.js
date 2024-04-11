import { useNavigate  } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";




const EmployList = ({db}) => {
    const navigate = useNavigate();

    const employeeView=(sabun) => {
        navigate('/employee', {
            state: {
                dbUrl : db,
                sabun: `${sabun}` 
            },
        });
    };
    
    const [employeeList, setEmployeeList] = useState([]);
    useEffect(() => {
        axios.get(db+`/api/employee/employeeList`,{
            params:{id:10, title:"ddtitle"}
        }).then(reponse => { 
            setEmployeeList(reponse.data);
          console.log(reponse.data);
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
                        <h6 className="m-0 font-weight-bold text-primary">사원 목록 </h6>
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
                                    {/* let loadEmployeeList = employeeList.map((employee, index) => {

                                    }); */}
                                    {employeeList.map(employee => {
                                        return (
                                            <tr key={employee.sabun} className="small" onClick={()=>employeeView(employee.sabun)}>
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
                                        )
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default EmployList;