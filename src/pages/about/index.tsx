import Template from '@components/Template';
import mdComponents from '@data/mdComponents';
import { PostWithContent } from '@interfaces/post';
import { get } from '@utils/fetch';
import type { GetServerSideProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface Props {
  post: PostWithContent;
}

const AboutPage: NextPage<Props> = ({ post: { id, content } }) => {
  return (
    <Template>
      <ReactMarkdown
        components={mdComponents(id)}
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
    const post = await get<PostWithContent>('/posts/_about');

    return {
      props: { post },
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
