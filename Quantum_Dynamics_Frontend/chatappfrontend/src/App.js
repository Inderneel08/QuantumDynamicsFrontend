import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Swal from 'sweetalert2';


function App({updateToken}) {

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Login successful, redirect or perform any action

        const successMessage = await response.json();

        // console.log(successMessage);

        Swal.fire({
          icon: 'success',
          title: 'Success',
          text:'Login successfull',
          didClose: () => {
            updateToken(successMessage.token);
            sessionStorage.setItem('username',successMessage.username);
          }
        });

      } else {
          const errorMessage = await response.text();

          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: errorMessage,
          });
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1 style={{ marginLeft: '45%' }}> Login </h1>

        <form onSubmit={handleSubmit} method="post" style={{ marginLeft:'40%' }}>
            <br />
            <label htmlFor="username" style={{ marginRight:'5%', fontSize: '20px' }}>Username:</label>

            <input type="text" name="username" id="username" style={{ padding:'1%' , border:'1px solid black', borderRadius:'10px' }} value={username} onChange={(e)=> setUsername(e.target.value) }/>

            <br />
            <br />

            <label htmlFor="password" style={{ marginRight:'5%', fontSize: '20px ' }}>Password:  </label>

            <input type="password" name="password" id="password" style={{padding:'1%', border:'1px solid black', borderRadius:'10px' }} value={password} onChange={(e) => setPassword(e.target.value)}  />

            <br />
            <br />

            <input type="submit" value="Submit" style={{ padding: '1% 2%', marginLeft: '10%', cursor:'pointer', borderRadius:'20px' }} />

        </form>

        <br />
        <br />

        <p style={{ marginLeft: '42%' }}> <Link to="/register" >Register</Link> if your account does not exists. </p>
    </>
  );
}

export default App;
