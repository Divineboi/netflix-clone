import React from "react";


const Footer = () =>{
    return(
        <div className="h-10">
            <div>
                <p className="text-light ms-5 my-4">Questions? Contact us.</p>
            </div>

            <div className="d-flex justify-content-center">
               <div className="text-light ms-5">
               <p>FAQ</p>
               <p>Investor Relations</p>
               <p>Privacy</p>
               <p>Speed Test</p>
               </div>
            <div className="text-light ms-5 ">
                <p>Help center</p>
                <p>Job</p>
                <p>Cookie Preferences</p>
                <p>Legal notice</p>
            </div>
            <div className="text-light ms-5">
                <p>Account</p>
                <p>Ways to watch</p>
                <p>Corporate Information</p>
                <p>Only on Netflix</p>
            </div>
            <div className="text-light ms-5">
                <p>Media center</p>
                <p>Terms of Use</p>
                <p>Contact Us</p>
            </div>
            </div>
        </div>
    )
}
export default Footer;