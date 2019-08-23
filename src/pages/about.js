import React from "react"
import Bio from "../components/bio"
import Contact from "../components/contact"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout page='10' >
    <SEO title="Qui sommes-nous ?" />
    <Bio/>
    <div style={{textAlign: "center"}}>
      <Contact/>
    </div>
  </Layout>
)

export default About
