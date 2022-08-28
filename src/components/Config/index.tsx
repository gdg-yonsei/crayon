import styled from 'styled-components';

const Config = () => {
  return <Wrapper></Wrapper>;
};

export default Config;

const Wrapper = styled.aside`
  width: 150px;

  > :not(:first-child) {
    margin-top: 8px;
  }
`;
