import React from 'react';
import dynamic from 'next/dynamic';
//import AboutUs from '../components/AboutUs';

const About = dynamic(() => import('../components/AboutUs'), {ssr: false});

export default About;
