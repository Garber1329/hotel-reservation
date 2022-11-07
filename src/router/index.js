
import Login from "../pages/Login";
import Main from "../pages/Main";


export const privateRoutes = [
    {path: '/main', component: Main, exact: true},

]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    /*{path: '/main', component: Main, exact: true},*/
]