import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {Navbar,Nav,Container,NavDropdown,Image,Badge} from 'react-bootstrap';
import DropDownTitle from '../common/DropDownTitle';
import CartDropdownHeader from '../cart/CartDropdownHeader';
import CartDropdownItem from '../cart/CartDropdownItem';
import Icofont from 'react-icofont';

class Header extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      isNavExpanded: false
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
			            
			            <NavDropdown alignRight
			            	title={
			            		<DropDownTitle 
			            			className='d-inline-block' 
			            			image="img/general/usr.png"
			            			imageAlt='user'
			            			imageClass="nav-osahan-pic rounded-pill"
			            			title='My Account'
			            		/>
			            	}
			            >
					    	<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/myaccount/profile"><Icofont icon='icofont-user'/> Profile</NavDropdown.Item>
				 		 
							<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/myaccount/orders"><Icofont icon='food-cart'/> Orders</NavDropdown.Item>
							<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/login"><Icofont icon='icofont-logout'/> Logout</NavDropdown.Item>
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
			            <NavDropdown activeclassname="active" alignRight className="dropdown-cart" 
			            	title={
			            		<DropDownTitle 
			            			className='d-inline-block' 
			            			faIcon='shopping-basket'
			            			iconClass='mr-1'
			            			title='Cart'
			            			badgeClass='ml-1'
			            			badgeVariant='success'
			            			badgeValue={5}
			            		/>
			            	}
			            >

			                <div className="dropdown-cart-top shadow-sm">
			               	
			                  <div className="dropdown-cart-top-body border-top p-4">
			                     <CartDropdownItem 
			                     	icoIcon='ui-press'
			                     	iconClass='text-success food-item'
			                     	title='Corn & Peas Salad x 1'
			                     	price='$209'
			                     />

			                     <CartDropdownItem 
			                     	icoIcon='ui-press'
			                     	iconClass='text-success food-item'
			                     	title='Veg Seekh Sub 6" (15 cm) x 1'
			                     	price='$133'
			                     />

			                     <CartDropdownItem 
			                     	icoIcon='ui-press'
			                     	iconClass='text-danger food-item'
			                     	title='Chicken Tikka Sub 12" (30 cm) x 1'
			                     	price='$314'
			                     />

			                     <CartDropdownItem 
			                     	icoIcon='ui-press'
			                     	iconClass='text-success food-item'
			                     	title='Corn & Peas Salad x 1 '
			                     	price='$209'
			                     />
			                  </div>
			                  <div className="dropdown-cart-top-footer border-top p-4">
			                     <p className="mb-0 font-weight-bold text-secondary">Sub Total <span className="float-right text-dark">$499</span></p>
			                     <small className="text-info">Extra charges may apply</small>  
			                  </div>
			                  <div className="dropdown-cart-top-footer border-top p-2">
			                    <Link to="/thanks" className="btn btn-success btn-block btn-lg">Checkout</Link>
                     	
							  </div>
			                </div>
			            </NavDropdown>
			         </Nav>
			      </Navbar.Collapse>
			   </Container>
			</Navbar>
			</div>
		);
	}
}

export default Header;