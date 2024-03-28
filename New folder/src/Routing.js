import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./Register";
import TitleBar from "./TitleBar";

function Routing()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TitleBar />}>
                    <Route path="login" element={<App />}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route path="chatroom"></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}




export default Routing;