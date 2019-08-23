import React from "react"
import { graphql} from "gatsby"
import { Carousel, Row, Col, Avatar } from "antd"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Circle from "../components/circleindex"


const IndexPage = ({ data }) => (
  <Layout page='1'>
    <SEO title="Accueil" />
    <p style={{fontStyle: "italic", textAlign: "center"}}>"Ce qui touche le cœur se grave dans la mémoire."<br/>
    - Voltaire</p>
    <Carousel autoplay effect="fade">
      <div>
        <img src="https://i.ibb.co/Vv9Ft3w/Animation-Night-Robot-Laser2.jpg" height="auto" width="100%" alt="Animation-RobotLaser" />
      </div>
      <div>
        <img src="https://i.ibb.co/5xxwWCG/Animation-Animali-re-Chevaux-caleche-champetre.jpg" alt="Animation-Animaliere-Chevaux-caleche-champetre" height="auto" width="100%"/>
      </div>
      <div>
        <img src="https://i.ibb.co/s2NdqW0/Animation-Animali-re-Fauconnerie.jpg" alt="Animation-fauconnerie" height="auto" width="100%"/>
      </div>
      <div>
        <img src="https://i.ibb.co/nDD8bY6/Animation-Man-ge-Animaux-Electrique2.jpg" alt="Animation-manege-enfant" height="auto" width="100%"/>
      </div>
    </Carousel>
    <div style={{ backgroundColor: '#f4f4f4' }}>
      <Row gutter={1}>
        <Col className="gutter-row" span={6} order>
          <div>
            <Image/>
          </div>
        </Col>
        <Col className="gutter-row" span={18}>
          <div style={{ paddingBottom: "70px" }}>
            <div style={{ textAlign:  "center", paddingLeft: "50px", paddingRight: "50px"}}>
              <p style={{ marginTop: "70px"}}>
                AnneForEvents, c’est Anne avec ses 20 ans d’expertise en organisation d’évènements, en
                mise en place d’animations savamment choisies, au service des autres, pour l’enchantement,
                pour le plaisir, pour la fidélisation.<br/>
              </p>
            </div>
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
              <p>
                Nous sommes à votre service pour l’organisation ou la fourniture d’animations, pour :<br/>
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>
                Vos fêtes familiales et amicales<br/>
                Vos soirées associatives<br/>
                La mise en lumière des fêtes organisées par les collectivités<br/>
                La fidélisation de votre clientèle<br/>
                …<br/>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    <div>
    <Row>
        <Col span={14}>
          <div style={{ paddingBottom: "70px", paddingLeft: "50px", paddingRight: "50px"}}>
            <div style={{ textAlign:  "center"}}>
              <p style={{ marginTop: "70px"}}>
                AnneForEvents est à votre écoute, AnneForEvents organise votre évènement et/ou vous
                propose les animations et les décorations qui sont adaptées, sur toutes les thématiques, rien
                n’est figé, tout est en mouvement et sur-mesure car il s’agit de faire rayonner un moment,
                un événement unique.<br/>
              </p>
            </div>
            <div style={{ textAlign: "center"}}>
              <p>
                Vous vous apprêtez à construire votre événement, à votre image, vivant, convivial,
                interactif ? AnneForEvents met son talent à votre service parce que ce n’est pas n’importe
                quel moment, n’importe quel événement, c’est le vôtre ! Il doit être extraordinaire et rester
                merveilleusement gravé dans les mémoires.
              </p>
            </div>
          </div>
        </Col>
        <Col span={10}>
          <div style={{paddingTop: "5%", paddingLeft: "50px", paddingRight: "50px"}}>
            <div style={{borderRadius: "50%", overflow: "hidden"}}>
              <Circle/>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    <div style={{ textAlign: "center" }}>
      <p>
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
