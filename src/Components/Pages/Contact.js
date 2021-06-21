import React, {Component, useState} from 'react';
import ContactLanding from '../Sections/ContactLanding';
import '../../Components/Styles/Styles.css';
import {Container, Row, Col, FormText} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
const {REACT_APP_EMAIL_FORM_KEY} = process.env;

init(`user_EJB0UvP229Yp1EqevHUIz`);
//user_EJB0UvP229Yp1EqevHUIz
const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [contactNumber, setContactNumber] = useState("000000");
    const [statusMessage, setStatusMessage] = useState("");

    console.log(REACT_APP_EMAIL_FORM_KEY)
    const generateContactNumber = () => {
        const numStr = "000000" + (Math.random() * 1000000 | 0);
        setContactNumber(numStr.substring(numStr.length - 6));
      }
      const onSubmit = (data) => {
        const form = document.querySelector('#con')
        console.log(data);
        generateContactNumber();
        sendForm('default_service', 'template_wmswmt9', '#con')
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            form.reset();
            setStatusMessage("Message sent!");
            setTimeout(()=> {
            }, 5000)
          }, function(error) {
            console.log('FAILED...', error);
            setStatusMessage("Failed to send message! Please try again later.");
            setTimeout(()=> {
            }, 5000)
          });
      }
      
        return (
            
            <div>
                <ContactLanding/>
                <Container>
                    <div className="s">
                        <div id="contact-wrapper">
                            <div class="contact-container">
                                <form onSubmit={handleSubmit(onSubmit)} id="con">
                                <h6 className='status-message'>{statusMessage}</h6>
                                    <h3>Contact Form</h3>
                                    <fieldset>
                                    <input type='hidden' name='contact_number' value={contactNumber} />

                                        <input name="user_name" {...register("user_name")} placeholder="Your name" type="text" tabindex="1" required autofocus/>
                                    </fieldset>
                                    <fieldset>
                                        <input name="user_email" {...register("user_email")} placeholder="Your Email Address" type="email" tabindex="2" required/>
                                    </fieldset>
                                    <fieldset>
                                        <textarea name="message" {...register("message")} placeholder="Type your message here...." tabindex="5" type="message" required></textarea>
                                    </fieldset>
                                    <fieldset>
                                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        <div class="total-contact">
                            <div class="contact-info-wrapper">
                                <h1 class="contact-title">Email and Address</h1>
                            </div>
                            <div class="contact-info-wrapper2">
                                <h5 class="contact-info">5970 Fairview Road, Ste 412 Charlotte, NC 28210</h5>
                            </div>
                            <div class="contact-info-wrapper3">
                                <h5 class="contact-email">mpacharlotte@gmail.com</h5>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    
}

export default Contact