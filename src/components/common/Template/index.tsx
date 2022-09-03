import Navigation from '@components/index/Navigation';
import { useConfig } from '@contexts/ConfigContext';
import { ComponentType, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Template: ComponentType<PropsWithChildren> = ({ children }) => {
  const { name } = useConfig();

  return (
    <Wrapper>
      <Header>
        <Title>{name}</Title>
        <Navigation />
      </Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Template;

const Wrapper = styled.div`
  position: relative;
`;

const Header = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;

  > :not(:first-child) {
    margin-top: 40px;
  }
`;

const Title = styled.h1`
  font-size: 60px;

  background: linear-gradient(45deg, #0091ff, #00a555);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 200px 30px 30px;

  @media (max-width: 1240px) {
    padding-top: 250px;
  }
`;
