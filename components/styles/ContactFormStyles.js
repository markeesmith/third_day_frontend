import styled from 'styled-components';

const ContactFormStyles = styled.form`
  padding-top: 25vh;

  display: grid;
  grid-template-columns: 1fr 1fr;

  input[type='text'],
  input[type='number'],
  input[type='tel'],
  #contactTextArea,
  #contactEmail,
  #contactTextArea,
  select {
    display: block;
    padding: 6px 12px;
    margin: 10px auto;
    width: 90%;
    height: 7vh;

    color: rgb(73, 80, 87);
    border: 1px solid rgb(206, 212, 218);
    border-radius: 4px;

    transition: border-color 0.15s ease-in-out, box-shadow 0.15s;
  }

  #contactTextArea {
    font-family: inherit;
    font-size: inherit;

    height: 20vh;
    resize: vertical;
    max-height: 50vh;
    min-height: 7vh;
  }

  #contactZipCode {
    display: inline-block;
    width: 45%;
  }

  select {
    display: inline-block;
    height: 7vh;
    width: 45%;

    color: rgb(73, 80, 87);
    border: 1px solid rgb(206, 212, 218);
    border-radius: 4px;
  }

  #zipState {
    text-align: center;
  }

  select {
    background-color: white;
  }

  fieldset {
    border: 0;
  }

  button {
    cursor: pointer;
    grid-column: 1/-1;
    text-align: center;
    margin: 10px auto;
    width: 15%;
    height: 7vh;
    border-radius: 4px;
    background-color: #501414;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    border: 1px solid #501414;
  }

  p {
    width: 90%;
    margin: 10px auto;
  }

  .contactCheckboxes {
    display: block;
    width: 90%;
    margin: 10px auto;
    padding-left: 10px;
  }

  input[type='text'],
  input[type='number'],
  input[type='tel'],
  #contactTextArea,
  #contactEmail,
  select {
    :focus {
      border-color: #501414;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px #501414;
      outline: 0 none;
    }
  }
`;

export default ContactFormStyles;
