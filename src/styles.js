import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  color: ${(props) => props.theme.mainColour};
  background-color: ${(props) => props.theme.backgroundColour};
}
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const SearchBarStyle = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const TitleHeader = styled.h1`
  text-align: center;
  color: orangered;
`;

export const LogoImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  height: 10%;
`;

export const GameImage = styled.img`
  display: block;
  margin-left: 20px;
  margin-right: 20px;
  height: 200px;
`;

export const InfoText = styled.p`
  text-align: center;
  color: ${(props) => props.theme.priceColour};
`;

export const ListText = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
