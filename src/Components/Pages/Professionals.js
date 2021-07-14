import {Container} from 'react-bootstrap';
import React, {useState, useEffect} from "react";
import axios from "axios";

const apiUrl = process.env.API_URL || `https://blooming-forest-09372.herokuapp.com/`;

const Professionals = () => {
    let [state, setState] = useState([]);

	async function fetchData() {
		let response = await axios(`${apiUrl}propages`)
		let data = await response.data

		setState(data)
	}
	useEffect(() => {
        fetchData();
    }, []);
	
        return (
            <div>
                <div className="offset professional-section">
                    <Container> {
                        state.map((pro, index) => <div key={index}>
                            <div key={
                                index + 1
                            }>
                                <h1>{
                                    pro.becomeHeader
                                }</h1>
                                <p>{
                                    pro.becomeDesc
                                }</p>
                                <a href="/application" className="landingButton">Application</a>
                                <a href="/payment" className="landingButton ge">Payment</a>
                            </div>
                            
                            <div key={
                                index + 2
                            }>
                                <h1 className="professionalHeader">
                                    {
                                    pro.officeHeader
                                }</h1>
                                <p>{
                                    pro.officeDesc
                                }</p>
                            </div>
                        </div>)
                    }
                        <img className="professionalsImage" src="/images/memberimg3.jpg" alt=""/>

                    </Container>
                </div>
            </div>
        );
}

export default Professionals;
