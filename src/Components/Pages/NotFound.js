import React from 'react';
import { Container, Col } from 'react-bootstrap';
import dissa from '../../Assets/404.jpg';
import '../../Components/Styles/Styles.css';


const NotFound = (props) => {
  return (
    <div className="notFoundSection">
    	<Container>

        <div className="offset">
  			<h1 className="notFoundText">Page Not Found</h1>
                <h5 className="notFoundText notFoundBtn">The page you're looking for doesn't exist.</h5>
		    	<a className="landingButton " href="/">Home</a>		    	<a className="landingButton" href="/contact">Contact</a>

        </div>
  
    	</Container>
    </div>
  )
}

export default NotFound;