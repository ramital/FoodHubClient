import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {NavLink,Link } from 'react-router-dom';
import {Row,Col,Container,Image} from 'react-bootstrap';
import Offers from './myaccount/Offers';
import Orders from './myaccount/Orders';
import Favourites from './myaccount/Favourites';
import Payments from './myaccount/Payments';
import Addresses from './myaccount/Addresses';
import Profile from './myaccount/Profile';
import EditProfileModal from './modals/EditProfileModal';

class MyAccount extends React.Component {
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
                                <Image className="mb-3 rounded-pill shadow-sm mt-1" src="/img/general/usr.png" alt="gurdeep singh osahan" />
                                <div className="osahan-user-media-body">
                                   <h6 className="mb-2">Rami Tal</h6>
                               </div>
                             </div>
                          </div>
                       </div>
                       <ul className="nav flex-column border-0 pt-4 pl-4 pb-4">
                       <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myaccount/profile"><i className="icofont-user"></i> Profile</NavLink>
                          </li> 
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myaccount/orders"><i className="icofont-food-cart"></i> Orders</NavLink>
                          </li>  
                         
                       </ul>
                    </div>
                 </Col>
                 <Col md={9}>
                  <Switch>
                  <Route path="/myaccount/profile" exact component={Profile} />
                    
                     <Route path="/myaccount/orders" exact component={Orders} />
                    
                   </Switch>
                 </Col>
              </Row>
           </Container>
        </section>
    		</>
    	);
    }
}


export default MyAccount;