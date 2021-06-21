import React, { Component } from 'react';
import { Container } from 'react-bootstrap';


class ContactLanding extends Component {
	render() {
		return (
			<div>
				  <div id="landing" className="offset asd contact-land">
        <h6 className="landingTitle">MPACHARLOTTE.ORG</h6>
        <h1 className="landingHeading">CONTACT US BELOW</h1>
        <p className="landingCaption">
        
        </p>
        <a className="landingButton" href="#con">
          Message Us
        </a>
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


export default ContactLanding;

