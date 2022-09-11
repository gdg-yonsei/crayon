import Template from '@components/Template';
import { get } from '@utils/fetch';
import type { GetServerSideProps, NextPage } from 'next';

interface Props {
  categories: string[];
}

const CategoryPage: NextPage<Props> = ({ categories }) => {
  return <Template>{categories.join(',')}</Template>;
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const categories = await get<string[]>('/categories');

    return {
      props: { categories },
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
