import React, {useContext, useState} from 'react';
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";

function Login() {
    const {setIsAuth} = useContext(AuthContext);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const dataVerification = () => {

        if(login==="admin" && password==="admin"){
            setIsAuth(true);
            localStorage.setItem('auth', 'true');
            navigate("/admin");
        } else {
            alert("The login or password is incorrect")
        }

    }

    return (
        <div className="container">
            <div className="text-center">
                <main className="d-flex justify-content-center">
                    <form style={{width: "400px"}}>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating mb-3">
                            <input type="login" className="form-control" id="floatingInput" placeholder="admin"
                                   value ={login}
                                   onChange={e => setLogin(e.target.value)}></input>
                            <label htmlFor="floatingInput">Login</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="admin"
                                   value ={password}
                                   onChange={e => setPassword(e.target.value)}></input>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <button type="submit" className="w-100 btn btn-lg btn-primary"
                                onClick={()=>dataVerification()}
                        >Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
                    </form>
                </main>
            </div>
        </div>


    );

}

export default Login;