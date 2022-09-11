import Template from '@components/common/Template';
import mdComponents from '@data/mdComponents';
import { get } from '@utils/fetch';
import type { GetServerSideProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface Props {
  content: string;
}

const AboutPage: NextPage<Props> = ({ content }) => {
  return (
    <Template>
      <ReactMarkdown
        components={mdComponents}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {content}
      </ReactMarkdown>
    </Template>
  );
};

export default AboutPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const content = await get<string>('/about');

    return {
      props: { content },
    };
  } catch {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
