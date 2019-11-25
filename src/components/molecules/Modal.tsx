import React from "react";
import styled from "../../theme/styled";
import Header from "../../theme/Header";
import Button from "../../theme/Button";

const Modal = ({title, isVisible, children, onHide}: {title: string, isVisible: boolean, children?: any, onHide: () => void}) => {
    return (
        <Background isVisible={isVisible}>
            <Container>
                <Title>{title}</Title>
                {children}
                <Button inline={`align-self: flex-end; margin: 50px 0 0;`} onClick={onHide}>Done</Button>
            </Container>
        </Background>
    )
}

export default Modal;

const Background = styled.div<{isVisible: boolean}>`
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: blur(10px);
    ${props => props.theme.transition.default()};
    ${props => props.isVisible ? 
        `
            opacity: 1;
            visibility: visible;
        ` : 
        `
            opacity: 0;
            visibility: hidden;
        `
    }
`;

const Container = styled.div`
    background-color: ${props => props.theme.colors.primaryShadow};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 800px;
    width: 90%;
    padding: 30px;
    z-index: 11;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 2px 18px 0 rgba(0,0,0,0.2);
`;

const Title = styled(Header)`
    color: ${props => props.theme.colors.trueComplementary};
    margin: 0 0 20px 0;
`