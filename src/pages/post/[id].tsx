import Comment from '@components/Comment';
import { BLOG_NAME } from '@data/constants';
import mdComponents from '@data/mdComponents';
import useVisibility from '@hooks/useVisibility';
import { PostWithContent } from '@interfaces/post';
import { gradientFlow } from '@styles/keyframes';
import { content, tabletBreakpoint } from '@styles/layouts';
import { get } from '@utils/fetch';
import { parseDate } from '@utils/parser';
import type { GetServerSideProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import styled, { css } from 'styled-components';

interface Props {
  post: PostWithContent;
  readonly: boolean;
}

const PostPage: NextPage<Props> = ({
  post: { id, title, date, category, tags, content },
  readonly,
}) => {
  const { ref, isVisible: isHeaderVisible } = useVisibility(true, 0);

  return (
    <Wrapper>
      <Header $trasparent={!isHeaderVisible}>
        <HeaderContainer ref={ref}>
          <TagContainer>
            {tags?.map((tag, index) => (
              <Tag key={index}># {tag}</Tag>
            ))}
          </TagContainer>
          <Title>{title}</Title>
          {!!category && <Category>{category}</Category>}
          <Date>{parseDate(date)}</Date>
        </HeaderContainer>
        <MiniHeader $show={!isHeaderVisible}>{title}</MiniHeader>
      </Header>
      <Content>
        <ReactMarkdown
          components={mdComponents(id)}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
        {readonly || <Comment />}
      </Content>
      {readonly || (
        <Footer>
          <Home href="/">{BLOG_NAME}</Home>
        </Footer>
      )}
    </Wrapper>
  );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { id } = context.params as Record<string, string>;
  const { mode } = context.query as Record<string, string>;

  try {
    const post = await get<PostWithContent>(`/posts/${id}`);

    return {
      props: {
        post,
        readonly: mode === 'readonly',
      },
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
  flex: 1 1 0;
  display: flex;
  flex-direction: column;

  width: 100%;
  ${content}

  z-index: 1;

  > :not(:first-child) {
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  color: white;
`;

const Category = styled.p`
  font-size: 20px;
  color: white;
`;

const Date = styled.p`
  font-size: 20px;
  color: white;
`;

const TagContainer = styled.div`
  flex: 1 1 0;
  padding-top: 50px;

  > :not(:first-child) {
    margin-top: 20px;
  }
`;

const Tag = styled.span`
  display: block;
  font-size: 40px;
  color: #ffffff50;
  text-align: end;
`;

const MiniHeader = styled.p<{ $show: boolean }>`
  width: 100%;
  height: 80px;
  margin-top: 20px;
  padding: 0 20px;

  font-size: 20px;
  line-height: 80px;
  color: black;
  text-align: center;

  ${({ $show }) =>
    $show &&
    css`
      backdrop-filter: blur(20px);
      border-bottom: 1px solid #00000010;
    `}
`;

const Content = styled.div`
  ${content}

  min-height: calc(100vh - 80px - 140px);
  padding: 50px 20px !important;

  ${tabletBreakpoint} {
    padding: 50px !important;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
`;

const Home = styled.a`
  text-decoration: none;

  background: linear-gradient(45deg, #0091ff, #00a555);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 30px;
  font-weight: 700;
`;
