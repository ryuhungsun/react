import React from "react";
import { Link } from "react-router-dom";
const UserList=({users})=>{
    console.log(users);
    return(
        <div>
            
            {users.map(user =>{
                return(
                    <div className="card mb-2"  key={user.id}>
                        <div className="card-body p-2">
                        <Link to={`/users/${user.id}`} style={{ textDecoration: "none"}}>{user.name} </Link>
                        </div>
                    </div>
                )
             })
             }
        </div>
    );
};

export default UserList;