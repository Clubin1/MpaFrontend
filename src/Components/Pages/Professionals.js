import {Container} from 'react-bootstrap';
import React, {useState, useEffect} from "react";
import axios from "axios";

const Professionals = () => {
    let [state, setproduct] = useState([]);

    async function fetchData() {
        let response = await axios(`https://blooming-forest-09372.herokuapp.com/propages`); // ?_limit=-1 is to show all
        let user = await response.data;
        setproduct(user);
    }

    useEffect(() => {
        fetchData();
    }, []);
    console.log(state) 
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
                            <p>Below are a list of upcoming MPA related events, a time and date will be supplied with any additional information.</p>
                            {state.map((event, index) =>
                                <div className="eventCard" key="index">
                                    <div key={index + 1}>
                                        <h3>{event.eventHeader}</h3>
                                        <p>{event.eventDate}</p>
                                        <p>{event.eventText}</p>

                                    </div>
                                </div>
				            )}
                        </div>
                    </Container>
                </div>

            </div>
        );
}

export default Professionals;
