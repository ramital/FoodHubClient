import React from 'react';
import {Form,InputGroup,Modal,ButtonToolbar,Button,ToggleButton,ToggleButtonGroup} from 'react-bootstrap';
import Icofont from 'react-icofont';

class Profile extends React.Component {

	render() {
    	return (
            <div className='p-4 bg-white shadow-sm'>
  				<Form>
             <div className="form-row">
                <Form.Group className="col-md-12">
                   <Form.Label>Full Name</Form.Label>
                   <InputGroup>
                      <Form.Control type="text" placeholder="Full Name" /> 
                   </InputGroup> 
                </Form.Group>

                <Form.Group className="col-md-12">
                   <Form.Label>Email</Form.Label>
                   <InputGroup>
                      <Form.Control type="email" placeholder="Email" /> 
                   </InputGroup> 
                </Form.Group>



                <Form.Group className="col-md-12">
                <Form.Label>Mobile</Form.Label>
                   <InputGroup>
                    <InputGroup.Append>
                         <Button variant="outline-secondary" type="button" id="button-addon2">+1</Button>
                      </InputGroup.Append>   
                      <Form.Control type="text" placeholder="Mobile Number" />
                     
                   </InputGroup>
 
                </Form.Group>
               
                <Form.Group className="col-md-12">
                   <Form.Label>Complete Address</Form.Label>
                   <Form.Control type="text" placeholder="Complete Address e.g. house number, street name, landmark" />
                </Form.Group>
                <Form.Group className="col-md-12">
                   <Form.Label>Delivery Instructions</Form.Label>
                   <Form.Control type="text" placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall" />
                </Form.Group>
                <button className="btn btn-sm btn-outline-info btn-block btn-login text-uppercase font-weight-bold mb-2">save</button>
	                            
             </div>
          </Form>      
          </div>
    	);
    }
}
export default Profile; 