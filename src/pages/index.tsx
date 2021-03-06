import * as React from "react";
import FullScreenTitle from "../components/FullScreenTitle";
import Layout from "../components/Layout";
import "../styles/global.scss";
import Quote from "../components/Quote";
import { PAGES, PAGES_DATA } from "../data/pages";
import WEBSITE_DATA from "../data/website";
import Carousel from "../components/Carousel";
import LinksMenu from "../components/LinksMenu";
import Row from "../components/Row";
import { COLORS } from "../data/colors";
import Section from "../types/Section";
import TableOfContents from "../components/TableOfContents";
import { PRESTATION_SECTIONS } from "./prestation";
import { Link } from "gatsby";
import MediartisProject from "../components/accueil/projets-professionnels/1-mediartis-mobilis-pro";
import CrestJazzProject from "../components/accueil/projets-professionnels/2-nounours-crest-jazz";
import CasseDuSiecleProject from "../components/accueil/projets-professionnels/3-happy-teams-casse-du-siecle";
import HygieProject from "../components/accueil/projets-professionnels/4-hygie";
import OmerProject from "../components/accueil/projets-professionnels/5-urca-omer";
import TalentsAffinityProject from "../components/accueil/projets-professionnels/6-fresh-pigments-talents-affinity";
import CdietProject from "../components/accueil/projets-professionnels/7-winnov-cdiet";
import DcbrainProject from "../components/accueil/projets-professionnels/8-dcbrain";
import RimarokProject from "../components/accueil/projets-personnels/1-rimarok";
import HighbsBokProject from "../components/accueil/projets-personnels/2-highbs-bok";
import ImrokProject from "../components/accueil/projets-personnels/3-imrok";
import getInternalLink from "../helpers/getInternalLink";
import TheExpansProject from "../components/accueil/projets-personnels/4-the-expans";
import MotifsJsProject from "../components/accueil/projets-personnels/5-motifs-js";
import PermaDataProject from "../components/accueil/projets-personnels/6-perma-data";
import PokeTeamProject from "../components/accueil/projets-personnels/7-poke-team";

const { title } = PAGES_DATA[PAGES.ACCUEIL];

export const ACCUEIL_SECTIONS: { [key: string]: Section } = {
  INTRO_SITE: {
    id: "economies-et-performance",
    title: "??conomies et performance",
  },
  INTRO_PAGE: {
    id: "full-stack-js-ecologique",
    title: "Full-stack JS ??cologique",
  },
  PROJETS_PROFESSIONNELS: {
    id: "projets-professionnels",
    title: "Projets profesionnels",
  },
  CODE_PHILOSOPHIE: {
    id: "le-code-une-philosophie",
    title: "Le code, une philosophie",
  },
  PROJETS_PERSONNELS: {
    id: "projets-personnels",
    title: "Projets personnels",
  },
  COLLABORATION: {
    id: "vers-une-collaboration-future",
    title: "Vers une collaboration future",
  },
};

const Accueil = () => {
  return (
    <Layout
      head={{
        title,
      }}
    >
      <>
        <FullScreenTitle
          title={title}
          subtitle={WEBSITE_DATA.TITLE}
          backgroundColor={COLORS.FLOWER}
          titleSize={"big"}
        />
        <Row backgroundColor={COLORS.FLOWER} className="pt-0 pb-5">
          <LinksMenu
            links={Object.entries(PAGES_DATA)
              .filter(
                ([key]) =>
                  ![
                    PAGES.ACCUEIL,
                    PAGES.MOTIFS,
                    PAGES.STYLEGUIDE,
                    PAGES.MENTIONS_LEGALES,
                  ].includes(key as PAGES)
              )
              .map(([key, { path, title }]) => ({
                link: path,
                label: title,
                color: [
                  PAGES.PRESTATION_INGENIERIE_WEB,
                  PAGES.PRESTATION_ECO_CONCEPTION,
                ].includes(key as PAGES)
                  ? COLORS.MIST
                  : COLORS.WHITE,
              }))}
          />
        </Row>
        <Row
          header={{
            level: 2,
            content: "Accueil",
          }}
        >
          <>
            <p>
              Bonjour, je m'appelle Romaric Ruga et vous ??tes sur mon site
              professionnel de d??veloppement web.
            </p>
            <p>
              Laissez-moi vous d??crire ma prestation ainsi que ma vision sur
              l'informatique.
            </p>
            <TableOfContents contents={ACCUEIL_SECTIONS} />
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.INTRO_SITE.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.INTRO_SITE.title,
          }}
          backgroundColor={COLORS.FLOWER}
        >
          <>
            <Quote displayHeading={4}>
              <>
                Internet devrait servir ?? r??soudre des probl??mes, pas en cr??er
                de nouveaux.
              </>
            </Quote>
            <p>
              Les usages de l'informatique cr??ent des{" "}
              <b>besoins exponentiels</b> en infrastructure mat??rielle et en
              puissance de calcul.
            </p>
            <p>
              M??me au sein d'un projet applicatif, l'ajout de nouvelles
              fonctionnalit??s multiplie la consommation de ressources (y compris
              humaine !) au lieu de le r??duire par abstraction.
            </p>
            <p>
              Pourtant, une partie de{" "}
              <b>cette croissance pourrait ??tre endigu??e</b>.
            </p>
            <p>
              Mon intervention en ing??nierie web permet d'
              <b>??tendre le p??rim??tre fonctionnel de vos applications</b>, tout
              en <b>limitant les "prises de poids" logicielles</b>.
            </p>
            <LinksMenu
              links={[
                {
                  label: "D??couvrir ma prestation",
                  link: PAGES_DATA[PAGES.PRESTATION].path,
                  color: COLORS.MIST,
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.INTRO_PAGE.title,
          }}
        >
          <>
            <p>
              Diplom?? d'un <b>Master MIAGE</b> en 2016, j'exerce depuis
              l'activit?? de <b>d??veloppeur web en tant qu'ind??pendant</b>.
            </p>
            <p>
              Sp??cialis?? dans la <b>full-stack JavaScript</b> (TypeScript, Node,
              React, Express, Jest mais aussi Nest, Vue, Angular ...), j'ai
              ??galement d??velopp?? ma sensibilit?? ?? l'
              <b>??co-conception logicielle</b>.
            </p>
            <p>
              Au croisement de ces deux sujets appara??t une puissante
              efficience, qui acc??l??re les applications et r??duit les d??penses .
            </p>
            <LinksMenu
              links={[
                {
                  label: "Expertise full-stack JavaScript",
                  link: PAGES_DATA[PAGES.PRESTATION_INGENIERIE_WEB].path,
                },
                {
                  label: "Bonnes pratiques d'??co-conception",
                  link: PAGES_DATA[PAGES.PRESTATION_ECO_CONCEPTION].path,
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.PROJETS_PROFESSIONNELS.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.PROJETS_PROFESSIONNELS.title,
          }}
          backgroundColor={COLORS.ABYSS}
          colClassName="text-white"
        >
          <>
            <p>
              Au long de ma carri??re, j'ai privil??gi?? la diversit?? des
              contextes, sans perdre de vue la stack JavaScript.
            </p>
            <p>Voici une s??lection de mes exp??riences les plus pertinentes :</p>
            <Carousel
              id={`${ACCUEIL_SECTIONS.PROJETS_PROFESSIONNELS.id}_carousel`}
              controlsColor={COLORS.WHITE}
              children={[
                <MediartisProject />,
                <CrestJazzProject />,
                <CasseDuSiecleProject />,
                <HygieProject />,
                <OmerProject />,
                <TalentsAffinityProject />,
                <CdietProject />,
                <DcbrainProject />,
              ]}
            />
            <LinksMenu
              links={[
                {
                  link: `${PAGES_DATA[PAGES.PRESTATION].path}#${
                    PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES.id
                  }`,
                  label: PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES.title,
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.CODE_PHILOSOPHIE.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.CODE_PHILOSOPHIE.title,
          }}
        >
          <>
            <Quote
              displayHeading={4}
              children={<p>Le code, ce n'est pas que du code.</p>}
            />
            <p>
              Pour moi, une application est <b>un ecosyst??me</b> : avec ses
              flux, ses entit??s, ses <b>noeuds ?? r??soudre</b>.
            </p>
            <p>
              De plus, <b>les motifs sont partout dans le code</b>.
            </p>
            <p>
              Une <b>bonne conception</b> devient alors juste un{" "}
              <i>langage de motifs</i> qui fonctionne.
            </p>
            <LinksMenu
              links={[
                {
                  link: PAGES_DATA[PAGES.MOTIFS].path,
                  label: "Plus sur les motifs de conceptions",
                },
              ]}
            />
            <p>
              J'aime avoir des <b>id??es</b> autour du d??veloppement web.
            </p>
            <p>
              Ainsi plus qu'un portefeuille de comp??tences, j'apporte une{" "}
              <b>vision m??ta du code</b>.
            </p>
            <LinksMenu
              links={[
                {
                  link: PAGES_DATA[PAGES.BLOG].path,
                  label: "Vers mon blog",
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.PROJETS_PERSONNELS.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.PROJETS_PERSONNELS.title,
          }}
          backgroundColor={COLORS.SUN}
        >
          <>
            <p>
              Je d??veloppe r??guli??rement des <b>outils informatiques</b> pour{" "}
              <b>r??pondre ?? mes probl??matiques</b> du monde mat??riel.
            </p>
            <p>
              D??couvrez quelques POC, exemples ??difiants de conception
              <b>sobre et pratique</b> :
            </p>
            <Carousel
              id={`${ACCUEIL_SECTIONS.PROJETS_PERSONNELS.id}_carousel`}
              children={[
                <RimarokProject />,
                <HighbsBokProject />,
                <ImrokProject />,
                <TheExpansProject />,
                <MotifsJsProject />,
                <PermaDataProject />,
                <PokeTeamProject />,
              ]}
            />
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.COLLABORATION.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.COLLABORATION.title,
          }}
        >
          <>
            <p>
              Sommes-nous faits pour{" "}
              <Link
                to={`${PAGES_DATA[PAGES.PRESTATION].path}#${
                  PRESTATION_SECTIONS.TRAVAILLER_ENSEMBLE.id
                }`}
              >
                travailler ensemble
              </Link>
              ?
            </p>
            <p>
              J'aime les <b>projets qui ont du sens</b>, ?? la technique bien
              huil??e et o?? ma <b>cr??ativit??</b> peut s'exprimer.
            </p>
            <p>
              Vous pourriez aimer mon <b>expertise</b> sur la stack JavaScript
              moderne, mon <b>esprit analytique</b> et ma <b>bonne humeur</b>.
            </p>
            <p>
              PME, start-ups, p??le applicatif ...{" "}
              <b>
                le d??veloppement de votre application JavaScript a besoin d'un
                coup de pouce
              </b>
              quelques semaines ou quelques mois ?
            </p>
            <LinksMenu
              links={[
                {
                  link: getInternalLink(
                    PAGES.PRESTATION,
                    PRESTATION_SECTIONS.CONTACT
                  ),
                  label: PRESTATION_SECTIONS.CONTACT.title,
                },
              ]}
            />
          </>
        </Row>
      </>
    </Layout>
  );
};

export default Accueil;
