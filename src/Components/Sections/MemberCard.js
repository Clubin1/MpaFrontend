import React, {Component, useState} from 'react';
import axios from 'axios'
import Landing from './Landing.js';
import {Container} from 'react-bootstrap';

import '../../Components/Styles/Styles.css';
import SearchLanding from './SearchLanding.js';

class MemberCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            psychologist: []
        }
    }


    async componentDidMount() {
        let response = await fetch('https://blooming-forest-09372.herokuapp.com//psychologists')
        if (! response.ok) {
            return
        }

        let psychologist = await response.json()
        let array = []
        var arrayLength = psychologist.length;

        for (var i = 0; i < arrayLength; i++) {
            console.log(psychologist[i].isAccepted);
            if (psychologist[i].isAccepted == true) {
                array.push(psychologist[i])
            }
        }
        this.setState({psychologist: array})
    }

    render() {
        return (
            <div>
                <div className="card-section">
                    <Container>
                        <h1>Find a Psychologist</h1>
                        <h3>Look for a psychologist close to you or for your needs</h3>
                        <h4>Search for disorders, location and name</h4>

                        <p>Search for disorders, location and name
                            						Welcome to the Mecklenburg Psychological Association (MPA) Psychologist Membership & Referral Directory. The Mecklenburg Psychological Association provides this service as a way for you to find licensed psychologists in your area. Using our search engine, you will receive a list of psychologists whose self-described services match with your needs. You may click on any psychologist's name to find out more about that psychologist. Many psychologists have web pages that further describe their services.</p>
                        <p>
                            You may want to contact at least three psychologists by phone before making a decision about with whom you wish to schedule an initial appointment. You may want to discuss how much experience the psychologist has had with patients/clients with problems similar to the one(s) you have, the cost of services, how frequently you would be seen, the estimated length of treatment and any questions you have about training or experience. If you plan to use medical insurance to help cover the cost of therapy, you may want to call your insurance company to understand your mental health benefits, including co-pays and deductibles for in- or out-of-network providers. Please consider that you may need to leave a phone number and a time you can be reached in case the therapist is unavailable when you call.
                        </p>

                        <p>
                            Psychologists in the MPA Membership & Referral Directory are licensed in the State of North Carolina. Psychologists provide testing/assessment, psychotherapy, consultation and other services. Psychologists do not prescribe medication. MPA hopes that this information will assist you in selecting a suitable therapist. Psychologists listed in this directory and their identified areas of specialization are based on self-report. MPA assumes no liability in the event you are not satisfied or helped by a psychologist you choose to meet with from this list.


                        </p>
                        <div className="Card">
                            {
                            this.state.psychologist.map((psych, index) => <div key={index}>
                                <div className="g"
                                    key={
                                        index + 1
                                }>
                                    <div className="info-col">
                                        <h4>{
                                            psych.name
                                        }</h4>
                                        <h6>Specialties: {
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
                                        <h6>Location: {
                                            psych.city + " " + psych.state + " " + psych.zip
                                        }</h6>
                                        <h6>{
                                            psych.imgurl
                                        }</h6>
                                    </div>
                                    <div className="second-col">
                                        <img className="image"
                                            src={
                                                `/images/${
                                                    psych.imgurl
                                                }`
                                            }/>
                                    </div>
                                </div>
                            </div>)
                        } </div>
                    </Container>
                </div>
            </div>
        );
    }
}

export default MemberCard;
