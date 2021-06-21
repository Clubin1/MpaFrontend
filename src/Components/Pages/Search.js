import React, { useState, useEffect} from "react";
import axios from "axios";
//import Landing from "../../Components/Sections/Landing.js";
import {Container} from "react-bootstrap";

import "../../Components/Styles/Styles.css";

const App = () => {
    const [input, setInput] = useState("");
    let [state, setproduct] = useState([]);

    // g
    async function fetchData() {
        let response = await axios(`https://blooming-forest-09372.herokuapp.com/psychologists?_limit=-1`);    //?_limit=-1 is to show all
        let user = await response.data;
        let userArr = [];
        let userNum = user.length;

        for (var i = 0; i < userNum; i++) {
            if (user[i].isAccepted === true) {
                userArr.push(user[i]);
            }
        }
        setproduct(userArr);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    if (input.length > 0) {
        state = state.filter((i) => {
            return i.name.toLowerCase().match(input.toLowerCase())
        });
    }

    return (
        <div>
            <div id="landing" className="offset asd">
                <h6 className="landingTitle">MPACHARLOTTE.ORG</h6>
                <h1 className="landingHeading">FIND A PSYCHOLOGIST</h1>
                <p className="landingCaption">
                    Look for a psychologist close to you or for your needs. Search for
                              disorders, location and name
                </p>

            </div>
            <div className="landingUnder">
                <Container>
                    <h1 className="footerLogo">MPACHARLOTTE</h1>
                </Container>
            </div>
            <div className="card-section offset">
                <Container>
                    <div className="card-center">
                        <h1 className="searchTitle">Search Engine</h1>
                        <div className="search-section"></div>

                        <div className="asdasd">
                            <p className="search-info">
                                Search for disorders, location and name Welcome to the Mecklenburg
                                				Psychological Association (MPA) Psychologist Membership & Referral
                                				Directory. The Mecklenburg Psychological Association provides this
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
                        <div className="search-section"></div>
                        <div id="searchbar">
                            <input type="text"
                                onChange={handleChange}
                                value={input}
                                name="query"
                                maxlength="21"
                                placeholder="Search..."
                                class="searchbar"/>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/41gYkruZM2L.png" alt="Magnifying Glass" class="button"/>

                        </div>

                    </div>

                    {
                    state.map((psych, index) => {
                        return (
                            <div className="as">
                                <div key={index}>
                                    <div className="g"
                                        key={
                                            index + 1
                                    }>
                                        <div className="info-col">
                                            <h3 class="psychName">
                                                {
                                                psych.name
                                            }</h3>
                                            <h6>
                                                <span className="psychItem">Specialties:</span>
                                                {
                                                psych.specialties
                                            }</h6>
                                            <h6>Insurance: {
                                                psych.insuranceAccepted
                                            }</h6>
                                            <h6>Treatment: {
                                                psych.treatmentOrientation
                                            }</h6>
                                            <h6>Form of Treatment: {
                                                psych.treatmentModality
                                            }</h6>
                                            <h6>Phone: {
                                                psych.phone
                                            }</h6>
                                            <h6>Email: {
                                                psych.email
                                            }</h6>
                                            <h6>
                                                Location:{" "}
                                                {
                                                psych.city + " " + psych.state + " " + psych.zip
                                            } </h6>
                                        </div>
                                        <div className="second-col">
                                            <img alt ="Member" className="image"
                                                src={
                                                    `/images/${
                                                        psych.imgurl
                                                    }`
                                                }/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                } </Container>
            </div>
        </div>
    );
};

export default App;
