import {Container, Row, Col} from 'react-bootstrap';
import React, {useState, useEffect} from "react";
import axios from "axios";

import '../../Components/Styles/About.css';
import BoardMembers from '../../Components/Sections/BoardMembers.js';


const apiUrl = process.env.API_URL || `https://blooming-forest-09372.herokuapp.com/`;


const About = () => {
    let [state, setState] = useState([]);

	async function fetchData() {
		let response = await axios(`${apiUrl}aboutpages`)
		let data = await response.data

		setState(data)
	}
	useEffect(() => {
        fetchData();
    }, []);
	
    return (
        <div className="wrapper">
            {
            state.map((about, index) => <div key={index}>
                <Container>
                    <div className="aboutSection"
                        key={
                            index + 1
                    }>
                        <h1 className="aboutHeader">
                            {
                            about.aboutusHeader
                        }</h1>
                        <p className="aboutCaption">
                            {
                            about.aboutusDesc
                        }</p>
                    </div>


                    <div className="threeSection">
                        <Row>
                            <Col>
                                <div className="servingSection"
                                    key={
                                        index + 2
                                }>
                                    <h1 className="servingHeader">
                                        {
                                        about.servingcomHeader
                                    }</h1>
                                    <p className="servingCaption">
                                        {
                                        about.servingcomDesc
                                    }</p>
                                </div>
                            </Col>

                            <Col>
                                <div className="psychologistSection"
                                    key={
                                        index + 3
                                }>
                                    <h1 className="psychologistHeader">
                                        {
                                        about.psychologistservHeader
                                    }</h1>
                                    <p className="psychologistCaption">
                                        {
                                        about.psychologistservDesc
                                    }</p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <hr/>
                </Container>

                <Col md={12}>
                    <div className="boardSection"
                        key={
                            index + 4
                    }>
                        <BoardMembers/>
                    </div>
                </Col>
            </div>)
        } </div>
    );
}

export default About;
