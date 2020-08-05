import styled from 'styled-components';

const FooterStyles = styled.div`

    .upper-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .contact {
        text-align: center;
    }

    .navigation {
        text-align: center;
    }

    .navigation > a {
        display: block;
        text-align: center;
    }

    .lower-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        
        text-align: center;
    }

    .lower-wrapper > div > a {
        padding-left: 2vw;
        padding-right: 2vw;
    }

    .lower-wrapper > div > p {
        margin-block-start: 0;
    }

    hr {
        border: none;
        height: 1px;
        width: 90vw;
        color: #501414;
        background-color: #501414;
        margin: 2vh auto;
    }
`;

export default FooterStyles;