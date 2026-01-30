import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

export const list = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;
