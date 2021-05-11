import React, { useContext, useRef } from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Image,Form} from 'react-bootstrap';
import axios from 'axios'
import { APIConfig } from '../store/APIConfig';

const Register = (props) => {

	const uidRef = useRef();
	const pwdRef = useRef();
	const confirmRef = useRef();

	const APIs = useContext(APIConfig);
	const userEndpoint = APIs.Signup;
	
	function handleSignup(){
		const uid = uidRef.current.value;
		const pwd = pwdRef.current.value;
		const confirm = confirmRef.current.value;

		const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }

		if (confirm && confirm === pwd && confirm.length > 0){
			axios.post(userEndpoint, {uid, pwd}, headers).then(response => {
				props.history.push("/login");
			})
			.catch (err => {
				console.log(err);
			})
		}
		else {
			console.log("confirm password");
		}
	}

	
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
									<Form.Control ref={uidRef} type="text" id="inputEmail" placeholder="User name" />
									<Form.Label htmlFor="inputEmail">User name</Form.Label>
								</div>
								<div className="form-label-group">
									<Form.Control ref={pwdRef} type="password" id="inputPassword" placeholder="Password" />
									<Form.Label htmlFor="inputPassword">Password</Form.Label>
								</div>
								<div className="form-label-group mb-4">
									<Form.Control ref={confirmRef} type="password" id="inputPromo" placeholder="Confirm Password" />
									<Form.Label htmlFor="inputPassword">Confirm Password</Form.Label>
								</div>
								<Link onClick={() => handleSignup()} className="btn btn-lg btn-outline-success btn-block btn-login text-uppercase font-weight-bold mb-2">Sign Up</Link>
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


export default Register;