import React, {useState, useEffect} from "react";
import axios from "axios";
// import Landing from "../../Components/Sections/Landing.js";
import {Container} from "react-bootstrap";

import "../../Components/Styles/Styles.css";

const App = () => {
    const [input, setInput] = useState("");
    let [state, setproduct] = useState([]);

    // g
    async function fetchData() {
        let response = await axios(`https://blooming-forest-09372.herokuapp.com/psychologists?_limit=-1`); // ?_limit=-1 is to show all
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
            if (i.insuranceAccepted !== null && i.specialties !== null) {
                return(i.name.toLowerCase().match(input.toLowerCase()) || i.zip.toLowerCase().match(input.toLowerCase()) || i.specialties.toLowerCase().match(input.toLowerCase()) || i.insuranceAccepted.toLowerCase().match(input.toLowerCase() || i.address.toLowerCase().match(input.toLowerCase())))
            } else {
                return("")
            }

        });

    }

    return (
        <div>
            <div id="landing" className="offset asd">
                <Container>
                    <h6 className="landingTitle">MPACHARLOTTE.ORG</h6>
                    <h1 className="landingHeading">FIND A PSYCHOLOGIST</h1>
                    <p className="landingCaption">
                        Look for a psychologist close to you or for your needs. Search for
                                                                                disorders, location and name
                    </p>
                </Container>
            </div>
            <div className="landingUnder">
                <Container>
                </Container>
            </div>
            <div className="card-section offset">
                <Container>
                    <div className="card-center">
                        

                        <div className="asdasd">
                            <p className="search-info twotime">
                                Welcome to the Mecklenburg
                                                                                                				Psychological Association (MPA) Psychologist Membership & Referral
                                                                                                				Directory. Search for disorders, location and name.
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
                            <label>Insurance: </label>
                            <select id="insurance" onChange={handleChange}>
                                <option value=""></option>
                                <option value="None">None</option>
                                <option value="Accepts Out Of Network Benefits">Accepts Out Of Network Benefits</option>
                                <option value="Aetna">Aetna</option>
                                <option value="BC/BS">BC/BS</option>
                                <option value="BC/BS Blue Value">BC/BS Blue Value</option>
                                <option value="BC/BS State Employee Plan">BC/BS State Employee Plan</option>
                                <option value="BC/BS Federal Plan">BC/BS Federal Plan</option>
                                <option value="CBHA">CBHA</option>
                                <option value="Cigna">Cigna</option>
                                <option value="Medcost">Medcost</option>
                                <option value="Medicare">Medicare</option>
                                <option value="Medicaid">Medicaid</option>
                                <option value="Magellan">Magellan</option>
                                <option value="MHN">MHN</option>
                                <option value="NC Health Choice">NC Health Choice</option>
                                <option value="Primary Physicians Care">Primary Physicians Care</option>
                                <option value="TriCare">TriCare</option>
                                <option value="United Beh. Health">United Beh. Health</option>
                                <option value="Value Options">Value Options</option>
                                <option value="Wellpath">Wellpath</option>

                            </select>
                            
                            <label>Disorders: </label>
                            <select onChange={handleChange} id="disorders">
                                <option value=""></option>
                                <option value="Adoption">Adoption</option>
                                <option value="ADHD">ADHD</option>
                                <option value="Anger Management">Anger Management</option>
                                <option value="Anxiety">Anxiety</option>
                                <option value="Austism Spectrum Disorders">Austism Spectrum Disorders</option>
                                <option value="Bipolar Disorder">Bipolar Disorders</option>
                                <option value="Body Image Disturbance">Body Image Disturbance</option>
                                <option value="Borderline Personality Disorder">Borderline Personality Disorder</option>
                                <option value="Career / Vocational">Career / Vocational</option>
                                <option value="Child/Adolescent Behavioral Issues">Child/Adolescent Behavioral Issues</option>

                                <option value="Chronic Illness">Chronic Illness</option>
                                <option value="Chronic Pain">Chronic Pain</option>
                                <option value="Career / Vocational">Coaching</option>
                                <option value="Couples Therapy">Couples Therapy</option>

                                <option value="Dementia">Dementia</option>
                                <option value="Depression">Depression</option>
                                <option value="Developmental Disabilities">Developmental Disabilities</option>
                                <option value="Dissociative Disorders">Dissociative Disorders</option>
                                <option value="Divorce / Separation">Divorce / Separation</option>
                                <option value="Eating Disorders">Eating Disorders</option>
                                <option value="Family Therapy">Family Therapy</option>
                                <option value="Gambling">Gambling</option>
                                <option value="Gay / Lesbian / Bisexual Issues">Gay / Lesbian / Bisexual Issues</option>
                                <option value="Geriatric">Geriatric</option>
                                <option value="Grief and Loss">Grief and Loss</option>
                                <option value="Industrial / Organizational">Industrial / Organizational</option>
                                <option value="Learning Disabilities/Academic Issues">Learning Disabilities/Academic Issues</option>
                                <option value="Life Transitions">Life Transitions</option>
                                <option value="Men's Issues">Men's Issues</option>
                                <option value="Multicultural / Diversity Issues">Multicultural / Diversity Issues</option>

                                <option value="Neuropsychological">Neuropsychological</option>
                                <option value="Obesity / Weight Management">Obesity / Weight Management</option>
                                <option value="OCD">OCD</option>
                                <option value="Parenting Coordination">Parenting Coordination</option>
                                <option value="Parenting Issues">Parenting Issues</option>
                                <option value="Pastoral/Christian/Faith Based">Pastoral/Christian/Faith Based</option>
                                <option value="Personal Empowerment">Personal Empowerment</option>
                                <option value="Post Traumatic Stress Disorder">Post Traumatic Stress Disorder</option>
                                <option value="Relationship Issues">Relationship Issues</option>
                                <option value="Schizophrenia">Schizophrenia</option>
                                <option value="Self - Injury">Self - Injury</option>
                                <option value="Sexual Abuse / Trauma">Sexual Abuse / Trauma</option>
                                <option value="Sexual Dysfunction">Sexual Dysfunction</option>
                                <option value="Sleep/Insomnia CBT-I">Sleep/Insomnia CBT-I</option>
                                <option value="Smoking Cessation">Smoking Cessation</option>
                                <option value="Sports Psychology">Sports Psychology
                                </option>
                                <option value="Substance Abuse">Substance Abuse</option>
                                <option value="Testing/Assessment">Testing/Assessment</option>
                                <option value="Transgender">Transgender</option>
                                <option value="Trichotillomania">Trichotillomania</option>
                                <option value="Women's Issues">Women's Issues</option>
                                <option value="Work - Life Balance Issues">Work - Life Balance Issues</option>
                            </select>

                            <label>Name: </label>
                            <select onChange={handleChange}>
                                {state.map((psych, index) => {
                                    return(
                                        <option value={psych.name} key={index}>
                                            {psych.name}
                                        </option>
                                    )
                                })}
                            </select>
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
                                                <span className="psychItem">Specialties:
                                                </span>
                                                {
                                                psych.specialties
                                            }</h6>
                                            <h6>Insurance: {
                                                psych.insuranceAccepted
                                            }</h6>
                                            <h6>Treatment Approach: {
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
                                                Address:{" "}
                                                {
                                                psych.address
                                            } </h6>
                                            <h6>
                                                {
                                                psych.city + " " + psych.state + " " + psych.zip
                                            } </h6>


                                        </div>
                                        <div className="second-col">
                                            <img alt="Member" className="image"
                                                src={psych.ps_url}/>
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
