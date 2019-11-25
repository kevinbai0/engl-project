import styled from "./styled";
import { Inline } from ".";

const Body = styled.p<Inline>`
    font-size: ${props => props.theme.fontSizes.bodyMobile}px;
    color: ${props => props.theme.colors.neutral};
    line-height: 1.5;
    margin: 0;

    ${props => props.theme.mediaQueries.tablet} {
        font-size: ${props => props.theme.fontSizes.body}px;
    }

    ${props => props.inline};
`;

export default Body;