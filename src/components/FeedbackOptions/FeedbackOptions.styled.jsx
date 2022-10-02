import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  width: 75px;
  height: 40px;
  cursor: pointer;
  border-radius: 10%;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transform: scale(1);
  transition: transform 500ms;

  &:hover {
    transform: scale(0.95);
    background-color: gray;
    color: #fff;
  }
`;
