import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contatez-moi</h1>
          <ul>
            <li>
              <i className="fa fa-map-marker-alt"></i>
              <span>Paris</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0601020304">
                <span
                  className="clicInput"
                  onClick={() => alert('Téléphone copié!')}
                >
                  06 58 73 92 80
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="monmail@coucou.fr">
                <span
                  className="clicInput"
                  onClick={() => alert('E-mail copié!')}
                >
                  julienlombard.fr@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://codepen.io/julienlombard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Codepen</h4>
              <i className="fab fa-codepen"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/julien-lombard-fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/julienLombard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
