import Header from '@components/Header';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;
