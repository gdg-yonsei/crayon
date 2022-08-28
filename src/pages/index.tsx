import Config from '@components/Config';
import Header from '@components/Header';
import Menu from '@components/Menu';
import PostItem from '@components/PostItem';
import type { NextPage } from 'next';
import styled from 'styled-components';

const IndexPage: NextPage = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Menu />
        <List>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </List>
        <Config />
      </Content>
    </Wrapper>
  );
};

export default IndexPage;

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
