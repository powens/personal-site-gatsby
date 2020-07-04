import React, { useMemo } from 'react';
import { Styled } from 'theme-ui';
import Layout from '../components/Layout';
import ProjectProgress from '../components/40k-log/ProjectProgress';
import { ProgressStep } from '../components/40k-log/types';

const allSteps = [
  '13/13 Fire Warriors [done]',
  '0/2 Fire Warrior leaders [assembled]',
  '0/3 Fire Warriors [assembled]',
  '8/21 Drone tops [paint]',
  '8/21 Drone bottoms (special, shield and markerlight bottoms) [paint]',
  '0/7 Pathfinders [paint]',
  '0/3 Pathfinders magnetized (rail rifle) [paint]',
  '0/6 Crisis suits [assembled]',
  '0/1 Broadside (suit + rail rifle + missile pods) [assembled]',
  '0/1 Ethereal [assembled]',
  '0/1 Crisis commander (finish magnets, subassembly) [assembled]',
  '0/1 Cadre Fireblade [start]',
  '0/1 Riptide (magnetize weapons) [start]',
  '0/1 Dahyak Grekh [start]',
  '0/2 Turrets [assembled]',
  '0/??? Extra magnetized weapons (3 carbines, crisis suit weapons, gun drone bottoms) [start]',
];

function parseStep(stepStr: string): ProgressStep | null {
  const regexp = /^(\d+)\/([\d?]+) ([\w ,/]+)(\([\w ,+]+\))? \[(\w+)\]/g;
  const match = regexp.exec(stepStr);

  if (!match) {
    console.error('Match is unexpectedly null');
    return null;
  }

  if (match.length < 5) {
    console.error(`Unexpected match length: ${match.length}`);
    return null;
  }

  const numDone = parseInt(match[1]);
  const numTotal = parseInt(match[2]) || -1;
  const name = match[3].trim();
  const notes = match[4] ? match[4].substr(1, match[4].length - 2) : undefined;
  const status = match[5];
  return {
    numDone,
    numTotal,
    name,
    notes,
    status,
  };
}

function parseSteps(steps: Array<string>): Array<ProgressStep> {
  return steps.map((d) => parseStep(d)).filter(Boolean);
}

const updates = [
  {
    date: Date.parse('8 Jul 2020 00:00:00 GMT'),
    notes: [
      'Finished first 6 pathfinders',
      'Stripped the 4 fire warriors',
      'Finished 3 magnetized pathfinders with rail rifles',
      'Finished remaining pathfinder',
    ],
  },
  {
    date: Date.parse('27 Jun 2020 00:00:00 GMT'),
    notes: ['Started work on Pathfinders', 'Finished 8 drones'],
  },
  {
    date: Date.parse('20 Jun 2020 00:00:00 GMT'),
    notes: ['Finished 13 Fire warriors'],
  },
];

function ProjectLog(): JSX.Element {
  const steps = useMemo(() => parseSteps(allSteps), []);

  return (
    <Layout>
      <section>
        <Styled.h2>40k Project log</Styled.h2>
        <Styled.p>
          During the lockdown, I dug my Warhammer 40k T'au army out of storage.
          I original started to get into the hobby in 2016, but stopped due to
          burnout. This page will keep track of my progress through assembling,
          and painting this army.
        </Styled.p>
      </section>

      <ProjectProgress steps={steps} />

      <section>
        <Styled.h3>Updates</Styled.h3>
        <section>
          {updates.map((d) => (
            <React.Fragment key={d.date}>
              <Styled.h4>{new Date(d.date).toDateString()}</Styled.h4>
              <Styled.ul>
                {d.notes.map((j) => (
                  <Styled.li key={j}>{j}</Styled.li>
                ))}
              </Styled.ul>
            </React.Fragment>
          ))}
        </section>
      </section>
    </Layout>
  );
}

export default ProjectLog;
