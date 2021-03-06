import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const StyledCard = styled(Card)`
  flex-grow: 1;
  max-width: 180px;
  height: 100%;
  padding: 15px;
  margin: 10px;
  background-color: white;
  border-radius: 8px;
  border: ${(props) =>
    props.selected ? '2px solid #279eff' : '2px solid #d3d3d3'};

  @media screen and (max-width: 768px) {
    max-width: 300px;
  }

  @media screen and (max-width: 576px) {
    max-width: 100%;
  }

  &:hover {
    box-shadow: 0 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .card-title {
    text-align: center;
    padding: 10px;
    font-size: 18px;
    text-align: center;
    color: #383b3d;
  }
  img {
    max-width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
