import React from 'react';
import PageDelimiter from './ArticleDelimiter';

import '../styles/footer.styles.scss';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-divider"/>
      <div className="footer-address">
        <div>
          Email: example@gmail.com
        </div>
        <div>
          Phone: 444-444-4444
        </div>
        <div>
          Addr:
        </div>
      </div>
      <PageDelimiter/>
    </div>
  )
}

export default Footer;