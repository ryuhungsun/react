import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";

const Users=() => {
    const [users, setUsers] = useState([]);
    const [lodding, setLodding] = useState(true);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(response=>{
            setUsers(response.data);
            setLodding(false);
        });
    }, [] );
    
    return(
        <>
            <h1>Users</h1>
            {lodding ?
            <Spinner/> :
            <UserList users={users}/>
            }
        </>
    )
}

export default Users;