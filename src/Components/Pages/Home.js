import React, { Component } from 'react';
import '../../Components/Styles/Home.css';


import Landing from '../../Components/Sections/Landing.js';
import FindPsychologist from '../../Components/Sections/FindPsychologist.js';



class Home extends Component {
	render() {
		return (
			<div>
				<Landing />
				<FindPsychologist />
			
			</div>
		);
	}
}

export default Home;