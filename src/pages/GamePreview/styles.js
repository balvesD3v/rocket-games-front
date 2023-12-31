import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "movie";

  .buttonsBackAndDelete {
    width: 100%;
  }
`;

export const Movie = styled.div`
  grid-area: movie;
  // padding: 3rem 12em 0 12em;
  a {
    color: aliceblue;
    display: flex;
    gap: 1em;
  }

  @media (max-width: 390px) {
    padding: 1em;
  }
  @media (min-width: 391px) {
    padding: 3rem 5em 0 5em;
  }
  @media (min-width: 1440px) {
    padding: 3rem 12em 0 12em;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  > h2 {
    font-size: 2rem;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;

  > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 1em;
    border: 1px solid aliceblue;
  }

  .profile {
    margin-right: 1rem;
    span:first-child {
      margin-right: 0.5em;
    }
  }

  .clock {
    margin-right: 1rem;
  }

  .time {
    display: flex;
    justify-content: space-between;
    width: 9em;
  }
`;

export const TagsField = styled.div`
  margin: 2em 0 4em 0;
`;

export const TextField = styled.div`
  font-size: 14pt;
  line-height: 18pt;
  text-align: justify;
  margin-bottom: 2em;
`;

export const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 2em;
  margin-bottom: 2em;
`;
