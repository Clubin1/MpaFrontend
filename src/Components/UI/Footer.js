import React from 'react';
import {Row, Col } from 'react-bootstrap';

import '../../Components/Styles/Styles.css';

const Footer = () => {
	return (
		<div id="footer" className=" sticky-bottom">
				<Row noGutters={true}>
					<Col className="upperFooter" md={6}>
						<h1 className="footerLogo">MPACHARLOTTE</h1>
					</Col>	
					<Col className="upperFooter" md={6}>
						<a href="https://thenerodev.com"><img alt="nerologo" className="nerologo" src="/images/nerologo.png"/></a>
					</Col>					
				</Row>

				<Row noGutters={true} className="footer-distributed">
						<div className="footer-left">
							<p className="footer-links">
								<a className="link-1" href="/">Home</a>

								<a href="/about">About</a>

								<a href="/search">Search</a>

								<a href="/membership">Professionals</a>

								<a href="/contact">Contact</a>
							</p>
							<p>Mecklenburg Psychological Association &copy; 2021. All rights reserved</p>
						</div>
					
			</Row>
		</div>
	);
}

export default Footer;