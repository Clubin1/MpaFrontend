import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import comm from '../../Assets/community.svg';


class FindPsychologist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            findpsychologist: []
        }
    }

    async componentDidMount() {
        let response = await fetch('https://blooming-forest-09372.herokuapp.com/homepages')
        if (! response.ok) {
            return
        }
        let info = await response.json()

        this.setState({findpsychologist: info})
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
