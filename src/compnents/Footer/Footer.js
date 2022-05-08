import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
      
           

           <div class="footer-area container-fluid">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="footer-menu">
							<ul>
								<li><Link to="/home">home</Link ></li>
								<li><Link to="/blogs">blogs</Link ></li>
								<li><Link to="/contactus">contact</Link ></li>
							</ul>
						</div>
						<p> <small>Copyright&copy;2022 Laptop deals.com</small> </p>
						<p> <small>Email: bb3583400@gmail.com</small> </p>
					</div>
					<div class="col-md-6 text-right">
					
						<div class="email-subscriber-form">
							<input type="email" placeholder="Get solution email us "/>
							<input type="submit" value=" SEND EMAIL US"/>
						</div>
					</div>
                    
				</div>
                
			</div>
		</div>





       
    );
};

export default Footer;