import Config from '@components/Config';
import Header from '@components/Header';
import Menu from '@components/Menu';
import PostItem from '@components/PostItem';
import { Post } from '@interfaces/post';
import { get } from '@utils/fetch';
import type { GetServerSideProps } from 'next';
import styled from 'styled-components';

interface Props {
  posts: Post[];
}

const IndexPage = ({ posts }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Menu />
        <List>
          {posts.map((post) => (
            <PostItem key={post.id} {...post} />
          ))}
        </List>
        <Config />
      </Content>
    </Wrapper>
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

const Wrapper = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.div`
  width: 600px;

  > :not(:first-child) {
    margin-top: 16px;
  }
`;
