import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 30px 10px;
  border-radius: 4px;
  flex-wrap: wrap;
`;

export const ContainerLeft = styled.div`
  flex-grow: 1;
  max-width: 50%;

  @media screen and (max-width: 576px) {
    max-width: 100%;
  }
`;

export const ContainerRight = styled.div`
  min-width: 150px;
  padding: 0 15px;
  align-self: flex-end;

  .rest-points {
    margin: 15px auto;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;

  .ability-title,
  .ability-value {
    min-width: 32px;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  width: 100%;
  cursor: pointer;
`;

export const ButtonPlus = styled(Button)`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid transparent;
`;

export const ButtonMinus = styled(ButtonPlus)``;

export const ButtonSave = styled(Button)`
  background-color: rgb(49, 124, 246);
  color: white;
  padding: 8px 4px;
  border-radius: 4px;

  &:disabled {
    opacity: 0.5;
  }
`;
