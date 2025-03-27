import React from "react";
import {Container, Col, Card } from "react-bootstrap";

const Content = () =>{
    return(
        <div>
            <Container className="d-flex">
                  {/*Card-1*/}
            <Col md={3} className="bg-secondary p-2 me-2  shadow-lg rounded-5 border-5 border-primary">
                <card className="shadow-lg">
                <Card.Text variant="top"> <h2>Enjoy on your TV</h2></Card.Text>
                <Card.Body><p>Watch on Smart TVs, Playstation, Xbox, <br /> Chromecast, Apple TV, <br /> Blu-ray players, and more.</p></Card.Body>
                </card>
                </Col>
              

              
            <Col md={3} className="bg-secondary p-2 me-2 shadow-lg rounded-5 border-5 border-primary">
                <card className="">
                <Card.Text variant ="top"><h2>Download your shows to watch offline</h2></Card.Text>
                <Card.Body><p>Save your favorites easily and <br /> always have something to watch.</p></Card.Body>
                </card>
                </Col>
             

                
                
                <Col md={3} className="bg-secondary p-2 me-2 shadow-lg rounded-5 border-5 border-primary">
                <card className="">
                <Card.Text variant="top"> <h2>Watch everywhere</h2></Card.Text>
                <Card.Body><p>Stream unlimited movies and <br />TV shows on your phone, <br /> tablet, laptop, and TV.</p></Card.Body>
                </card>
                </Col>


                <Col md={3} className="bg-secondary p-2 me-2 shadow-lg rounded-5 border-5 border-primary">
                <card className="">
                <Card.Text variant="top"> <h2>Create profiles for kids</h2></Card.Text>
                <Card.Body><p>Send kids on adventures with their favorite <br /> characters in a space made just  <br />for them — free with your membership.</p></Card.Body>
                </card>
                </Col>

            </Container>
        </div>
    )
}
export default Content;