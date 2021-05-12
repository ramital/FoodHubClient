import React from 'react';
import {NavLink,Link, useHistory, Redirect} from 'react-router-dom';
import {Navbar,Nav,Container,NavDropdown,Image,Badge} from 'react-bootstrap';
import DropDownTitle from '../common/DropDownTitle';
import CartDropdownHeader from '../cart/CartDropdownHeader';
import Icofont from 'react-icofont';
 import JwtUtil from '../../store/JwtUtil';
 import jwt_decode from 'jwt-decode';
import Cart from './Cart';

class Header extends React.Component {

  
	constructor(props) {
	    super(props);
	    this.state = {
	      isNavExpanded: false,
		  username: null
	    };
		
	}

    setIsNavExpanded = (isNavExpanded) => {
      this.setState({ isNavExpanded: isNavExpanded });
    }

    closeMenu = () => {
      this.setState({ isNavExpanded: false });
    }

    handleClick = (e) => {
      if (this.node.contains(e.target)) {
        // if clicked inside menu do something
      } else {
        // If clicked outside menu, close the navbar.
        this.setState({ isNavExpanded: false });
      }
    }
  
	componentDidMount() {				
	    document.addEventListener('click', this.handleClick, false);

		const token = JwtUtil.getToken();
		if (token){
			const decoded = jwt_decode(token);
			this.setState({ username: decoded.sub });
		}
		else {
			this.setState({ username: null });
		}
	}

	handleLogout(){
		JwtUtil.clearToken();
		this.setState({ username: null });
	}

	componentWillUnmount() {
	    document.removeEventListener('click', this.handleClick, false);
	}

	render() {

    	return (
    		<div ref={node => this.node = node}>
			<Navbar onToggle={this.setIsNavExpanded}
           expanded={this.state.isNavExpanded} color="light" expand='lg' className="navbar-light osahan-nav shadow-sm">
			   <Container>

			      <Navbar.Brand eventKey={0} as={NavLink} to="/">
				            <Image src="/img/general/FoodHubsmall.png" alt='' />
				  </Navbar.Brand>
			    
				  <Navbar.Toggle/>
			      <Navbar.Collapse id="navbarNavDropdown">
			         <Nav activeKey={0} className="ml-auto" onSelect={this.closeMenu}>
					
						<Nav.Link eventKey={0} as={NavLink} exact to="/">
			               Home 
			            </Nav.Link>

			            <Nav.Link eventKey={1} as={NavLink}   to="/offers">
             				<Icofont icon='sale-discount'/> Offers  
			            </Nav.Link>
			            

						{this.state.username?										            
							<React.Fragment>
							<NavDropdown alignRight
			            	title={
			            		<DropDownTitle 
			            			className='d-inline-block' 
			            			image="img/general/usr.png"
			            			imageAlt='user'
			            			imageClass="nav-osahan-pic rounded-pill"
			            			title={this.state.username}
			            		/>
			            	}
			            >
					    	<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/myaccount/profile"><Icofont icon='icofont-user'/> Profile</NavDropdown.Item>
				 		 
							<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/myaccount/orders"><Icofont icon='food-cart'/> Orders</NavDropdown.Item>
							<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" onClick={() => this.handleLogout()} to="/logout"><Icofont icon='icofont-logout'/> Logout</NavDropdown.Item>
				 		  </NavDropdown>
 

						   <NavDropdown alignRight
			            	title={
			            		<DropDownTitle 
			            			className='d-inline-block' 
			            			image="img/uploaded/burger.jpg"
			            			imageAlt='user'
			            			imageClass="nav-osahan-pic rounded-pill"
			            			title='My Restaurant'
			            		/>
			            	}
			            >
					    	<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/myrestaurant/profile"><Icofont icon='icofont-user'/> Profile</NavDropdown.Item>
				 		 
							<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/myrestaurant/orders"><Icofont icon='food-cart'/> Orders</NavDropdown.Item>
						 
						 	  </NavDropdown>
			           

			            <Cart/>
			            
							</React.Fragment>:
						

					
							<Nav.Link eventKey={1} as={NavLink} activeclassname="active" to="/login">
							<Icofont icon='login'/> Login
							</Nav.Link>
						
					}

					 </Nav>
			      </Navbar.Collapse>
			   </Container>
			</Navbar>
			</div>
		);
	}
}

export default Header;