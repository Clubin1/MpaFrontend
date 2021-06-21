import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios'
import '../../Components/Styles/About.css';

const apiUrl = process.env.API_URL || `https://blooming-forest-09372.herokuapp.com/`;


class BoardMembers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            board: []
        }
    }


    async componentDidMount() {
        try {
            const res = await axios.get(apiUrl + '/boardmembers').then(res => {
                console.log(res.data)
                this.setState({board: res.data})
            });
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <div>
                <Row> {
                    this.state.board.map((board, index) => <Col md={4}>
                        <div className="boardMembers">
                            <h4 className="boardMembersName">
                                {
                                board.Name
                            }</h4>
                            <h6 className="boardMembersPosition">
                                <em>{
                                    board.Position
                                }</em>
                            </h6>
                            <p>{
                                board.Email
                            }</p>
                        </div>
                    </Col>)
                } </Row>
            </div>
        );
    }
}

export default BoardMembers;
