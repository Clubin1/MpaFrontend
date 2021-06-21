import React, {Component} from 'react';
import axios from 'axios'
import ResourcesLanding from '../Sections/ResourcesLanding';
import {Container} from 'react-bootstrap';


class Resources extends Component {

    render() {
        return (
            <div>

                <div className="offset resource-section">
                    <Container>
                        <h1 className="resource-title">
                            Resources
                        </h1>
                        <p className="resource-info">
                            The information and links offered below are meant to be informative and educational. They are intended only as a starting point for your further understanding of various issues. However, they should not be used as a way to diagnose or treat the specific needs of any individual. You should always seek professional help from a psychologist or other appropriate specialist.
                        </p>
                        <h4>
                            Charlotte-Mecklenburg Local Resources
                        </h4>
                        <p>
                            Center for Behavioral Health (24-hour call center 704-444-2400)<br/>
                            Mental Health Association of Central Carolinas
                        </p>
                        <h4>
                            Other Psychology Resources
                        </h4>
                        <p>
                            <a className="reasource-link" href="https://www.apa.org/">American Psychological Association (APA) Homepage</a><br/>
                            <a className="reasource-link" href="https://www.apa.org/">APA Help Center (public information)</a>- APA's Help Center is your online resource for brochures, tips and articles on the psychological issues that affect your physical and emotional well-being, as well as information about referrals.<br/>
                            <a className="reasource-link" href="https://www.mentalhelp.net/">Mental Help Net.</a>
                            An excellent resource for anyone interested in a variety of mental health topics--readable, accurate, and up-to-date material.<br/>
                            <a className="reasource-link" href="#">Psychology in Daily Life: American Psychological Association.</a>
                            Includes information on depression, sexual harassment, sexual orientation, and other mental health issues.<br/>
                            <a className="reasource-link" href="https://studentaffairs.illinois.edu/">Self-Help Brochures from University of Illinois at Urbana-Champaign Counseling Center.</a>
                            Includes online texts of brochures on various mental health topics relevant to students.<br/>
                        </p>
                        <h4>

                            Resources for Early Career Psychologists and Students
                        </h4>
                        <p>
                            <a className="reasource-link" href="https://www.apa.org/careers/early-career/index">APA Early Career Psychologist Resources</a>
                        </p>
                        <h4>
                            Resources for Early Career Psychologists and Students
                        </h4>
                        <p>
                            <a className="reasource-link" href="https://www.nami.org/Home">
                                National Alliance for the Mentally Ill</a>
                            NAMI is a nonprofit, grassroots, self-help, support and advocacy organization of consumers, families, and friends of people with severe mental illnesses.
                        </p>
                        <p>
                            Thank you for visiting the Public Information page. Our hope is that we can provide you with helpful information and useful links to other resources.
                        </p>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Resources;
