import React from 'react'
// import './contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Explore.css'
import websitelogo from './imagesvid/websitelogo.png'
import Footer from './Footer';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './Menu.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faYoutube,faInstagram,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./contact2.css"
import { Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';


const Contact = () => {
  let navigate = useNavigate();
  return (
    <div>
          
       

          <Navbar className="hell p-0 m-0" bg="black"  fixed="top" expand="lg" variant="dark">
        <Container>
                 <Navbar.Brand ><img src={websitelogo} alt="img" height={60}></img></Navbar.Brand>
          {/* <Navbar.Brand className=" p-3 log text-white" href="#home">PARADISE INN</Navbar.Brand> */}
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ">
              <Nav.Link className="helll " as={Link} to="/">Home</Nav.Link>

              <NavDropdown className=" helll" title="Locations" id="basic-nav-dropdown">
                <NavDropdown.Item  as={Link} to="/mumbai">Mumbai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/chennai">Chennai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/delhi">Delhi</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/kolkata">Kolkata</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/Goa">Goa</NavDropdown.Item>
                {/* <NavDropdown.Dvider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}

              </NavDropdown>
              <Nav.Link className="helll " as={Link} to="/rooms">Rooms</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/services">Restaurant</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/explore">Explore</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link className="helll active" as={Link} to="/contact">Contact Us</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
 
          <div className="text-center tobut">
          <button style={{paddingLeft:"12px",fontSize:"20px",paddingRight:"12px",paddingTop:"6px",paddingBottom:"6px",marginBottom:"10px"}} className="btn56" variant="primary" onClick={() => navigate("/hotels/:id")}>
        Book Now !
      </button>
                        </div>
        </Container>
       
      </Navbar>






		<div className="outer_div22 mb-5">
        <img src="https://visilean.com/wp-content/uploads/2020/12/Group-401.svg"/>

        <div className="content d-flex align-items-center">
          <div className="container text-center ">
            {/* <h1>Welcome to Paradise Inn </h1>
            <h2 className="text-center">CHENNAI</h2> */}
             <h3 style={{opacity:1,fontSize:60}} className="">Contact Us</h3>
            
          </div>
        </div>
      </div>


         {/* <h1>Hello</h1>  */}
		 {/* <div class="contact-wrap mb-5">
			<div class="contact-in">
				<h1>Contact Info</h1>
				<h2> Phone</h2>
				<p>123-456-789</p>
				<h2><i class="fa fa-envelope" aria-hidden="true"></i> Email</h2>
				<p>info@democompany.com</p>
				<h2><i class="fa fa-map-marker" aria-hidden="true"></i> Address</h2>
				<p>Vasant Vihar, Delhi, India</p>

			</div>
			<div class="contact-in">
				<h1>Send a Message</h1>
				<form>
					<input type="text" placeholder="Full Name" class="contact-in-input"/>
					<input type="text" placeholder="Email" class="contact-in-input"/>
					<input type="text" placeholder="Subject" class="contact-in-input"/>
					<textarea placeholder="Message" class="contact-in-textarea"></textarea>
					<input type="submit" value="SUBMIT" class="contact-in-btn"/>
				</form>
			</div>
			{/* <div class="contact-in">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1601968196548!5m2!1sen!2sin" width="100%" height="auto" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
			</div> 
		</div>  */}


<div style={{marginTop:110,marginBottom:-60}} className='app2'>
         <div className="container ">
          {/* <div className="ju" ><h1 className="text-center mt-3 ">Contact Us</h1></div> */}
           <div  className="row">
           <div className="col-12  d-none d-md-block col-md-6 coll1 text-center">
                <h1 className="text-center mt-3 lets">Let's Connect</h1>
                    <div className="biggyy">
                    
                      <img src="https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?w=2000" alt="" width={400} height={300}/>
                   
                     </div>
                    <div className="biggyy">
                    <div className=" m-4 mt-5 biggy2">
                    <a href="#"><i className="fab fa-youtube">  <FontAwesomeIcon icon={faYoutube} className="ico " color="red" /></i></a>
                      </div>
                      <div className=" m-4 mt-5 biggy2">
                      <a href="#"><i className="fab fa-twitter">  <FontAwesomeIcon icon={faTwitter} className="ico " size="60x" color="#1DA1F2" /></i></a>
                      </div>
                      <div className=" m-4 mt-5 biggy2">
                      <a href="#"><i className="fab fa-instagram">  <FontAwesomeIcon icon={faInstagram} className="ico " color="#bc2a8d" /></i></a>
                      </div>
                      <div className=" m-4 mt-5 biggy2">
                      <a href="#"><i className="fab fa-linkedin-in">  <FontAwesomeIcon icon={faLinkedin} className="ico " color="#0072b1" /></i></a>
                      </div>

                      </div>

              </div>
              <div className="col-12 col-md-6 coll2">
              <h1 className="text-center mt-3 mb-5 ju2">Say Something !</h1>
              <div className="biggyy">
           
              <input className="mt-3" placeholder='Enter your Name'/>
          

            
              </div>
              <div className="biggyy">
            
            
              <input  placeholder='Enter your Email'/>
             
              </div>
              <div className="biggyy">
           
              <textarea placeholder='Message'/>

              </div>
              <div className="biggyy">
              <button style={{paddingLeft:"12px",fontSize:"20px",paddingRight:"12px",paddingTop:"6px",paddingBottom:"6px",marginBottom:"10px"}} className="btn56" variant="primary">
      Submit
      </button>
              </div>
           </div>
           </div>
         </div>
    </div>














	<Footer/>
    </div>
    // </div>
    // </div>
    // </div>
    
  )
};

export default Contact
