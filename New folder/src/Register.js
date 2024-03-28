import { Link } from "react-router-dom";
import { useState } from "react";

function Register()
{
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(formData.name === ""){
            
        }
    
        try {
            const response = await fetch("http://localhost:8080/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                // Registration successful
                console.log("Registration successful");
            } else {
                // Handle error
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    

    return(
        <>
            <h1 style={{ marginLeft: '45%' }}> Register </h1>

            <form onSubmit={handleSubmit} method="post" style={{ marginLeft:'40%' }}>
                <br />

                <label htmlFor="name" style={{ marginRight:'5%', fontSize: '20px' }}>Name:</label>
                <input type="text" name="name" id="name" style={{ padding:'1%' , border:'1px solid black', borderRadius:'10px' }} value={formData.name} onChange={handleChange}/>

                <br />
                <br />

                <label htmlFor="username" style={{ marginRight:'5%', fontSize: '20px' }}>Username:</label>

                <input type="text" name="username" id="username" style={{ padding:'1%' , border:'1px solid black', borderRadius:'10px' }} value={formData.username} onChange={handleChange}/>

                <br />
                <br />

                <label htmlFor="password" style={{ marginRight:'5%', fontSize: '20px ' }}>Password:  </label>

                <input type="password" name="password" id="password" style={{padding:'1%', border:'1px solid black', borderRadius:'10px' }} value={formData.password} onChange={handleChange} />

                <br />
                <br />

                <label htmlFor="confirmpassword" style={{ marginRight:'5%', fontSize: '20px ' }}>Confirm Password:</label>

                <input type="password" name="confirmpassword" id="confirmpassword" style={{padding:'1%', border:'1px solid black', borderRadius:'10px' }} value={formData.confirmpassword} onChange={handleChange} />

                <br />
                <br />

                <input type="submit" value="Submit" style={{ padding: '1% 2%', marginLeft: '10%', cursor:'pointer', borderRadius:'20px' }} />

            </form>

            <br />
            <br />

            <p style={{ marginLeft: '42%' }}> <Link to="/login" >Login</Link> if your account already exists. </p>
        </>
    );
}


export default Register;