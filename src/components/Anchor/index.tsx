import Link from 'next/link';
import { ComponentType, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props {
  href: string;
  block?: boolean;
}

const Anchor: ComponentType<PropsWithChildren<Props>> = ({
  href,
  block,
  children,
}) => {
  return (
    <Link href={href} passHref>
      <StyledAnchor $block={block}>{children}</StyledAnchor>
    </Link>
  );
};

export default Anchor;

const StyledAnchor = styled.a<{ $block?: boolean }>`
  display: ${({ $block }) => ($block ? 'block' : 'unset')};
`;
