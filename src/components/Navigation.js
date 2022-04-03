import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/photo.jpg" alt="profil-pic" />
          <h3>Julien Lombard</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact="true" to="/">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/competences">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/portfolio">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/contact">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://codepen.io/julienlombard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>{' '}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/julien-lombard-fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>{' '}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/julienLombard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>{' '}
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Julien Lombard - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
