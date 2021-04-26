import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    background-color: #e8f4f8;
    color: #383b3d;
  }`;

export const HeroApp = styled.div`
  width: 900px;
  max-width: 100%;
  margin: 0 auto;
  padding: 30px;
`;
