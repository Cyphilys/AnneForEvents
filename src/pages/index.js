import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Carousel } from "antd"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout page='1'>
    <SEO title="Accueil" />
    <p style={{fontStyle: "italic", textAlign: "center"}}>"Ce qui touche le cœur se grave dans la mémoire."<br/>
    - Voltaire</p>
    <Carousel autoplay effect="fade">
      <div>
        <img src="https://www.mariage.com/prestataire-mariage/wp-content/uploads/sites/2/2015/10/21-05-481.jpg" height="auto" width="100%" alt="HTML5 Doctor Logo" />
      </div>
      <div>
        <img src="http://carre-premium.com/wp-content/uploads/2016/10/evenementiel-marrakech.jpg" height="auto" width="100%"/>
      </div>
      <div>
        <img src="https://i.ytimg.com/vi/CbjGdq5V1F4/maxresdefault.jpg" height="auto" width="100%"/>
      </div>
      <div>
        <img src="http://www.oasiria.com/wp-content/uploads/2016/02/photo-evenementiel-1.jpg" height="auto" width="100%"/>
      </div>
    </Carousel>
    <div style={{ marginBottom: `1.45rem` }}>
      <p>
        AnneForEvents, c’est Anne avec ses 20 ans d’expertise en organisation d’évènements, en
        mise en place d’animations savamment choisies, au service des autres, pour l’enchantement,
        pour le plaisir, pour la fidélisation.<br/>
        Nous sommes à votre service pour l’organisation ou la fourniture d’animations, pour :<br/>
        <br/>
        Vos fêtes familiales et amicales<br/>
        Vos soirées associatives<br/>
        <br/>
        La mise en lumière des fêtes organisées par les collectivités<br/>
        <br/>
        La fidélisation de votre clientèle<br/>
        <br/>
        …<br/>
        <br/>
        AnneForEvents est à votre écoute, AnneForEvents organise votre évènement et/ou vous
        propose les animations et les décorations qui sont adaptées, sur toutes les thématiques, rien
        n’est figé, tout est en mouvement et sur-mesure car il s’agit de faire rayonner un moment,
        un événement unique.<br/>
        Vous vous apprêtez à construire votre événement, à votre image, vivant, convivial,
        interactif ? AnneForEvents met son talent à votre service parce que ce n’est pas n’importe
        quel moment, n’importe quel événement, c’est le vôtre ! Il doit être extraordinaire et rester
        merveilleusement gravé dans les mémoires.<br/>
        AnneForEvents intervient, en France, en Suisse, à Monaco … Le plus simple est de nous
        consulter.<br/>
      </p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
