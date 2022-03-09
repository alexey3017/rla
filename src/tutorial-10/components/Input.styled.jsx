import styled from 'styled-components';
import search from '../assets/img/search.svg';
import Input from './Input';

export const StyledInput = styled(Input)`
  width: 100%;
  padding: 18px 60px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 23px center;
  background-size: 15px;
  background-color: #1f2a48;
  border: 1px solid #003670;
  border-radius: 10px;
  font-family: 'Source Code Pro', monospace;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: var(--main-color);
  &::placeholder {
    color: var(--main-color);
  }
`;
