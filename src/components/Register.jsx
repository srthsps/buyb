
import React from 'react'
import { Container, ButtonGroup, Image, Button, Jumbotron, FormControl, Form, FormGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Register.css'



const Register = () => {


    

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
                    <FormGroup id="formgrp">
                        <FormControl id="input" placeholder="Email id"/>
                    </FormGroup>
                </Form>
                <ButtonGroup  id="btnGrp">
                    
                    <Button variant="success" id="regbtn">Register</Button>
                    <Button href="/login" variant="primary" id="loginbtn">Login</Button>
                    
                </ButtonGroup>
            </Jumbotron>

            
            
        </Container>
            )
}

            export default Register
