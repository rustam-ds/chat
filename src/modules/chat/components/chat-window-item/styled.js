import styled, { css } from 'src/theme';

export const ViewStyled = styled.div`
  ${(props) => css`
    margin-left: ${props.isRight ? 'auto' : 0};
    background: ${props.theme.colors.lightGrey};
    padding: 10px;
    border-radius: 10px;
    width: max-content;
    height: max-content;
    margin-bottom: 10px;
  `}
`;

export const TextStyled = styled.p``;
