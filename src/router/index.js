
import Login from "../pages/Login";
import Home from "../pages/Home";


export const privateRoutes = [
    {path: '/main', component: Home, exact: true},

]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    /*{path: '/main', component: Home, exact: true},*/
]