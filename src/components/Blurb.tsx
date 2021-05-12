/** @jsx jsx */
import { Themed, jsx } from 'theme-ui';

const Blurb = (): JSX.Element => (
  <section
    sx={{
      gridArea: 'blurb',
      marginBottom: '4rem',
      marginTop: '1rem',
    }}
  >
    <Themed.p>
      I{"'"}m a senior full-stack software engineer for a security company. I am
      a UI architecture specialist, mentor, webpack config wrangler, infosec
      enthusiast, HAM radio operator - VA7ORO, and{' '}
      <Themed.a href="https://twitter.com/planetside2/status/500821423091630081">
        occasional competitive game player
      </Themed.a>
      .
    </Themed.p>
    <Themed.p>
      I am a contributor to random open source projects, a volunteer technical
      mentor for{' '}
      <Themed.a href="https://www.canadalearningcode.ca/">
        Canada Learning Code
      </Themed.a>
      , and a volunteer radio operator for{' '}
      <Themed.a href="https://vectorradio.ca/">VECTOR</Themed.a>.
    </Themed.p>
  </section>
);

export default Blurb;
