import React from "react";
import Header from "../../theme/Header";
import styled from "../../theme/styled";
import Div from "../../theme/Div";
import Button from "../../theme/Button";
import useCustomRef from "../../hooks/useCustomRef";
import playScrollAnimation from "../../hooks/playScrollAnimation";

const ThreePillarsView = () => {
    const buttonRef = useCustomRef<HTMLButtonElement>(null);
    return (
        <Container>
            <ContainerTitle>Aesthetics need to be balanced with these three pillars</ContainerTitle>
            <NumberList i={1} name={"Psychology"}/>
            <NumberList i={2} name={"Macro UX"}/>
            <NumberList i={3} name={"Micro UX"}/>

            <GetStartedButton 
                ref={buttonRef.ref}
                onClick={_ => playScrollAnimation(buttonRef.pos().y + 200)}
            >Get Started</GetStartedButton>
        </Container>
    );
}

export default ThreePillarsView;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const ContainerTitle = styled(Header)`
    margin: 50px 0 20px;
    ${props => props.theme.mediaQueries.tablet} {
        margin: 150px 0 50px;
    }
    max-width: 500px;
`

const GetStartedButton = styled(Button)`
    align-self: flex-end;
    margin: 10px 0 0;
`

const NumberList = ({name, i}: {name: string, i: number}) => {

    const Flex = styled(Div)`
        display: flex;
        align-items: center;
        margin: 20px 0 0;
    `;
    const Number = styled(Header)`
        font-size: ${props => props.theme.fontSizes.titleMobile}px;
        width: 60px;
        height: 60px;
        ${props => props.theme.mediaQueries.tablet} {
            font-size: ${props => props.theme.fontSizes.title}px;
            width: 80px;
            height: 80px;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 7px;
        
        border-radius: 100px;
        background-color: ${props => props.theme.colors.primaryDarkTint};
    `;
    const Name = styled(Header)`
        font-weight: 400;
        margin: 0 0 0 20px;
    `
    return (
        <Flex>
            <Number>{i}</Number>
            <Name>{name}</Name>
        </Flex>
    )
}