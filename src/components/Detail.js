import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Form,InputGroup,Button,Tab,Nav,Image,Badge} from 'react-bootstrap';
import ItemsCarousel from './common/ItemsCarousel';
import GalleryCarousel from './common/GalleryCarousel';
import CheckoutItem from './common/CheckoutItem';
import BestSeller from './common/BestSeller';
import QuickBite from './common/QuickBite';
import StarRating from './common/StarRating';
import RatingBar from './common/RatingBar';
import Review from './common/Review';
import Icofont from 'react-icofont';

class Detail extends React.Component {
	constructor(props, context) {
	    super(props, context);
 
	    this.state = {
      	  showAddressModal: false,
      	  users:[
      	  	{
      	  		name:'Osahan Singh',
      	  		image:'/img/user/5.png',
      	  		url:'#'
      	  	},
      	  	{
      	  		name:'Gurdeep Osahan',
      	  		image:'/img/user/2.png',
      	  		url:'#'
      	  	},
      	  	{
      	  		name:'Askbootstrap',
      	  		image:'/img/user/3.png',
      	  		url:'#'
      	  	},
      	  	{
      	  		name:'Osahan Singh',
      	  		image:'/img/user/4.png',
      	  		url:'#'
      	  	}
      	  ]
	    };
	}

    hideAddressModal = () => this.setState({ showAddressModal: false });
    getQty = ({id,quantity}) => {
    	//console.log(id);
    	//console.log(quantity);
	}
	getStarValue = ({value}) => {
    	console.log(value);
    	//console.log(quantity);
	}



	render() {
    	return (
		<>
    	  <section className="restaurant-detailed-banner">
	         <div className="text-center">
	            <Image fluid className="cover" src="/img/general/Banner1.jpg" />
	         </div>
	         <div className="restaurant-detailed-header">
	            <Container>
	               <Row className="d-flex align-items-end">
	                  <Col md={8}>
	                     <div className="restaurant-detailed-header-left">
	                       <h2 className="text-white">Food HUB</h2>
	                        <p className="text-white mb-1"><Icofont icon="location-pin" /> 1000 N 4th St, Fairfield, IA 52557   
	                        </p>
	                        <p className="text-white mb-0"><Icofont icon="food-cart" />  Fast Food, Pizza,  Drinks
	                        </p>
	                     </div>
	                  </Col>
	                  <Col md={4}>
	                     <div className="restaurant-detailed-header-right text-right">
	                        
	                     </div>
	                  </Col>
	               </Row>
	            </Container>
	         </div>
	          
	      </section>

          <Tab.Container defaultActiveKey="first">
	   
		      <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
		        <Container>
		            <Row>
		                <Col md={8}>
	                  		<div className="offer-dedicated-body-left">
							    <Tab.Content className='h-100'>
						            <Tab.Pane eventKey="first">
						              <h5 className="mb-4">Recommended</h5>
		                              <Form className="explore-outlets-search mb-4">
		                                 <InputGroup>
		                                    <Form.Control type="text" placeholder="Search for dishes..." />
		                                    <InputGroup.Append>
		                                       <Button type="button" variant="link">
		                                       	<Icofont icon="search" />
		                                       </Button>
		                                    </InputGroup.Append>
		                                 </InputGroup>
		                              </Form>
		                            
			                          <Row>
			                              <h5 className="mb-4 mt-3 col-md-12">Quick Bites <small className="h6 text-black-50">3 ITEMS</small></h5>
			                              <Col md={12}>
			                                 <div className="bg-white rounded border shadow-sm mb-4">
				                                <QuickBite 
													id={1}
											   		title='Chicken Tikka Sub'
													price={250}
													priceUnit='$'
													getValue={this.getQty}
											   	/>
				                                <QuickBite 
													id={2}
											   		title='Cheese corn Roll'
													price={600}
													showBadge={true}
													badgeText='BEST SELLER'
													qty={1}
													priceUnit='$'
													getValue={this.getQty}
											   	/>
				                                <QuickBite 
													id={3}
											   		title='Chicken Tikka Sub'
													price={250}
													showBadge={true}
													badgeText='Pure Veg'
													badgeVariant="success"
													qty={2}
													priceUnit='$'
													getValue={this.getQty}
											   	/>
			                                 </div>
			                              </Col>
			                           </Row>
			                        	</Tab.Pane>
						           
						         </Tab.Content>
						    </div>
						</Col>
		               <Col md={4}>
		           
		               	<div className="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
	                     
                           <h5 className="mb-1 text-white">Your Order
                           </h5>
                           <p className="mb-4 text-white">6 Items</p>
	                     <div className="bg-white rounded shadow-sm mb-2">
	                     	<CheckoutItem 
	                     		itemName="Chicken Tikka Sub"
								price={314}
								priceUnit="$"
								id={1}
								qty={2}
								show={true}
								minValue={0}
								maxValue={7}
								getValue={this.getQty}
	                     	 />
	                     	<CheckoutItem 
	                     		itemName="Cheese corn Roll"
								price={260}
								priceUnit="$"
								id={2}
								qty={1}
								show={true}
								minValue={0}
								maxValue={7}
								getValue={this.getQty}
	                     	 />
	                     	<CheckoutItem 
	                     		itemName="Mixed Veg"
								price={122}
								priceUnit="$"
								id={3}
								qty={1}
								show={true}
								minValue={0}
								maxValue={7}
								getValue={this.getQty}
	                     	 />
	                     	 
		                     
	              		 </div>
	                     <div className="mb-2 bg-white rounded p-2 clearfix">
	                        <Image fluid className="float-left" src="/img/wallet-icon.png" />
	                        <h6 className="font-weight-bold text-right mb-2">Subtotal : <span className="text-danger">$456.4</span></h6>
	                        <p className="seven-color mb-1 text-right">Extra charges may apply</p>
	                        <p className="text-black mb-0 text-right">You have saved $955 on the bill</p>
	                     </div>
                     	 <Link to="/thanks" className="btn btn-success btn-block btn-lg">Checkout
                     	 <Icofont icon="long-arrow-right" /></Link>
					      <div className="pt-2"></div>
		                
		   				 
		   				</div>
		               </Col>
					</Row>
				</Container>
		      </section>

	      </Tab.Container>
	    </>
    	);
    }
}


export default Detail;