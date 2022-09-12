import { LOCAL_API } from '@data/urls';
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

    return `${LOCAL_API}/image?postId=${postId}&source=${src}`;
  };

  return (
    <Wrapper $width={width}>
      <NextImage
        {...props}
        loader={loader}
        layout="fill"
        className="responsive-image"
        alt={alt}
      />
      <Caption>{alt}</Caption>
    </Wrapper>
  );
};

export default Image;

const Wrapper = styled.span<{ $width?: string }>`
  display: block;
  width: ${({ $width }) => $width ?? '80%'};
  margin: 40px auto;

  & > span {
    position: unset !important;

    & .responsive-image {
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
