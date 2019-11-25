import styled from "../../theme/styled";

const Clickable = styled.span`
    color: ${props => props.theme.colors.trueComplementary};
    ${props => props.theme.transition.default("opacity")};
    &:hover {
        opacity: 0.5;
    }
    cursor: pointer;
`;


export default Clickable;