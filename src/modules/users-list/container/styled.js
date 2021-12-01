import styled, { css } from 'src/theme';

export const ViewStyled = styled.div`
  ${(props) => css`
    width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props.theme.colors.lightGrey};
  `}
`;

export const ButtonStyled = styled.button`
  ${(props) => css`
    width: 100%;
    height: 50px;
    border: none;
    color: ${props.theme.colors.black};
    margin-bottom: 5px;
    background: ${props.isActive ? `${props.theme.colors.grey}` : 'transparent'};

    &:hover {
      background: ${props.theme.colors.grey};
    }
  `}
`;
