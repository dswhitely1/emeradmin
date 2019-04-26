import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages, deleteMessage } from '../actions';
import Row from 'react-bootstrap/Row';
import Sidebar from './mainpage/Sidebar';
import MessageList from './mainpage/MessageList';
import MessageDisplay from './mainpage/MessageDisplay';

export class MainPage extends Component {
	componentDidMount() {
		this.props.fetchMessages();
	}

	onHandleClick = id => {
		this.props.deleteMessage(id);
		this.props.fetchMessages();
	};
	render() {
		return (
			<div>
				{/* <Row> */}
				{/* <Sidebar /> */}
				<MessageList deleteButton={this.onHandleClick} />
				{/* <MessageDisplay /> */}
				{/* </Row> */}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { theMessages: state.messages };
};

export default connect(mapStateToProps, { fetchMessages, deleteMessage })(
	MainPage,
);
