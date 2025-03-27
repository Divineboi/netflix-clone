import React from "react";
import { FormControl, Button, Container } from "react-bootstrap";


const Form = ()=>{
    return(
        <div>
           <Container>
          <div className="mt-5">
          <h3 className="fs-4 text-center text-light ms-5">Ready to watch? Enter email to create or Restart membership.</h3>

          </div>
                       <div className="container w-70 d-flex justify-content-center align-items-center mt-5">
                <FormControl type="text" className="form-control w-50  fs-5 border-2" placeholder="Email address"></FormControl>
                 <Button className="btn btn-danger  ms-4">Get Started</Button>
                   </div>
           </Container>
           </div>
    )
}
export default Form;