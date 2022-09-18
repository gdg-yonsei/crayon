import Navigation from '@components/Navigation';
import { BLOG_NAME } from '@data/constants';
import useVisibility from '@hooks/useVisibility';
import { content, desktopBreakpoint, tabletBreakpoint } from '@styles/layouts';
import { ComponentType, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

const Template: ComponentType<PropsWithChildren> = ({ children }) => {
  const { ref, isVisible: isTop } = useVisibility(true, 1);

  return (
    <Wrapper>
      <Header $blur={!isTop}>
        <Title>{BLOG_NAME}</Title>
        <Navigation />
      </Header>
      <div ref={ref} />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Template;

const Wrapper = styled.div`
  position: relative;
`;

const Header = styled.div<{ $blur: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px 20px 30px;

  z-index: 10;

  ${({ $blur }) =>
    $blur &&
    css`
      backdrop-filter: blur(20px);
      border-bottom: 1px solid #00000010;
    `}

  > :not(:first-child) {
    margin-top: 20px;
  }

  ${tabletBreakpoint} {
    align-items: flex-start;

    padding: 50px;

    > :not(:first-child) {
      margin-top: 30px;
    }
  }

  ${desktopBreakpoint} {
    pointer-events: none;

    ${({ $blur }) =>
      $blur &&
      css`
        backdrop-filter: none;
        background: linear-gradient(to bottom, #fafafa, transparent);
        border: none;
      `}
  }
`;

const Title = styled.h1`
  background: linear-gradient(45deg, #0091ff, #00a555);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 40px;
  line-height: 50px;
  font-weight: 700;

  ${tabletBreakpoint} {
    font-size: 60px;
    line-height: 80px;
  }
`;

const Content = styled.div`
  ${content}

  padding-top: 200px;
  padding-bottom: 20px;

  ${tabletBreakpoint} {
    padding-top: 240px;
    padding-bottom: 50px;
  }

  ${desktopBreakpoint} {
    padding-top: 180px;
  }
`;
