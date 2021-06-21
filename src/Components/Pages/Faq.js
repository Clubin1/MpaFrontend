import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import '../../Components/Styles/Faq.css';

//const apiUrl = process.env.API_URL || `https://blooming-forest-09372.herokuapp.com/`;


class Faq extends Component {

	constructor(props) {
		super(props);

		this.state = {
			faq: []
		} 
	}


	async componentDidMount() {
		// try {
		// 	const res = await axios.get(apiUrl + '/faqs')
  		// 	.then(res => {
  		// 		console.log(res.data)
		// 		this.setState({faq: res.data})
  		// 	});
		// } catch (err) {
		// 	console.error(err)
		// }
	}


	render() {
		return (
			<Container>
				<h1 className="faqTitle offset2">Frequently Asked Questions</h1>

			<div className="faqSection ">
			<div class="accordion accordion-flush" id="accordionFlushExample">

			  <div class="accordion-item">
			    <h2 className="accordion-header" id="flush-headingOne">
			      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
			        How can I tell if it is time to ask for some help?
			      </button>
			    </h2>
			    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
			      <div className="accordion-body">
			      	<li className="bullet-1">When you feel as if you can't do it alone</li>
			      	<li className="bullet-1">When you feel trapped, as if there is nowhere to turn</li>
			      	<li className="bullet-1">When you worry all the time, and never seem to find answers</li>
			      	<li className="bullet-1">When the way you feel is affecting your sleep, your eating habits, your job, your relationships, your everyday life</li> 
			      	<li className="bullet-1">When issues such as marital or family problems, child rearing, severe illness or injury, death of a loved one, career changes, school problems, or crises associate with aging are making it difficult to cope with the routine demands of daily living.</li>
			      </div>
			    </div>
			  </div>



			  <div className="accordion-item">
			    <h2 className="accordion-header" id="flush-headingTwo">
			      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
			        What is a psychologist?
			      </button>
			    </h2>
			    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
			    	<div className="accordion-body">
			      		Psychologists are highly trained professionals with expertise in the areas of human behavior, mental health assessment, diagnosis, treatment, and behavior change. Psychologists apply scientifically validated procedures to help people change their thoughts, emotions, and behaviors, and to cope better with difficult situations.
			      		<li className="bullet-1">
			      			In North Carolina, licensed psychologists have a doctoral degree in psychology. After graduation from college, licensed psychologists spend an average of 7 years in graduate education, training, and research. As part of their professional training they complete a supervised clinical internship in a hospital or organized health setting, and at least one year of post-doctoral supervised experience before they can practice independently in any health care arena. Licensed psychological associates have a master's degree in psychology. They also have graduate-level training, a clinical internship, and post-graduate supervision.
			      		</li>

			        </div>
			  </div>
			</div>

			  <div className="accordion-item">
			    <h2 className="accordion-header" id="flush-headingThree">
			      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
			        How can I find a psychologist?
			      </button>
			    </h2>
			    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
			    	<div className="accordion-body">
			      		Once you have the name of several psychologists, there are several questions you'll want to ask, including: 
			      		<li class="bullet-1">Are you a licensed psychologist or licensed psychological associate? How long have you been practicing?</li>
			      		<li class="bullet-1">What areas do you specialize in? (such as family therapy, child psychology, adult psychotherapy, etc.)</li>
			      		<li class="bullet-1">What kind of treatment do you usually use, and why do you feel this would be effective for my situation? How long would you expect my treatment to last?</li>
			      		<li class="bullet-1">What are your fees? Do you accept my insurance or HMO coverage? Will you directly bill my insurance company? Do you have a sliding fee scale, or will you set up a payment plan?</li>
			    	</div>
			    </div>
			</div>

			<div className="accordion-item">
			    <h2 className="accordion-header" id="flush-headingFour">
			      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
			        How can I choose a psychologist who is right for me?
			      </button>
			    </h2>
			    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
			      <div className="accordion-body">
			      First, gather information. Talk to your doctor or other health professionals. Today, many family practitioners work with a team of providers, including psychologists, and can refer you to one that they know and trust. Consult the department of psychology at a local college or university, or the local community mental health center. You could also ask a clergy member, as well as family members and friends who may know or have heard about individual psychologists in your community.
			      </div>
			    </div>
			  </div>

			   <div className="accordion-item">
			    <h2 className="accordion-header" id="flush-headingFive">
			      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
			        How does therapy work?
			      </button>
			    </h2>
			    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
			      <div className="accordion-body">
			      	Therapy works by helping you look objectively at behaviors, feelings, and thoughts in situations that you find problematic. It helps you to learn more effective ways to deal with those situations.
                    <br />
                    <br /> Therapy is a collaborative effort. You and your psychologist will identify your goals - what you want to have happen - and agree on how you'll know when you are making progress. Your psychologist will talk with you about the length of time it may take to help you see changes.
                    <br />
                    <br /> Progress and change can happen. Nine out of ten Americans surveyed by Consumer Reports said that psychotherapy had helped them. And, in another recent major national study, half of the clients studied were making improvement after eight sessions of therapy, 75% after six months of therapy.

			      </div>
			    </div>
			    </div>



			  <div className="accordion-item">
			    <h2 className="accordion-header" id="flush-headingSix">
			      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
			        What is a Psychiatrist
			      </button>
			    </h2>
			    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
			      <div className="accordion-body">
			      	A psychiatrist is a physician (MD or DO) who completes medical school and an additional three or four year psychiatric residency, and is licensed to prescribe medications.
			      </div>
			  </div>
			</div>

			<div className="accordion-item">
			    <h2 className="accordion-header" id="flush-headingSeven">
			      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
			        What is a psychotherapist or counselor?
			      </button>
			    </h2>
			    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
			    	<div className="accordion-body">
			      		Psychotherapists and counselors may have various kinds of training of varying quality. Some therapists/counselors have only a bachelor's degree, some have a master's degree, and some have a doctorate. A person who describes himself/herself as a "psychotherapist" is not necessarily a licensed psychologist.
			        </div>
			  </div>
			</div>


			<div className="accordion-item">
			    <h2 className="accordion-header" id="flush-headingEight">
			      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
			        Is therapy included in my health plan coverage?
			      </button>
			    </h2>
			    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
			    	<div className="accordion-body">
			      		Many health plans, including HMOs, provide some level of coverage for psychological services.
                    <br />
                    <br /> If you do not have coverage and will be paying out of pocket, you can talk with your psychologist about sliding scale fees or working out a payment plan. Community mental health centers are also an alternative.
	
			      	</div>
			  </div>
			</div>

			<div className="accordion-item">
			    <h2 className="accordion-header" id="flush-headingNine">
			      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
			        How should I evaluate my insurance coverage for psychological services?
			      </button>
			    </h2>
			    <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
			    	<div className="accordion-body">
						<li class="bullet-1">Call your insurance health plan representative to find out exactly what is covered - outpatient therapy, inpatient treatment, etc. - and what level of coverage you have.
                        </li>
                        <li class="bullet-1"> Ask about co-payments, deductibles, and annual or lifetime maximums.
                        </li>
                        <li class="bullet-1">Ask who determines how many treatment sessions will be covered, and how/when that decision is made.
                        </li>
                        <li class="bullet-1">Ask what you can do if your coverage is denied or cut short.
                        </li>
                        <li class="bullet-1">Find out if there is a group of providers, a "network" that you must choose from, or if you can choose any qualified provider. If you can choose any qualified provider, find out what licenses or degree he or she must have before coverage is authorized.
                        </li>			      		
			        </div>
			  </div>
			</div>


			<div className="accordion-item">
			    <h2 className="accordion-header" id="flush-headingTen">
			      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
			        What if I do not have insurance coverage, or if the coverage is inadequate?
			      </button>
			    </h2>
			    <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
			    	<div className="accordion-body">
						You can talk with the benefits or human resource manager at your place of employment. Let him/her know that you believe mental health services are important, and that you are concerned that you have limited or no coverage. If you belong to a union, you can talk to your union leaders.     		
			        </div>
			  </div>
			</div>


			
			</div>
			</div>


			</Container>
		);
	}
}

export default Faq;