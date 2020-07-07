import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Styled } from 'theme-ui';
import Layout from '../components/Layout';
import ProjectProgress from '../components/40k-log/ProjectProgress';
import { ProgressStep } from '../components/40k-log/types';
import ImageCarousel from '../components/ImageCarousel';

const allSteps = [
  '13/13 Fire Warriors [done]',
  "0/2 Fire Warrior Shas'ui [paint]",
  '0/4 Fire Warriors [paint]',
  '8/21 Drone tops [paint]',
  '8/21 Drone bottoms (special, shield and markerlight bottoms) [paint]',
  '7/7 Pathfinders [done]',
  '3/3 Pathfinders magnetized (rail rifle) [done]',
  "0/6 Crisis suits (4x Shas'ui, 2x Shas'vre) [assembled]",
  '0/1 Broadside (rail rifle, missile pods, smart missiles) [assembled]',
  '0/1 Ethereal [assembled]',
  '0/1 Crisis commander (magnetize jets, armor, weapons; paint in subassembly) [assembled]',
  '0/1 Cadre Fireblade [start]',
  '0/1 Riptide (magnetize weapons) [start]',
  '0/1 Dahyak Grekh [start]',
  '0/2 Turrets [assembled]',
  '0/??? Decide on sept marking scheme [start]',
  '0/??? Extra magnetized weapons (3 carbines, crisis suit weapons, gun drone bottoms) [start]',
];

function parseStep(stepStr: string): ProgressStep | null {
  const regexp = /^(\d+)\/([\d?]+) ([\w ,/']+)(\([\w ,+']+\))? \[(\w+)\]/g;
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
    date: Date.parse('11 Jul 2020 00:00:00 GMT'),
    notes: ['Started remaining 6 Fire Warriors'],
  },
  {
    date: Date.parse('4 Jul 2020 00:00:00 GMT'),
    notes: [
      'Finished first 6 Pathfinders',
      'Stripped the 4 Fire Warriors',
      'Finished 3 magnetized Pathfinders with Rail Rifles',
      'Finished remaining Pathfinders',
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

function ProjectLog({ data }): JSX.Element {
  const steps = useMemo(() => parseSteps(allSteps), []);

  return (
    <Layout>
      <section style={{ marginBottom: '3rem' }}>
        <Styled.h2>Warhammer 40k Project log</Styled.h2>
        <Styled.p>
          During the lockdown, I dug my Warhammer 40k T&apos;au army out of
          storage. I original started to get into the hobby in 2016, but stopped
          due to burnout. My goal is to finish painting, and assembling this
          army. This page serves both as a log, and as a reminder of all the
          work I&apos;ve put in to the hobby. Eventually it will track all my
          40k endeavours.
        </Styled.p>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Unpainted, mostly assembled T'au army"
        />
        {/* <ImageCarousel /> */}
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

export const query = graphql`
  query {
    file(relativePath: { eq: "40k/start/start0.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
