import React from 'react';
import Experience from '../components/knowledges/Experience';
import Hobbies from '../components/knowledges/Hobbies';
import OtherSkills from '../components/knowledges/OtherSkills';
import Navigation from '../components/Navigation';
import Education from '../components/knowledges/Education';

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <OtherSkills />
        <Hobbies />
        <Education />
        <Experience />
      </div>
    </div>
  );
};

export default Knowledges;
