import { useConfig } from '@contexts/ConfigContext';
import { ComponentType, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Comment: ComponentType = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { commentRepo } = useConfig();

  useEffect(() => {
    if (!commentRepo || ref.current?.hasChildNodes()) return;

    const utterances = document.createElement('script');
    utterances.setAttribute('src', 'https://utteranc.es/client.js');
    utterances.setAttribute('repo', commentRepo);
    utterances.setAttribute('issue-term', 'pathname');
    utterances.setAttribute('label', 'comment');
    utterances.setAttribute('theme', 'github-light');
    utterances.setAttribute('crossorigin', 'anonymous');
    utterances.setAttribute('async', 'true');

    ref.current?.appendChild(utterances);
  }, [commentRepo]);

  return <Wrapper ref={ref} />;
};

export default Comment;

const Wrapper = styled.div`
  margin-top: 50px;
`;
