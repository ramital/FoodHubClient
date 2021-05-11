import React from 'react';
import PropTypes from 'prop-types'; 
import {Link } from 'react-router-dom';
import {Form,Image,Media} from 'react-bootstrap';
import Icofont from 'react-icofont';

class OrderCard extends React.Component {

	render() {
    	return (
	      <div className="bg-white card mb-4 order-list shadow-sm">

	          <div className="gold-members p-4">
	                <Media>
					<div className="osahan-user text-center">
                             <div className="osahan-user-media">
							 <Image className="mr-4" src={this.props.image} alt={this.props.imageAlt} />
							   <div className="osahan-user-media-body">
                                   <p className="mr-4 mt-1"> Rami Tal</p>
                               </div>
                             </div>
                          </div>
	                   <Media.Body>
	                   		{this.props.deliveredDate?
	                   			(
			                      <span className="float-right text-info">Delivered on {this.props.deliveredDate}  
			                      	<Icofont icon="check-circled" className="text-success ml-1" />
			                      </span>
			                    )
			                    :""
	                   		}
	                     
	                      <p className="text-gray mb-1">
	                      	<Icofont icon="location-arrow" /> {this.props.address} 
	                      </p>
	                      <p className="text-gray mb-3">
	                      	<Icofont icon="list" /> ORDER #{this.props.orderNumber} 
	                      	<Icofont icon="clock-time" className="ml-2" /> {this.props.orderDate} 
	                      </p>
	                      <p className="text-dark">
	                      	{this.props.orderProducts} 
	                      </p>

						    
	                      <p className="mb-0 text-black text-primary pt-2">
	                      	<span className="text-black font-weight-bold"> Total Paid:</span> {this.props.orderTotal}
	                      </p>
	                      <hr />
	                  
						  <Form.Group className="col-md-12">
	                                             <Form.Label>Select Status
	                                             </Form.Label>
	                                             <br />
						  <Form.Control as="select" className="custom-select">
											      <option>Pending</option>
											      <option>Preperation</option>
											      <option>Delivery</option>
											    
						  </Form.Control>
						  </Form.Group>
	                   </Media.Body>
	                </Media>
	          </div>
	       </div>
    	);
    }
}

OrderCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  orderNumber: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  deliveredDate: PropTypes.string,
  orderTitle: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  orderProducts: PropTypes.string.isRequired,
  helpLink: PropTypes.string.isRequired,
  detailLink: PropTypes.string.isRequired,
  orderTotal: PropTypes.string.isRequired,
};
export default OrderCard;