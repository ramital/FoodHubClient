import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';  
import DeleteAddressModal from '../modals/DeleteAddressModal';
import OrderCard from '../myRestaurant/OrderCard';
import EditItemCard from './EditItemCard';
import ItemCard from './ItemCard';
 
const Items= ()=>{
	 
	const [state, setState] = useState({});
   
  const  hideDeleteModal = () => setState({ showDeleteModal: false });
  const hideAddressModal = () => setState({ showAddressModal: false });


    	return (
			<>
	        <EditItemCard show={state.showAddressModal} onHide={hideAddressModal}/>
	        <DeleteAddressModal show={state.showDeleteModal} onHide={hideDeleteModal}/>
		    <div className='p-4 bg-white shadow-sm'>
              <Row>
               <Col md={12}>
                  <h4 className="font-weight-bold mt-0 mb-3">Items</h4>
               </Col>
               <Col md={6}>
               	  <ItemCard 
               	  	  boxClass="border border-primary shadow"
					  title= 'Chicken crispy'
					  icoIcon= 'icofont-culinary'
					  iconclassName= 'icofont-3x'
					  address= 'Osahan House, Jawaddi Kalan, Ludhiana, Punjab 141002, India'
					  onEditClick= {() => setState({ showAddressModal: true })}
					  onDeleteClick={() => setState({ showDeleteModal: true })}
               	  />
               </Col>
               
              </Row>
		    </div>
	      </>
    	);
    }
 
export default Items;