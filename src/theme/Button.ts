import styled from "./styled";

const Button = styled.button`
    background-color: ${props => props.theme.colors.complementary};
    color: ${props => props.theme.colors.neutral};
    border: none;
    padding: 18px 64px;
    font-size: 24px;
    cursor: pointer;
    border-radius: ${props => props.theme.borderRadius.default}px;
    ${props => props.theme.transition.default("background-color")}
    &:hover {
        background-color: ${props => props.theme.colors.complementaryShadow};
    }
`;

export default Button;