import React, { useContext, useEffect, useState } from 'react';
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
import { matchPath } from 'react-router'
import { APIConfig } from '../store/APIConfig';
import axios from 'axios';

	const Detail  = (props) => {

			
		const APIs = useContext(APIConfig);
		const link = APIs.restaurant;
	 const [restaurant, setrestaurant] = useState({});
	 
		useEffect(fetchRestaurantHandler, []);  
   
		function fetchRestaurantHandler() {
			const headers = {
				'Access-Control-Allow-Origin': '*', 
			} 
			//console.log(link+match.params.id);
			   axios(link+match.params.id, { headers })
				.then(response => {
				//	 console.log(response.data.restaurant);
					setrestaurant(response.data.restaurant);
					 // console.log(response.data.restaurant);
					
				})
				.catch(error => {
				   
				})
		 
		}
	
		  const  state = {
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
 
		
const match = matchPath(props.history.location.pathname, {
	path: '/Detail/:id',
	exact: true,
	strict: false
  })

 const   hideAddressModal = () => this.setState({ showAddressModal: false });
 const  getQty = ({id,quantity}) => {
    	//console.log(id);
    	//console.log(quantity);
	}
	const	getStarValue = ({value}) => {
    	console.log(value);
    	//console.log(quantity);
	}



	 
    	return (
		<>
    	  <section className="restaurant-detailed-banner">
	         <div className="text-center">
	            <Image fluid className="cover" src={'/img/uploaded/'+restaurant.coverImage} style={{width:"100%" ,height:"250px"}}/> 
	        </div>
	         <div className="restaurant-detailed-header">
	            <Container>
	               <Row className="d-flex align-items-end">
	                  <Col md={8}>
					    
	                     <div className="restaurant-detailed-header-left">
	                     <Image fluid className="mr-3 float-left" alt="osahan" src="/img/uploaded/Burger.jpg" />
	                       <h2 className="text-white">{restaurant.name}</h2>
	                        <p className="text-white mb-1"><Icofont icon="location-pin" /> {restaurant.address}  
	                        </p>
	                        <p className="text-white mb-0"><Icofont icon="food-cart" />  {restaurant.smallDescription}  
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
		  <section className="offer-dedicated-nav bg-white border-top-0 shadow-sm">
		         <Container>
		            <Row>
		               <Col md={12}>
		                  <span className="restaurant-detailed-action-btn float-right">

							  {restaurant.hasVeg&&
							    <Button variant='light' size='sm' className="border-light-btn mr-1" type="button"><i className="icofont-cauli-flower text-success"  />  Vegi Menu</Button>
		               
		                    }
		                     {restaurant.hasChicken &&
							    <Button variant='light' size='sm' className="border-light-btn mr-1" type="button"><i className="icofont-chicken text-danger"  />  Chicken Menu </Button>
		                    }
 							 {restaurant.hasMeat &&
							    <Button variant='light' size='sm' className="border-light-btn mr-1" type="button"><i className="icofont-cow-head text-warning"   />  Meat Menu </Button>
		                    }
 							{restaurant.hasfish &&
							    <Button variant='light' size='sm' className="border-light-btn mr-1" type="button"><i   className='icofont-fish text-info' />  Chicken Menu </Button>
		                    }
		                  </span>
		                  <Nav  id="pills-tab">
		                     <Nav.Item>
		                        <Nav.Link eventKey="first">Order Online</Nav.Link>
		                     </Nav.Item>
		                     <Nav.Item>
		                        <Nav.Link eventKey="second">Gallery</Nav.Link>
		                     </Nav.Item>
		                     <Nav.Item>
		                        <Nav.Link eventKey="third">Restaurant Info</Nav.Link>
		                     </Nav.Item> 
		                     <Nav.Item>
		                        <Nav.Link eventKey="fifth">Ratings & Reviews</Nav.Link>
		                     </Nav.Item>
		                  </Nav>
		               </Col>
		            </Row>
		         </Container>
	      	</section>
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
													getValue={getQty}
											   	/>
				                                <QuickBite 
													id={2}
											   		title='Cheese corn Roll'
													price={600}
													showBadge={true}
													badgeText='BEST SELLER'
													qty={1}
													priceUnit='$'
													getValue={getQty}
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
													getValue={getQty}
											   	/>
			                                 </div>
			                              </Col>
			                           </Row>
			                        	</Tab.Pane>
										<Tab.Pane eventKey="second">
						            	<div className='position-relative'>
						            		<GalleryCarousel />
						            	</div>
						          	</Tab.Pane>
						            <Tab.Pane eventKey="third">
						            	<div id="restaurant-info" className="bg-white rounded shadow-sm p-4 mb-4">
			                              <div className="address-map float-right ml-5">
			                                 <div className="mapouter">
			                                    <div className="gmap_canvas">
			                                    <iframe title='addressMap' width="300" height="170" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=9&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div>
			                                 </div>
			                              </div>
			                              <h5 className="mb-4">Restaurant Info</h5>
			                              <p className="mb-3">Jagjit Nagar, Near Railway Crossing, 
			                                 <br /> Near Model Town, Ludhiana, PUNJAB
			                              </p>
			                              <p className="mb-2 text-black"><Icofont icon="phone-circle text-primary mr-2" /> +91 01234-56789, +91 01234-56789</p>
			                              <p className="mb-2 text-black"><Icofont icon="email text-primary mr-2" /> iamosahan@gmail.com, osahaneat@gmail.com</p>
			                              <p className="mb-2 text-black"><Icofont icon="clock-time text-primary mr-2" /> Today  11am – 5pm, 6pm – 11pm
			                                 <Badge variant="success" className='ml-1'> OPEN NOW </Badge>
			                              </p>
			                              <hr className="clearfix" />
			                              <p className="text-black mb-0">You can also check the 3D view by using our menue map clicking here &nbsp;&nbsp;&nbsp; <Link className="text-info font-weight-bold" to="#">Venue Map</Link></p>
			                              <hr className="clearfix" />
			                              <h5 className="mt-4 mb-4">More Info</h5>
			                              <p className="mb-3">Dal Makhani, Panneer Butter Masala, Kadhai Paneer, Raita, Veg Thali, Laccha Paratha, Butter Naan</p>
			                              <div className="border-btn-main mb-4">
			                                 <Link className="border-btn text-success mr-2" to="#"><Icofont icon="check-circled" /> Breakfast</Link>
			                                 <Link className="border-btn text-danger mr-2" to="#"><Icofont icon="close-circled" /> No Alcohol Available</Link>
			                                 <Link className="border-btn text-success mr-2" to="#"><Icofont icon="check-circled" /> Vegetarian Only</Link>
			                                 <Link className="border-btn text-success mr-2" to="#"><Icofont icon="check-circled" /> Indoor Seating</Link>
			                                 <Link className="border-btn text-success mr-2" to="#"><Icofont icon="check-circled" /> Breakfast</Link>
			                                 <Link className="border-btn text-danger mr-2" to="#"><Icofont icon="close-circled" /> No Alcohol Available</Link>
			                                 <Link className="border-btn text-success mr-2" to="#"><Icofont icon="check-circled" /> Vegetarian Only</Link>
			                              </div>
			                           </div>
						          	</Tab.Pane>
						             <Tab.Pane eventKey="fifth">
							            <div id="ratings-and-reviews" className="bg-white rounded shadow-sm p-4 mb-4 clearfix restaurant-detailed-star-rating">
			                              <div className="star-rating float-right">
			                              	<StarRating fontSize={26} star={5} getValue={getStarValue}/>
			                              </div>
			                              <h5 className="mb-0 pt-1">Rate this Place</h5>
			                            </div>
			                            <div className="bg-white rounded shadow-sm p-4 mb-4 clearfix graph-star-rating">
			                              <h5 className="mb-0 mb-4">Ratings and Reviews</h5>
			                              <div className="graph-star-rating-header">
			                                 <div className="star-rating">
			                              		<StarRating fontSize={18} disabled={true} star={5} getValue={getStarValue}/>  
			                              		<b className="text-black ml-2">334</b>
			                                 </div>
			                                 <p className="text-black mb-4 mt-2">Rated 3.5 out of 5</p>
			                              </div>
			                              <div className="graph-star-rating-body">
		                                    <RatingBar leftText="5 Star" barValue={56} />
		                                    <RatingBar leftText="4 Star" barValue={23} />
		                                    <RatingBar leftText="3 Star" barValue={11} />
		                                    <RatingBar leftText="2 Star" barValue={6} />
		                                    <RatingBar leftText="1 Star" barValue={4} />
			                              </div>
			                              <div className="graph-star-rating-footer text-center mt-3 mb-3">
			                                 <Button type="button" variant="outline-primary" size="sm">Rate and Review</Button>
			                              </div>
			                            </div>
			                            <div className="bg-white rounded shadow-sm p-4 mb-4 restaurant-detailed-ratings-and-reviews">
			                              <Link to="#" className="btn btn-outline-primary btn-sm float-right">Top Rated</Link>
			                              <h5 className="mb-1">All Ratings and Reviews</h5>
			                              <Review
			                              	image="/img/user/1.png"
											ImageAlt=""
											ratingStars={5}
											Name='Singh Osahan'
											profileLink="#"
											reviewDate= "Tue, 20 Mar 2020"
											reviewText= "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections"
											likes= "856M"
											dislikes= "158K"
											otherUsers={state.users}
			                               />
			                              <hr />
			                              <Review
			                              	image="/img/user/6.png"
											ImageAlt=""
											ratingStars={5}
											Name='Gurdeep Osahan'
											profileLink="#"
											reviewDate= "Tue, 20 Mar 2020"
											reviewText= "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
											likes= "88K"
											dislikes= "1K"
											otherUsers={state.users}
			                               />
			                              <hr />
                              			  <Link className="text-center w-100 d-block mt-4 font-weight-bold" to="#">See All Reviews</Link>
			                            </div>
						            	<div className="bg-white rounded shadow-sm p-4 mb-5 rating-review-select-page">
			                              <h5 className="mb-4">Leave Comment</h5>
			                              <p className="mb-2">Rate the Place</p>
			                              <div className="mb-4">
			                                 <div className="star-rating">
			                              		<StarRating fontSize={26} star={5} getValue={getStarValue}/>
			                                 </div>
			                              </div>
			                              <Form>
			                                 <Form.Group>
			                                    <Form.Label>Your Comment</Form.Label>
			                                    <Form.Control as="textarea" />
			                                 </Form.Group>
			                                 <Form.Group>
			                                    <Button variant="primary" size="sm" type="button"> Submit Comment </Button>
			                                 </Form.Group>
			                              </Form>
			                           </div>
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
								getValue={getQty}
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
								getValue={getQty}
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
								getValue={getQty}
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

export default Detail;