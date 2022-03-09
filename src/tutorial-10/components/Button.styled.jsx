import styled from 'styled-components';
import Button from './Button';

export const StyledButton = styled(Button)`
  position: absolute;
  right: 8px;
  top: 7px;
  background-color: #007afe;
  padding: 11px 24px;
  border: 1px solid #3797ff;
  border-radius: 10px;
  box-shadow: 0px 10px 15px rgba(0, 122, 254, 0.4);
  font-family: 'Source Code Pro', monospace;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: var(--main-color);
  cursor: pointer;
  &:disabled {
    background-color: gray;
  }
`;
