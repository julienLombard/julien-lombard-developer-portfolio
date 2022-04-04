import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Soft Skills</h3>
      <ul>
        <li className="hobby">
          <i className="fa-solid fa-people-group"></i>
          <span>Esprit d’équipe</span>
        </li>
        <li className="hobby">
          <i className="fas fa-wrench"></i>
          <span>Autonomie</span>
        </li>
        <li className="hobby">
          <i className="fa-solid fa-water"></i>
          <span>Agilité</span>
        </li>
        <li className="hobby">
          <i className="fas fa-apple-alt"></i>
          <span>Créativité</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
