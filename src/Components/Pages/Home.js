import React, {useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../../Components/Styles/Home.css';

import comm from '../../Assets/community.svg';


const Home = () => {
	let [state, setState] = useState([]);
	
    useEffect(() => {
        getInfo().then(state => setState(state))
    }, [])

	const getInfo = () => {
		return fetch('https://blooming-forest-09372.herokuapp.com/homepages').then(response => response.json())
	}

	console.log(state)
	return (
		<div>
			 <div id="landing" className="offset">
                    <Container className="kelly">
                        <div className="landingWrapper">
                            <h6 className="landingTitle">MPACHARLOTTE.ORG</h6>
                            <h1 className="landingHeading">MECKLENBURG PSYCHOLOGICAL <br></br> ASSOCIATION</h1>
                            <p className="landingCaption">Supporting mental health since 1960, the Mecklenburg Psychological Association, is a not-for-profit <br></br>association of licensed psychologist.</p>
                            <a className="landingButton" href="/about">Learn More</a>
                        </div>
                    </Container>
                </div>
                <div className="landingUnder">
                    <Container>
                        
                    </Container>
                </div>

				<div id="find">
                <Container>
                    <Row>
                        <Col md={5}>
                            <div> 
                                    <div>
                                        <h1 className="findHeader">
                                        Find A Psychologist</h1>
                                        <p className="findCaption">
                                        Locate Licensed Psychologists in the Charlotte, North Carolina area who actively participate in their local professional association so they can keep up with the latest healthcare trends, share proven therapeutic techniques, and preserve the highest ethical standards for treatment of patients.

</p>
                                        <a className="findButton" href="/search">
                                            Find a Psychologist</a>
                                    </div>
                            </div>
                        </Col>

                        <Col md={7}>
                            <img className="findImage"
                                src={comm}
                                alt=""/>
                        </Col>
                    </Row>

                </Container>

            </div>
		</div>
	)
}


export default Home;