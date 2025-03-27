import React from "react";
import {FormControl, Button, Nav } from "react-bootstrap";

const Heropage = ()=>{
    return(
        <div>
            <div className="hero-page">
                <Nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <h2 className="navbar-brand fs-2 text-danger fw-bold"> NETFLIX</h2>
                        <Button className="btn-danger">Sign-In</Button>
                    </div>
                </Nav>

               <div className="hero-body place-items-center text-center justify-content-center align-items-center">
                   
                   <div className="container mt-5">
                   <p className="word fs-1 font-family-Georgia, 'Times New Roman', Times, serif fw-bolder text-light"> Unlimited Movies, <br /> TV Shows, and <br /> More.</p>
                   <p className="fs-4 text-light">Starts at #2,200. Cancel Anytime</p>
                   <p className="text-light">Ready To Watch? Enter Your Email To Create or Restart your Membership.</p>
                   
                   </div>
                   <div className="container d-flex justify-content-center align-items-center">
                    <FormControl type="text" placeholder="Email address" className="w-50 text-dark fs-5 border-2"></FormControl>
                    <Button className="btn btn-danger text-light ms-4">Get Started </Button>
                   </div>
            
            </div>
            </div>
       

        </div>
    )
}
export default Heropage;
