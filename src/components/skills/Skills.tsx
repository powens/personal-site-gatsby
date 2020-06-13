import React from 'react';
import SkillCategory from './SkillCategory';

const skills = [
  {
    name: 'Languages',
    skills: ['Javascript', 'Typescript', 'Python', 'Ruby', 'C++', 'C'],
  },
  {
    name: 'Libraries',
    skills: ['React', 'Ember', 'Django'],
  },
];

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      {skills.map((d) => (
        <SkillCategory key={d.name} {...d} />
      ))}
    </section>
  );
}
