import { useConfig } from '@contexts/ConfigContext';
import { DefaultSeo } from 'next-seo';
import { ComponentType } from 'react';

const SEO: ComponentType = () => {
  const { name, url } = useConfig();

  return (
    <DefaultSeo
      title={name}
      description={name}
      openGraph={{
        type: 'website',
        url,
        title: name,
        description: name,
      }}
    />
  );
};

export default SEO;
