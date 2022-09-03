import Template from '@components/common/Template';
import PostItem from '@components/index/PostItem';
import { Post } from '@interfaces/post';
import { get } from '@utils/fetch';
import type { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';

interface Props {
  posts: Post[];
}

const IndexPage: NextPage<Props> = ({ posts }) => {
  return (
    <Template>
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </PostList>
    </Template>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const posts = await get<Post[]>('/posts');

    return {
      props: { posts },
    };
  } catch {
    return {
      props: { posts: [] },
    };
  }
};

const PostList = styled.div`
  > :not(:first-child) {
    margin-top: 16px;
  }
`;
