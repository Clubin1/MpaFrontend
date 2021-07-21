import {Container} from 'react-bootstrap';
import React, {useState, useEffect} from "react";

const Professionals = () => {
	let [state, setState] = useState([]);
	
    useEffect(() => {
        getInfo().then(state => setState(state))
    }, [])

	const getInfo = () => {
		return fetch('https://blooming-forest-09372.herokuapp.com/propages').then(response => response.json())
	}
	
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
