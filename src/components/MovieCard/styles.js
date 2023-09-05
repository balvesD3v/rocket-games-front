import { styled } from "styled-components";

export const Container = styled.div`
  background: rgba(36, 44, 101, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin-bottom: 20px;

  width: 60em;
  padding: 2em;

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-decoration: none;
  }
`;

export const Title = styled.a`
  font-size: 2em;
  margin-bottom: 0.5em;
  cursor: pointer;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 2em;
`;

export const TagsField = styled.div``;