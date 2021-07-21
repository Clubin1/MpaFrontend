import {Container, Row, Col} from 'react-bootstrap';
import React, {useState, useEffect} from "react";

import '../../Components/Styles/About.css';
import BoardMembers from '../../Components/Sections/BoardMembers.js';


const About = () => {
	let [state, setState] = useState([]);
	
    useEffect(() => {
        getInfo().then(state => setState(state))
    }, [])

	const getInfo = () => {
		return fetch('https://blooming-forest-09372.herokuapp.com/aboutpages').then(response => response.json())
	}
	
    return (
        <div className="wrapper">
            {
            state.map((about, index) => <div key={index}>
                <Container>
                    <div className="aboutSection"
                        key={
                            index + 1
                    }>
                        <h1 className="aboutHeader">
                        ABOUT US
</h1>
                        <p className="aboutCaption">
                        The Mecklenburg Psychological Association (MPA) is an unaffiliated group of psychologists with expertise in psychological therapy and testing. Located in Charlotte, North Carolina, MPA has been in existence for over fifty five years. MPA includes members from surrounding counties, including Cabarrus, Gaston, Iredell, and Union. Mecklenburg Psychological Association is interested in further promoting the field of psychology within the greater Charlotte, NC area. In addition to sponsoring continuing education and professional development programming and publishing the MPA Newsletter, the Mecklenburg Psychological Association is constantly acting to expand the parameters of psychology in our county and to increase the quality of our service to our community.

</p>
                    </div>


                    <div className="threeSection">
                        <Row>
                            <Col>
                                <div className="servingSection"
                                    key={
                                        index + 2
                                }>
                                    <h1 className="servingHeader">
                                    SERVING THE COMMUNITY
</h1>
                                    <p className="servingCaption">
                                    MPA is dedicated to the improvement of our community through the application of knowledge from the field of psychology to the issues and problems of people and organizations. Its members are involved in all areas of psychology and work in settings such as hospitals, clinics, private practice, schools, universities, industry, and community agencies. The MPA works to disseminate information to the public about psychology and its application to various issues. It serves as a resource for individuals and organizations interested in clinical services or in information or education about any of the various areas of psychology.

</p>
                                </div>
                            </Col>

                            <Col>
                                <div className="psychologistSection"
                                    key={
                                        index + 3
                                }>
                                    <h1 className="psychologistHeader">
                                    PSYCHOLOGIST SERVICES
</h1>
                                    <p className="psychologistCaption">
                                    MPA maintains an "Provider Membership & Referral Directory" for individuals and groups who are seeking clinical services. The psychologists participating in the referral service are all licensed psychologists who can provide services such as individual and group therapy, psychological testing, and consultation to individuals, groups and organizations. Multilingual therapists and therapists trained to help individuals or groups with special needs are available.

</p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <hr/>
                </Container>

                <Col md={12}>
                    <div className="boardSection"
                        key={
                            index + 4
                    }>
                        <BoardMembers/>
                    </div>
                </Col>
            </div>)
        } </div>
    );
}

export default About;
