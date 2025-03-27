import React from "react";
import {Container, Col, Card, Row } from "react-bootstrap";

const Content = () =>{
    return(
        <div>
            <Container className="my-5">
            <Row className="g-3 me-2 justify-content-center">
            <Col md={5} className="bg-secondary p-5 shadow-lg rounded-5 border-5 border-primary">
                <card className="shadow-lg ">
                <Card.Text> <h2>Enjoy on your TV</h2></Card.Text>
                <Card.Body><p>Watch on Smart TVs, Playstation, Xbox, <br /> Chromecast, Apple TV, <br /> Blu-ray players, and more.</p></Card.Body>
                </card>
            </Col>
              

              
            <Col lg={5} className="bg-secondary p-5 ms-4 shadow-lg rounded-5 border-5 border-primary">
                <card className="">
                <Card.Text variant ="top"><h2>Download your shows to watch offline</h2></Card.Text>
                <Card.Body><p>Save your favorites easily and <br /> always have something to watch.</p></Card.Body>
                </card>
            </Col>
             

                
                
                <Col md={5} className="bg-secondary p-5  shadow-lg rounded-5 border-5 border-primary">
                <card className="">
                <Card.Text variant="top"> <h2>Watch everywhere</h2></Card.Text>
                <Card.Body><p>Stream unlimited movies and <br />TV shows on your phone, <br /> tablet, laptop, and TV.</p></Card.Body>
                </card>
                </Col>


                <Col md={5} className="bg-secondary p-5 ms-4 shadow-lg rounded-5 border-5 border-primary">
                <card className="">
                <Card.Text variant="top"> <h2>Create profiles for kids</h2></Card.Text>
                <Card.Body><p>Send kids on adventures with their favorite <br /> characters in a space made just  <br />for them — free with your membership.</p></Card.Body>
                </card>
                </Col>

            </Row>
            </Container>
        </div>
    )
}
export default Content;