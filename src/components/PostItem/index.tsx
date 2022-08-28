import styled from 'styled-components';

const PostItem = () => {
  return (
    <Wrapper>
      <Title>포스트 제목</Title>
      <Meta>2022-08-29</Meta>
      <TagContainer>
        <Tag># 태그1</Tag>
        <Tag># 태그2</Tag>
        <Tag># 태그3</Tag>
      </TagContainer>
    </Wrapper>
  );
};

export default PostItem;

const Wrapper = styled.div`
  padding: 20px;

  --box-shadow-color: #eeeeee;
  background-color: white;
  box-shadow: 0 0 20px var(--box-shadow-color);

  transition: box-shadow ease 0.3s;

  :hover {
    --box-shadow-color: lightgray;
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
