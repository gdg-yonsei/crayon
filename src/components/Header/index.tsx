import { useConfig } from '@contexts/ConfigContext';
import styled from 'styled-components';

const Header = () => {
  const { name } = useConfig();

  return (
    <Wrapper>
      <Title>{name}</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px 0;
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: gray;
`;
