import React, {Component} from 'react';
import {Container} from 'react-bootstrap';


class FaqLanding extends Component {
    render() {
        return (
            <div>
                <div id="landing2" className="offset">
                    <Container>
                        <div>
                            <h6 className="landingTitle">MPACHARLOTTE.ORG</h6>
                            <h1 className="landingHeading">MECKLENBURG PSYCHOLOGIST ASSOCIATION</h1>
                            <p className="landingCaption">Supporting mental health since 1960, the Mecklenburg Psychological Association, is a not-for-profit association of licensed psychologist.</p>
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


export default FaqLanding;
