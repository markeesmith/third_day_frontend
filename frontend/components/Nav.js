import React, { Component } from 'react';
import Link from 'next/link';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

var yScrollVal = 0;

class Nav extends Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }
        
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
        
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
        
    handleScroll(event) {
        yScrollVal = window.scrollY;
        var bar = document.querySelector('ul');
        var logo = document.querySelector('img');
        var link = document.querySelectorAll('a');
        
        if(yScrollVal > 30) {
            bar.style.backgroundColor = 'white';
            bar.style.height = '15vh';
            bar.style.paddingTop = '0';
            bar.style.transition = 'height 1.5s';
            link.forEach(l => l.style.color = '#501414');
            logo.src = 'static/logos/MainLogoMaroon.svg'
        } else {
            bar.style.backgroundColor = 'transparent';
            bar.style.height = '20vh';
            bar.style.paddingTop = '5vh';
            bar.style.transition = 'height 1.5s';
            link.forEach(l => l.style.color = 'white');
            logo.src = 'static/logos/MainLogoWhite.svg'
        }
    };

    render() {
        return(
            <NavBarDesktop />
        );
    }
}

export default Nav;