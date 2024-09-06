import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css'; // Ensure this CSS is imported
import { useNavigate } from 'react-router'
import NavbarLogo from '../Assets/Images/NavbarBrandBgRemover.png'
import { useAuth } from '../Components/AuthContext';
import { ToastContainer, toast } from "react-toastify";


export default function Header() {
    const { isAuthenticated, logout } = useAuth();
    const nav = useNavigate()

    const logoutUser = async () => {
        await logout()
        nav("/")
        toast.success("Logout Successful", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    }

    const login = () => {
        nav('/signup')
    }
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <Navbar bg="primary" expand="lg" variant="dark">
                <Container>
                    <img src={NavbarLogo} alt="" srcset="" style={{ width: '50px', height: 'auto', backgroundColor: "transparent" }} />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-auto">
                            <Nav.Link as={Link} to="/" className="text-white">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="text-white">
                                Contact
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about" className="text-white">
                                About
                            </Nav.Link>
                        </Nav>
                        <Nav>


                            {isAuthenticated ? (
                                <button className="btn btn-success" onClick={()=>logoutUser()}>Logout</button>
                            ) : (
                                <button className="btn btn-success" onClick={() => login()} >Login</button>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
