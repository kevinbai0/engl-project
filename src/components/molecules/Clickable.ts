import styled from "../../theme/styled";
import { Inline } from "../../theme";

const Clickable = styled.span<Inline>`
    color: ${props => props.theme.colors.trueComplementary};
    ${props => props.theme.transition.default("opacity")};
    &:hover {
        opacity: 0.5;
    }
    cursor: pointer;
    ${props => props.inline};
`;


export default Clickable;