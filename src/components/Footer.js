import React from 'react';
import logo from '../logos/GitHub-Mark-Light-32px.png';

function Footer({ text, profileUrl }) {
  return (
    <footer className='footer'>
      <p className='footer__text'>{text}</p>
      <a
        className='footer__logo'
        href={profileUrl}
        target='_blank'
        rel='noreferrer'
      >
        <img src={logo} alt='github-logo' />
      </a>
    </footer>
  );
}

export default Footer;
