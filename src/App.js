import './App.css';


import Session from 'react-session-api';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Topbar from '../../blog/src/components/Topbar';
import EmployeeList from './pages/employee/EmployeeList';
import Employee from './pages/employee/Employee';
import EmployeeInsert from './pages/employee/EmployeeInsert';

import React, {useState, useEffect} from "react";
import axios from "axios";

import {
    Switch,//eslint-disable-line no-unused-vars
    Routes,
    Route
} from 'react-router-dom';
import LoginForm from './pages/LoginForm';

const dbUrl = "http://localhost:3000";

// const session=() =>{ 
//     axios({
//         url: dbUrl+`/session`,
//         method:'GET',
//        // withCredentials: true
//     });
// }

// const logout=() =>{
//     axios({
//         url: dbUrl+`/logout`,
//             method:'post',
//             withCredentials: true
//     }).then((result) => {
//         if(result.status === 200){
//             setIsLogin(false);
//         }
//     })
// }

function App() {
    const [email, setEmail] = useState('email');
    const [pasword, setPassword] = useState('password');
    const [login, setLogin] = useState(false); 

    useEffect(() => {
        // axios.get(dbUrl+`/api/employee/employeeList`,{
        axios.get(dbUrl+`/session`,{
                params:{id:10, title:"ddtitle"}
        }).then(reponse => { 
            //setEmployeeList(reponse.data);
          console.log(reponse.data);
        }).catch(function(error){
            console.log('error');
        });
        try{
            if(JSON.parse(localStorage.getItem("member")).login = "1"){

            }
            setLogin(true);
        }catch(e){

        }
    });
    return (
        <div className="App">
            {/* <!-- Page Wrapper --> */}
            <div id="wrapper">

                {/* <!-- Sidebar --> */}
                {login ? <Sidebar /> : ''}
                {/* <!-- End of Sidebar --> */}

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        {/* <!-- Topbar --> */}
                        {login ? <Topbar Session={Session}/> : ''}
                        {/* <!-- End of Topbar --> */}

                        {/* <!-- Begin Page Content --> */}
                        <div className="container-fluid">
                            {/* <Router>  */}
                            <Routes>
                                <>
                                
                                <Route path="/" element={login ? <Home />: <LoginForm db={dbUrl} setLogin={setLogin}/>} exact></Route> 
                                {/* <Route path="/login" element={<Login db={dbUrl}  />} exact></Route> */}
                                <Route path="/loginForm" element={<LoginForm db={dbUrl} setLogin={setLogin}/>} exact></Route>
                                <Route path="/employeeList" element={<EmployeeList db={dbUrl} />} exact></Route>
                                <Route path="/employee" element={<Employee db={dbUrl} />} exact></Route> 
                                <Route path="/employeeInsert" element={<EmployeeInsert db={dbUrl} />} exact></Route> 
                                </>
                                {/* <Route exact path="/" component={Sidebar} />
                <Route exact path="/sidebar" component={Sidebar} />
                <Route exact path="/home" component={Home} /> */}
                            </Routes>
                            {/* </Router> */}

                        </div>
                        {/* <!-- /.container-fluid --> */}

                    </div>
                    {/* <!-- End of Main Content --> */}

                    {/* <!-- Footer --> */}
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; 주성정보 Inc.</span>
                            </div>
                        </div>
                    </footer>
                    {/* <!-- End of Footer --> */}

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
            {/* <!-- End of Page Wrapper --> */}

        </div>
    );
}

export default App;
