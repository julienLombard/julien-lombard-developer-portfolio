import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Soft Skills</h3>
      <ul>
        <li className="hobby">
          <i className="fa-solid fa-people-group"></i>
          <span>Travail d'equipe</span>
        </li>
        <li className="hobby">
          <i className="fas fa-wrench"></i>
          <span>Autonomie</span>
        </li>
        <li className="hobby">
          <i className="fa-solid fa-water"></i>
          <span>Adaptabilité</span>
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
