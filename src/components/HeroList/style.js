import styled from 'styled-components';

export const HeroListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`;
