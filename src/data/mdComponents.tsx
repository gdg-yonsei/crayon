/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from '@components/Image';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { Prism as Code } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from 'styled-components';

type MarkdownComponents = NormalComponents & SpecialComponents;

const mdComponents = (postId: string): Partial<MarkdownComponents> => {
  return {
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
    h3: ({ children, ...props }: any) => {
      return <Heading3 {...props}>{children}</Heading3>;
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
    img: ({ alt, ...props }: any) => {
      return <Image postId={postId} alt={alt} {...props} />;
    },
    table: (props: any) => {
      return <Table {...props} />;
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
    hr: (props: any) => {
      return <Line {...props} />;
    },
  };
};

export default mdComponents;

const Heading1 = styled.h1`
  margin: 50px 0 20px;

  font-size: 2rem;
`;

const Heading2 = styled.h2`
  margin: 30px 0 10px;

  font-size: 1.5rem;
`;

const Heading3 = styled.h3`
  margin: 20px 0 10px;

  font-size: 1.2rem;
`;

const Paragraph = styled.p`
  margin: 20px 0;

  font-size: 1rem;
  line-height: 1.5rem;
`;

const Blockquote = styled.blockquote`
  margin: 30px 0;

  border-left: 5px solid black;

  transition: border-left ease 0.3s;

  > p {
    padding: 15px;
  }

  :hover {
    border-left: 10px solid #0091ff;
  }
`;

const Emphasize = styled.em`
  font-weight: 700;
  color: #0091ff;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #0091ff;
  transition: color 0.3s ease;

  &:hover {
    color: #005697;
  }
`;

const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;

  background-color: white;
  box-shadow: 0 0 10px lightgray;

  th,
  td {
    padding: 10px 15px;

    :not(:first-child) {
      border-left: 1px solid #00000020;
    }
  }

  th {
    background: #00000020;
  }

  td {
    position: relative;

    ::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      background-color: #00000010;
      opacity: 0;
      transition: opacity ease 0.3s;
    }

    :hover::after {
      opacity: 1;
    }
  }
`;

const Line = styled.hr`
  margin: 20px 0;
  border: 1px solid #00000010;
`;
