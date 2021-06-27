import React, { useEffect, useState } from 'react'
import { Button, Form, Card, FormControl, InputGroup, Row, Col, Container, Alert, Jumbotron } from 'react-bootstrap'
import {CardColumns} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import { useContext } from 'react'
import Context from '../store/context'


const DataAdd = () => {

    const {productname,products,price,id,category,productdetails,actions} = useContext(Context)

    
    
    
    
    

    const addData =  event => {
        event.preventDefault()
        actions({type:"setId"})
        
        const prodObj = {
            id: id.value,
            productname: productname.value,
            category: category.value,
            productdetails: productdetails.value,
            price: price.value
        }

        
        actions({type:"setProducts",payload:{...products,value:{id: id.value,
            productname: productname.value,
            category: category.value,
            productdetails: productdetails.value,
            price: price.value}}})

        console.log(products.value)

        
        
        
        
        actions({type:"setProductName",payload:{...productname,value:""}})
        actions({type:"setCategory",payload:{...category,value:"Electronics"}})
        actions({type:"setProductDetails",payload:{...productdetails,value:""}})
        actions({type:"setPrice",payload:{...price,value:500}})
    }


    return (
        <>
            <Navbar />
            <Alert className="my-4 mx-4 k" variant="dark">
                <h2 className="my-4 text-center">Add Products</h2>
            </Alert>
            <Container className="mt-4 justify-content-center bg-light">
                <Form fluid className="px-4 py-4">
                    <Form.Row >
                        <Col>
                            <Form.Group>
                                <Form.Label>Enter the product name</Form.Label>
                                <Form.Control type="text" value={productname.value} placeholder="Product name" onChange={(e)=>actions({type:"setProductName",payload:{...productname,value: e.target.value}})}  />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Chose the category</Form.Label>
                                <Form.Control as="select" value={category.value} onChange={(e) => actions({type:"setCategory",payload:{...category,value:e.target.value}})} >
                                    <option valu="Electronics">Electronics</option>
                                    <option value="Cloths">Cloths</option>
                                    <option value="Food Items">Food Items</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <p>Enter the product details</p>
                    <InputGroup>

                        <FormControl as="textarea"  aria-label="With textarea" value={productdetails.value}   onChange={(e) => actions({type:"setProductDetails",payload:{...productdetails,value:e.target.value}}) } />
                    </InputGroup>

                    <Col>
                        <Form.Group className="pt-3" controlId="formBasicRange">
                            <Form.Label>Select Price</Form.Label>
                            <Form.Control type="range" min="100" max="10000" value={price.value} onChange={(e) => actions({type:"setPrice",payload:{...price,value:e.target.value}})} />
                            <h4>Total: ${price.value}</h4>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Alert variant="dark" className="py-4 px-4">
                            <Form.Label>Upload an image</Form.Label>
                            <Form.File id="exampleFormControlFile1" label="Example file input" />
                            </Alert>
                        </Form.Group>
                    </Col>
                    <Col className="max-auto pt-3">
                        <Button type="submit" variant="primary" onClick={addData}>Add to List</Button>
                    </Col>
                </Form>
            </Container>

            <CardColumns className="p-4">
                    {products.value.map(p => {
                        return (
                        
                            <Card className="p-3 text-center bg-light" text="dark" variant="light">
                                <Card.Title>{p.productname}</Card.Title>
                                <Row>
                                    <Col> Category:</Col> <Col>{p.category}</Col>
                                </Row>
                                <Row>
                                    <Col> Details:</Col> <Col>{p.productdetails}</Col>
                                </Row>
                                <Row>
                                    <Col> Price:</Col> <Col>{p.price}</Col>
                                </Row>
                            </Card>
                        
                        )
                    })}
                    </CardColumns>

               


            
        </>
    )
}



export default DataAdd
