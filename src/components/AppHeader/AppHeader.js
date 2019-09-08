import React from 'react';
import {Navbar, NavDropdown, Form, FormControl} from 'react-bootstrap';

const AppHeader = (props) => {
	return (
			<Navbar bg="primary" variant="dark">
			<div className="container">
				<div className="col-sm-4 col-md-2 col-xs-12">
					<Navbar.Brand href="#home">Movie Catalog</Navbar.Brand>
				</div>
				<div className="col-sm-4 col-md-8 col-xs-12">
					<Form inline>
						<FormControl type="text" placeholder="Search" value={props.query} 
						onChange={event => props.setQuery(event.target.value)} />
					</Form>
				</div>
				<div className="col-sm-4 col-md-2 col-xs-12">
					<i className="fa fa-fw fa-user user-icon"></i>
					<NavDropdown title="Rajesh Kumar" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">My Account</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
					</NavDropdown>
				</div>
			</div>
			</Navbar>
	);
};

export default AppHeader;