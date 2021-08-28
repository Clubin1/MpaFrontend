import React, {useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../../Components/Styles/Home.css';

import comm from '../../Assets/community.svg';


const Home = () => {
	let [state, setState] = useState([]);
	
    useEffect(() => {
        getInfo().then(state => setState(state))
    }, [])

	const getInfo = () => {
		return fetch('https://blooming-forest-09372.herokuapp.com/homepages').then(response => response.json())
	}

	console.log(state)
	return (
		<div>
			 <div id="landing" className="offset">
                    <Container className="kelly">
                        <div className="landingWrapper">
                            <h6 className="landingTitle">MPACHARLOTTE.ORG</h6>
                            <h1 className="landingHeading">MECKLENBURG PSYCHOLOGICAL <br></br> ASSOCIATION</h1>
                            <p className="landingCaption">Supporting mental health since 1960, the Mecklenburg Psychological Association, is a not-for-profit <br></br>association of licensed psychologist.</p>
                            <a className="landingButton" href="/about">Learn More</a>
                        </div>
                    </Container>
                </div>
                <div className="landingUnder">
                    <Container>
                        
                    </Container>
                </div>

				<div id="find">
                <Container>
                    <Row>
                        <Col md={5}>
                            <div> 
                                    <div>
                                        <h1 className="findHeader">
                                        Find A Psychologist</h1>
                                        <p className="findCaption">
                                        Locate Licensed Psychologists in the Charlotte, North Carolina area who actively participate in their local professional association so they can keep up with the latest healthcare trends, share proven therapeutic techniques, and preserve the highest ethical standards for treatment of patients.

</p>
                                        <a className="findButton" href="/search">
                                            Find a Psychologist</a>
                                    </div>
                            </div>
                        </Col>

                        <Col md={7}>
                            <img className="findImage"
                                src={comm}
                                alt=""/>
                        </Col>
                    </Row>

                </Container>
                <div className="searchContainer">
                <p className="search-info twotime">
                                Welcome to the Mecklenburg
                                                                                                				Psychological Association (MPA) Psychologist Membership & Referral
                                                                                                				Directory. Search for specialities, location and name.
                            </p>
                            <p className="search-info">
                                The Mecklenburg Psychological Association provides this
                                                                                                				service as a way for you to find licensed psychologists in your
                                                                                                				area. Using our search engine, you will receive a list of
                                                                                                				psychologists whose self-described services match with your needs.
                                                                                                				You may click on any psychologist's name to find out more about
                                                                                                				that psychologist. Many psychologists have web pages that further
                                                                                                				describe their services.
                            </p>
                            <p className="search-info">
                                You may want to contact at least three psychologists by phone
                                                                                                				before making a decision about with whom you wish to schedule an
                                                                                                				initial appointment. You may want to discuss how much experience
                                                                                                				the psychologist has had with patients/clients with problems
                                                                                                				similar to the one(s) you have, the cost of services, how
                                                                                                				frequently you would be seen, the estimated length of treatment
                                                                                                				and any questions you have about training or experience. If you
                                                                                                				plan to use medical insurance to help cover the cost of therapy,
                                                                                                				you may want to call your insurance company to understand your
                                                                                                				mental health benefits, including co-pays and deductibles for in-
                                                                                                				or out-of-network providers. Please consider that you may need to
                                                                                                				leave a phone number and a time you can be reached in case the
                                                                                                				therapist is unavailable when you call.
                            </p>

                            <p className="search-info">
                                Psychologists in the MPA Membership & Referral Directory are
                                                                                                				licensed in the State of North Carolina. Psychologists provide
                                                                                                				testing/assessment, psychotherapy, consultation and other
                                                                                                				services. Psychologists do not prescribe medication. MPA hopes
                                                                                                				that this information will assist you in selecting a suitable
                                                                                                				therapist. Psychologists listed in this directory and their
                                                                                                				identified areas of specialization are based on self-report. MPA
                                                                                                				assumes no liability in the event you are not satisfied or helped
                                                                                                				by a psychologist you choose to meet with from this list.
                            </p>
                </div>
            </div>
		</div>
	)
}


export default Home;