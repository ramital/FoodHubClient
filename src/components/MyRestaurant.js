import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {NavLink,Link } from 'react-router-dom';
import {Row,Col,Container,Image} from 'react-bootstrap';
import Orders from './myRestaurant/Orders'; 
import Profile from './myRestaurant/Profile';
import EditProfileModal from './modals/EditProfileModal';

class MyRestaurant extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showEditProfile: false
    };
  }
  hideEditProfile = () => this.setState({ showEditProfile: false });

	render() {
    	return (
    		<>
        <EditProfileModal show={this.state.showEditProfile} onHide={this.hideEditProfile}/>
        <section className="section pt-4 pb-4 osahan-account-page">
           <Container>
              <Row>
                 <Col md={3}>
                    <div className="osahan-account-page-left shadow-sm bg-white h-100">
                       <div className="border-bottom p-4">
                          <div className="osahan-user text-center">
                             <div className="osahan-user-media">
                                <Image className="mb-3  shadow-md mt-4" src="/img/uploaded/burger.jpg" alt="gurdeep singh osahan" />
                                <div className="osahan-user-media-body">
                                   <h6 className="mb-2"> Classic Burger</h6>
                               </div>
                             </div>
                          </div>
                       </div>
                       <ul className="nav flex-column border-0 pt-4 pl-4 pb-4">
                       <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myrestaurant/profile"><i className="icofont-restaurant"></i> Profile</NavLink>
                          </li> 
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myrestaurant/orders"><i className="icofont-food-cart"></i> Orders</NavLink>
                          </li>  
                         
                       </ul>
                    </div>
                 </Col>
                 <Col md={9}>
                  <Switch>
                     <Route path="/myrestaurant/profile" exact component={Profile} />                    
                     <Route path="/myrestaurant/orders" exact component={Orders} />                                         
                   </Switch>
                 </Col>
              </Row>
           </Container>
        </section>
    		</>
    	);
    }
}


export default MyRestaurant;