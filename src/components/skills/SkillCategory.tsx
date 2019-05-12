import React from 'react';

export interface Props {
  name: string;
  skills: Array<string>;
}

export default function SkillCategory({ name, skills }: Props) {
  return (
    <section>
      <h3>{name}</h3>
      <ul>
        {skills.map(d => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </section>
  );
}
