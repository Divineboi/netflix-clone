import React from "react";


const Footer = () =>{
    return(
        <footer className="footer bg-black text-light py-4">
            <div className="container-fluid">
                <p className="ms-5 my-4">Questions? Contact Us.</p>

            <div className="d-flex flex-wrap">

                <div className="text-light mx-5">
                    <p>FAQ</p>
                    <p>Investor</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                </div>
                
                <div className="text-light mx-5">
                    <p>Help center</p>
                    <p>Job</p>
                    <p>Cookie</p>
                    <p>Legal notice</p>
                </div>
            <div className="text-light mx-5">
                <p>Account</p>
                <p>Ways to watch</p>
                <p>Corporate</p>
                <p>Only on Netflix</p>
            </div>
            <div className="text-light mx-5">
                <p>Media center</p>
                <p>Terms of Use</p>
                <p>Contact Us</p>
            </div>
            </div>
            </div>
        </footer>
    )
}
export default Footer;