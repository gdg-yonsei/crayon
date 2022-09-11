import { css } from 'styled-components';

export const tabletBreakpoint = `@media (min-width: 600px)`;

export const desktopBreakpoint = `@media (min-width: 1240px)`;

export const content = css`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;

  ${tabletBreakpoint} {
    padding: 0 50px;
  }
`;
