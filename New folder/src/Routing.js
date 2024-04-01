import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./Register";
import TitleBar from "./TitleBar";
import { useState } from 'react';

function Routing()
{
    const [token, setToken] = useState(sessionStorage.getItem('token'));
    const [loggedInUser,setLoggedInUser] = useState(sessionStorage.getItem('username'));

    const updateToken = (newToken) => {
        sessionStorage.setItem('token',newToken);
        setToken(newToken);

        if(newToken==null){
            setLoggedInUser(null);
        }
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TitleBar token={token} updateToken = {updateToken} />}>
                    <Route path="login" element={<App updateToken={updateToken} />}></Route>
                    <Route path="register" element={<Register />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}




export default Routing;