import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import WebSocket from 'websocket';
import { Client } from '@stomp/stompjs';

function TitleBar({token , updateToken})
{
    const location = useLocation();

    const [Message,setMessage] = useState("");

    // const socket = new WebSocket('ws://localhost:8080/ws');

    const stompClient = new Client();

    useEffect(() => {
        const validateToken = async () => {
            if (token!=null) {
                try {
                    // Send a request to the server to validate the token
                    const response = await fetch('http://localhost:8080/validate', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (!response.ok) {
                        updateToken(null);
                    }
                    
                } catch (error) {
                    console.error('Error validating token:', error);
                }
            }
        };

        validateToken();

        stompClient.configure({
            brokerURL: 'ws://localhost:8080/ws',
            onConnect: () => {
                stompClient.subscribe('/topic/loggedin', (message) => {
                    setMessage(message);
                });

                stompClient.subscribe('/topic/disconnect', (message) => {
                    setMessage('Received disconnect message:', JSON.parse(message.body));
                });
            },
            debug: (msg) => console.log(msg),
            reconnectDelay: 5000,
        });

        stompClient.activate();

        // Add event listener for tab/window close
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            stompClient.deactivate();
        };

    }, [token]);

    const handleBeforeUnload = () => {
        // Send disconnect message to the server
        stompClient.publish({
            destination: '/app/disconnect',
            body: JSON.stringify({ username: sessionStorage.getItem('username') }),
        });
    };

    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand as={Link} to="/">ChatRoom</Navbar.Brand>
                {token?(
                    <>
                    </>
                ):(
                    <>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="login">Login</Nav.Link>
                            <Nav.Link as={Link} to="register">Register</Nav.Link>
                        </Nav>
                    </>
                )}
                </Container>
            </Navbar>

            <Outlet />

            {token?(
                <>
                    {location.pathname!=="/"?(
                        <Navigate to="/" />

                    ):(
                        <>
                            {Message && <p>{Message}</p>}
                        </>
                    )}
                    


                </>
            ):(
                <>
                    
                </>
            )}

        </>
    );
}



export default TitleBar;