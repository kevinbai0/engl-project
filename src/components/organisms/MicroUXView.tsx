import React, { useState } from "react";
import styled from "../../theme/styled";
import Header from "../../theme/Header";
import Body from "../../theme/Body";
import Modal from "../molecules/Modal";
import Clickable from "../molecules/Clickable";
import TodoList from "../molecules/TodoList";
import TodoList2 from "../molecules/TodoList2";
import TodoList3 from "../molecules/TodoList3";
import TodoList4 from "../molecules/TodoList4";
import Button from "../../theme/Button";

interface ISectionProps {
    navRef: React.RefObject<HTMLDivElement>
}

const MicroUXView: React.FC<ISectionProps> = ({navRef}) => {
    const [ modalState, setModalState ] = useState({title: "", isVisible: false} as {title: string, isVisible: boolean, body?: any});
    const showModal = (title: string, body: any) => setModalState({title, body, isVisible: true});
    return (
        <Container>
            <Modal isVisible={modalState.isVisible} title={modalState.title} onHide={() => setModalState({title: "", isVisible: false})}>{modalState.body}</Modal>
            <Header ref={navRef}>
                <Clickable onClick={_ => setModalState({title: "Micro UX", body: <MicroUXBody />, isVisible: true})}>Micro UX</Clickable>
            </Header>

            <Body>Micro UX makes or breaks a website as it ties in aesthetics with Macro UX. </Body>
            <Header inline="margin: 50px 0 0; font-weight: 400;">What affects Micro UX?</Header>
            <Body inline="max-width: 1080px;">
                <Clickable onClick={_ => showModal("Affordances", <AffordancesBody />)}>Affordances</Clickable>, 
                <Clickable onClick={_ => showModal("Signifiers", <SignifiersBody />)}> Signifiers</Clickable>, 
                <Clickable onClick={_ => showModal("Constraints", <ConstraintsBody />)}> Constraints</Clickable>, and
                <Clickable onClick={_ => showModal("Feedback", <FeedbackBody />)}> Feedback</Clickable> 
            </Body>

            <Header inline="margin: 80px 0 20px; font-weight: 400;">Let's revisit the first todo list.</Header>
            <TodoList />

            <Problems1>
                <Body><Clickable onClick={() => showModal("Problems in Todo List 1", <Problem1Body/>)}>What are some of these problems?</Clickable></Body>
                <Body>We can fix this by adding an edit button.</Body>
            </Problems1>

            <TodoList2 />

            <Body inline="margin-top: 20px;">Our todo list now has all the affordances we want it to have. Visually, on first glance, it seems like all the affordances are easily discoverable.</Body>
            <Body inline="margin-top: 40px;">But, there are no further <Clickable onClick={() => showModal("More on signifiers", <MoreSignifiersBody />)}>signifiers.</Clickable></Body>
            <Body inline="margin: 40px 0 20px;">Let’s solve this problem.</Body>

            <TodoList3 />

            <Body inline="margin: 50px 0 20px">Now we've got some pretty good UI and UX. Finally, adding some final touches and we've got our final Todo List</Body>

            <TodoList4 />

            <div style={{height: "20vh"}}></div>
        </Container>
    )
}

export default MicroUXView;

const Container = styled.div`
    width: 100vw;
    background-color: ${props => props.theme.colors.primaryShadow};
    padding: 0;
    padding: 10vw ${props => props.theme.space.mobileMargin} 0;
    ${props => props.theme.mediaQueries.tablet} {
        padding: 20vh ${props => props.theme.space.desktopMargin} 0;
    }
`;

const Problems1 = styled.div`
    margin: 20px 0;
`;

const MicroUXBody = () => <Body>The focus of small interactions and every small detail to create seamless user experiences.</Body>
const AffordancesBody = () => <Body>The possible actions of an object. For example, a button affords the ability to click.</Body>
const SignifiersBody = () => <Body>Signals that show the the available affordances for an object.</Body>
const ConstraintsBody = () => 
    <div>
        <Body>Actions that cannot be taken for an object.</Body>
        <Body inline="font-weight: 700; margin: 10px 0 5px;">For Example, this button</Body>
        <Button disabled>I am disabled</Button>
        <Body inline="margin: 10px 0 0;">has visual cues that show it has a constraint; it cannot be clicked.</Body>
    </div>
const FeedbackBody = () => <Body>Resposne given after an action is taken for an object.</Body>

const Problem1Body = () => <>
    <Body>Currently, the that the user perceives are:</Body>
    <Body inline="margin: 0 0 0 35px;">1. The ability to add new items</Body>
    <Body inline="margin: 0 0 0 35px;">2. The ability to view all items in the todo list</Body>
    <Body inline="margin: 24px 0;">The user has no idea that they can edit and delete items unless they accidentally click on an item.</Body>
</>


const MoreSignifiersBody = () => <div>

</div>