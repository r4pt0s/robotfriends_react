import React, {Component} from 'react';

import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {

	constructor(){
		super();
		this.state= {
			robots: [],
			searchField: ''
		};
	}

	onSearchChange = (event) =>{
		this.setState({searchField: event.target.value});		
	}

	render(){
		const {robots, searchField}= this.state;

		const filteredRobots= robots.filter( robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		if(!robots.length)
		{
			return <h1>LOADING</h1>
		}else{
			return (
					<div className="tc">
						<h1 className="f1"> RoboFriends</h1>
						<Searchbox searchChange={this.onSearchChange}/>
						<Scroll>
							<CardList robots={filteredRobots} />
						</Scroll>
					</div>
				);
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

}

export default App;