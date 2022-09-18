import { BLOG_NAME, DOMAIN } from '@data/constants';
import { DefaultSeo } from 'next-seo';
import { ComponentType } from 'react';

const SEO: ComponentType = () => {
  return (
    <DefaultSeo
      title={BLOG_NAME}
      description={BLOG_NAME}
      openGraph={{
        type: 'website',
        url: DOMAIN,
        title: BLOG_NAME,
        description: BLOG_NAME,
      }}
    />
  );
};

export default SEO;
