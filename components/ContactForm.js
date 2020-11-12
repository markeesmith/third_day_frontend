import React from 'react';
import ContactFormStyles from './styles/ContactFormStyles';
import JumboText from './JumboText';

const ContactForm = () => (
  <div>
    <JumboText
      title="Contact Third Day Builders"
      body="Let's begin building your dream home"
    />
    <ContactFormStyles>
      <fieldset>
        <label htmlFor="txtFirstName">
          <input
            type="text"
            name="txtFirstName"
            placeholder="First Name"
            required
          />
        </label>
        <label htmlFor="txtLastName">
          <input
            type="text"
            name="txtLastName"
            placeholder="Last Name"
            required
          />
        </label>
        <label htmlFor="txtStreetAddress">
          <input
            type="text"
            name="txtStreetAddress"
            placeholder="Street Address"
            required
          />
        </label>
        <label htmlFor="txtCity">
          <input type="text" name="txtCity" placeholder="City" required />
        </label>
        <div id="zipState">
          <label htmlFor="ddlState">
            <select name="ddlState">
              <option value="WV" selected>
                West Virginia
              </option>
            </select>
          </label>
          <label htmlFor="txtZipCode">
            <input
              type="text"
              name="txtZipCode"
              placeholder="Zip Code"
              id="contactZipCode"
              required
            />
          </label>
        </div>
        <label htmlFor="txtEmail">
          <input
            type="email"
            name="txtEmail"
            placeholder="Email"
            id="contactEmail"
            required
          />
        </label>
        <label htmlFor="txtPhone">
          <input
            type="tel"
            name="txtPhone"
            placeholder="Phone Number"
            required
          />
        </label>
      </fieldset>
      <fieldset>
        <p>Type of Work (Select all that apply):</p>
        <div className="contactCheckboxes">
          <label htmlFor="chkCustom">
            <input type="checkbox" name="chkCustom" value="custom" />
            Build a Custom Home
          </label>
        </div>
        <div className="contactCheckboxes">
          <label htmlFor="chkRemodel">
            <input type="checkbox" name="chkRemodel" value="remodel" />
            Remodel a Home
          </label>
        </div>
        <div className="contactCheckboxes">
          <label htmlFor="chkAddition">
            <input type="checkbox" name="chkAddition" value="addition" />
            Add an Addition to a Home
          </label>
        </div>
        <label htmlFor="numBudget">
          <input
            type="number"
            name="numBudget"
            placeholder="Projected budget for project"
            required
          />
        </label>
        <label htmlFor="txtDescription">
          <textarea
            name="txtDescription"
            placeholder="Description of the project"
            id="contactTextArea"
            required
          />
        </label>
      </fieldset>
      <button type="submit" className="contactButton">
        Submit
      </button>
    </ContactFormStyles>
  </div>
);

export default ContactForm;
