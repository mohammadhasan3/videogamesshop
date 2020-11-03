import styled from "styled-components";

const TitleHeader = styled.h1`
  text-align: center;
  color: orangered;
`;

const LogoImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
`;

const GameImage = styled.img`
  display: block;
  margin-left: 20px;
  margin-right: 20px;
  height: 200px;
`;

const InfoText = styled.p`
  text-align: center;
`;

const ListText = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export { TitleHeader, LogoImage, GameImage, InfoText, ListText };
