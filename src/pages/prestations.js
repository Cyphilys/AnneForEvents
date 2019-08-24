import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JoinMe from "../components/join-me"



const Prestations = () => (
  <Layout page='2'>
    <SEO title="Prestations artistiques" />
    <div style={{position: "relative"}}>
      <img src="https://i.ibb.co/c2NyF2R/Animation-Bulles.jpg" alt="animation-bulles"/>
      <div style={{backgroundColor: "white",width: "80%", position: "absolute", marginLeft: "10%",top: "25rem"}}>
        <div style={{border: "solid 1px #ccc", textAlign: "center", margin: "30px", padding: "20px"}}>
          <h3>Construisons, embellissons ensemble un évènement qui est unique parce que c’est le vôtre !</h3>
          <p>Pour vous assurer la qualité optimale que mérite votre évènement, AnneForEvents a
            sélectionné un très large panel de prestations, selon des critères rigoureux : Des artistes
            dans toutes les disciplines, des décorateurs, des animateurs, des coiffeurs, des maquilleurs,
            des manèges, de la pyrotechnique, de la reconstitution historique… Tout est possible !<br/><br/>
            Tous nos intervenants sont professionnels, fiables, performants, ils savent s’adapter à vos
            attentes et à vos thématiques dans la volonté commune qui est LA REUSSITE DE VOTRE
            EVENEMENT.
            Nous analysons votre demande, en étroite collaboration avec vous, selon : Vos attentes, vos
            besoins, votre espace, votre budget.<br/><br/>
            AnneForEvents a l’esprit « Eco-Responsable », ainsi nous vous proposons beaucoup
            d’animations dans cette direction, y compris dans la décoration (florale, végétale,
            recyclable…) et dans les différents ateliers. Tout peut s’inventer, tout est unique !<br/>
            Quel qu’il soit, votre événement mérite notre expertise en matière de créativité, nous
            sommes toujours en éveil pour vous proposer les dernières innovations techniques pour
            l’événementiel.<br/><br/>
            Consultez-nous, nous saurons vous conseiller les prestations les mieux adaptées et vous
            aurez le choix.</p>
        </div>
      </div>
      <div style={{width: "80%", marginLeft: "10%", opacity: "0"}}>
        <div style={{ textAlign: "center", marginTop: "30px", marginLeft: "30px", marginRight: "30px", paddingTop: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
          <h3>Construisons, embellissons ensemble un évènement qui est unique parce que c’est le vôtre !</h3>
          <p>Pour vous assurer la qualité optimale que mérite votre évènement, AnneForEvents a
            sélectionné un très large panel de prestations, selon des critères rigoureux : Des artistes
            dans toutes les disciplines, des décorateurs, des animateurs, des coiffeurs, des maquilleurs,
            des manèges, de la pyrotechnique, de la reconstitution historique… Tout est possible !<br/><br/>
            Tous nos intervenants sont professionnels, fiables, performants, ils savent s’adapter à vos
            attentes et à vos thématiques dans la volonté commune qui est LA REUSSITE DE VOTRE
            EVENEMENT.
            Nous analysons votre demande, en étroite collaboration avec vous, selon : Vos attentes, vos
            besoins, votre espace, votre budget.<br/><br/>
            AnneForEvents a l’esprit « Eco-Responsable », ainsi nous vous proposons beaucoup
            d’animations dans cette direction, y compris dans la décoration (florale, végétale,
            recyclable…) et dans les différents ateliers. Tout peut s’inventer, tout est unique !<br/>
            Quel qu’il soit, votre événement mérite notre expertise en matière de créativité, nous
            sommes toujours en éveil pour vous proposer les dernières innovations techniques pour
            l’événementiel.<br/><br/>
            Consultez-nous, nous saurons vous conseiller les prestations les mieux adaptées et vous
            aurez le choix.</p>
        </div>
      </div>
    </div>
    <div style={{textAlign: "center", marginBottom: "5rem"}}>
      <JoinMe/>
    </div>
  </Layout>
)

export default Prestations
