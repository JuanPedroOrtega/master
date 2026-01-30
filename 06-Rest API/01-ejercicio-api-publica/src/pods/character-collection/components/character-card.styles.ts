import { css } from '@emotion/css';

export const card = css`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const image = css`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const content = css`
  padding: 1rem;
`;

export const name = css`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
`;

export const detail = css`
  margin: 0.25rem 0;
  color: #666;
`;

export const status = css`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  
  &.alive {
    background-color: #d4edda;
    color: #155724;
  }
  
  &.dead {
    background-color: #f8d7da;
    color: #721c24;
  }
  
  &.unknown {
    background-color: #e2e3e5;
    color: #383d41;
  }
`;
