import Template from '@components/common/Template';
import { PostWithContent } from '@interfaces/post';
import { get } from '@utils/fetch';
import type { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';

interface Props {
  post: PostWithContent;
}

const AboutPage: NextPage<Props> = ({ post }) => {
  return (
    <Template>
      <PostList>{post.content}</PostList>
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

const PostList = styled.div`
  > :not(:first-child) {
    margin-top: 16px;
  }
`;
