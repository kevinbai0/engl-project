import styled from "./styled";
import { Inline } from ".";

const Title = styled.h1<Inline>`
    font-weight: 900;
    font-size: ${props => props.theme.fontSizes.titleMobile}px;

    ${props => props.theme.mediaQueries.tablet} {
        font-size: ${props => props.theme.fontSizes.title}px;
    }
    color: ${props => props.theme.colors.neutral};

    ${props => props.inline}
`

export default Title;