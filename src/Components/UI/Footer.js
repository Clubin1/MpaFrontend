import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../../Components/Styles/Styles.css';

const Footer = () => {
	return (
		<div id="footer" className=" sticky-bottom">
				<Row noGutters={true}>
					<Col className="upperFooter" md={6}>
						<h1 className="footerLogo">MPACHARLOTTE</h1>
					</Col>	
					<Col className="upperFooter" md={6}>
						<a href="https://thenerodev.com"><img className="nerologo" src="/images/nerologo.png"/></a>
					</Col>					
				</Row>

				<Row noGutters={true} className="footer-distributed">
					<Col md={6}>
						<div className="footer-left">
							<p className="footer-links">
								<a className="link-1" href="/">Home</a>

								<a href="/about">About</a>

								<a href="/search">Search</a>

								<a href="/membership">Professionals</a>

								<a href="/contact">Contact</a>
							</p>
							<p>Mecklenburg Psychological Association &copy; 2019. All rights reserved</p>
						</div>
					</Col>
					
			</Row>
		</div>
	);
}

export default Footer;