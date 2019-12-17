import React, { useState } from "react";
import styled from "../../theme/styled";
import Header from "../../theme/Header";
import Body from "../../theme/Body";
import IntroGraphic from "../svg/IntroGraphic";
import Button from "../../theme/Button";
import Div from "../../theme/Div";
import useCustomRef from "../../hooks/useCustomRef";
import playScrollAnimation from "../../hooks/playScrollAnimation";
import ThreePillarsView from "../molecules/ThreePillarsView";
import Clickable from "../molecules/Clickable";
import Modal from "../molecules/Modal";

interface ISectionProps {
    navRef: React.RefObject<HTMLDivElement>
}

const ConclusionView: React.FC<ISectionProps> = ({navRef}) => {
    const [ modalState, setModalState ] = useState({title: "", isVisible: false} as {title: string, isVisible: boolean, body?: any});
    const showModal = (title: string, body: any) => setModalState({title, body, isVisible: true});
  
    const part2Ref = useCustomRef<HTMLDivElement>(null);
    const part3Ref = useCustomRef<HTMLButtonElement>(null);
    return (
        <Container ref={navRef}>
            <Modal isVisible={modalState.isVisible} title={modalState.title} onHide={() => setModalState({title: "", isVisible: false})}>{modalState.body}</Modal>
            <Header>
                Even something as simple as a todo list needs care and attention in its UI and UX design to be accessible.
            </Header>
            <Body>This website definitely does not have the best UI and UX. A lot more work would be needed to adapt this site for audiences who don’t speak English, and audiences who need more accessibility needs.</Body>
            <Body inline="margin: 40px 0 0">But, hopefully this website has given you a glimpse into just how important the interplay UI and UX design are in creating accessible and usable websites for global audiences. </Body>
            <div style={{height: "20vh"}}></div>
        </Container>
    );
}
export default ConclusionView;

const Container = styled.div`
    background-color: ${props => props.theme.colors.primaryDarkTint}
    padding: 50px ${props => props.theme.space.mobileMargin} 0;
    ${props => props.theme.mediaQueries.tablet} {
        padding: 100px ${props => props.theme.space.desktopMargin} 0;
    }
`