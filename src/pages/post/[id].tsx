import mdComponents from '@data/mdComponents';
import useVisibility from '@hooks/useVisibility';
import { PostWithContent } from '@interfaces/post';
import { gradientFlow } from '@styles/keyframes';
import { get } from '@utils/fetch';
import { parseDate } from '@utils/parser';
import type { GetServerSideProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import styled, { css } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends PostWithContent {}

const PostPage: NextPage<Props> = ({ title, date, tags, content }) => {
  const { ref, isVisible: isHeaderVisible } = useVisibility(true, 0);

  return (
    <Wrapper>
      <Header $trasparent={!isHeaderVisible}>
        <HeaderContainer ref={ref}>
          <Title>{title}</Title>
          <Date>{parseDate(date)}</Date>
          <TagContainer>
            {tags?.map((tag, index) => (
              <Tag key={index}># {tag}</Tag>
            ))}
          </TagContainer>
        </HeaderContainer>
        <MiniHeader $show={!isHeaderVisible}>{title}</MiniHeader>
      </Header>
      <Content>
        <ReactMarkdown
          components={mdComponents}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </Content>
    </Wrapper>
  );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { id } = context.params as Record<string, string>;

  try {
    const post = await get<PostWithContent>(`/posts/${id}`);

    return {
      props: post,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

const Wrapper = styled.div``;

const Header = styled.div<{ $trasparent: boolean }>`
  position: sticky;
  top: calc(calc(80px - 80vh));
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  z-index: 10;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(45deg, #0091ff, #00a555, #0091ff);
    background-size: 300% 300%;
    animation: ${gradientFlow} 10s ease infinite;

    ${({ $trasparent }) =>
      $trasparent &&
      css`
        opacity: 0;
      `}

    transition: opacity ease .3s;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  max-width: 800px;

  z-index: 1;

  > :not(:first-child) {
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  color: white;
`;

const Date = styled.p`
  font-size: 20px;
  color: white;
`;

const TagContainer = styled.div`
  color: white;

  > :not(:first-child) {
    margin-left: 10px;
  }
`;

const Tag = styled.span`
  font-size: 17px;
`;

const MiniHeader = styled.p<{ $show: boolean }>`
  width: 100%;
  height: 80px;
  margin-top: 20px;
  padding: 0 20px;

  font-size: 20px;
  color: black;
  text-align: center;
  line-height: 80px;

  ${({ $show }) =>
    $show &&
    css`
      backdrop-filter: blur(20px);
      border-bottom: 1px solid #00000010;
    `}
`;

const Content = styled.div`
  max-width: 800px;
  min-height: calc(100vh - 110px);
  margin: 0 auto;
  padding: 50px 20px;
`;
