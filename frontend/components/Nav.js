import React, { Component } from 'react';
import Link from 'next/link';
//import { isMobile } from 'react-device-detect';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

var isMobile = true;

class Nav extends Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = { topOfPage: true, };
    }
        
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
        
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
        
    handleScroll(event) {
        if(window.scrollY > 30) this.setState({ topOfPage: false, });
        else this.setState({ topOfPage: true, });
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