
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Users from "./pages/Users";
import User from "./pages/User";
// eslint-disable-next-line
export default [
    {
        path : '/', 
        component : Home
    },
    {
        path : '/movies',
        component : Movies
    },
    {
        path : '/users',
        component : Users
    },
    {
        path : '/users/:id',
        component : User
    }
];