import React from "react"
import Charte from "../components/charte"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Prestations = () => (
  <Layout page='2'>
    <SEO title="Prestations artistiques" />
    <div style={{textAlign: "center"}}>
      <Charte/>
    </div>
  </Layout>
)

export default Prestations
