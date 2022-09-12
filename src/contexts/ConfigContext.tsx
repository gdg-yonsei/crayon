import config from 'data/configs/site.json';
import { createContext, PropsWithChildren, useContext } from 'react';

/**
 * Context
 */
interface ConfigContext {
  name: string;
  url: string;
  port: number;
  commentRepo?: string;
}

const ConfigContext = createContext<ConfigContext>({
  name: '',
  url: '',
  port: 0,
});

/**
 * Provider
 */
export const ConfigProvider = ({ children }: PropsWithChildren) => {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};

/**
 * Hook
 */
export const useConfig = () => {
  const config = useContext(ConfigContext);

  return config;
};
