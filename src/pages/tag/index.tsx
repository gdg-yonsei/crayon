import LabelItem from '@components/LabelItem';
import Template from '@components/Template';
import { get } from '@utils/fetch';
import type { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';

interface Props {
  tags: string[];
}

const TagPage: NextPage<Props> = ({ tags }) => {
  return (
    <Template>
      <Wrapper>
        {tags.map((tag) => (
          <LabelItem key={tag} url={`/?tag=${tag}`}>
            {tag}
          </LabelItem>
        ))}
      </Wrapper>
    </Template>
  );
};

export default TagPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const tags = await get<string[]>('/tags');

    return {
      props: { tags },
    };
  } catch {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;
