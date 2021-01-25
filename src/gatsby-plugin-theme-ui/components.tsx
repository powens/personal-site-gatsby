/** @jsx jsx */
import { HTMLAttributes, DetailedHTMLProps } from 'react';
import { jsx } from 'theme-ui';
import { preToCodeBlock } from 'mdx-utils';
import PrismCodeBlock from '@theme-ui/prism';

// import headings from '../components/headings';
interface Props {
  codeString: string;
  preProps: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
}

const CodeBlock = (preProps: Props): JSX.Element => {
  const props = preToCodeBlock(preProps);

  if (props) {
    const { codeString, ...restProps } = props;

    return (
      <div sx={{ mb: 2 }}>
        <PrismCodeBlock {...restProps}>{codeString}</PrismCodeBlock>
      </div>
    );
  } else {
    return <pre {...preProps} />;
  }
};

export default {
  pre: CodeBlock,
  // ...headings,
};
