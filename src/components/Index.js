import React, { useContext, useEffect, useState } from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import TopSearch from './home/TopSearch';
import ProductBox from './home/ProductBox';
import CardItem from './common/CardItem';
import SectionHeading from './common/SectionHeading';
import FontAwesome from './common/FontAwesome';
import axios from 'axios';
import { APIConfig } from '../store/APIConfig';

// class Index extends React.Component {

	const Index  = (props) => {
 
		const APIs = useContext(APIConfig);
		const link = APIs.restaurant;
		const [posts, setPosts] = useState([]);
   
		const options={
		responsive: {
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000: {
			items: 4,
			},
			1200: {
			items: 4,
			},
		},

			lazyLoad: true,
			pagination: false.toString(),
			loop: false,
			dots: true,
			autoPlay: 2000,
			nav: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
	}

	useEffect(fetchPostsHandler, []);  
   
	function fetchPostsHandler() {
        const headers = {
            'Access-Control-Allow-Origin': '*', 
        } 
    	   axios(link, { headers })
            .then(response => {
				 setPosts(response.data.restaurants);
			 console.log(response.data.restaurants)
            })
            .catch(error => {
               
            })

    }

	
    const cards = posts.map(post => {
       
		return <Col md={3} xs={6}>
		<div className="item">
					<CardItem 
				   key={post.id}
				  title={post.name}
				  subTitle={post.smalldescription}
				  imageAlt='Product'
				  image={post.profileimage} 
				  imageClass='img-fluid item-img'
				  linkUrl={'detail/'+ post.id}
				  offerText='65% off | Use Coupon OSAHAN50'
				  time={post.deliveredtime}//'20–25 min'
				  price='$250 FOR TWO'
				  showPromoted={true}
				  promotedVariant='dark'
				  favIcoIconColor='text-danger'
				  rating='3.1 (300+)'
				 />
		   </div>	</Col>
		  });
 


    	return (
    		<>
    			<TopSearch />
				<section className="section pt-5 pb-5 bg-white homepage-add-section">
					<Container>
						<SectionHeading 
								heading='Promoted Restaurants'
								subHeading='Top Four Trending Chosen for You'
							/>
						 <Row>
					
						 {cards}
						 
						</Row>
					</Container>
				</section>

			   
			    <section className="section pt-5 pb-5 bg-white becomemember-section border-bottom">
			         <Container>
			         	<SectionHeading 
			         		heading='Become a Member'
			         		subHeading='Join us Now'
			         	/>
			            <Row>
			               <Col sm={12} className="text-center">
			                  <Link to="register" className="btn btn-success btn-lg">
			                  	Create an Account <FontAwesome icon='chevron-circle-right' />
			                  </Link>
			               </Col>
			            </Row>
			         </Container>
			    </section>

    		</>
    	);
    }
 




export default Index;