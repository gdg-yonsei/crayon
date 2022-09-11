import Anchor from '@components/Anchor';
import { ComponentType, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props {
  url: string;
}

const LabelItem: ComponentType<PropsWithChildren<Props>> = ({
  url,
  children,
}) => {
  return (
    <Anchor href={url}>
      <Wrapper>
        <Label>{children}</Label>
      </Wrapper>
    </Anchor>
  );
};

export default LabelItem;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 200px;
  padding: 20px;
  overflow: hidden;

  --shadow-color: #eeeeee;
  background-color: white;
  box-shadow: 0 0 20px var(--shadow-color);

  > p {
    transition: box-shadow ease 0.3s, transform ease 0.3s;
  }

  :hover {
    --shadow-color: lightgray;

    > p {
      transform: scale(1.1);
    }
  }
`;

const Label = styled.p`
  font-size: 20px;
  color: black;
  text-align: center;

  z-index: 1;
`;
