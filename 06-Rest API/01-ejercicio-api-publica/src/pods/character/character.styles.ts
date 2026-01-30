import { css } from '@emotion/css';

export const root = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const header = css`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const imageContainer = css`
  flex: 0 0 300px;
  
  img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const info = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const name = css`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

export const detailRow = css`
  display: flex;
  gap: 0.5rem;
  
  strong {
    min-width: 120px;
  }
`;

export const status = css`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
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

export const sentencesSection = css`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

export const addSentenceContainer = css`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
  
  button {
    margin-top: 8px;
  }
`;

export const sentencesList = css`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  
  li {
    padding: 0.75rem;
    margin: 0.5rem 0;
    background-color: white;
    border-left: 3px solid #007bff;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const deleteButton = css`
  color: #dc3545;
  margin-left: 1rem;
  
  &:hover {
    background-color: rgba(220, 53, 69, 0.1);
  }
`;

export const backButton = css`
  margin-bottom: 1rem;
`;
