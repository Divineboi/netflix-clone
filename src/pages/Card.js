import React from "react";
import { Container, Col,  } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Card = () => {
    return(
        <Container>
             <h3 className="text-light">
                Frequently Asked Question! 
            </h3>

            <Col>
            <div className="Card w-100 h-20 bg-secondary mb-3 text-light d-flex justify-content-between align-items-center">
                <h3 className="ms-3"> What is Netflix?   </h3>
                <p className="fs-3"><FontAwesomeIcon icon={faPlus} /> </p>
            </div>
            </Col>

            <Col>
            <div className="Card w-100 h-20 bg-secondary mb-3 text-light d-flex justify-content-between align-items-center">
                <h3 className="ms-3 text-light">How much does Netflix cost Netflix?</h3>
                <p className="fs-3"><FontAwesomeIcon icon={faPlus} /> </p>
            </div>
            </Col>

            <Col>
            <div className="Card w-100 h-20 bg-secondary mb-3 text-light d-flex justify-content-between align-items-center">
                <h3 className="ms-3 text-light"> Where can i watch Netflix?  </h3>
                <p className="fs-3"><FontAwesomeIcon icon={faPlus} /> </p>
            </div>
            </Col>

            <Col>
            <div className="Card w-100 h-20 bg-secondary mb-3 text-light d-flex justify-content-between align-items-center">
                <h3 className=" ms-3 text-light">How do i Cancel?</h3>
                <p className="fs-3"><FontAwesomeIcon icon={faPlus} /> </p>
            </div>
            </Col>

            <Col>
            <div className="Card w-100 h-20 bg-secondary mb-3 text-light d-flex justify-content-between align-items-center">
                <h3 className=" ms-3 text-light"> What  can i watch on Netflix? </h3>
                <p className="fs-3"><FontAwesomeIcon icon={faPlus} /> </p>
            </div>
            </Col>

            <Col>
            <div className="Card w-100 h-20 bg-secondary  mb-3 text-light d-flex justify-content-between align-items-center">
                <h3 className=" ms-3 text-light"> Is Netflix Good for Kids? </h3>
                <p className="fs-3"><FontAwesomeIcon icon={faPlus} /> </p>
            </div>
            </Col>
            <div>
    
  </div>
        </Container>
    )
}
export default Card;