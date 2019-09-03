import React from "react"
import UnderConstruction from "../components/Under-construction"
import JoinMe from "../components/join-me"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Centre = () => (
  <Layout page='9' >
    <SEO title="Vous êtes un centre commercial" />
    <div style={{textAlign: "center", marginTop: "5rem", marginBottom: "5rem"}}>
      <UnderConstruction/>
    </div>
    <div style={{textAlign: "center", marginBottom: "3rem"}}>
      <JoinMe/>
    </div>
  </Layout>
)

export default Centre
