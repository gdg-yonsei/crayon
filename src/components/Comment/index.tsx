import { COMMENT_REPO } from '@data/constants';
import { ComponentType, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Comment: ComponentType = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!COMMENT_REPO || ref.current?.hasChildNodes()) return;

    const utterances = document.createElement('script');
    utterances.setAttribute('src', 'https://utteranc.es/client.js');
    utterances.setAttribute('repo', COMMENT_REPO);
    utterances.setAttribute('issue-term', 'pathname');
    utterances.setAttribute('label', 'comment');
    utterances.setAttribute('theme', 'github-light');
    utterances.setAttribute('crossorigin', 'anonymous');
    utterances.setAttribute('async', 'true');

    ref.current?.appendChild(utterances);
  }, []);

  return <Wrapper ref={ref} />;
};

export default Comment;

const Wrapper = styled.div`
  margin-top: 50px;
`;
