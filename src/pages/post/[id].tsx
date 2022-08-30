import Header from '@components/Header';
import { PostWithContent } from '@interfaces/post';
import { get } from '@utils/fetch';
import type { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends PostWithContent {}

const PostPage: NextPage<Props> = ({ content }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { id } = context.params as Record<string, string>;

  try {
    const post = await get<PostWithContent>(`/posts/${id}`);

    return {
      props: post,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

const Wrapper = styled.div``;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
`;
