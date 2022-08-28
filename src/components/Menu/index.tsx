import styled from 'styled-components';

const Menu = () => {
  return (
    <Wrapper>
      <Text>About</Text>
      <Text active>Posts</Text>
      <Text>Category</Text>
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.aside`
  width: 150px;

  > :not(:first-child) {
    margin-top: 16px;
  }
`;

const Text = styled.p<{ active?: boolean }>`
  font-size: 24px;
  font-weight: 600;

  opacity: ${({ active }) => (active ? 1 : 0.3)};
  transition: opacity ease 0.5s;

  :hover {
    opacity: 1;
  }
`;
