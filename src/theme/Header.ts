import styled from "./styled";
import { Inline } from ".";

const Header = styled.h2<Inline>`
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.headerMobile}px;
    color: ${props => props.theme.colors.neutral};
    margin: 0;
    line-height: 1.5;

    ${props => props.theme.mediaQueries.tablet} {
        font-size: ${props => props.theme.fontSizes.header}px;
    }

    ${props => props.inline};
`;

export default Header;