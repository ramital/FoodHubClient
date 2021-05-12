import React, { useContext, useEffect, useRef } from 'react';
import {Form,InputGroup,Modal,ButtonToolbar,Button,ToggleButton,ToggleButtonGroup} from 'react-bootstrap';
import axios from 'axios';
import { APIConfig } from '../../store/APIConfig';
import JwtUtil from '../../store/JwtUtil';

const Profile = (props) => {

   const formRef = useRef();

   const APIs = useContext(APIConfig);
   const UserRestaurent = APIs.UserRestaurent;

   const headers = {
      'Access-Control-Allow-Origin': '*',      
      'Content-Type': 'application/json',   
      'Authorization': 'Bearer ' + JwtUtil.getToken()
   }

   function getRestaurantProfile() {

      axios.get(UserRestaurent, {headers})
      .then(response => {         
         displayData(response.data);
        
      })
      .catch(error => {
         console.log(error);
      });
   }

   function displayData(restaurant){
      const from = formRef.current;

      from["name"].value = restaurant.name;
      from["description"].value = restaurant.description;
      from["address"].value = restaurant.address;
      from["contact"].value = restaurant.contact;
      from["deliveredTime"].value = restaurant.deliveredTime;

      from["hasVeg"].checked = restaurant.hasVeg;
      from["hasChicken"].checked = restaurant.hasChicken;
      from["hasMeat"].checked = restaurant.hasMeat;
      from["hasFish"].checked = restaurant.hasFish;
   }

   useEffect(() => {
      getRestaurantProfile();      
   }, []);

   function handleUpdate(){
      const from = formRef.current;
      const restaurant = {};

      restaurant.name = from["name"].value;
      restaurant.description = from["description"].value;
      restaurant.address = from["address"].value;
      restaurant.contact = from["contact"].value;
      restaurant.deliveredTime = from["deliveredTime"].value;

      restaurant.hasVeg = from["hasVeg"].checked;
      restaurant.hasChicken = from["hasChicken"].checked;
      restaurant.hasMeat = from["hasMeat"].checked;
      restaurant.hasFish = from["hasFish"].checked;
      

      axios.post(UserRestaurent, restaurant, {headers})
      .catch(error => {
         console.log(error);
      });
   }

   return (
         <div className='p-4 bg-white shadow-sm'>
         <Form ref={formRef}>
            <div className="form-row">
               <Form.Group className="col-md-12">
                  <Form.Label>Name</Form.Label>
                  <InputGroup>
                     <Form.Control name="name" type="text" placeholder="Restaurant Name" /> 
                  </InputGroup> 
               </Form.Group>

               <Form.Group className="col-md-12">
                  <Form.Label>Small Description</Form.Label>
                  <InputGroup>
                     <Form.Control name="description" type="text" placeholder="Small Description (50 characters)" /> 
                  </InputGroup> 
               </Form.Group>

               <Form.Group className="col-md-12">
                  <Form.Label>Contact Number</Form.Label>
                  <InputGroup>
                  <InputGroup.Append>
                        <Button variant="outline-secondary" type="button" id="button-addon2">+1</Button>
                     </InputGroup.Append>   
                     <Form.Control name="contact" type="text" placeholder="Mobile Number" />                  
                  </InputGroup>
               </Form.Group>
            
               <Form.Group className="col-md-12">
                  <Form.Label>Address</Form.Label>
                  <Form.Control name="address" type="text" placeholder="Address e.g. house number, street name, landmark" />
               </Form.Group>

               <Form.Group className="col-md-12">
                  <Form.Label>Delivery Time</Form.Label>
                  <Form.Control name="deliveredTime" type="text" placeholder="Open and close time" />
               </Form.Group>

               <Form.Group className="col-md-12">
                  <Form.Label>Has Veg</Form.Label>
                  <Form.Control name="hasVeg" type="checkbox" />

                  <Form.Label>Has Chicken</Form.Label>
                  <Form.Control name="hasChicken" type="checkbox" />

                  <Form.Label>Has Meat</Form.Label>
                  <Form.Control name="hasMeat" type="checkbox"/>

                  <Form.Label>Has Fish</Form.Label>
                  <Form.Control name="hasFish" type="checkbox" />
               </Form.Group>

               <button onClick={() => handleUpdate()} className="btn btn-sm btn-outline-info btn-block btn-login text-uppercase font-weight-bold mb-2">save</button>
            </div>
         </Form>      
         
         </div>
   );
    
}
export default Profile; 