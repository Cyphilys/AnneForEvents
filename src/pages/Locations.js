import React from "react"
import UnderConstruction from "../components/Under-construction"
import JoinMe from "../components/join-me"
import Charte from "../components/charte"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Location = () => (
  <Layout page='3' >
    <SEO title="Locations d'animaux" />
    <div style={{textAlign: "center", marginTop: "2rem", marginBottom: "2rem"}}>
      <Charte/>
    </div>
    <div style={{textAlign: "center", marginTop: "5rem", marginBottom: "5rem"}}>
      <UnderConstruction/>
    </div>
    <div style={{textAlign: "center", marginBottom: "3rem"}}>
      <JoinMe/>
    </div>
  </Layout>
)

export default Location
