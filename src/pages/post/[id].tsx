import Header from '@components/Header';
import type { NextPage } from 'next';
import styled from 'styled-components';

const PostPage: NextPage = () => {
  return (
    <Wrapper>
      <Header />
      <Content>포스팅</Content>
    </Wrapper>
  );
};

export default PostPage;

const Wrapper = styled.div``;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
`;
