import React from "react";
import '../style/App.css';

function Aside(){
    return(
        <div>
            <div className="hero">
<aside  id="sidebar"> 
    <div className="dash">
        <h3>My Website</h3>
    </div>
    <ul>
        <li class="list-0"><i class="fa-solid fa-magnifying-glass"></i> Why deel</li>
        <li><i class="fa-solid fa-print"></i> Products</li>
        <li><i class="fa-solid fa-bookmark"></i> Solution</li>
        <li><i class="fa-brands fa-medium"></i> Resources </li>
        <li><i class="fa-solid fa-chart-simple"></i> Pricing</li>
    </ul>
</aside>
<p><b>Save Hours with our <br /> Acclaimed, by our <i className="ital">deel</i></b> <br />
Same time, Same Work and Elevate Your Business Automate HQ task effortlessly, <br />
Boost team Productivity, and focus on what trully matters - Your people
</p>
<button class="start">Start Free Trial <i class="fa-solid fa-arrow-right"></i></button>
</div>
        </div>
    )
}

export default Aside;