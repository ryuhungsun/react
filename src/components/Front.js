import '../App.css';

import Sidebar from '../components/Sidebar'; 
import Home from '../components/Home';
import Topbar from '../components/Topbar'; 
import EmployeeList from '../pages/employee/EmployeeList';
import Employee from '../pages/employee/Employee';
import EmployeeInsert from '../pages/employee/EmployeeInsert';

import LoginForm from '../pages/LoginForm';
import {
    Switch,//eslint-disable-line no-unused-vars
    Routes,
    Route
} from 'react-router-dom';

const dbUrl = "http://localhost:3000";
function Front() {
    return (
        <>
        
        <div className="App">

                {/* <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/* <!-- Sidebar --> */}
                    <Sidebar />
                    {/* <!-- End of Sidebar --> */}

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content">

                            {/* <!-- Topbar --> */}
                            <Topbar />
                            {/* <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">
                                {/* <Router>  */}
                                <Routes>
                                    <Route path="/1" element={<Home />} ></Route>
                                    {/* <Route path="/loginForm" element={<LoginForm db={dbUrl} />} exact></Route> */}
                                    <Route path="/front/employeeList" element={<EmployeeList db={dbUrl} />} ></Route>
                                    <Route path="/employee" element={<Employee db={dbUrl} />} ></Route>
                                    <Route path="/employeeInsert" element={<EmployeeInsert db={dbUrl} />} ></Route>
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

            </div></>
    );
}

export default Front;
