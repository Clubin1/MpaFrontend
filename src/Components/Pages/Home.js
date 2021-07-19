import React, {useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../../Components/Styles/Home.css';
import axios from "axios";

import comm from '../../Assets/community.svg';

const apiUrl = process.env.API_URL || `https://blooming-forest-09372.herokuapp.com/`;


const Home = () => {
	let [state, setState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `${apiUrl}homepages`
            )
            setState(result.data)
        }
        fetchData()
    }, [])
	return (
		<div>
			 <div id="landing" className="offset">
                    <Container className="kelly">
                        <div className="landingWrapper">
                            <h6 className="landingTitle">MPACHARLOTTE.ORG</h6>
                            <h1 className="landingHeading">MECKLENBURG PSYCHOLOGIST<br></br> ASSOCIATION</h1>
                            <p className="landingCaption">Supporting mental health since 1960, the Mecklenburg Psychological Association, is a not-for-profit <br></br>association of licensed psychologist.</p>
                            <a className="landingButton" href="/about">Learn More</a>
                        </div>
                    </Container>
                </div>
                <div className="landingUnder">
                    <Container>
                        <h1 className="footerLogo">MPACHARLOTTE</h1>
                    </Container>
                </div>

				<div id="find">
                <Container>
                    <Row>
                        <Col md={5}>
                            <div> {
                                state.map((home, index) => <div key={index}>
                                    <div key={
                                        index + 1
                                    }>
                                        <h1 className="findHeader">
                                            {
                                            home.findpsychHeader
                                        }</h1>
                                        <p className="findCaption">
                                            {
                                            home.findpsychDesc
                                        }</p>
                                        <a className="findButton" href="/search">
                                            {
                                            home.findpsychButton
                                        }</a>
                                    </div>
                                </div>)
                            } </div>
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