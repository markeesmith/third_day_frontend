import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import HamburgerMenuStyle from './styles/HamburgerMenuStyle';

const OffScreenMenu = styled.ul`
    position: fixed;
    top: 0;
    right: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    height: 100vh;
    width: 0vw;
    
    overflow: hidden;
    opacity: 0;
    background-color: #501414;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    div:first-of-type {
        height: 85vh;
        width: 85vw;
    }

    a {
        display: block;
        text-decoration: none;
        color: white;
        font-size: 3rem;
        text-align: center;
    }

    p {
        color: white;
        font-size: 2rem;
        text-align: center;
        margin: 0;
        font-weight: bold;
    }

    p:nth-of-type(2) {
        font-weight: normal;
    }

    img {
        max-height: 5rem;
    }
`;

class HamburgerMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: false
        }

        this.handleCheckChange = this.handleCheckChange.bind(this);
    }

    handleCheckChange(event) {
        this.setState({
            isChecked: event.target.checked
        });
    }

    render() {
        return(
            <div> 
                <HamburgerMenuStyle>
                    <input 
                        type='checkbox' 
                        checked={this.state.isChecked} 
                        onChange={this.handleCheckChange}
                    />
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <OffScreenMenu>
                        <div>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                            <Link href="/gallery">
                                <a>Gallery</a>
                            </Link>
                            <Link href="/testimonial">
                                <a>Testimonials</a>
                            </Link>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                            <br />
                            <hr />
                            <br />
                            <p>Have a project in mind?</p>
                            <p>We can't wait to hear about it!</p>
                            <p>weaver.thirdday@gmail.com</p>
                            <p>(304) 283-3863</p>
                            <p><img src='static/logos/MainLogoWhite.svg' /></p>
                        </div>
                    </OffScreenMenu>
                </HamburgerMenuStyle>
            </div>
        );
    }
}

export default HamburgerMenu;