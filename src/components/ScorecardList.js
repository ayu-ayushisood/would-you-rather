import React, { Component } from "react";
import { connect } from "react-redux";

import Card from 'react-bootstrap/Card';
import Scorecard from "./Scorecard";

class ScorecardList extends Component {
	render() {
		const { filteredUsers } = this.props;

		return (
			<div>
				{filteredUsers.map(user => (
					<Card key={user.id}>
						<Scorecard user={user} />
					</Card>
				))}
			</div>
		);
	}
}

function mapStateToProps({ users }) {
	const filteredUsers = Object.keys(users)
		.map(id => users[id])
		.sort(
			(a, b) =>
				b.questions.length +
				Object.keys(b.answers).length -
				(a.questions.length + Object.keys(a.answers).length)
		);
	return {
		filteredUsers
	};
}

export default connect(mapStateToProps)(ScorecardList);
