import React, {useState, useEffect} from "react";
import axios from "axios";
// import Landing from "../../Components/Sections/Landing.js";
import {Container} from "react-bootstrap";

import "../../Components/Styles/Styles.css";



const App = () => {
    const [input, setInput] = useState("");
    let [state, setproduct] = useState([]);
    let [insuranceState, setInsurance] = useState([])
    let [disorderState, setDisorder] = useState([])

    // g
    async function fetchData() {
        let response = await axios(`https://blooming-forest-09372.herokuapp.com/psychologists?_limit=-1`); // ?_limit=-1 is to show all
        let user = await response.data;
        let userArr = [];
        let userNum = user.length;
       
        // Set array to only if true
        for (var i = 0; i < userNum; i++) {
            if (user[i].isAccepted === true) {
                userArr.push(user[i]);
            }
        }

        // Set old url to new url
       
        setproduct(userArr.sort((a,b) => a.name.localeCompare(b.name)));
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

    const handleChange2 = (e) => {
        e.preventDefault();
        setDisorder(e.target.value);
        console.log(disorderState)
    
    }
    if (disorderState.length > 0) {
        state = state.filter((i) => {
            if (i.insuranceAccepted !== null && i.specialties !== null){
                return(i.specialties.toLowerCase().match(disorderState.toLowerCase()))
            }else if(i.insuranceAccepted === "" || i.specialties === ""){
                return(
                    <div>

                    </div>
                )
            }
            else{
                return(
                    <div>

                    </div>
                )
            }
        });
        
    };
    
    const handleChange3 = (e) => {
        e.preventDefault();
        setInsurance(e.target.value);
        console.log(insuranceState)
    }
        if (insuranceState.length > 0) {
            state = state.filter((i) => {
                if (i.insuranceAccepted !== null && i.specialties !== null) {
                    return(i.insuranceAccepted.toLowerCase().match(insuranceState.toLowerCase()))
                }else if(i.insuranceAccepted === "" || i.specialties === ""){
                    return(
                        <div>
    
                        </div>
                    )
                }
                else{
                    return(
                        <div>
    
                        </div>
                    )
                }
            });
    };
    

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
                        <div className="inputTotalWrapper">
                        <div className="inputWrapper">
                     
                            <label>Name: </label>
                            <select onChange={handleChange}>
                            <option value=""></option>
                                {state.map((psych, index) => {
                                    return(
                                        <option value={psych.name} key={index}>
                                            {psych.name}
                                        </option>
                                    )
                                })}
                            </select>
                            <label>Specialties: </label>
                            <select onChange={handleChange2} id="disorders">
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
                            <label>Insurance: </label>
                            <select id="insurance" onChange={handleChange3}>
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
                        
                        </div>
                        </div>
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
                                            <span className="cardBold">Specialties: </span>{
                                                psych.specialties
                                            }</h6>
                                            <h6><span className="cardBold">Assessment Evaluations: </span>{
                                                psych.assessmentEvaluations
                                            }</h6>
                                            <h6><span className="cardBold">Treatment Approach: </span>{
                                                psych.treatmentOrientation
                                            }</h6>
                                            <h6><span className="cardBold">Form of Treatment: </span>{
                                                psych.treatmentModality
                                            }</h6>
                                            <h6><span className="cardBold">Insurance: </span> {
                                                psych.insuranceAccepted
                                            }</h6>   
                                             <h6><span className="cardBold">Website: </span> {
                                                psych.website
                                            }</h6>                                      
                                            <h6><span className="cardBold">Phone: </span> {
                                                psych.phone
                                            }</h6>
                                            <h6><span className="cardBold">Email: </span>{
                                                psych.email
                                            }</h6>
                                              
                                            <h6>
                                                <span className="cardBold">Address:</span>{" "}
                                                {
                                                psych.address
                                            } </h6>
                                            
                                            <p><span className="thingasd"href=""></span>{psych.city + " " + psych.state + " " + psych.zip} </p>


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
