import {Container, Row, Col} from 'react-bootstrap';
import React, {useState, useEffect} from "react";
import axios from "axios";

import comm from '../../Assets/community.svg';

const apiUrl = process.env.API_URL || `https://blooming-forest-09372.herokuapp.com/`;

const FindPsychologist = () => {
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
        );
}


export default FindPsychologist;
