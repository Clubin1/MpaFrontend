import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
//import axios from 'axios';

import comm from '../../Assets/community.svg';


//const apiUrl = process.env.API_URL || `https://blooming-forest-09372.herokuapp.com/`;


class FindPsychologist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            findpsychologist: []
        }
    }

    async componentDidMount() {
        // try {
        //     const res = await axios.get(apiUrl + '/homepages').then(res => {
        //         console.log(res.data)
        //         this.setState({findpsychologist: res.data})
        //     });
        // } catch (err) {
        //     console.error(err)
        // }
    }


    render() {


        return (
            <div id="find">
                <Container>
                    <Row>
                        <Col md={5}>
                            <div> {
                                this.state.findpsychologist.map((home, index) => <div key={index}>
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
}


export default FindPsychologist;
