import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Image,Form} from 'react-bootstrap';

class Register extends React.Component {

	render() {
    	return (
    	  <Container fluid className='bg-white'>
	         <Row>
	            <Col md={12} lg={12}>
	               <div className="login d-flex align-items-center py-5">
	                  <Container>
	                     <Row>
	                        <Col md={9} lg={8} className="mx-auto pl-5 pr-5">
							<Image src="/img/general/foodhub.png" height='300' alt='' />
	                         <h3 className="login-heading mb-4">New Buddy!</h3>
	                           <Form>
	                              <div className="form-label-group">
	                                 <Form.Control type="email" id="inputEmail" placeholder="Email address" />
	                                 <Form.Label htmlFor="inputEmail">Email address / Mobile</Form.Label>
	                              </div>
	                              <div className="form-label-group">
	                                 <Form.Control type="password" id="inputPassword" placeholder="Password" />
	                                 <Form.Label htmlFor="inputPassword">Password</Form.Label>
	                              </div>
	                              <div className="form-label-group mb-4">
	                                 <Form.Control type="password" id="inputPromo" placeholder="Confirm Password" />
	                                 <Form.Label htmlFor="inputPassword">Confirm Password</Form.Label>
	                              </div>
	                              <Link to="/login" className="btn btn-lg btn-outline-success btn-block btn-login text-uppercase font-weight-bold mb-2">Sign Up</Link>
								  <Link to="/login" className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Back to Sign In</Link>
								  
								  <Link to="/" className="btn btn-lg btn-outline-info btn-block btn-login text-uppercase font-weight-bold mb-2">Skip to Menu</Link>
	                                
	                           </Form>
	                        </Col>
	                     </Row>
	                  </Container>
	               </div>
	            </Col>
	         </Row>
	      </Container>
    	);
    }
}


export default Register;