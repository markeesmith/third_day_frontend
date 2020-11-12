import styled from 'styled-components';

const HomeStyles = styled.div`
  width: 80%;
  margin: 0 auto;

  .TextSlideContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 40vh;

    p {
      font-size: 2.25rem;
      text-align: center;
    }

    div:first-of-type {
      width: 80%;
      margin: auto auto;
    }
  }

  .CardArea {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    background-color: #501414;
    color: white;

    h1 {
      font-size: 3.5rem;
    }

    button {
      background-color: #f6f1ea;
      color: #501414;

      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

      padding: 0.5rem 1rem;
      font-size: 2rem;
      line-height: 1.5;
      border-radius: 0.3rem;
    }

    .btn:focus,
    .btn:hover {
      text-decoration: none;
    }
    .btn.focus,
    .btn:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    button:hover {
      background-color: #501414;
      color: #f6f1ea;
      cursor: pointer;
    }

    button:focus,
    button:hover {
      box-shadow: 0 0 3px #f6f1ea;
    }
  }

  .CardSpan {
    grid-column: 1 / -1;
    text-align: center;

    margin: 3vh 0 5vh 0;
  }

  .Card {
    text-align: center;
    width: 70%;
    margin: 0 auto;

    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
    }
  }

  .PhotoAreaTextOverlay {
    position: relative !important;

    .Text-Container {
      position: absolute;
      width: 30%;
      height: 70%;
      top: 50%;
      left: 20%;
      transform: translate(-50%, -50%);
      background-color: rgba(80, 20, 20, 0.5);

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    .Text-Container > p {
      margin: 0;
      padding: 0;
      color: white;
      font-size: 6rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default HomeStyles;
