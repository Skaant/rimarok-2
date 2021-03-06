import React from "react";
import FullScreenTitle from "../../components/FullScreenTitle";
import InternalLink from "../../components/InternalLink";
import Layout from "../../components/Layout";
import MotifsList from "../../components/MotifsList";
import Quote from "../../components/Quote";
import Row from "../../components/Row";
import { PAGES, PAGES_DATA } from "../../data/pages";
import WEBSITE_DATA from "../../data/website";
import Section from "../../types/Section";
import { PRESTATION_SECTIONS } from "../prestation";

const PAGE_ID = PAGES.MOTIFS;
const { title } = PAGES_DATA[PAGE_ID];

const MOTIFS_SECTIONS: { [key: string]: Section } = {
  INTRO_PAGE: {
    id: "harmonie-du-code",
    title: "Trouver l'harmonie du code",
  },
  WHAT_IS: {
    id: "qu-est-ce-qu-un-motif",
    title: "Qu'est-ce qu'un motif ?",
  },
  HOW_TO: {
    id: "comment-utiliser-un-motif",
    title: "Comment utiliser un motif ?",
  },
  LISTE: {
    id: "liste-motifs-informatiques",
    title: "Liste des motifs informatiques",
  },
  /** CTA contact */
  CONTRIBUER: {
    id: "contribuer",
    title: "Contibuer",
  },
};

function Motifs() {
  return (
    <Layout
      head={{
        title,
      }}
    >
      <>
        <FullScreenTitle title={title} subtitle="Un langage de conception" />
        <Row
          id={MOTIFS_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.INTRO_PAGE.title,
          }}
        >
          <>
            <Quote
              displayHeading={5}
              legend={{
                author: "Cristopher Alexander",
                source: "The Timeless Way of Building",
              }}
            >
              <>
                <p>
                  And when a building has this fire, then it becomes a part of
                  nature.
                </p>
                <p>
                  Like ocan waves, or blades of grass, its parts are governed by
                  the endless play of repetition and variety, created in the
                  presence of the fact that all things pass.
                </p>
                <p>This is the quality itself.</p>
              </>
            </Quote>
            <p>
              Christopher Alexander publie ?? la fin des ann??es 70 deux livres
              fondateurs d'architecture, mais qui r??sonnent ?? la perfection pour
              le d??veloppement logiciel.
            </p>
            <p>
              Dans <i>The Timeless Way of Building</i>, il tente de d??crire la
              qualit?? qui rend les syst??mes vivants et harmonieux : leur
              capacit?? ?? former un langage de motifs coh??rent.
            </p>
            <p>
              <i>A Pattern Language</i> est un recueil de probl??mes/solutions
              g??n??riques pour les villes et les b??timents, mais que le Gang des
              4 transforma pour des probl??matiques r??currentes cette fois li??es
              ?? l'informatique dans{" "}
              <i>
                Design Patterns: Elements of Reusable Object-Oriented Software
              </i>
              .
            </p>
            <p>
              Avec cette vision abstraite,{" "}
              <b>b??tir une application web fonctionnelle et efficiente</b> c'est
              :{" "}
              <b>
                solidement identifier les motifs qui la compose et les imbriquer
                de fa??on harmonieuse pour optimiser le transit des flux de
                donn??es
              </b>
              .
            </p>
          </>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.WHAT_IS.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.WHAT_IS.title,
          }}
        >
          <>
            <p>
              Dans le sens qui nous int??resse, un motif est un ensemble de
              caract??res qui se r??p??tent dans un groupe d'entit??s.
            </p>
            <p>
              Toutefois la d??finition de motif, donne : ce qui pousse ?? agir, ce
              qui justifie, intention ...
            </p>
            <p>
              Les motifs de Cristopher Alexander d??crivent eux un probl??me
              courant et la solution g??n??rique pour y rem??dier.
            </p>
            <p>
              <b>Dans l'informatique,</b> un motif est une structure de
              [fichiers/instructions/donn??es]* qui r??pond effectivement ?? des
              probl??matiques r??currentes.
            </p>
            <p>
              Certains motifs sont relatifs ?? des langages de programmation,
              d'autres ?? des frameworks, toutefois la majorit?? des motifs sont
              transverses.
            </p>
            <p>
              Attention ?? ne pas trop remonter loin dans l'abstraction car sinon
              vous pourriez tomber des nus en tentant de r??soudre l'??quation :
            </p>
            <Quote displayHeading={3}>
              <p>Le motif motif est une instance de lui-m??me.</p>
            </Quote>
          </>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.HOW_TO.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.HOW_TO.title,
          }}
        >
          <>
            <p>
              Un motif est une id??e et ne peut par cons??quent ??tre utilis??
              directement dans le code.
            </p>
            <p>
              L'<b>impl??mentation d'un motif</b> d??pend du langage, du paradigme
              et m??me des humains impliqu??s dans le projet.
            </p>
            <p>
              La solution g??n??rique propos??e pour r??pondre ?? un probl??me
              r??curent peut ??tre identifi?? ou d??velopp?? facilement en suivant la
              description de celui-ci.
            </p>
            <p>
              La plupart des motifs apparaissent tout seul et il convient
              simplement de les reconna??tre pour, ??ventuellement les corriger,
              mais surtout les connecter.
            </p>
            <p>
              La difficult?? r??side r??ellement l?? : assembler correctement toutes
              ces occurences de motifs pour former le plus fluide et ??l??gant{" "}
              <i>pattern language</i>.
            </p>
          </>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.LISTE.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.LISTE.title,
          }}
        >
          <>
            <p>
              Je pr??sente ici mon propre langage de motifs, fait de ceux que je
              connais et que je sais mettre en relation.
            </p>
            <p>
              Cette liste est <i>forc??ment</i> non-exhaustive, et je vous incite
              fortement <InternalLink section={MOTIFS_SECTIONS.CONTRIBUER} />.
            </p>
            <MotifsList />
          </>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.CONTRIBUER.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.CONTRIBUER.title,
          }}
        >
          <>
            <p>
              Pour ??tendre mon dictionnaire de motifs, vous pouvez{" "}
              <InternalLink
                page={PAGES.PRESTATION}
                section={PRESTATION_SECTIONS.CONTACT}
                altTitle="me contacter directement"
              />{" "}
              ou bien m??me pourquoi pas
              <a href={WEBSITE_DATA.GITHUB_LINK}>ouvrir une PR sur Github</a>.
            </p>
            <p>Le langage des motifs est sans fin.</p>
            <p>
              Il est aussi vaste que l'intersection de tous les contextes et
              probl??matiques m??tiers ...
            </p>
            <Quote displayHeading={5}>
              <p>C'est proprement exponentiel et inconcevable !</p>
            </Quote>
            <p>Stay tuned</p>
          </>
        </Row>
      </>
    </Layout>
  );
}

export default Motifs;
