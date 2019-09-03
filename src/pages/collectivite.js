import React from "react"
import UnderConstruction from "../components/Under-construction"
import JoinMe from "../components/join-me"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Collectivite = () => (
  <Layout page='5' >
    <SEO title="Vous êtes une collectivité" />
    <div style={{textAlign: "center", marginTop: "5rem", marginBottom: "5rem"}}>
      <UnderConstruction/>
    </div>
    <div style={{textAlign: "center", marginBottom: "3rem"}}>
      <JoinMe/>
    </div>
  </Layout>
)

export default Collectivite
