import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions';
import MessageCard from './MessageCard';
import Table from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class MessageList extends Component {
	renderCardList(message) {
		if (message !== undefined) {
			const renderedList = message.map((msgs, i) => {
				return (
					<MessageCard
						props={this.props}
						messages={msgs}
						key={i}
						Value={msgs.id}
					/>
				);
			});
			return renderedList;
		} else {
			return null;
		}
	}
	render() {
		return (
			<div className='bg-danger'>
				<Container>
					<table className='table table-striped table-hover table-bordered bg-light'>
						<thead className='thead-dark'>
							<tr className='text-center'>
								<th scope='col'>#</th>
								<th scope='col'>First Name</th>
								<th scope='col'>Last Name</th>
								<th scope='col'>Email</th>
								<th scope='col'>Message</th>
								<th scope='col'>Date</th>
								<th scope='col'>Respond</th>
								<th scope='col'>Delete</th>
							</tr>
						</thead>
						<tbody>{this.renderCardList(this.props.theMessages.ml)}</tbody>
					</table>
				</Container>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { theMessages: state.messages };
};

export default connect(mapStateToProps, { fetchMessages })(MessageList);
