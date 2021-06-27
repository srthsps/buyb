import React from 'react'
import { Container, Alert, ButtonGroup, Image, Button, Card, Jumbotron, FormControl, Form, FormGroup, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import {useAuth0} from '@auth0/auth0-react'


const Login = () => {

    
        const {loginWithRedirect,logout} = useAuth0()

    

    return (
        <Container  id="container">

           

            <Jumbotron id="jump">
                <h1 id="loginHead" href="/">BuyB</h1>
                <Form is="form">
                    <FormGroup id="formgrp">
                        <FormControl id="input" placeholder="username"/>
                    </FormGroup>
                    <FormGroup id="formgrp">
                        <FormControl id="input" placeholder="password"/>
                    </FormGroup>
                </Form>
                <ButtonGroup  id="btnGrp">
                    <Button variant="primary" id="loginbtn">Login</Button>
                    <Button href="/register" variant="success" id="regbtn">Register</Button>
                    <Button onClick={()=>loginWithRedirect()} variant="danger" id="googlebtn">Sign in With Google</Button>
                </ButtonGroup>
            </Jumbotron>

            
            
        </Container>
            )
}

            export default Login
