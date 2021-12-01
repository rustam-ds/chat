import styled, { css } from 'src/theme';

export const FormStyled = styled.form`
  ${(props) => css`
    display: flex;
    position: absolute;
    height: 50px;
    padding: 10px;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props.theme.colors.white};
  `}
`;

export const InputStyled = styled.input`
  display: block;
  width: 90%;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const ButtonStyled = styled.button`
  width: 10%;
  background: transparent;
  border: none;
`;
