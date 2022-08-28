import Config from '@components/Config';
import Header from '@components/Header';
import Menu from '@components/Menu';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Menu />
        <List></List>
        <Config />
      </Content>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.div`
  width: 600px;
`;
