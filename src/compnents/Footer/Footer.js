import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
      
           

           <div class="footer-area container-fluid">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="footer-menu">
							<ul>
								<li><a href="">home</a></li>
								<li><a href="">blogs</a></li>
								<li><a href="">contact</a></li>
							</ul>
						</div>
						<p> <small>Copyright&copy;2022 Laptop deals.com</small> </p>
						<p> <small>Email: bb3583400@gmail.com</small> </p>
					</div>
					<div class="col-md-6 text-right">
					
						<div class="email-subscriber-form">
							<input type="email" placeholder="Get solution email us "/>
							<input type="submit" value="EMAIL US"/>
						</div>
					</div>
                    
				</div>
                
			</div>
		</div>





       
    );
};

export default Footer;