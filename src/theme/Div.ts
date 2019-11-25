import styled from "./styled";
import { Inline } from ".";

const Div = styled.div<Inline>`
    ${props => props.inline};
`;

export default Div;