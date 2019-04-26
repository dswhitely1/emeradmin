import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const MessageCard = props => {
	const { id, firstName, lastName, email, message, createdAt } = props.messages;
	const { Value } = props;
	const { deleteButton } = props.props;
	return (
		<tr>
			<th scope='row'>{`${id}`}</th>
			<td>{`${firstName}`}</td>
			<td>{`${lastName}`}</td>
			<td>{`${email}`}</td>
			<td>{`${message}`}</td>
			<td>{`${createdAt}`}</td>
			<td>
				<Button variant='success' href='#' size='sm'>
					Respond
				</Button>
			</td>
			<td>
				<Button
					variant='primary'
					href='#'
					size='sm'
					onClick={() => deleteButton(Value)}>
					Delete
				</Button>
			</td>
		</tr>
	);
};

export default MessageCard;
