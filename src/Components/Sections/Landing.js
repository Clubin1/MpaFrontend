import React, {Component} from 'react';
import {Container} from 'react-bootstrap';


class Landing extends Component {
    render() {
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
            </div>
        );
    }
}


export default Landing;
