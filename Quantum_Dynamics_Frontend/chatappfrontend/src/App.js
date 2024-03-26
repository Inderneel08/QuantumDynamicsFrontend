import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>

    <h1 style={{ marginLeft: '50%' }}> Login </h1>

    {/* <p> Register </p> */}

    <form action="" method="post" style={{ marginLeft:'40%' }}>
      <br />
      <label htmlFor="username" style={{ marginRight:'5%', fontSize: '20px' }}>Username:</label>

      <input type="text" name="username" id="username" style={{ padding:'1%' , border:'1px solid black', borderRadius:'10px' }}/>
      <br />

      <br />
      <br />

      <label htmlFor="password" style={{ marginRight:'5%', fontSize: '20px ' }}>Password:  </label>

      <input type="password" name="password" id="password" style={{padding:'1%', border:'1px solid black', borderRadius:'10px' }}/>
      <br />
      <br />
      <br />
      <br />

      <input type="submit" value="Submit" style={{ padding: '1% 2%', marginLeft: '10%', cursor:'pointer' }} />

    </form>

    <br />
    <br />

    <p> Register if you have not created your account. </p>

    </>
  );
}

export default App;
