import React from "react"
import { Link } from "gatsby"

import styled from "../theme/styled";
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingView from "../components/organisms/LandingView";
import IntroductionView from "../components/organisms/IntroductionView";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Background>
      <LandingView />
      <IntroductionView />
    </Background>
  </Layout>
)

export default IndexPage;



const Background = styled.div`
  background-color: ${props => props.theme.colors.primary}
`;