import { API_DOMAIN } from '@data/constants';
import NextImage, { ImageLoader, ImageProps } from 'next/image';
import { ComponentType } from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends ImageProps {
  postId: string;
  width?: string;
}

const Image: ComponentType<Props> = ({ postId, width, alt, ...props }) => {
  const loader: ImageLoader = ({ src }) => {
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return src;
    }

    return `${API_DOMAIN}/image?postId=${postId}&source=${src}`;
  };

  return (
    <Wrapper $width={width}>
      <NextImage {...props} loader={loader} layout="fill" alt={alt} />
      <Caption>{alt}</Caption>
    </Wrapper>
  );
};

export default Image;

const Wrapper = styled.span<{ $width?: string }>`
  display: block;
  width: ${({ $width }) => $width ?? '80%'};
  margin: 40px auto;

  > span:first-of-type {
    position: unset !important;

    transition: transform ease 0.3s, box-shadow ease 0.3s;

    :hover {
      transform: scale(1.01);
      box-shadow: 0 0 20px lightgray;
    }

    img {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  }
`;

const Caption = styled.span`
  display: block;
  margin-top: 10px;

  font-size: 12px;
  color: gray;
  text-align: center;
`;
