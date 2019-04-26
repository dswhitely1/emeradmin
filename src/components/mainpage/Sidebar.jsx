import React from 'react';
import Nav from 'react-bootstrap/Nav';
const Sidebar = () => {
	return (
		<div className='bg-dark text-light col-md-2'>
			<Nav className='p-2'>
				<Nav.Link to='#' className='text-light'>
					Messages
				</Nav.Link>
			</Nav>
		</div>
	);
};

export default Sidebar;
