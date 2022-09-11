import PostItem from '@components/PostItem';
import Template from '@components/Template';
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

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { category, tag } = context.query as Record<string, string>;
  const filter = {
    ...(category && { category }),
    ...(tag && { tag }),
  };

  try {
    const posts = await get<Post[]>('/posts', filter);

    return {
      props: { posts },
    };
  } catch (error) {
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
