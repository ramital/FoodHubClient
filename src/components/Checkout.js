import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Form,InputGroup,Button,Tab,Nav,ButtonToolbar,ToggleButton,ToggleButtonGroup,Image,OverlayTrigger,Tooltip} from 'react-bootstrap';
import ItemsCarousel from './common/ItemsCarousel';
import ChooseAddressCard from './common/ChooseAddressCard';
import CheckoutItem from './common/CheckoutItem';
import AddAddressModal from './modals/AddAddressModal';
import Icofont from 'react-icofont';
import CheckoutList from './common/CheckoutList';

class Checkout extends React.Component {
	constructor(props, context) {
	    super(props, context);

	    this.state = {
      	  showAddressModal: false,
	    };
	}

    hideAddressModal = () => this.setState({ showAddressModal: false });
    getQty = ({id,quantity}) => {
    	//console.log(id);
    	//console.log(quantity);
	}

	render() {
    	return (
    		<section className="offer-dedicated-body mt-4 mb-4 pt-2 pb-2">
    		 <AddAddressModal show={this.state.showAddressModal} onHide={this.hideAddressModal}/>
	         <Container>
	            <Row>
	               <Col md={8}>
	                  <div className="offer-dedicated-body-left">
	                     <div className="pt-2"></div>
	                     <div className="bg-white rounded shadow-sm p-4 osahan-payment">
	                        <h4 className="mb-1">Choose payment method</h4>
	                        <h6 className="mb-3 text-black-50">Credit/Debit Cards</h6>
	                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
	                          <Row>
	                            <Col sm={4} className="pr-0">
	                              <Nav variant="pills" className="flex-column">
	                                  <Nav.Link eventKey="first"><Icofont icon="credit-card" /> Credit/Debit Cards</Nav.Link>
	                                
	                                  <Nav.Link eventKey="second"><Icofont icon="money" /> Pay on Delivery</Nav.Link>
	                              </Nav>
	                            </Col>
	                            <Col sm={8} className="pl-0">
	                              <Tab.Content className='h-100'>
	                                <Tab.Pane eventKey="first">
	                                  <h6 className="mb-3 mt-0 mb-3">Add new card</h6>
	                                    <p>WE ACCEPT <span className="osahan-card">
	                                       <Icofont icon="visa-alt" /> <Icofont icon="mastercard-alt" /> <Icofont icon="american-express-alt" /> <Icofont icon="payoneer-alt" /> <Icofont icon="apple-pay-alt" /> <Icofont icon="bank-transfer-alt" /> <Icofont icon="discover-alt" /> <Icofont icon="jcb-alt" />
	                                       </span>
	                                    </p>
	                                    <Form>
	                                       <div className="form-row">
	                                          <Form.Group className="col-md-12">
	                                             <Form.Label>Card number</Form.Label>
	                                             <InputGroup>
	                                                <Form.Control type="number" placeholder="Card number" />
	                                                <InputGroup.Append>
	                                                   <Button variant="outline-secondary" type="button" id="button-addon2"><Icofont icon="card" /></Button>
	                                                </InputGroup.Append>
	                                             </InputGroup>
	                                          </Form.Group>
	                                          <Form.Group className="col-md-8">
	                                             <Form.Label>Valid through(MM/YY)
	                                             </Form.Label>
	                                             <Form.Control type="number" placeholder="Enter Valid through(MM/YY)" />
	                                          </Form.Group>
	                                          <Form.Group className="col-md-4">
	                                             <Form.Label>CVV
	                                             </Form.Label>
	                                             <Form.Control type="number" placeholder="Enter CVV Number" />
	                                          </Form.Group>
	                                          <Form.Group className="col-md-12">
	                                             <Form.Label>Name on card
	                                             </Form.Label>
	                                             <Form.Control type="text" placeholder="Enter Card number" />
	                                          </Form.Group>
	                                          <Form.Group className="col-md-12">
	                                          	<Form.Check 
											        custom
											        type="checkbox"
											        id="custom-checkbox1"
											        label="Securely save this card for a faster checkout next time."
											      />
	                                          </Form.Group>
	                                          <Form.Group className="col-md-12 mb-0">
	                                             <Link to="/thanks" className="btn btn-success btn-block btn-lg">PAY $1329
	                                             	<Icofont icon="long-arrow-right" />
	                                             </Link>
	                                          </Form.Group>
	                                       </div>
	                                    </Form>
	                                </Tab.Pane>
	                              <Tab.Pane eventKey="second">
	                                    <h6 className="mb-3 mt-0 mb-3">Cash</h6>
	                                    <p>Please keep exact change handy to help us serve you better</p>
	                                    <hr />
	                                    <Form>
	                                       <Link to="/thanks" className="btn btn-success btn-block btn-lg">PAY $1329
	                                       <Icofont icon="long-arrow-right" /></Link>
	                                    </Form>
	                                </Tab.Pane>
	                              </Tab.Content>
	                            </Col>
	                          </Row>
	                        </Tab.Container>
	                      </div>
	                  </div>
	               </Col>
	               <Col md={4}>
	                <CheckoutList/>
				      <div className="pt-2"></div>
	             
	               </Col>
	            </Row>
	         </Container>
	      </section>
    	);
    }
}


export default Checkout;