import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Icon />
      <Title>블로그 이름</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px 0;

  > :not(:first-child) {
    margin-left: 20px;
  }
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;

  background-color: gray;
  border-radius: 50%;
`;

const Title = styled.p`
  font-size: 24px;
  color: gray;
`;
