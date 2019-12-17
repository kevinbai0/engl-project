import React, { useState } from "react";
import styled from "../../theme/styled";
import Header from "../../theme/Header";
import Body from "../../theme/Body";
import MacroUXGraphic from "../svg/MacroUXGraphic";
import Modal from "../molecules/Modal";
import Clickable from "../molecules/Clickable";

interface ISectionProps {
    navRef: React.RefObject<HTMLDivElement>
}

const MacroUXView: React.FC<ISectionProps> = ({navRef}) => {
    const [ modalState, setModalState ] = useState({title: "", isVisible: false} as {title: string, isVisible: boolean, body?: any});
    return (
        <>
            <Triangle ref={navRef}/>
            <Container>
                <Modal isVisible={modalState.isVisible} title={modalState.title} onHide={() => setModalState({title: "", isVisible: false})}>{modalState.body}</Modal>
                <Header>
                    <Clickable onClick={_ => setModalState({title: "Goal Oriented Design", body: <GoalOrientedBody />, isVisible: true})}>Goal Oriented Design</Clickable>
                </Header>
                <Grid>
                    <Body>Websites should be created with a user’s goal in mind, not tasks and activities that need to be completed.</Body>
                    <Graphic />
                    <Header inline="align-self: end;">How does UI come into play?</Header>
                </Grid>
                <Body inline="max-width: 1080px;">
                    A company website for the public might have cool graphics and art to attract customers. However, something like Google needs to be minimal and simple so people can easily find what they’re looking for.
                </Body>
                <Header inline="margin: 100px 0 0;">Let's look back to the todo lists</Header>
                <Body>What’s the purpose of a todo list? What is the user actually trying to accomplish? </Body>
                <Body inline="margin: 40px 0 0;">1) People use a todo list to keep track of tasks that are happening throughout the day</Body>
                <Body inline="margin: 0 0 40px;">2) They use it to be more productive, so that they can get more done in a day</Body>
                
                <Body>
                    This is what a user is trying to accomplish. After creating this, then the features can be ideated. Without this analysis, however, useless complexity might be added which would make the todo list more inaccessible to some people, and make it harder to use for the general audience.
                </Body>
            </Container>
        </>
    )
}

export default MacroUXView;


const Triangle = styled.div`
    width: 0;
    height: 0;
    border-bottom: 300px solid ${props => props.theme.colors.primaryShadow};
    border-left: 100vw solid transparent;
    margin: -300px 0 0;
`;

const Container = styled.div`
    width: 100vw;
    background-color: ${props => props.theme.colors.primaryShadow};
    padding: 0;
    padding: 20vh ${props => props.theme.space.mobileMargin} 0;
    ${props => props.theme.mediaQueries.tablet} {
        padding: 20vh ${props => props.theme.space.desktopMargin} 0;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
`

const Graphic = styled(MacroUXGraphic)`
    max-width: 100%;
    grid-row: 1/3;
    grid-column: 2/3;
    margin-bottom: 20px;
`
const GoalOrientedBody = () => <Body>The process of designing products with users' goals in mind by taking a human (user) centered approach.</Body>