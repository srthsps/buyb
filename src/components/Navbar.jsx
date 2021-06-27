import React from 'react'
import { Button, Card, FormControl, Form,  Nav,  Navbar, NavDropdown, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react'

import Data from './Data'

const Navb = () => {

    const {user,logout,isAuthenticated} = useAuth0()

    console.log(user)

    const Logoutfn = ()=>{
        logout();
    }

    return (
        
            <>
            <Navbar id="navbar2"  className="sticky-top" variant="dark" expand={'sm'}>
                <Navbar.Brand href="/">BuyBee</Navbar.Brand>
                


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"> 
                        <Nav.Link href="/login">Profile</Nav.Link>
                        
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Clothes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Food</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Check Cart</NavDropdown.Item>
                            <NavDropdown.Item href="/data"> Add Product</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    

                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button id="btn-nav" variant="outline-light">Search</Button>
                    </Form>
                    </Navbar.Collapse>  


               <Card id="userCard" className="ml-4"> 
               {isAuthenticated && <Image className="ml-4" id="userImage" src={user.picture} fluid roundedCircle></Image>}
                <NavDropdown drop="bottom-left">
                    {isAuthenticated && <NavDropdown.Item onClick={()=>Logoutfn()}>Logout</NavDropdown.Item>}
                    {!isAuthenticated && <NavDropdown.Item href="/login">Login</NavDropdown.Item>}
                    <NavDropdown.Item href="#action/3.4">Check Cart</NavDropdown.Item>
                </NavDropdown>
                </Card>
               


            </Navbar>

            <Navbar id="navbar" className="pt-4" variant="dark" expand={'sm'}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                
                    <Nav className="mr-auto">
                    <NavDropdown title="EPISODES" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Home" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Autions" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Vendors" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Shortcodes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Media" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Button variant="outline-light">Contact us</Button>
                    </Nav>
                
                    </Navbar.Collapse>
            </Navbar>
            </>
        
    )
}

export default Navb
