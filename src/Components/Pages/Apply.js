import {Container} from "react-bootstrap";
import React, {useState} from "react";
import { formatPhoneNumber } from 'react-phone-number-input'

import {FormGroup, Label, Input} from "reactstrap";
import '../Styles/Styles.css'
function Apply() {
    const [error, setError] = useState("");
    const [data, setData] = useState({
        name: "",
        lastName: "",
        company: "",
        address: "",
        city: "",
        state: "",
        zip: "",

        phone: "",
        otherPhone: "",
        fax: "",

        email: "",
        website: "",
        specialties: "",
        treatmentOrientation: "",
        insuranceAccepted: "",
        treatmentModality: "",
        assessmentEvaluations: "",
        populationsServed: "",
        languages: "",

        imgurl:"",
        ps_url:"",

        fileInput: "",
        selectedFile:"",
        imageURL: ""
    });

    function onChange(e) { // set the key = to the name property equal to the value typed
        const updateItem = (data[e.target.name] = e.target.value);
        // update the state data object
        setData({
            ...data,
            updateItem
        });
    }

    function handleInsurance(e) {
        let insurance = data.insuranceAccepted + ", " + e.target.name
        insurance = insurance.replace(/^,/, '')
        insurance = insurance.trimStart()

        setData({
            ...data,
            insuranceAccepted: insurance
        })
        console.log(data.insuranceAccepted)
    }

    function handleDisorders(e) {
        let specialties = data.specialties + ", " + e.target.name
        specialties = specialties.replace(/^,/, '')
        specialties = specialties.trimStart()
        setData({
            ...data,
            specialties: specialties
        })
        console.log(data)
    }
    function handleAssessments(e) {
        let assessmentEvaluations = data.assessmentEvaluations + ", " + e.target.name
        assessmentEvaluations = assessmentEvaluations.replace(/^,/, '')
        assessmentEvaluations = assessmentEvaluations.trimStart()

        setData({
            ...data,
            assessmentEvaluations: assessmentEvaluations
        })
        console.log(data)
    }
    function handleTreatment(e) {
        let treatmentModality = data.treatmentModality + ", " + e.target.name
        treatmentModality = treatmentModality.replace(/^,/, '')
        treatmentModality = treatmentModality.trimStart()
        setData({
            ...data,
            treatmentModality: treatmentModality
        })
        console.log(data)
    }
    function handlePopulation(e) {
        let populationsServed = data.populationsServed + ", " + e.target.name
        populationsServed = populationsServed.replace(/^,/, '')
        populationsServed = populationsServed.trimStart()
        setData({
            ...data,
            populationsServed: populationsServed
        })
        console.log(data)
    }
    function handleLanguages(e) {
        let languages = data.languages + ", " + e.target.name
        languages = languages.replace(/^,/, '')
        languages = languages.trimStart()
        setData({
            ...data,
            languages: languages
        })
        console.log(data)
    }
    function treatmentOrientation(e) {
        let treatmentOrientation = data.treatmentOrientation + ", " + e.target.name
        treatmentOrientation = treatmentOrientation.replace(/^,/, '')
        treatmentOrientation = treatmentOrientation.trimStart()
        setData({
            ...data,
            treatmentOrientation: treatmentOrientation
        })
        console.log(data)
    }

    let handleImageUpload = () => {
        const { files } = document.querySelector('input[type="file"]')
        console.log(files[0])
        const formData = new FormData();
        formData.append('file', files[0]);
        // replace this with your upload preset name
        formData.append('upload_preset', 'dev_setups');
        const options = {
          method: 'POST',
          body: formData,
        };
        
        // replace cloudname with your Cloudinary cloud_name
        return fetch('https://api.cloudinary.com/v1_1/dm5uxyi2s/image/upload', options)
          .then(res => res.json())
          .then(res => {
              setData({
                  ...data,
                  ps_url: res.secure_url
              })
              console.log(res)
            })
          .catch(err => console.log(err));
      }

    async function submitApplication(event) {
        alert(data.name + ", thank you for your appliaction. We will get back to you shortly. Please submit your payment if required.");
        // https://api.cloudinary.com/v1_1/dm5uxyi2s
       event.preventDefault()
       let formatedNumber = data.phone
       formatedNumber = (formatPhoneNumber(`+1${formatedNumber}`))
       
       let formatedSecondNumber = data.otherPhone
       formatedSecondNumber = (formatPhoneNumber(`+1${formatedSecondNumber}`))

       let formatedFaxNumber = data.fax
       formatedFaxNumber = (formatPhoneNumber(`+1${formatedFaxNumber}`))

        const response = await fetch("https://blooming-forest-09372.herokuapp.com/psychologists", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    name: data.name,
                    lastName: data.lastName,
                    company: data.company,
                    address: data.address,
                    city: data.city,
                    state: data.state,
                    zip: data.zip,
                    phone: formatedNumber,
                    otherPhone: formatedSecondNumber,
                    fax: formatedFaxNumber,
                    email: data.email,
                    website: data.website,
                    specialties: data.specialties,
                    treatmentOrientation: data.treatmentOrientation,
                    insuranceAccepted: data.insuranceAccepted,
                    treatmentModality: data.treatmentModality,
                    assessmentEvaluations: data.assessmentEvaluations,
                    populationsServed: data.populationsServed,
                    languages: data.languages,
                    imgurl: data.imgurl,
                    ps_url: data.ps_url
                }
            )
        });
        if (!response.ok) {
            setError(response.statusText);
            console.log(error)
            alert("Please make sure all areas are filled out.");
        }
    }


    return (
        <div>
            <div className="card-section offset">
                <Container>
                    <div className="card-center">
                        <h1 className="searchTitle">Application Form</h1>
                        <h5>
                            You may either fill out our digital form, or fill out a pdf version and submit it via email.
                                                                                                                                                          Please fill out all fields.
                                                                                                                                                          After application is submit and payment is recieved, please wait a
                                                                                                                                                          few buisness days to be reflected on the search directory.

                        </h5>

                        <div className="apply-div">
                            <h5>PDF Application:
                                <a href="/images/MPA 2020 Membership Application.pdf" download className="landingButton applybtn">Download</a>
                            </h5>
                        </div>
                        <form onSubmit={submitApplication}
                            class="form">
                            <FormGroup>
                                <Label>Full Name Full Name (include degree ex:  Mary Smith, Ph.D.)</Label>
                                <Input name="name" placeholder="Full Name"
                                    onChange={onChange}/>
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input name="lastName" placeholder="Last Name"
                                    onChange={onChange}/>
                            </FormGroup>
                            <Label>Company</Label>
                            <Input name="company" placeholder="Company"
                                onChange={onChange}/>
                            <FormGroup>
                                <Label>Address</Label>
                                <Input name="address" placeholder="Address"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>City</Label>
                                <Input name="city" placeholder="City"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>State</Label>
                                <Input name="state" placeholder="State"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Zipcode</Label>
                                <Input name="zip" placeholder="Zipcode"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Phone</Label>
                                <Input name="phone" placeholder="Phone Number"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Other Phone</Label>
                                <Input name="otherPhone" placeholder="Second Phone Number"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Fax</Label>
                                <Input name="fax" placeholder="Fax Number"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input name="email" placeholder="Email Address"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Website</Label>
                                <Input name="website" placeholder="Website"
                                    onChange={onChange}/>
                            </FormGroup>
                            <div className="rowApp">
                                <FormGroup className="formWidth">
                                    <Label className="checkLabel">Specialties:
                                    </Label>
                                    <ul>
                                    <li>
                                             <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="disNone"
                                                name="None"
                                                value="None"></input>
                                            <label for="disNone">
                                            None</label>
                                           
                            
                                        </li>
                                    <li>
                                             <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Adoption"
                                                name="Adoption"
                                                value="Bike"></input>
                                            <label for="Adoption">
                                                Adoption</label>
                                          
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="ADHD"
                                                name="ADHD"
                                                value="Bike2"></input>
                                            <label for="ADHD">
                                                ADHD</label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Anger Management"
                                                name="Anger Management"
                                                value="Bike3"></input>
                                            <label for="Anger Management">
                                                Anger Management</label>
                                        </li>
                                        <li>

                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Anxiety"
                                                name="Anxiety"
                                                value="Bike3"></input>
                                            <label for="Anxiety">
                                                Anxiety</label>
                                        </li>

                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Autism Spectrum Disorders"
                                                name="Autism Spectrum Disorders"
                                                value="Bike3"></input>
                                            <label for="Autism Spectrum Disorders">
                                                Autism Spectrum Disorders</label>
                                        </li>

                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Bipolar Disorder"
                                                name="Bipolar Disorder"
                                                value="Bike3"></input>
                                            <label for="Bipolar Disorder">
                                                Bipolar Disorder</label>
                                        </li>

                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Body Image Disturbance"
                                                name="Body Image Disturbance"
                                                value="Bike3"></input>
                                            <label for="Body Image Disturbance">
                                                Body Image Disturbance</label>
                                        </li>

                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Borderline Personality Disorder"
                                                name="Borderline Personality Disorder"
                                                value="Bike3"></input>
                                            <label for="Borderline Personality Disorder">
                                                Borderline Personality Disorder</label>
                                        </li>

                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Career / Vocational"
                                                name="Career / Vocational"
                                                value="Bike3"></input>
                                            <label for="Career / Vocational">
                                                Career / Vocational</label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Child/Adolescent Behavioral Issues"
                                                name="Child/Adolescent Behavioral Issues"
                                                value="Bike3"></input>
                                            <label for="Child/Adolescent Behavioral Issues">
                                                Child/Adolescent Behavioral Issues
                                            </label>
                                        </li>

                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Chronic Illness"
                                                name="Chronic Illness"
                                                value="Bike3"></input>
                                            <label for="Chronic Illness">
                                                Chronic Illness
                                            </label>
                                        </li>

                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Chronic Pain"
                                                name="Chronic Pain"
                                                value="Bike3"></input>
                                            <label for="Chronic Pain">
                                                Chronic Pain
                                            </label>
                                        </li>

                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Coaching"
                                                name="Coaching"
                                                value="Bike3"></input>
                                            <label for="Coaching">
                                                Coaching
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Couples Therapy"
                                                name="Couples Therapy"
                                                value="Bike3"></input>
                                            <label for="Couples Therapy">
                                                Couples Therapy
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Dementia"
                                                name="Dementia"
                                                value="Bike3"></input>
                                            <label for="Dementia">
                                                Dementia
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Depression"
                                                name="Depression"
                                                value="Bike3"></input>
                                            <label for="Depression">
                                                Depression
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Developmental Disabilities"
                                                name="Developmental Disabilities"
                                                value="Bike3"></input>
                                            <label for="Developmental Disabilities">
                                                Developmental Disabilities
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Dissociative Disorders"
                                                name="Dissociative Disorders"
                                                value="Bike3"></input>
                                            <label for="Dissociative Disorders">
                                                Dissociative Disorders
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Divorce / Separation"
                                                name="Divorce / Separation"
                                                value="Bike3"></input>
                                            <label for="Divorce / Separation">
                                                Divorce / Separation
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Eating Disorders"
                                                name="Eating Disorders"
                                                value="Bike3"></input>
                                            <label for="Eating Disorders">
                                                Eating Disorders
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Family Therapy"
                                                name="Family Therapy"
                                                value="Bike3"></input>
                                            <label for="Family Therapy">
                                                Family Therapy
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Gambling"
                                                name="Gambling"
                                                value="Bike3"></input>
                                            <label for="Gambling">
                                                Gambling
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Gay / Lesbian / Bisexual Issues"
                                                name="Gay / Lesbian / Bisexual Issues"
                                                value="Bike3"></input>
                                            <label for="Gay / Lesbian / Bisexual Issues">
                                                Gay / Lesbian / Bisexual Issues
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Geriatric"
                                                name="Geriatric"
                                                value="Bike3"></input>
                                            <label for="Geriatric">
                                                Geriatric
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Grief and Loss"
                                                name="Grief and Loss"
                                                value="Bike3"></input>
                                            <label for="Grief and Loss">
                                                Grief and Loss
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Industrial / Organizational"
                                                name="Industrial / Organizational"
                                                value="Bike3"></input>
                                            <label for="Industrial / Organizational">
                                                Industrial / Organizational
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Learning Disabilities/Academic Issues"
                                                name="Learning Disabilities/Academic Issues"
                                                value="Bike3"></input>
                                            <label for="Learning Disabilities/Academic Issues">
                                                Learning Disabilities/Academic Issues
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Life Transitions"
                                                name="Life Transitions"
                                                value="Bike3"></input>
                                            <label for="Life Transitions">
                                                Life Transitions
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Men's Issues"
                                                name="Men's Issues"
                                                value="Bike3"></input>
                                            <label for="Men's Issues">
                                                Men's Issues
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Multicultural / Diversity Issues"
                                                name="Multicultural / Diversity Issues"
                                                value="Bike3"></input>
                                            <label for="Multicultural / Diversity Issues">
                                                Multicultural / Diversity Issues
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Neuropsychological"
                                                name="Neuropsychological"
                                                value="Bike3"></input>
                                            <label for="Neuropsychological">
                                                Neuropsychological
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Obesity / Weight Management"
                                                name="Obesity / Weight Management"
                                                value="Bike3"></input>
                                            <label for="Obesity / Weight Management">
                                                Obesity / Weight Management
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="OCD"
                                                name="OCD"
                                                value="Bike3"></input>
                                            <label for="OCD">
                                                OCD
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Parenting Coordination"
                                                name="Parenting Coordination"
                                                value="Bike3"></input>
                                            <label for="Parenting Coordination">
                                                Parenting Coordination
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Parenting Issues"
                                                name="Parenting Issues"
                                                value="Bike3"></input>
                                            <label for="Parenting Issues">
                                                Parenting Issues
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Pastoral/Christian/Faith Based"
                                                name="Pastoral/Christian/Faith Based"
                                                value="Bike3"></input>
                                            <label for="Pastoral/Christian/Faith Based">
                                                Pastoral/Christian/Faith Based
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Personal Empowerment"
                                                name="Personal Empowerment"
                                                value="Bike3"></input>
                                            <label for="Personal Empowerment">
                                                Personal Empowerment
                                            </label>
                                        </li>

                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Post Traumatic Stress Disorder"
                                                name="Post Traumatic Stress Disorder"
                                                value="Bike3"></input>
                                            <label for="Post Traumatic Stress Disorder">
                                                Post Traumatic Stress Disorder
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Relationship Issues"
                                                name="Relationship Issues"
                                                value="Bike3"></input>
                                            <label for="Relationship Issues">
                                                Relationship Issues
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Schizophrenia"
                                                name="Schizophrenia"
                                                value="Bike3"></input>
                                            <label for="Schizophrenia">
                                                Schizophrenia
                                            </label>
                                        </li>

                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Self - Injury"
                                                name="Self - Injury"
                                                value="Bike3"></input>
                                            <label for="Self - Injury">
                                                Self - Injury
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Sexual Abuse / Trauma"
                                                name="Sexual Abuse / Trauma"
                                                value="Bike3"></input>
                                            <label for="Sexual Abuse / Trauma">
                                                Sexual Abuse / Trauma
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Sexual Dysfunction"
                                                name="Sexual Dysfunction"
                                                value="Bike3"></input>
                                            <label for="Sexual Dysfunction">
                                                Sexual Dysfunction
                                            </label>
                                        </li>

                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Sleep/Insomnia CBT-I"
                                                name="Sleep/Insomnia CBT-I"
                                                value="Bike3"></input>
                                            <label for="Sleep/Insomnia CBT-I">
                                                Sleep/Insomnia CBT-I
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Smoking Cessation"
                                                name="Smoking Cessation"
                                                value="Bike3"></input>
                                            <label for="Smoking Cessation">
                                                Smoking Cessation
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Sports Psychology"
                                                name="Sports Psychology"
                                                value="Bike3"></input>
                                            <label for="Sports Psychology">
                                                Sports Psychology
                                            </label>

                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Substance Abuse"
                                                name="Substance Abuse"
                                                value="Bike3"></input>
                                            <label for="Substance Abuse">
                                                Substance Abuse
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Testing/Assessment"
                                                name="Testing/Assessment"
                                                value="Bike3"></input>
                                            <label for="Testing/Assessment">
                                                Testing/Assessment
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Transgender"
                                                name="Transgender"
                                                value="Bike3"></input>
                                            <label for="Transgender">
                                                Transgender
                                            </label>
                                        </li>
                                        <li>

                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Trichotillomania"
                                                name="Trichotillomania"
                                                value="Bike3"></input>
                                            <label for="Trichotillomania">
                                                Trichotillomania
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Women's Issues"
                                                name="Women's Issues"
                                                value="Bike3"></input>
                                            <label for="Women's Issues">
                                                Women's Issues
                                            </label>
                                        </li>
                                        <li>
                                            <input onChange={handleDisorders}
                                                type="checkbox"
                                                id="Work - Life Balance Issues"
                                                name="Work - Life Balance Issues"
                                                value="Bike3"></input>
                                            <label for="Work - Life Balance Issues">
                                                Work - Life Balance Issues
                                            </label>
                                        </li>
                                    </ul>
                                </FormGroup>
                                <div className="asdasds">


                                    <FormGroup className="formWidth">
                                        <Label className="checkLabel">Insurance Accepted:
                                        </Label>
                                        <ul>
                                            
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="InusranceNone"
                                                    name="None"
                                                    value="Bike"></input>
                                                <label for="InusranceNone">
                                                    None</label>
                                            </li>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="Accepts Out Of Network Benefits"
                                                    name="Accepts Out Of Network Benefits"
                                                    value="Bike2"></input>
                                                <label for="Accepts Out Of Network Benefits">
                                                    Accepts Out Of Network Benefits</label>
                                            </li>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="Aetna"
                                                    name="Aetna"
                                                    value="Bike3"></input>
                                                <label for="Aetna">
                                                    Aetna</label>
                                            </li>


                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="BC/BS"
                                                    name="BC/BS"
                                                    value="Bike"></input>
                                                <label for="BC/BS">
                                                    BC/BS</label>
                                            </li>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="BC/BS Blue Value"
                                                    name="BC/BS Blue Value"
                                                    value="Bike2"></input>
                                                <label for="BC/BS Blue Value">
                                                    BC/BS Blue Value</label>
                                            </li>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="BC/BS State Employee Plan"
                                                    name="BC/BS State Employee Plan"
                                                    value="Bike3"></input>
                                                <label for="BC/BS State Employee Plan">
                                                    BC/BS State Employee Plan</label>
                                            </li>

                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="BC/BS Federal Plan"
                                                    name="BC/BS Federal Plan"
                                                    value="Bike"></input>
                                                <label for="BC/BS Federal Plan">
                                                    BC/BS Federal Plan</label>
                                            </li>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="CBHA"
                                                    name="CBHA"
                                                    value="Bike2"></input>
                                                <label for="CBHA">
                                                    CBHA</label>
                                            </li>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="Cigna"
                                                    name="Cigna"
                                                    value="Bike3"></input>
                                                <label for="Cigna">
                                                    Cigna</label>
                                            </li>
                                            <li>

                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="Medcost"
                                                    name="Medcost"
                                                    value="Bike"></input>
                                                <label for="Medcost">
                                                    Medcost</label>
                                            </li>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="Medicare"
                                                    name="Medicare"
                                                    value="Bike2"></input>
                                                <label for="Medicare">
                                                    Medicare</label>
                                            </li>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="Medicaid"
                                                    name="Medicaid"
                                                    value="Bike3"></input>
                                                <label for="Medicaid">
                                                    Medicaid</label>
                                            </li>

                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="Magellan"
                                                    name="Magellan"
                                                    value="Bike"></input>
                                                <label for="Magellan">
                                                    Magellan</label>
                                            </li>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="MHN"
                                                    name="MHN"
                                                    value="Bike2"></input>
                                                <label for="MHN">
                                                    MHN</label>
                                            </li>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="NC Health Choice"
                                                    name="NC Health Choice"
                                                    value="Bike3"></input>
                                                <label for="NC Health Choice">
                                                    NC Health Choice</label>

                                            </li>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="Primary Physicians Care"
                                                    name="Primary Physicians Care"
                                                    value="Bike"></input>
                                                <label for="Primary Physicians Care">
                                                    Primary Physicians Care</label>
                                            </li>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="TriCare"
                                                    name="TriCare"
                                                    value="Bike2"></input>
                                                <label for="TriCare">
                                                    TriCare</label>
                                            </li>
                                            <li>

                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="United Beh. Health"
                                                    name="United Beh. Health"
                                                    value="Bike3"></input>
                                                <label for="United Beh. Health">
                                                    United Beh. Health</label>

                                            </li>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="Value Options"
                                                    name="Value Options"
                                                    value="Bike"></input>
                                                <label for="Value Options">
                                                    Value Options</label>
                                            </li>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="Wellpath"
                                                    name="Wellpath"
                                                    value="Bike2"></input>
                                                <label for="Wellpath">
                                                    Wellpath</label>
                                            </li>
                                            
                                        </ul>

                                    </FormGroup>
                                </div>
                                <div id="thing" className=" rowApp">
                                    <div className="asdasds">
                                        <FormGroup>
                                            <Label className="checkLabel">Treatment Orientation:
                                            </Label>
                                            <ul>
                                            <li>
                                                <input onChange={treatmentOrientation}
                                                    type="checkbox"
                                                    id="treatmentNone"
                                                    name="None"
                                                    value="Bike"></input>
                                                <label for="treatmentNone">
                                                    None</label>
                                            </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Applied Behavior Analysis"
                                                        name="Applied Behavior Analysis"
                                                        value="Bike"></input>
                                                    <label for="Applied Behavior Analysis">
                                                        Applied Behavior Analysis</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="ACT (Acceptance & Commitment)"
                                                        name="ACT (Acceptance & Commitment)"
                                                        value="Bike2"></input>
                                                    <label for="ACT (Acceptance & Commitment)">
                                                        ACT (Acceptance & Commitment)</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Adlerian"
                                                        name="Adlerian"
                                                        value="Bike3"></input>
                                                    <label for="Adlerian">
                                                        Adlerian</label>
                                                </li>

                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Behavioral"
                                                        name="Behavioral"
                                                        value="Bike"></input>
                                                    <label for="Behavioral">
                                                        Behavioral</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Cognitive Behavioral Therapy (CBT)"
                                                        name="Cognitive Behavioral Therapy (CBT)"
                                                        value="Bike2"></input>
                                                    <label for="Cognitive Behavioral Therapy (CBT)">
                                                        Cognitive Behavioral Therapy (CBT)</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Dialectical Behavior Therapy (DBT)"
                                                        name="Dialectical Behavior Therapy (DBT)"
                                                        value="Bike3"></input>
                                                    <label for="Dialectical Behavior Therapy (DBT)">
                                                        Dialectical Behavior Therapy (DBT)</label>
                                                </li>

                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Developmental"
                                                        name="Developmental"
                                                        value="Bike"></input>
                                                    <label for="Developmental">
                                                        Developmental</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Eclectic/Integrative"
                                                        name="Eclectic/Integrative"
                                                        value="Bike2"></input>
                                                    <label for="Eclectic/Integrative">
                                                        Eclectic/Integrative</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="EMDR"
                                                        name="EMDR"
                                                        value="Bike3"></input>
                                                    <label for="EMDR">
                                                        EMDR</label>

                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Emotionally Focused Therapy"
                                                        name="Emotionally Focused Therapy"
                                                        value="Bike"></input>
                                                    <label for="Emotionally Focused Therapy">
                                                        Emotionally Focused Therapy</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Existential Humanistic"
                                                        name="Existential Humanistic"
                                                        value="Bike2"></input>
                                                    <label for="Existential Humanistic">
                                                        Existential Humanistic</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Family Systems"
                                                        name="Family Systems"
                                                        value="Bike3"></input>
                                                    <label for="Family Systems">
                                                        Family Systems</label>
                                                </li>

                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Gestalt"
                                                        name="Gestalt"
                                                        value="Bike"></input>
                                                    <label for="Gestalt">
                                                        Gestalt</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Holistic Approach"
                                                        name="Holistic Approach"
                                                        value="Bike2"></input>
                                                    <label for="Holistic Approach">
                                                        Holistic Approach</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Hypnotherapy"
                                                        name="Hypnotherapy"
                                                        value="Bike3"></input>
                                                    <label for="Hypnotherapy">
                                                        Hypnotherapy</label>
                                                </li>

                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Imago"
                                                        name="Imago"
                                                        value="Bike"></input>
                                                    <label for="Imago">
                                                        Imago</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Interpersonal"
                                                        name="Interpersonal"
                                                        value="Bike2"></input>
                                                    <label for="Interpersonal">
                                                        Interpersonal</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Mindfulness Based Therapy"
                                                        name="Mindfulness Based Therapy"
                                                        value="Bike3"></input>
                                                    <label for="Mindfulness Based Therapy">
                                                        Mindfulness Based Therapy</label>
                                                </li>

                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Motivational Interviewing"
                                                        name="Motivational Interviewing"
                                                        value="Bike"></input>
                                                    <label for="Motivational Interviewing">
                                                        Motivational Interviewing</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Narrative Therapy"
                                                        name="Narrative Therapy"
                                                        value="Bike2"></input>
                                                    <label for="Narrative Therapy">
                                                        Narrative Therapy</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Play Therapy"
                                                        name="Play Therapy"
                                                        value="Bike3"></input>
                                                    <label for="Play Therapy">
                                                        Play Therapy</label>

                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Psychoanalytic"
                                                        name="Psychoanalytic"
                                                        value="Bike"></input>
                                                    <label for="Psychoanalytic">
                                                        Psychoanalytic</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Psychodynamic"
                                                        name="Psychodynamic"
                                                        value="Bike2"></input>
                                                    <label for="Psychodynamic">
                                                        Psychodynamic</label>
                                                </li>
                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Rational-Emotive"
                                                        name="Rational-Emotive"
                                                        value="Bike3"></input>
                                                    <label for="Rational-Emotive">
                                                        Rational-Emotive</label>
                                                </li>

                                                <li>
                                                    <input onChange={treatmentOrientation}
                                                        type="checkbox"
                                                        id="Solution Focused/Solution Oriented"
                                                        name="Solution Focused/Solution Oriented"
                                                        value="Bike3"></input>
                                                    <label for="Solution Focused/Solution Oriented">
                                                        Solution Focused/Solution Oriented</label>
                                                </li>
                                            </ul>
                                        </FormGroup>

                                        <FormGroup className="sss">
                                            <Label className="checkLabel">Assement Evaluations:
                                            </Label>
                                            <ul>
                                            <li>
                                                <input onChange={handleInsurance}
                                                    type="checkbox"
                                                    id="NoneAss"
                                                    name="None"
                                                    value="NoneAss"></input>
                                                <label for="NoneAss">
                                                    None</label>
                                            </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Cognitive/IQ"
                                                        name="Cognitive/IQ"
                                                        value="Bike"></input>
                                                    <label for="Cognitive/IQ">
                                                        Cognitive/IQ</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Educational/Achievement Testing"
                                                        name="Educational/Achievement Testing"
                                                        value="Bike2"></input>
                                                    <label for="Educational/Achievement Testing">
                                                        Educational/Achievement Testing</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Academically Gifted"
                                                        name="Academically Gifted"
                                                        value="Bike3"></input>
                                                    <label for="Academically Gifted">
                                                        Academically Gifted</label>
                                                </li>

                                                <li>

                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Early Admission to Kindergarten"
                                                        name="Early Admission to Kindergarten"
                                                        value="Bike"></input>
                                                    <label for="Early Admission to Kindergarten">
                                                        Early Admission to Kindergarten</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Developmental Disabilities"
                                                        name="Developmental Disabilities"
                                                        value="Bike2"></input>
                                                    <label for="Developmental Disabilities">
                                                        Developmental Disabilities</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Learning Disability"
                                                        name="Learning Disability"
                                                        value="Bike3"></input>
                                                    <label for="Learning Disability">
                                                        Learning Disability</label>

                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Aspergers/Autism"
                                                        name="Aspergers/Autism"
                                                        value="Bike"></input>
                                                    <label for="Aspergers/Autism">
                                                        Aspergers/Autism</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Auditory Processing Problems"
                                                        name="Auditory Processing Problems"
                                                        value="Bike2"></input>
                                                    <label for="Auditory Processing Problems">
                                                        Auditory Processing Problems</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="ADHD-Adult"
                                                        name="ADHD-Adult"
                                                        value="ADHD-Adult"></input>
                                                    <label for="ADHD-Adult">
                                                        ADHD-Adult</label>
                                                </li>

                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="ADHD-Child/Adolescent"
                                                        name="ADHD-Child/Adolescent"
                                                        value="ADHD-Child/Adolescent"></input>
                                                    <label for="ADHD-Child/Adolescent">
                                                        ADHD-Child/Adolescent</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Neuropsychological"
                                                        name="Neuropsychological"
                                                        value="Bike2"></input>
                                                    <label for="Neuropsychological">
                                                        Insurance 2</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Diagnostic/Personality Assessment"
                                                        name="Diagnostic/Personality Assessment"
                                                        value="Bike3"></input>
                                                    <label for="Diagnostic/Personality Assessment">
                                                        Diagnostic/Personality Assessment</label>
                                                </li>

                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Psychosocial/Adaptive Behavior"
                                                        name="Psychosocial/Adaptive Behavior"
                                                        value="Bike"></input>
                                                    <label for="Psychosocial/Adaptive Behavior">
                                                        Psychosocial/Adaptive Behavior</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Behavioral Assessments"
                                                        name="Behavioral Assessments"
                                                        value="Bike2"></input>
                                                    <label for="Behavioral Assessments">
                                                        Behavioral Assessments</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Adoption"
                                                        name="Adoption"
                                                        value="Bike3"></input>
                                                    <label for="Adoption">
                                                        Adoption</label>
                                                </li>


                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Custody Evaluations"
                                                        name="Custody Evaluations"
                                                        value="Bike"></input>
                                                    <label for="Custody Evaluations">
                                                        Custody EvaluationsCustody Evaluations</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Infertility Consultation"
                                                        name="Infertility Consultation"
                                                        value="Bike2"></input>
                                                    <label for="Infertility Consultation">
                                                        Infertility Consultation</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Pre-Marital Assessment"
                                                        name="Pre-Marital Assessment"
                                                        value="Bike3"></input>
                                                    <label for="Pre-Marital Assessment">
                                                        Pre-Marital Assessment</label>
                                                </li>

                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Bariatric Surgery Preoperative Eval"
                                                        name="Bariatric Surgery Preoperative Eval"
                                                        value="Bariatric Surgery Preoperative Eval"></input>
                                                    <label for="Bariatric Surgery Preoperative Eval">
                                                        Bariatric Surgery Preoperative Eval</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Egg Donorship"
                                                        name="Egg Donorship"
                                                        value="Bike2"></input>
                                                    <label for="Egg Donorship">
                                                        Egg Donorship</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Intrathecal Pump"
                                                        name="Intrathecal Pump"
                                                        value="Bike3"></input>
                                                    <label for="Intrathecal Pump">
                                                        Intrathecal Pump</label>

                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Pre-Transplant Evaluation"
                                                        name="Pre-Transplant Evaluation"
                                                        value="Bike"></input>
                                                    <label for="Pre-Transplant Evaluation">
                                                        Pre-Transplant Evaluation</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Spinal Cord Stimulator"
                                                        name="Spinal Cord Stimulator"
                                                        value="Bike2"></input>
                                                    <label for="Spinal Cord Stimulator">
                                                        Spinal Cord Stimulator</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Gender Affirming Medical & Surgical Referrals"
                                                        name="Gender Affirming Medical & Surgical Referrals"
                                                        value="Bike3"></input>
                                                    <label for="Gender Affirming Medical & Surgical Referrals">
                                                    Gender Affirming Medical & Surgical Referrals</label>
                                                </li>

                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Chronic Pain"
                                                        name="Chronic Pain"
                                                        value="Bike"></input>
                                                    <label for="Chronic Pain">
                                                        Chronic Pain</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Career Testing"
                                                        name="Career Testing"
                                                        value="Bike2"></input>
                                                    <label for="Career Testing">
                                                        Career Testing</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Fitness for Duty"
                                                        name="Fitness for Duty"
                                                        value="Fitness for Duty"></input>
                                                    <label for="test3">
                                                        Fitness for Duty</label>
                                                </li>


                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Selection/Hiring"
                                                        name="Selection/Hiring"
                                                        value="Bike"></input>
                                                    <label for="Selection/Hiring">
                                                        Selection/Hiring</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Disability Evaluations"
                                                        name="Disability Evaluations"
                                                        value="Bike2"></input>
                                                    <label for="Disability Evaluations">
                                                        Disability Evaluations</label>
                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Competency/Guardianship"
                                                        name="Competency/Guardianship"
                                                        value="Bike3"></input>
                                                    <label for="Competency/Guardianship">
                                                        Competency/Guardianship</label>

                                                </li>
                                                <li>
                                                    <input onChange={handleAssessments}
                                                        type="checkbox"
                                                        id="Forensic"
                                                        name="Forensic"
                                                        value="Bike3"></input>
                                                    <label for="Forensic">
                                                        Forensic</label>
                                                </li>
                                            </ul>
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>


                            <FormGroup>
                                <Label className="checkLabel">Treatment Mode:
                                </Label>
                                <input onChange={handleTreatment}
                                    type="checkbox"
                                    id="None1"
                                    name="None"
                                    value="None"></input>
                                <label for="None1">
                                None</label>
                                <input onChange={handleTreatment}
                                    type="checkbox"
                                    id="mode1"
                                    name="Individual"
                                    value="Bike"></input>
                                <label for="mode1">
                                    Individual</label>
                                <input onChange={handleTreatment}
                                    type="checkbox"
                                    id="mode2"
                                    name="Couples"
                                    value="Bike2"></input>
                                <label for="mode2">
                                    Couples</label>
                                <input onChange={handleTreatment}
                                    type="checkbox"
                                    id="mode3"
                                    name="Family"
                                    value="Bike3"></input>
                                <label for="mode3">
                                    Family</label>

                                    <input onChange={handleTreatment}
                                    type="checkbox"
                                    id="mode4"
                                    name="Group"
                                    value="Bike3"></input>
                                <label for="mode4">
                                    Group</label>

                                    <input onChange={handleTreatment}
                                    type="checkbox"
                                    id="mode5"
                                    name="Telehealth"
                                    value="Bike3"></input>
                                <label for="mode5">
                                Telehealth</label>
                            </FormGroup>
                            <FormGroup>
                                <Label className="checkLabel">Populations Served:
                                </Label>
                                <input onChange={handlePopulation}
                                    type="checkbox"
                                    id="Non2"
                                    name="None"
                                    value="Bike"></input>
                                <label for="Non2">
                                None</label>
                                <input onChange={handlePopulation}
                                    type="checkbox"
                                    id="pop1"
                                    name="Preschoolers"
                                    value="Bike"></input>
                                <label for="pop1">
                                    Preschoolers</label>
                                <input onChange={handlePopulation}
                                    type="checkbox"
                                    id="pop2"
                                    name="Children"
                                    value="Bike2"></input>
                                <label for="pop2">
                                    Children</label>
                                <input onChange={handlePopulation}
                                    type="checkbox"
                                    id="pop3"
                                    name="Adolescents"
                                    value="Bike3"></input>
                                <label for="pop3">
                                    Adolescents</label>
                                <input onChange={handlePopulation}
                                    type="checkbox"
                                    id="pop4"
                                    name="Adults"
                                    value="Bike3"></input>
                                <label for="pop4">
                                    Adults</label>
                                <input onChange={handlePopulation}
                                    type="checkbox"
                                    id="pop5"
                                    name="Seniors (over 64)"
                                    value="Bike3"></input>
                                <label for="pop5">
                                    Seniors (over 64)</label>
                            </FormGroup>
                            <FormGroup>
                                <Label className="checkLabel">Languages:
                                </Label>
                                <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="None4"
                                    name="English"
                                    value="Bike"></input>
                                <label for="None4">
                                English</label>
                                <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="lang1"
                                    name="Arabic"
                                    value="Bike"></input>
                                <label for="lang1">
                                    Arabic</label>
                                <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="lang2"
                                    name="French"
                                    value="Bike2"></input>
                                <label for="lang2">
                                    French</label>
                                <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="lang3"
                                    name="Farsi/Persian"
                                    value="Bike3"></input>
                                <label for="lang3">
                                    Farsi/Persian</label>
                                <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="lang4"
                                    name="German"
                                    value="Bike3"></input>
                                <label for="lang4">
                                    German</label>
                                <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="lang5"
                                    name="Spanish"
                                    value="Bike3"></input>
                                <label for="lang5">
                                    Spanish</label>
                                <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="lang6"
                                    name="Am Sign Language"
                                    value="Bike3"></input>
                                <label for="lang6">
                                    Am Sign Language</label>
                                <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="lang7"
                                    name="Polish"
                                    value="Bike"></input>
                                <label for="lang7">
                                    Polish</label>
                            </FormGroup>
                            <div className="uploadForm">
                                <h3>Upload Photo</h3>
                               <div className="hideButtonWrapper">
                                <p className="hideButtonText">Browse...</p>
                               <input type="file" id="files" name="image" onChange={handleImageUpload} value={data.fileInput} className="form-input hideButton">
                                </input>
                               </div>
                            </div>
                            <img  className="previewImage" alt="Preview how your image will look on the website"src={data.ps_url}/>
                         
                            <div className="order-button-wrapper">
                                <input value="Submit Application" type="submit" name="submit" className="landingButton ni"
                                    data={data}/>
                            
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Apply;
