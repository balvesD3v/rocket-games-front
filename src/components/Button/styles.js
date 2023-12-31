import { styled, keyframes } from "styled-components";

const waveAnimation = keyframes`
  0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x:100%;
  }
`;

export const Container = styled.button`
  margin-top: 45px;
  margin-bottom: 2em;
  width: 100%;
  font-size: 20px;
  padding: 15px;
  border-radius: 10px;
  background-color: ${({ theme, isDelete }) =>
    isDelete ? theme.COLORS.RED : theme.COLORS};
  color: ${({ theme, isDelete }) =>
    isDelete ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_1};

  > svg {
    margin-left: 5px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    gap: 0.5em;
    width: 100%;
    height: 30px;
  }

  &:hover {
    background-size: 200% 200%;
    animation: ${waveAnimation} 2s infinite alternate;
    padding: 15px;
  }
`;
