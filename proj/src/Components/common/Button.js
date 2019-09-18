import React from 'react';
import styled, {css} from 'styled-components';

const Button = styled.button`
  background: white;
  border: 5px solid yellow;
  front-size: 20px;
  color: black;

  ${props => props.primary && css`
    background: blue;
    `}
`;

export default Button;