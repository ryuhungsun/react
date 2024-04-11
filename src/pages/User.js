import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

const User=() => {
    const [user, setUser] = useState(null);
    const [lodding, setLodding] = useState(true);
    const {id} = useParams();
    console.log(id);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then(response=>{
            console.log(response);
             setUser(response.data);
             setLodding(false);
        });
    }, [] );
    
    const userDetail = lodding ? <Spinner/> : (
        <div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )

    return( 
        <>
            <h1>User 정보</h1> 
            { userDetail }
        </>
    )
}

export default User;