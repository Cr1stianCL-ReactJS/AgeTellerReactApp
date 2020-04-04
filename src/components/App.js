import React, { Component } from 'react';
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {
	constructor() {
		super();

		this.state = {
			newDate: '',
			birthDay: '1992-06-21',
			showStats: false
		};
	}

	changeBirtday() {
		console.log(this.state);
		this.setState({
			birthDay: this.state.newDate,
			showStats: true
		});
	}

	render() {
		return (
			<Container>
				<Row>
					<Col md={12} lg={12}>
						<div className='App'>
							<Form inline>
								<FormControl
									type='date'
									onChange={(event) => this.setState({ newDate: event.target.value })}
								/>
								{''}
								<Button onClick={() => this.changeBirtday()}>Submit</Button>
								{this.state.showStats ? (
									<div className='fade age-stats'>
										<AgeStats date={this.state.birthDay} />
									</div>
								) : null}
							</Form>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
