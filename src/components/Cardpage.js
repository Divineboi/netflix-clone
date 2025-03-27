import React from "react";
import { Container, Row, Card, Col} from "react-bootstrap";
const Cardpage = () =>{
    return(
        <div>
            <Container className="my-4">
            <Row className="g-2">
            {/*Card-1*/}
            <Col md={4}>
                <card className="shadow-lg rounded-5 border-5 border-primary">
                <Card.Img variant ="top" src="./moviepic2.jpg" className="shadow-lg rounded-5 border-5 border-primary"></Card.Img>
                </card>
            </Col>
            {/*card-2*/}
            <Col md={4}>
                <card className="shadow">
                <Card.Img variant ="top" src="./moviepic1.jpg" className="shadow-lg rounded-5 border-5 border-primary"></Card.Img>
                </card>
            </Col>
            {/*card-3*/}
            <Col md={4}>
                <card className="shadow">
                <Card.Img variant ="top" src="./moviepic3.jpg" className="shadow-lg rounded-5 border-5 border-primary"></Card.Img>
                </card>
            </Col>
            {/*card-3*/}
            <Col md={4}>
                <card className="shadow">
                <Card.Img variant ="top" src="./moviepic4.jpg" className="shadow-lg rounded-5 border-5 border-primary"></Card.Img>
                </card>
            </Col>
            {/*card-3*/}
            <Col md={4}>
                <card className="shadow">
                <Card.Img variant ="top" src="./moviepic5.jpg" className="shadow-lg rounded-5 border-5 border-primary"></Card.Img>
                </card>
            </Col>
            {/*card-3*/}
            <Col md={4}>
                <card className="shadow">
                <Card.Img variant ="top" src="./moviepic6.jpg" className="shadow-lg rounded-5 border-5 border-primary"></Card.Img>
                </card>
            </Col>
                 </Row>
        </Container>
        </div>
    )
}
export default Cardpage;