import React, {Component} from 'react';
import {Container} from 'react-bootstrap';


class Professionals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            propage: []
        }
    }


    async componentDidMount() {
        let response = await fetch('https://blooming-forest-09372.herokuapp.com/propages')
        if (! response.ok) {
            return
        }
        let info = await response.json()

        this.setState({propage: info})
    }


    render() {

        return (
            <div>
                <div className="offset professional-section">
                    <Container> {
                        this.state.propage.map((pro, index) => <div key={index}>
                            <div key={
                                index + 1
                            }>
                                <h1>{
                                    pro.becomeHeader
                                }</h1>
                                <p>{
                                    pro.becomeDesc
                                }</p>
                                <a href="/application" className="landingButton">Application</a>
                                <a href="/payment" className="landingButton ge">Payment</a>
                            </div>
                            
                            <div key={
                                index + 2
                            }>
                                <h1 className="professionalHeader">
                                    {
                                    pro.officeHeader
                                }</h1>
                                <p>{
                                    pro.officeDesc
                                }</p>
                            </div>
                        </div>)
                    }
                        <img className="professionalsImage" src="/images/memberimg3.jpg" alt=""/>

                    </Container>
                </div>
            </div>
        );
    }
}

export default Professionals;
