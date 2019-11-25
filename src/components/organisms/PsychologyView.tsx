import React, { useState } from "react";
import styled from "../../theme/styled";
import Header from "../../theme/Header";
import Body from "../../theme/Body";
import PsychologyLandingGraphic from "../svg/PsychologyLandingGraphic";
import TodoList from "../molecules/TodoList";
import UglyTodoList from "../molecules/UglyTodoLIst";
import Modal from "../molecules/Modal";
import GulfGraphic from "../svg/GulfGraphic";
import Clickable from "../molecules/Clickable";

const PsychologyView = () => {
    const [ modalState, setModalState ] = useState({title: "", isVisible: false} as {title: string, isVisible: boolean, body?: any});
    return (
        <Container>
            <Modal title={modalState.title} children={modalState.body} isVisible={modalState.isVisible} onHide={() => setModalState({title: "", isVisible: false})}/>
            <PsychologyLanding>
                <Header>Let’s take a look at Psychology</Header>
                <LandingBody>All design affects users psychologically.</LandingBody>
                <LandingGraphic />
            </PsychologyLanding>
            <Header>Take this todo list for example.</Header>
            <Body>Try to add, edit, and delete items. </Body>
            <GoodLookingTodo />
            <Header inline={`margin: 50px 0 0`}>Compare and contrast that with this todo list</Header>
            <BadLookingTodo />
            <Body inline="margin: 80px 0;">What were your initial impressions with each todo list? Did you experience any frustration?
            Which todo list do you prefer?</Body>
            <Header>When you interacted with the todo lists, you followed 
            two gulfs.</Header>
            <GulfContainer>
                <GulfList>
                    <Header inline="font-weight: 400">
                        1. The <Clickable onClick={_ => setModalState({title: "The Gulf of Execution", body: <GulfExecutionModalbody />, isVisible: true})}>Gulf of Execution</Clickable>
                    </Header>
                    <Header inline="font-weight: 400">
                        2. The <Clickable onClick={_ => setModalState({title: "The Gulf of Evaluation", body: <GulfEvaluationModalBody />, isVisible: true})}>Gulf of Evaluation</Clickable>
                    </Header>
                </GulfList>
                <GulfGraphicCustom />
                <GulfTodo1Body>The first todo list has a problem with the gulf of execution. It was hard to figure out what actions were possible to execute (to edit, you need to double click a todo list).</GulfTodo1Body>
                <GulfTodo2Body>The second todo list doesn’t bridge the two gulfs effectively. When there are too many items the user can’t tell a new item is added. As a result, the user has trouble making connections between what they did and what happened.</GulfTodo2Body>
            </GulfContainer>

            <Header>For any application, the two gulfs need to be bridged
            together so the user can use it without being confused.</Header>

            <Header inline="margin: 20vh 0 0;">However,</Header>
            <Header inline="font-weight: 400">Both todo lists, have the exact same functionality but
            have very different user interfaces and provide
            different user experiences.</Header>
            
            <BehavioralContainer>
                <Body>Both todo lists affected you psychologically in different ways.</Body>
                <Body inline="margin: 20px 0 20px 20px">
                    Todo List 1 probably evoked negative emotions at the 
                        <Clickable onClick={() => setModalState({title: "Behavioural Level", body: <BehavioralBody />, isVisible: true})}> behavioural </Clickable> 
                        and <Clickable onClick={() => setModalState({title: "Reflective Level", body: <ReflectiveBody />, isVisible: true})}>reflective </Clickable> 
                        levels
                </Body>
                <Body inline="margin: 0 0 0 20px">Todo List 2 probably evoked negative emotions at the 
                    <Clickable onClick={() => setModalState({title: "Visceral Level", body: <VisceralBody />, isVisible: true})}> visceral</Clickable> and 
                    <Clickable onClick={() => setModalState({title: "Behavioral Level", body: <BehavioralBody />, isVisible: true})}> behavioural</Clickable> levels
                </Body> 
            </BehavioralContainer>

            <Header>
                The interplay between UI and UX triggers psychological response at all levels of human consciousness. Let’s dive into 
                <Clickable onClick={_ => setModalState({title: "Macro UX", body: <MacroUXBody />, isVisible: true})}> Macro UX</Clickable>, where design affects humans at the 
                <Clickable onClick={_ => setModalState({title: "Reflective Level", body: <ReflectiveBody />, isVisible: true})}> reflective</Clickable> level.
            </Header>
        </Container>
    )
}

export default PsychologyView;

const PsychologyLanding = styled.div`
    margin: 0 0 80px;
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    ${props => props.theme.mediaQueries.tablet} {
        grid-template-rows: auto 1fr;
        grid-column-gap: 20px;
        grid-template-columns: auto auto;
    }
`;
const LandingBody = styled(Body)`
    grid-row: 2/3;
    grid-column: 1/2;
`;
const LandingGraphic = styled(PsychologyLandingGraphic)`
    grid-row: 3/4;
    grid-column: 1/2;
    margin: 20px 0 0;
    ${props => props.theme.mediaQueries.tablet} {
        grid-row: 1/3;
        grid-column: 2/3;
        margin: 0;
    }
    max-width: 100%;
`;

const Container = styled.div`
    margin: 40vh ${props => props.theme.space.mobileMargin} 0;
    ${props => props.theme.mediaQueries.tablet} {
        margin: 40vh ${props => props.theme.space.desktopMargin} 0;
    }
`;

const GoodLookingTodo = styled(TodoList)`
    margin: 30px 0 0;
`;

const BadLookingTodo = styled(UglyTodoList)`
    margin: 30px 0 0;
`;

const GulfList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 30px;
`;
const GulfContainer = styled.div`
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    margin: 0 0 20px 0;
`;

const GulfGraphicCustom = styled(GulfGraphic)`
    margin: 20px 0 0;
    grid-row: 1/3;
    grid-column: 2/3;
    max-width: 100%;
`;

const GulfTodo1Body = styled(Body)`

`;
const GulfTodo2Body = styled(Body)`
    grid-column: 1/3;
    max-width: 80%;
`


const GulfExecutionModalbody = () => <Body>Figuring out how something operates </Body>;


const GulfEvaluationModalBody = () => <Body>Figuring out how what happened</Body>;

const BehavioralBody = () => <Body>A subconscious level that responds to learned skills and patterns. Learned patterns and behaviours through past experiences.</Body>;
const ReflectiveBody = () => <Body>Conscious cognition. The level where reasoning and decision making take place and form emotions.</Body>;
const VisceralBody = () => <Body>The most basic level of processing (the lizard brain). Produces immediate response without thought about context or history.</Body>;
const MacroUXBody = () => <Body>A holistic user experience design approach that focuses on human-centered problem solving.</Body>



const BehavioralContainer = styled.div`
    background-color: ${props => props.theme.colors.primaryDarkTint};
    padding: 20px 40px;
    max-width: 1000px;
    margin: 20px 0;

    ${props => props.theme.mediaQueries.tablet} {
        margin: 80px 0;
        grid-row: 1/2;
    }
`;