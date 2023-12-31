import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 0.5em;
  padding-left: 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};

  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 55px;
    width: 100%;
    background: transparent;
    padding-right: 15px;

    &::placeholder {
      color: gray;
    }
  }

  > svg {
    margin: 0 10px 0 10px;
  }
`;
