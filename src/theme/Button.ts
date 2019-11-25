import styled from "./styled";
import { Inline } from ".";

const Button = styled.button<Inline>`
    background-color: ${props => props.theme.colors.complementary};
    color: ${props => props.theme.colors.neutral};
    border: none;
    padding: 10px 32px;
    font-size: ${props => props.theme.fontSizes.bodyMobile}px;
    cursor: pointer;
    border-radius: ${props => props.theme.borderRadius.default}px;
    ${props => props.theme.transition.default("background-color")}
    &:hover {
        background-color: ${props => props.theme.colors.complementaryShadow};
    }

    ${props => props.theme.mediaQueries.tablet} {
        padding: 18px 64px;
        font-size: ${props => props.theme.fontSizes.body}px;
    }

    ${props => props.inline};
`;

export default Button;