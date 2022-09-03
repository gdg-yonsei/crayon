import Anchor from '@components/common/Anchor';
import { Post } from '@interfaces/post';
import { ComponentType } from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends Post {}

const PostItem: ComponentType<Props> = ({ id, title, date, tags }) => {
  return (
    <Anchor href={`/post/${id}`} block>
      <Wrapper>
        <Title>{title}</Title>
        <Meta>{date}</Meta>
        <TagContainer>
          {tags.map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
        </TagContainer>
      </Wrapper>
    </Anchor>
  );
};

export default PostItem;

const Wrapper = styled.div`
  padding: 20px;

  --shadow-color: #eeeeee;
  background-color: white;
  box-shadow: 0 0 20px var(--shadow-color);

  transition: box-shadow ease 0.3s;

  :hover {
    --shadow-color: lightgray;
  }
`;

const Title = styled.p`
  font-size: 20px;
  color: black;
`;

const Meta = styled.p`
  margin-top: 4px;

  font-size: 12px;
  color: gray;
`;

const TagContainer = styled.div`
  margin-top: 16px;

  > :not(:first-child) {
    margin-left: 4px;
  }
`;

const Tag = styled.span`
  font-size: 16px;
  color: gray;
`;
