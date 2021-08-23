import {Container} from 'react-bootstrap';
import React from "react";

const Professionals = () => {
	// let [state, setState] = useState([]);
	
    // useEffect(() => {
    //     getInfo().then(state => setState(state))
    // }, [])

	// const getInfo = () => {
	// 	return fetch('https://blooming-forest-09372.herokuapp.com/propages').then(response => response.json())
	// }
	
        return (
            <div>
                <div className="offset professional-section">
                    <Container> 
                            <div>
                                <h1>Become a MPA member today</h1>
                                <p>Membership in the Mecklenburg Psychological Association shall be open to those (1) who are able to verify that they are a permanent or temporary Licensed Psychologist, Licensed Psychological Associate, or a Certified School Psychologist in North Carolina, or (2) who are able to verify membership in APA, NCPA, NCSPA, or NASP. An individual who is in any of the above categories may become a member of the MPA. Student affiliate memberships are also open to graduate students in advanced study programs in psychology. The application must include a letter from the department verifying degree candidacy or include a current official transcript.</p>
                                <a href="/application" className="landingButton">Application</a>
                                <a href="/payment" className="landingButton ge">Payment</a>
                            </div>
                            
                            <div>
                                <h1 className="professionalHeader">
                                MPA Supervision/Office Space Listings</h1>
                                <p>The MPA Member Supervision Listing and MPA Member Office Space Available Listing is information provided by our members. MPA is not endorsing, recommending any psychologist listed and assumes no liability. Please contact psychologists listed for additional and/or updated information regarding availability and services.</p>
                            </div>
                        <img className="professionalsImage" src="/images/memberimg3.jpg" alt=""/>
                        <div className="eventsWrapper">
                            <h1 className="eventTitle">Upcoming Events/Announcements</h1>
                   

                        </div>
                    </Container>
                </div>

            </div>
        );
}

export default Professionals;
