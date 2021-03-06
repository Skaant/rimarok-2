import { Link } from "gatsby";
import React from "react";
import { ACCUEIL_SECTIONS } from "..";
import RimarokProject from "../../components/accueil/projets-personnels/1-rimarok";
import HighbsBokProject from "../../components/accueil/projets-personnels/2-highbs-bok";
import ImrokProject from "../../components/accueil/projets-personnels/3-imrok";
import TheExpansProject from "../../components/accueil/projets-personnels/4-the-expans";
import MotifsJsProject from "../../components/accueil/projets-personnels/5-motifs-js";
import PermaDataProject from "../../components/accueil/projets-personnels/6-perma-data";
import PokeTeamProject from "../../components/accueil/projets-personnels/7-poke-team";
import MediartisProject from "../../components/accueil/projets-professionnels/1-mediartis-mobilis-pro";
import CrestJazzProject from "../../components/accueil/projets-professionnels/2-nounours-crest-jazz";
import CasseDuSiecleProject from "../../components/accueil/projets-professionnels/3-happy-teams-casse-du-siecle";
import HygieProject from "../../components/accueil/projets-professionnels/4-hygie";
import OmerProject from "../../components/accueil/projets-professionnels/5-urca-omer";
import TalentsAffinityProject from "../../components/accueil/projets-professionnels/6-fresh-pigments-talents-affinity";
import CdietProject from "../../components/accueil/projets-professionnels/7-winnov-cdiet";
import DcbrainProject from "../../components/accueil/projets-professionnels/8-dcbrain";
import Carousel from "../../components/Carousel";
import FullScreenTitle from "../../components/FullScreenTitle";
import InternalLink from "../../components/InternalLink";
import Layout from "../../components/Layout";
import LinksMenu from "../../components/LinksMenu";
import Row from "../../components/Row";
import { COLORS } from "../../data/colors";
import { PAGES, PAGES_DATA } from "../../data/pages";
import WEBSITE_DATA from "../../data/website";
import getInternalLink from "../../helpers/getInternalLink";
import Section from "../../types/Section";
import { PRESTATION_ECO_CONCEPTION_SECTIONS } from "./eco-conception";
import { PRESTATION_INGENIERIE_WEB_SECTIONS } from "./ingenierie-web";

const PAGE_ID = PAGES.PRESTATION;
const { title } = PAGES_DATA[PAGE_ID];

export const PRESTATION_SECTIONS: { [key: string]: Section } = {
  INTRO_PAGE: {
    id: "intervention-ponctuelle-ou-longue-duree",
    title: "Intervention ponctuelle ou longue dur??e",
  },
  PERSONNALITE: {
    id: "une-personnalite-d'abord",
    title: "Une personnalit?? d'abord",
  },
  CONTACT: {
    id: "contact",
    title: "Entrer en contact",
  },
  SAVOIR_FAIRE_ET_TECHNOLOGIES: {
    id: "savoir-faire-et-technologies",
    title: "Savoir-faire et technologies",
  },
  TARIF: {
    id: "un-tarif-unique",
    title: "Un tarif unique",
  },
  WEB_HOLISTIQUE: {
    id: "une-vision-holistique-de-l-informatique",
    title: "Une vision holistique de l'informatique",
  },
  REALISATIONS: {
    id: "realisations",
    title: "Mes r??alisations",
  },
  /** CTA contact */
  TRAVAILLER_ENSEMBLE: {
    id: "travailler-ensemble",
    title: "Travailler ensemble",
  },
  /** CTAs site */
  ALLER_PLUS_LOIN: {
    id: "aller-plus-loin",
    title: "Aller plus loin",
  },
};

function Prestation() {
  return (
    <Layout
      head={{
        title,
      }}
    >
      <>
        <FullScreenTitle
          title={title}
          subtitle="La pi??ce manquante du puzzle"
          backgroundColor={COLORS.LAGOON}
        />
        <Row
          id={PRESTATION_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.INTRO_PAGE.title,
          }}
        >
          <>
            <p>
              Je travaille principalement en renfort d'??quipes, quelques
              semaines ou quelques mois, pour soutenir le d??veloppement de gros
              projets applicatifs.
            </p>
            <p>
              Des petites missions pour ajouter une fonctionnalit?? ou installer
              un script d'automatisation m'int??ressent aussi.
            </p>
            <p>
              Le refactoring et les tests m'attirent beaucoup, car j'aime
              am??liorer les choses.
            </p>
            <p>
              J'interviens en <b>full-remote</b>, jusqu'?? <b>4 jours/semaine</b>
              sur des projets <b>front, back et full-stack JavaScript</b>.
            </p>
            <p>
              En parall??le de mes comp??tences techniques, je suis amical et
              communique de fa??on claire et concise.
            </p>
            <LinksMenu
              links={[
                {
                  link: getInternalLink(PAGES.PRESTATION_INGENIERIE_WEB),
                  label: PAGES_DATA[PAGES.PRESTATION_INGENIERIE_WEB].title,
                },
                {
                  link: getInternalLink(PAGES.PRESTATION_ECO_CONCEPTION),
                  label: PAGES_DATA[PAGES.PRESTATION_ECO_CONCEPTION].title,
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.PERSONNALITE.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.PERSONNALITE.title,
          }}
          backgroundColor={COLORS.SUN}
        >
          <>
            <p>
              Je suis <b>un individu</b>, pas juste un portefeuille de
              comp??tences.
            </p>
            <p>
              En plus de mes bient??t huit ann??es de pratique{" "}
              <InternalLink
                page={PAGES.ACCUEIL}
                section={ACCUEIL_SECTIONS.PROJETS_PROFESSIONNELS}
                altTitle="professionnelle"
              />{" "}
              et{" "}
              <InternalLink
                page={PAGES.ACCUEIL}
                section={ACCUEIL_SECTIONS.PROJETS_PERSONNELS}
                altTitle="personnelle"
              />
              , c'est ma curiosit?? et ma cr??ativit?? qui ont forg?? mon expertise
              dans le domaine du d??veloppement web.
            </p>
            <p>
              J'aime questionner et comprendre, aborder les probl??matiques
              autrement et chercher des solutions plus simples.
            </p>
            <p>
              Cette recherche s'est fusionn?? avec mon app??tance pour la sobri??t??
              technologique et, naturellement, l'
              <InternalLink
                page={PAGES.PRESTATION_ECO_CONCEPTION}
                lowercase={true}
              />
              .
            </p>
            <p>
              Enfin, c'est dans des ??quipes bienveillantes et dynamiques que je
              m'??panouis le plus.
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES.title,
          }}
          backgroundColor={COLORS.FLOWER}
        >
          <>
            <p>
              Full-stack signifie ??tre ?? l'aise sur{" "}
              <InternalLink
                page={PAGES.PRESTATION}
                section={PRESTATION_INGENIERIE_WEB_SECTIONS.FULL_STACK}
                lowercase={true}
              />{" "}
              : front, back et base-de-donn??es.
            </p>
            <p>
              Lors de mes diff??rentes missions j'ai ??t?? amen?? ?? travailler dans
              des ecosyst??mes et avec des frameworks vari??s, mais mon expertise
              se situe principalement sur les technos suivantes :
            </p>
            <ul>
              <li>JS / Node / TypeScript,</li>
              <li>React,</li>
              <li>SCSS / Bootstrap,</li>
              <li>Express,</li>
              <li>SQL / Mongo,</li>
              <li>GitHub.</li>
            </ul>
            <p>Je me d??brouille ??galement bien sur :</p>
            <ul>
              <li>Vue / Angular,</li>
              <li>Nest,</li>
              <li>PHP / Wordpress.</li>
            </ul>
            <p>
              Mais tout ceci ne serait pas grand chose sans une compr??hension
              profonde de ce qu'est l'
              <InternalLink
                page={PAGES.PRESTATION_INGENIERIE_WEB}
                lowercase={true}
              />
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.TARIF.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.TARIF.title,
          }}
          backgroundColor={COLORS.ABYSS}
        >
          <>
            <p>Une prestation, un tarif :</p>
            <p className="display-1">420???/jour HT</p>
            <p>
              <i>
                Si vous ne pouvez pas r??cup??rer la TVA, je suis exempt?? en
                Octobre jusqu'?? Avril g??n??ralement.
              </i>
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.CONTACT.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.CONTACT.title,
          }}
        >
          <>
            <p>Pour discuter ensemble, je vous propose plusieurs solutions :</p>
            <LinksMenu
              links={[
                {
                  link: WEBSITE_DATA.CALENDLY_LINK,
                  label: "Prendre un premier RDV sur Calendly",
                  color: COLORS.SUN,
                },
                {
                  link: "{mail}",
                  label: "M'envoyer un mail sympa",
                  color: COLORS.SUN,
                },
                {
                  link: "{telephone}",
                  label: "Un petit SMS pour vous pr??senter",
                  color: COLORS.SUN,
                },
                {
                  link: WEBSITE_DATA.LINKEDIN_LINK,
                  label: "Un message sur Lik'dine",
                  color: COLORS.SUN,
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.WEB_HOLISTIQUE.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.WEB_HOLISTIQUE.title,
          }}
          backgroundColor={COLORS.MIST}
        >
          <>
            <p>
              Le monde est un syst??me dont les ??l??ments sont interreli??s et
              interd??pendants.
            </p>
            <p>
              Pourquoi concevoir un sous-syst??me qui ne dispose pas des m??mes
              propri??t??s, ou qui communique mal avec les autres ??l??ments qui
              constituent son environnement ?
            </p>
            <p>Je suis ?? l'??coute des nouveaut??s et investigue l'existant.</p>
            <p>
              Combien co??tera le produit ?? d??velopper est une des premi??res
              questions ?? se poser.
            </p>
            <p>
              La r??ponse ne peut ??tre envisag??e sans inclure, en plus de la
              dimension financi??re, les aspects humains et environnementaux.
            </p>
            <LinksMenu
              links={[
                {
                  link: `${PAGES_DATA[PAGES.PRESTATION_ECO_CONCEPTION]}#${
                    PRESTATION_ECO_CONCEPTION_SECTIONS.VALEURS.id
                  }`,
                  label: "Mes valeurs",
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.REALISATIONS.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.REALISATIONS.title,
          }}
        >
          <>
            <p>
              Retrouvez, comme pr??sent?? en page d'
              <InternalLink
                page={PAGES.ACCUEIL}
                lowercase={true}
                altTitle="accueil"
              />
              , mes principales r??alisations, professionnelles et personnelles :
            </p>
            <Carousel
              id={`${PRESTATION_SECTIONS.REALISATIONS.id}#carousel`}
              children={[
                <MediartisProject />,
                <RimarokProject />,
                <CrestJazzProject />,
                <HighbsBokProject />,
                <TheExpansProject />,
                <CasseDuSiecleProject />,
                <ImrokProject />,
                <HygieProject />,
                <PermaDataProject />,
                <MotifsJsProject />,
                <OmerProject />,
                <PokeTeamProject />,
                <DcbrainProject />,
                <CdietProject />,
                <TalentsAffinityProject />,
              ]}
            />
            <p>
              Plus de projets et de stats sur{" "}
              <a href={WEBSITE_DATA.GITHUB_LINK} target="_blank">
                mon profil Github
              </a>
              .
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.TRAVAILLER_ENSEMBLE.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.TRAVAILLER_ENSEMBLE.title,
          }}
          backgroundColor={COLORS.FLOWER}
        >
          <>
            <p>Je ne suis pas un d??fonce-man.</p>
            <p>
              J'aime le travail en cela qu'il est un{" "}
              <b>processus qui m'accomplit</b> et qu'il{" "}
              <b>me connecte aux autres</b>.
            </p>
            <p>
              Votre environnement est sain, vous avez juste la bonne dose de
              stress, votre projet n'??tait pas ?? livrer hier ?
            </p>
            <p>
              <b>Je souhaite d??j?? vous conna??tre</b> et savoir comment nous
              pourrions <b>travailler ensemble</b>.
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.ALLER_PLUS_LOIN.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.ALLER_PLUS_LOIN.title,
          }}
          backgroundColor={COLORS.SUN}
        >
          <>
            <p>
              Lorsqu'on pratique longtemps un sujet, des motifs apparaissent et
              cette pratique devient <i>un langage de motifs</i>.
            </p>
            <p>
              En codant, des id??es, activables ou juste philosophiques, me
              viennent et j'appr??cie les partager.
            </p>
            <LinksMenu
              links={[
                {
                  link: PAGES_DATA[PAGES.MOTIFS].path,
                  label: "En apprendre plus sur les motifs",
                  color: COLORS.WHITE,
                },
                {
                  link: PAGES_DATA[PAGES.BLOG].path,
                  label: "Consulter les articles du blog",
                  color: COLORS.WHITE,
                },
              ]}
            />
          </>
        </Row>
      </>
    </Layout>
  );
}

export default Prestation;
