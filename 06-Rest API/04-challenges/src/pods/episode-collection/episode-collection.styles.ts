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
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const card = css`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s;
  background: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const name = css`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
`;

export const episode = css`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: #e3f2fd;
  color: #1976d2;
  border-radius: 4px;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const detail = css`
  margin: 0.25rem 0;
  color: #666;
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;
