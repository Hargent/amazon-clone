import './Footer.css';

import BottomFooter from './Bottom__Footer/Bottom__Footer';
import React from 'react';
import TopFooter from  './Top__Footer/Top__Footer';

function Footer() {
  return (
    <div className="Footer">
        <TopFooter/>
        <BottomFooter/>
    </div>
  )
}

export default Footer;