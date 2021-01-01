import React from 'react';
import dynamic from 'next/dynamic';
//import Home from '../components/Home';
// const Index = () => <Home />;

const Index = dynamic(() => import('../components/Home'), { ssr: false });

export default Index;
