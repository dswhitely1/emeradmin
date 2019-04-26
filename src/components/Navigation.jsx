import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

class Navigation extends Component {
	render() {
		return (
			<div>
				<Navbar
					bg='success'
					expand='lg'
					// fixed='top'
					className='text-uppercase'>
					<Container className='justify-content-center'>
						<Nav.Link to='#' className='text-light'>
							Messages
						</Nav.Link>
						<Navbar.Brand className='shadow nav-link text-light mr-0'>
							Emergency Electric Inc
						</Navbar.Brand>
						<Nav.Link to='#' className='text-light'>
							Applications
						</Nav.Link>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default Navigation;
