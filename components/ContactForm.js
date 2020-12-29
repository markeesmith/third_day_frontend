import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { isMobile } from 'react-device-detect';
import ReCaptcha from 'react-google-recaptcha';
import ContactFormStyles from './styles/ContactFormStyles';
import JumboText from './JumboText';
import Error from './ErrorMessage';
import Success from './SuccessMessage';
import { SEND_EMAIL_MUTATION } from '../lib/gql';

const successMessage =
  'Success! Thank you for eaching out to Third Day Builders! You should receive a confirmation email shortly.';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.recaptchaRef = React.createRef();

    this.saveToState = this.saveToState.bind(this);
    this.changeBoolState = this.changeBoolState.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      streetAddress: '',
      city: '',
      state: 'WV',
      zipCode: '',
      chkCustom: false,
      chkAddition: false,
      chkRemodel: false,
      budget: '0',
      description: '',
    };
  }

  saveToState(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  changeBoolState(e) {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  }

  render() {
    const {
      firstName,
      lastName,
      phone,
      email,
      streetAddress,
      city,
      state,
      zipCode,
      chkCustom,
      chkRemodel,
      chkAddition,
      budget,
      description,
    } = this.state;
    return (
      <Mutation mutation={SEND_EMAIL_MUTATION} variables={this.state}>
        {(requestContact, { error, loading, called }) => {
          return (
            <div>
              <JumboText
                title="Contact Third Day Builders"
                body="Let's begin building your dream home"
              />
              <Error error={error} />
              {!error && !loading && called && (
                <Success successMessage={successMessage} />
              )}
              <ContactFormStyles
                method="post"
                onSubmit={async (e) => {
                  e.preventDefault();
                  this.recaptchaRef.current.execute();
                  await requestContact();
                  this.setState({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    streetAddress: '',
                    city: '',
                    state: 'WV',
                    zipCode: '',
                    chkCustom: false,
                    chkAddition: false,
                    chkRemodel: false,
                    budget: '0',
                    description: '',
                  });
                }}
                isMobile={isMobile}
              >
                <fieldset disabled={loading} aria-busy={loading}>
                  <label htmlFor="firstName">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={this.saveToState}
                      required
                    />
                  </label>
                  <label htmlFor="lastName">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={this.saveToState}
                      required
                    />
                  </label>
                  <label htmlFor="streetAddress">
                    <input
                      type="text"
                      name="streetAddress"
                      placeholder="Street Address"
                      value={streetAddress}
                      onChange={this.saveToState}
                      required
                    />
                  </label>
                  <label htmlFor="city">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={city}
                      onChange={this.saveToState}
                      required
                    />
                  </label>
                  <div id="zipState">
                    <label htmlFor="state">
                      <select name="state" onChange={this.saveToState}>
                        <option value={state}>West Virginia</option>
                      </select>
                    </label>
                    <label htmlFor="zipCode">
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="Zip Code"
                        id="contactZipCode"
                        value={zipCode}
                        onChange={this.saveToState}
                        required
                      />
                    </label>
                  </div>
                  <label htmlFor="email">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="contactEmail"
                      value={email}
                      onChange={this.saveToState}
                      required
                    />
                  </label>
                  <label htmlFor="phone">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={this.saveToState}
                      required
                    />
                  </label>
                </fieldset>
                <fieldset disabled={loading} aria-busy={loading}>
                  <p>Type of Work (Select all that apply):</p>
                  <div className="contactCheckboxes">
                    <label htmlFor="chkCustom">
                      <input
                        type="checkbox"
                        name="chkCustom"
                        value="custom"
                        checked={chkCustom}
                        onChange={this.changeBoolState}
                      />
                      Build a Custom Home
                    </label>
                  </div>
                  <div className="contactCheckboxes">
                    <label htmlFor="chkRemodel">
                      <input
                        type="checkbox"
                        name="chkRemodel"
                        value="remodel"
                        checked={chkRemodel}
                        onChange={this.changeBoolState}
                      />
                      Remodel a Home
                    </label>
                  </div>
                  <div className="contactCheckboxes">
                    <label htmlFor="chkAddition">
                      <input
                        type="checkbox"
                        name="chkAddition"
                        value="addition"
                        checked={chkAddition}
                        onChange={this.changeBoolState}
                      />
                      Add an Addition to a Home
                    </label>
                  </div>
                  <label htmlFor="budget">
                    <input
                      type="number"
                      name="budget"
                      placeholder="Projected budget for project"
                      value={budget}
                      onChange={this.saveToState}
                      required
                    />
                  </label>
                  <label htmlFor="description">
                    <textarea
                      name="description"
                      placeholder="Description of the project"
                      id="contactTextArea"
                      value={description}
                      onChange={this.saveToState}
                      required
                    />
                  </label>
                </fieldset>
                <div disabled={loading} aria-busy={loading} id="submitField">
                  <ReCaptcha
                    ref={this.recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_DEV_RECAPTCHA_SITE_KEY}
                    size="invisible"
                  />
                  <button type="submit" className="contactButton">
                    Submit
                  </button>
                </div>
              </ContactFormStyles>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default ContactForm;
