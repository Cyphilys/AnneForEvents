import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout page='10' >
    <SEO title="Qui sommes-nous ?" />
    <Bio/>
    <Link to="/">Retour à l'accueil</Link>
  </Layout>
)

export default About
