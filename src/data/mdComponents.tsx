/* eslint-disable @typescript-eslint/no-explicit-any */
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { Prism as Code } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from 'styled-components';

type MarkdownComponents = NormalComponents & SpecialComponents;

const mdComponents: Partial<MarkdownComponents> = {
  h1: ({ children, ...props }: any) => {
    return (
      <Heading1 {...props} id={children.toString()}>
        {children}
      </Heading1>
    );
  },
  h2: ({ children, ...props }: any) => {
    return <Heading2 {...props}>{children}</Heading2>;
  },
  p: ({ children, ...props }: any) => {
    return <Paragraph {...props}>{children}</Paragraph>;
  },
  blockquote: ({ children, ...props }: any) => {
    return <Blockquote {...props}>{children}</Blockquote>;
  },
  em: ({ children, ...props }: any) => {
    return <Emphasize {...props}>{children}</Emphasize>;
  },
  a: ({ children, ...props }: any) => {
    return <Anchor {...props}>{children}</Anchor>;
  },
  code: ({ inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <Code style={materialDark} language={match[1]} {...props}>
        {String(children).replace(/\n$/, '')}
      </Code>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default mdComponents;

const Heading1 = styled.h1`
  position: relative;
  margin: 40px 0;

  font-size: 2rem;

  ::after {
    content: '#';
    position: absolute;
    top: 0;
    left: -20px;
    font-size: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  :hover::after {
    opacity: 1;
  }
`;

const Heading2 = styled.h2`
  margin: 30px 0;

  font-size: 1.5rem;
`;

const Paragraph = styled.p`
  margin: 20px 0;

  font-size: 1rem;
  line-height: 1.5rem;
`;

const Blockquote = styled.blockquote`
  margin: 20px 0;

  border-left: 3px solid black;

  > p {
    padding: 15px;
  }
`;

const Emphasize = styled.em`
  font-weight: 700;
  color: hsla(217, 100%, 60%);
`;

const Anchor = styled.a`
  text-decoration: none;
  color: hsla(217, 100%, 60%);
  transition: color 0.3s ease;

  &:hover {
    color: hsla(217, 100%, 30%);
  }
`;
