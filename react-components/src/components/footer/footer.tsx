import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container footer__container">
          <a
            className="footer-link footer-link__github"
            href="https://github.com/pshigotskaya26"
            target="_blank"
          >
            <span className="icon icon_github"></span>
          </a>
          <p className="footer-text">2023</p>
          <a
            className="footer-link footer-link__rsschool"
            href="https://rs.school/js/"
            target="_blank"
          >
            <span className="icon icon_rsschool"></span>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
