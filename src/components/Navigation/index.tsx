import { aboutUrl, categoryUrl, indexUrl } from '@data/urls';
import { desktopBreakpoint, tabletBreakpoint } from '@styles/layouts';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Navigation = () => {
  const router = useRouter();

  const currentPage = router.pathname;

  return (
    <Wrapper>
      <Text href={aboutUrl} $active={currentPage === aboutUrl}>
        About
      </Text>
      <Text href={indexUrl} $active={currentPage === indexUrl}>
        Posts
      </Text>
      <Text href={categoryUrl} $active={currentPage === categoryUrl}>
        Categories
      </Text>
    </Wrapper>
  );
};

export default Navigation;

const Wrapper = styled.aside`
  > :not(:first-child) {
    margin: 0 0 0 16px;

    ${desktopBreakpoint} {
      margin: 16px 0 0 0;
    }
  }
`;

const Text = styled.a<{ $active?: boolean }>`
  display: inline;

  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  color: black;

  opacity: ${({ $active }) => ($active ? 1 : 0.3)};

  pointer-events: auto;

  transition: opacity ease 0.3s;

  :hover {
    opacity: 1;
  }

  ${tabletBreakpoint} {
    font-size: 24px;
  }

  ${desktopBreakpoint} {
    display: block;
  }
`;
