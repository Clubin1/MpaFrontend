import { Container } from "react-bootstrap";
import React, { useState, useContext } from "react";

import { FormGroup, Label, Input } from "reactstrap";

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
  });

  function onChange(e) {
    // set the key = to the name property equal to the value typed
    const updateItem = (data[e.target.name] = e.target.value);
    // update the state data object
    setData({
      ...data,
      updateItem,
    });
  }

  async function submitApplication(event) {
    alert(
      data.name +
        ", thank you for your appliaction. We will get back to you shortly. Please submit your payment if required."
    );
    const response = await fetch("https://blooming-forest-09372.herokuapp.com/psychologists", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        lastName: data.lastName,
        company: data.company,
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip,
        phone: data.phone,
        otherPhone: data.otherPhone,
        fax: data.fax,
        email: data.email,
        website: data.website,
        specialties: data.specialties,
        treatmentOrientation: data.treatmentOrientation,
        insuranceAccepted: data.insuranceAccepted,
        treatmentModality: data.treatmentModality,
        assessmentEvaluations: data.assessmentEvaluations,
        populationsServed: data.populationsServed,
        languages: data.languages,
      }),
    });

    if (!response.ok) {
      setError(response.statusText);
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
            <h5>PDF Application: <a href="/images/MPA 2020 Membership Application.pdf" download className="landingButton applybtn">Download</a></h5>
            </div>
            <form onSubmit={submitApplication} class="form">
              <FormGroup>
                <Label>Full Name</Label>
                <Input
                  required="required"
                  name="name"
                  placeholder="Full Name"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Last Name</Label>
                <Input
                  required="required"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={onChange}
                />
              </FormGroup>
              <Label>Company</Label>
              <Input
                required="required"
                name="company"
                placeholder="Company"
                onChange={onChange}
              />
              <FormGroup>
                <Label>Address</Label>
                <Input
                  required="required"
                  name="address"
                  placeholder="Address"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>City</Label>
                <Input
                  required="required"
                  name="city"
                  placeholder="City"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>State</Label>
                <Input
                  required="required"
                  name="state"
                  placeholder="State"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Zipcode</Label>
                <Input
                  required="required"
                  name="zip"
                  placeholder="Zipcode"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Phone</Label>
                <Input
                  required="required"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Other Phone</Label>
                <Input
                  required="required"
                  name="otherPhone"
                  placeholder="Second Phone Number"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Fax</Label>
                <Input
                  required="required"
                  name="fax"
                  placeholder="Fax Number"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  required="required"
                  name="email"
                  placeholder="Email Address"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Website</Label>
                <Input
                  required="required"
                  name="website"
                  placeholder="Website"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Specialties</Label>
                <Input
                  required="required"
                  name="specialties"
                  placeholder="Specialties"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Treatment Orientation</Label>
                <Input
                  required="required"
                  name="treatmentOrientation"
                  placeholder="Treatment Orientation"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Insurance Accepted</Label>
                <Input
                  required="required"
                  name="insuranceAccepted"
                  placeholder="Insurance Accepted"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Treatment Mode</Label>
                <Input
                  required="required"
                  name="treatmentModality"
                  placeholder="Treatement Mode"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Assement Evaluations</Label>
                <Input
                  required="required"
                  name="assessmentEvaluations"
                  placeholder="Assement Evaluation"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Populations Served</Label>
                <Input
                  required="required"
                  name="populationsServed"
                  placeholder="Populations Served"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Languages</Label>
                <Input
                  required="required"
                  name="languages"
                  placeholder="Languages"
                  onChange={onChange}
                />
              </FormGroup>
              <div className="order-button-wrapper">
                <input
                  value="Submit Application"
                  type="submit"
                  className="landingButton ni"
                  data={data}
                />
              </div>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Apply;
