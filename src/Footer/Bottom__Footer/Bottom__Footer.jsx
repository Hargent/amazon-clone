import './Bottom__Footer.css';

import { IconFlagUS } from 'material-ui-flags';
import React from 'react';
import WebIcon from '@mui/icons-material/Web';

function Bottom__Footer() {

  let year = new Date().getFullYear();
  console.log(year)
  return (
    <div className="Bottom__Footer">
      <div className="Bottom__Footer__first__content">
        <p><span><WebIcon/></span> English</p>
        <p>$ USD - U.S Dollar</p>
        <p><span><IconFlagUS/></span>United States</p>
      </div>
      <div className="Bottom__Footer__second__content">
        <p>Already a customer ?</p>
        <p>Sign in</p>
      </div>
      <div className="Bottom__Footer__third__content">
        <p>Condition of Use</p>
        <p>Privacy Notice</p>
        <p>Interest-Based Ads</p>
      </div>
      <div className="Bottom__Footer__fourth__content">
        <p>
          <p>&copy; 1996-{year} Amazon.com Inc or its affiliates.</p>
          <span>All Rights Reserved.</span>
        </p>
        <footer>Cloned by Hargent</footer>
      </div>
    </div>
  )
}

export default Bottom__Footer
