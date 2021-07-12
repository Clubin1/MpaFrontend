import React, {Component} from 'react';
import { Row, Col} from 'react-bootstrap';
import '../../Components/Styles/About.css';



class BoardMembers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            board: []
        }
    }


    async componentDidMount() {
        let response = await fetch('https://blooming-forest-09372.herokuapp.com/boardmembers')
                if (! response.ok) {
                    return
                }
                let info = await response.json()

                this.setState({board: info})
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
