import React, { useState, useEffect } from "react"

import styled from "../theme/styled";
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingView from "../components/organisms/LandingView";
import IntroductionView from "../components/organisms/IntroductionView";
import PsychologyView from "../components/organisms/PsychologyView";
import MacroUXView from "../components/organisms/MacroUXView";
import MicroUXView from "../components/organisms/MicroUXView";
import NavBar from "../components/molecules/NavBar";
import playScrollAnimation from "../hooks/playScrollAnimation";
import useCustomRef from "../hooks/useCustomRef";

// really bad code lol, but need a quick hack
let animating = false;
let shouldScroll = false;

const IndexPage = () => {
  const navTitles = ["Intro", "Psychology", "Macro UX", "Micro UX", "Conclusion"];
  const [ firstLoad, setFirstLoad ] = useState(true);
  const [ selected, setSelected ] = useState(0);
  const [ navBackgroundVisible, setNavBackgroundVisible ] = useState(false);
  const navRefs = navTitles.map(_ => useCustomRef<HTMLDivElement>());
  useEffect(() => {
    const listener = (e: Event) => {
      if (pageYOffset > 50 && !navBackgroundVisible) setNavBackgroundVisible(true);
      if (pageYOffset <= 50 && navBackgroundVisible) setNavBackgroundVisible(false);
      if (animating) return;
      for (let i = navRefs.length - 2; i >= 1; --i) {
        if (pageYOffset > navRefs[i].pos().y - 100) {
          setSelected(i);
          return;
        }
      }
      if (pageYOffset < navRefs[1].pos().y - 200) {
        setSelected(0);
        return;
      }
    }
    window.addEventListener("scroll", listener);
    return () => removeEventListener("scroll", listener);
  }, [navBackgroundVisible]);


  const userSetSelected = (i: number) => {
    const y = navRefs[i].pos().y;
    const newY = y - 100;
    let anim = playScrollAnimation(newY);
    animating = true;
    anim.finished.then(_ => {
      animating = false;
      setSelected(i);
    })
  }
  return (
    <Layout>
      <SEO title="Home" />
      <NavBar 
        elements={navTitles}
        currentSelected={selected}
        setSelected={userSetSelected}
        backgroundVisible={navBackgroundVisible}
      />
      <Background>
        <LandingView/>
        <IntroductionView navRef={navRefs[0].ref}/>
        <PsychologyView navRef={navRefs[1].ref}/>
        <MacroUXView navRef={navRefs[2].ref}/>
        <MicroUXView navRef={navRefs[3].ref}/>
      </Background>
    </Layout>
  )
}

export default IndexPage;



const Background = styled.div`
  background-color: ${props => props.theme.colors.primary}
`;