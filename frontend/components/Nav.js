import React, { Component } from 'react';
import Link from 'next/link';
//import { isMobile } from 'react-device-detect';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

var yScrollVal = 0;
var isMobile = true;

class Nav extends Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            topOfPage: true,
        };
    }
        
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
        
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
        
    handleScroll(event) {
        yScrollVal = window.scrollY;
        
        if(isMobile) {
            var hamburger = document.querySelectorAll('span');
            var bar = document.querySelector('#navbar-mobile');
            if(yScrollVal > 30) {

                this.setState({
                    topOfPage: false,
                });

                hamburger.forEach(h => h.style.backgroundColor = '#501414');
                bar.style.backgroundColor = 'white';
                bar.style.height = '15vh';
                bar.style.paddingTop = '0';
                bar.style.transition = 'height .5s';
            } else {

                this.setState({
                    topOfPage: true,
                });

                hamburger.forEach(h => h.style.backgroundColor = 'white');
                bar.style.backgroundColor = 'transparent';
                bar.style.height = '20vh';
                bar.style.paddingTop = '5vh';
                bar.style.transition = 'height .5s';
            }
        } else {
            var bar = document.querySelector('ul');
            var logo = document.querySelector('img');
            var link = document.querySelectorAll('a');
            
            if(yScrollVal > 30) {

                this.setState({
                    topOfPage: false,
                });

                bar.style.backgroundColor = 'white';
                bar.style.height = '15vh';
                bar.style.paddingTop = '0';
                bar.style.transition = 'height .5s';
                link.forEach(l => l.style.color = '#501414');
            } else {

                this.setState({
                    topOfPage: true,
                });

                bar.style.backgroundColor = 'transparent';
                bar.style.height = '20vh';
                bar.style.paddingTop = '5vh';
                bar.style.transition = 'height .5s';
                link.forEach(l => l.style.color = 'white');
            }
        }
    };

    render() {
        if(isMobile) {
            return <NavBarMobile top={this.state.topOfPage} />
        } else {
            return <NavBarDesktop top={this.state.topOfPage} />
        }
    }
}

export default Nav;