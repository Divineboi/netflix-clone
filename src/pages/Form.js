import React from "react";
import { FormControl, Button, Container } from "react-bootstrap";


const Form = ()=>{
    return(
        <div>
           <Container>
          <div className="">
          <h3 className="fs-4 Text-center text-light ms-5">Ready to watch? Enter email to create or Restart membership.</h3>

          </div>
                       <div className="container w-70 d-flex">
                <FormControl type="text" placeholder="Email address" className="Form control text-white fs-5 fw-bold  border-2 border-white bg-dark "></FormControl>
                 <Button className="btn-danger text-light ms-4 fw-bold fs-4">Get Started</Button>
                   </div>
           </Container>
           </div>
    )
}
export default Form;