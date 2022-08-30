import config from 'data/config.json';
import { createContext, PropsWithChildren, useContext } from 'react';

/**
 * Context
 */
interface ConfigContext {
  name: string;
}

const ConfigContext = createContext<ConfigContext>({
  name: '',
});

/**
 * Provider
 */
export const ConfigProvider = ({ children }: PropsWithChildren) => {
  const { name } = config;

  return (
    <ConfigContext.Provider value={{ name }}>{children}</ConfigContext.Provider>
  );
};

/**
 * Hook
 */
export const useConfig = () => {
  const config = useContext(ConfigContext);

  return config;
};
