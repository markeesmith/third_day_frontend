import React, { Component } from 'react';
// import { isMobile } from 'react-device-detect';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

const isMobile = false;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = { topOfPage: true };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 30) this.setState({ topOfPage: false });
    else this.setState({ topOfPage: true });
  }

  render() {
    const { topOfPage } = this.state;
    if (isMobile) {
      return <NavBarMobile top={topOfPage} />;
    }
    return <NavBarDesktop top={topOfPage} />;
  }
}

export default Nav;
