import React, { useMemo } from 'react';
import { Styled } from 'theme-ui';
import TotalProgress from '../components/40k-log/TotalProgress';
import { ProgressStep } from '../components/40k-log/types';

const allSteps = [
  '13/13 Fire warriors',
  '0/2 Fire warrior leaders',
  '0/4 Strip and repaint fire warriors',
  '8/21 Drone tops',
  '8/21 drone bottoms (special, shield and markerlight bottoms)',
  '0/7 Pathfinders',
  '0/3 Pathfinders magnetized (rail rifle + carbine)',
  '0/6 Crisis suits (suit + drill barrels magnetized weapons)',
  '0/1 Broadside (suit + magnetized weapons)',
  '0/1 Ethereal',
  '0/1 Crisis commander (finish magnets, paint, and assembled)',
  '0/1 Cadre Fireblade (assemble and paint)',
  '0/1 Riptide (assemble and paint)',
  '0/2 Turrets',
  '0/??? Extra flamers, shield gens, ion rifles',
];

function parseStep(stepStr: string): ProgressStep {
  const regexp = /^(\d+)\/([\d?]+) ([\w ,]+)(\([\w ,+]+\))?/g;
  const match = regexp.exec(stepStr);

  if (!match || match.length < 5) {
    console.error(`Unexpected match length: ${match.length}`);
    return null;
  }

  const numDone = parseInt(match[1]);
  const numTotal = parseInt(match[2]) || -1;
  const name = match[3].trim();
  const notes = match[4] ? match[4].substr(1, match[4].length - 2) : undefined;
  return {
    numDone,
    numTotal,
    name,
    notes,
  };
}

function parseSteps(steps: Array<string>) {
  return steps.map((d) => parseStep(d));
}

const updates = [
  {
    date: Date.parse('23 Jun 2020 00:00:00 GMT'),
    notes: ['Started work on Pathfinders'],
  },
  {
    date: Date.parse('22 Jun 2020 00:00:00 GMT'),
    notes: ['Finished up 4 drone bottoms'],
  },
  {
    date: Date.parse('21 Jun 2020 00:00:00 GMT'),
    notes: [
      'Worked on 4 drone bottoms. Just have to edge highlight and dry brush',
    ],
  },
  {
    date: Date.parse('20 Jun 2020 00:00:00 GMT'),
    notes: ['Painted up 4 drone tops'],
  },
];

function ProjectLog(): JSX.Element {
  const steps = useMemo(() => parseSteps(allSteps), []);

  return (
    <>
      <section>
        <Styled.h2>40k Project log</Styled.h2>
        <Styled.p>
          During the lockdown, I dug my Warhammer 40k T'au army out of storage.
          I original started to get into the hobby in 2016, but stopped due to
          burnout. This page will keep track of my progress through assembling,
          and painting this army.
        </Styled.p>
      </section>

      <TotalProgress steps={steps} />

      <section>
        <Styled.h3>Updates</Styled.h3>
        <section>
          {updates.map((d) => (
            <>
              <Styled.h4>{d.date}</Styled.h4>
              <Styled.ul>
                {d.notes.map((j) => (
                  <Styled.li key={j}>{j}</Styled.li>
                ))}
              </Styled.ul>
            </>
          ))}
        </section>
      </section>
    </>
  );
}

export default ProjectLog;
