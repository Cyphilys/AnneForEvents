import React from "react"

import { Modal, Button } from 'antd';

export default class Charte extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Charte Animalière
        </Button>
        <Modal
          title="Charte de qualité en matière d'animation animalière"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <p>Dans le cadre des projets de ses clients, AnneForEvents peut proposer l’intervention d’animaux dans ses
            prestations, ses spectacles, ses ateliers pédagogiques et Eco Responsables.</p>
          <p>AnneForEvents aime les animaux et tient à ce qu’ils soient, comme tout être vivant, comme leurs
            soigneurs, respectés et bien traités y compris lorsqu’ils interviennent en prestation.</p>
          <p>Pour ce faire et bien que AnneForEvents fasse le maximum pour répondre au mieux à la demande de ses
            clients, nous effectuons une rigoureuse sélection sur de nombreux points :<br/>
            . Auprès des soigneurs qui globalement doivent avoir le même type d’autorisation qu’un parc animalier
            ou un zoo :<br/>
            - Ils doivent être professionnels et selon l’animal ils doivent être capacitaires,<br/>
            - Ils doivent être en possession de tous les documents officiels administratifs pour leurs animaux et
            pour eux,<br/>
            - Nous devons pouvoir vérifier l’origine des animaux avec les puces, les documents propres à chaque
            animal, son pays d’origine, même si nous sélectionnons des animaux nés en France environ 2%
            peuvent être issus d’un autre pays (sauvetage par exemple),<br/>
            - Nous vérifions que le soigneur a contracté une assurance pour ses animaux en plus de celle de
            AnneForEvents,<br/>
            - Nous vérifions le moyen et la qualité de l’équipement de transport des animaux,<br/>
            - Nous vérifions que son espace de vie quotidien soit bien adapté à sa nature (respect, confort de
            l’animal…).<br/>
            . Auprès de ses clients qui peuvent être des professionnels (cinéma, clip, publicité…), des administrations,
            des commerçants et quelquefois des particuliers :<br/>
            - Nous ne retenons absolument aucune demande excentrique qui mettrait l’animal dans une position
            irrespectueuse, inconfortable, malveillante que ce soit au cours d’une prestation demandée ou sur
            des photos ou des vidéos.<br/>
            - Nous ne louons pas d’animaux (ce ne sont pas des marchandises) : Si nous vendons une prestation
            incluant un animal, c’est toujours son soigneur qui l’accompagne et qui veille à sa sécurité, à son
            bien-être … Le terme « location animaux » sur notre site est juste utilisé pour répondre au moteur
            de recherche internet et pour que nos futurs clients arrivent sur notre site et nos prestations.<br/>
            - Nous ne vendons pas d’animaux.<br/>
            - Nous ne laisserons absolument jamais un animal sur un lieu sans surveillance.<br/>
            - Nous ne proposons aucun fauve en laisse (cela ne respecterait pas sa nature, c’est un animal
            sauvage…).<br/>
            - Nous demandons contractuellement pour tous les animaux et leur bien-être : Un point d’eau à
            proximité, un espace de repos, un temps de présence raisonnable et qui respecte la législation (ce
            temps est établit avec le soigneur), un accès et un stationnement proche de l’espace de repos.<br/>
            - Nous demandons la mise en conformité de la demande par rapport au respect des lois
            internationales.<br/>
            - Nous demandons la sécurité pour les animaux, pour les soigneurs et pour les êtres humains
            proches (spectateurs, équipe de tournage …)
          </p>
          <p style={{fontWeight: "bold"}}>Avis à toute personne pensant que l’argent peut tout acheter … Cette charte vaut pour tous, même pour
            une somme importante nous ne dérogerons ni à la charte, ni à la législation, ni au respect des êtres vivants
            que sont les animaux.
          </p>
          <p>Nous avons souhaité la mise en place de cette chartre afin :</p>
          <p>- Que nos clients sachent que nous ne pouvons pas accéder à toutes leurs demandes, que chaque
            demande fait l’objet d’une étude sérieuse avec les soigneurs,<br/>
            - Que toutes les personnes et les associations protectrices qui, comme nous, aiment les animaux, soit
            rassurées sur le fait que nous sommes strictement vigilants sur l’origine des animaux, sur leurs
            conditions de vie quotidienne, sur le professionnalisme de leur soigneur, sur leur bien-être, sur les
            conditions de confort durant la prestation. Il est bien évident que nous ne cautionnons pas le fait
            que des animaux puissent être drogués ou contraints d’effectuer une prestation.<br/>
            Notre vigilance est continuelle, nous sélectionnons des soigneurs qui ont des animaux nés en
            France ou en Europe c’est-à-dire dans des pays où la condition animale est règlementée.<br/>
            - D’indiquer que nous respectons scrupuleusement la législation.</p>
          <p>Nous somme conscients que certains de nos visiteurs n’apprécient pas ce type de tournage ou de
            présentation pédagogique et nous respectons leur point de vue, nous leur demandons de respecter
            également la nôtre et celle de nos clients, il n’en demeure pas moins que notre point commun est l’amour
            que nous portons aux animaux.</p>
          <p>Nos soigneurs ont très souvent été contrôlés au cours des prestations et tout s’est toujours parfaitement
            passé car ils sont en règle, nous resterons toujours dans les limites de la législation.</p>
          <p>Cette charte est mise en place car nous ne souhaitons pas être assimilés à des personnes malveillantes
            avec les animaux.</p>
        </Modal>
      </div>
    );
  }
}
