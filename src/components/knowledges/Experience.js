import React from 'react';

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expérience</h3>
      <div className="exp-1">
        <div>
          <h4>2022-2021</h4>
          <h5>- Vendeur, Leroy Merlin, Paris 12e (3 mois)</h5>
          <br />
        </div>
        <div>
          <h4>2020-2019</h4>
          <h5>- Web Designer, auto-entreprise, Paris (2 ans)</h5>
          <p>Création de sites web :</p>
          <ul>
            <li> Analyse du besoin client</li>
            <li> Définition des spécifications techniques</li>
            <li>Production, Livraison, Maintenance</li>
          </ul>
          <p>Technologies : WordPress, Css, SEO</p>
          <br />
        </div>
      </div>
      <div className="exp-2">
        <div>
          <h4>2016-2014</h4>
          <h5>- Canalisateur, Veolia Eau, Toulouse (2 ans)</h5>
          <br />
        </div>
        <div>
          <h4>2014-2013</h4>
          <h5>- Plombier Chauffagiste, Périgueux (1 an)</h5>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Experience;
