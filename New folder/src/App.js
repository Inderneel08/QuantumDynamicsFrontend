import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";


function App() {

  return (
    <>
      <h1 style={{ marginLeft: '45%' }}> Login </h1>

        <form action="" method="post" style={{ marginLeft:'40%' }}>
            <br />
            <label htmlFor="username" style={{ marginRight:'5%', fontSize: '20px' }}>Username:</label>

            <input type="text" name="username" id="username" style={{ padding:'1%' , border:'1px solid black', borderRadius:'10px' }}/>

            <br />
            <br />

            <label htmlFor="password" style={{ marginRight:'5%', fontSize: '20px ' }}>Password:  </label>

            <input type="password" name="password" id="password" style={{padding:'1%', border:'1px solid black', borderRadius:'10px' }}/>
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
