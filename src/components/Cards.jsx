import React from 'react'
import { Container, Alert, Image, Button, Card, FormControl, Form, FormGroup, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Data from './Data'
import './Cards.css'
import { useContext } from 'react'
import Context from '../store/context'

const Cards = () => {

    const {products} = useContext(Context)

    console.log(products.value)
    return (
        <div className="cards">

            <Navbar />


            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="luffy.jpg" />
                <Card.ImgOverlay className="">
                    <h1 id="card-head">Welcome to BuyBee</h1>
                </Card.ImgOverlay>
            </Card>

            

                <CardGroup>

                    <Card style={{ width: '100%' }} bg="dark" text="light" border="dark" className="align-center mr-2 ml-2 mb-2">
                        <Card.Header>Pirate King</Card.Header>
                        <Card.Img variant="top" src="luffy.jpg" />

                        <Card.Body>
                            <Card.Title>Monkey D Luffy</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="outline-light">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '100%' }} bg="dark" text="light" border="dark" className="align-center mr-2 ml-2 mb-2">
                        <Card.Header>Pirate King</Card.Header>
                        <Card.Img variant="top" src="luffy.jpg" />

                        <Card.Body>
                            <Card.Title>Monkey D Luffy</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="outline-light">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '100%' }} bg="dark" text="light" border="dark" className="align-center mr-2 ml-2 mb-2">
                        <Card.Header>Pirate King</Card.Header>
                        <Card.Img fluid variant="top" src="luffy.jpg" />

                        <Card.Body>
                            <Card.Title>Monkey D Luffy</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="outline-light">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '100%' }} bg="dark" text="light" border="dark" className="align-center mr-2 ml-2 mb-2">
                        <Card.Header>Pirate King</Card.Header>
                        <Card.Img variant="top" src="luffy.jpg" />

                        <Card.Body>
                            <Card.Title>Monkey D Luffy</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="outline-light">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </CardGroup>
            </div>
            )
}

            export default Cards
