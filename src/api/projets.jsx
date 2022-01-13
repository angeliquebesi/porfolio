import {
  mobileprojet1,
  // mobileprojet2,
  // mobileprojet3,
  // padprojet3,
  pcprojet1,
  // pcprojet2,
} from "../assets/images";

const projets = [
  {
    id: 1,
    title: "Nantes Autrement",
    description: `Premier projet de la formation.
    Les consignes étaient de créer un site uniquement en HTML et CSS avec
    possibilité d'intégrer un peu de Javascript. Le site devait
    être responsive et il était interdit d'utiliser des librairies.
    Nous étions 4 personnes par projet.`,
    technos: ["HTML", "CSS", "Javascript"],
    link: "https://angeliquebesi.github.io/project-nantes/",
    screen: [mobileprojet1, pcprojet1],
  },
  {
    id: 2,
    title: "Wild Magic School",
    description: `Deuxième projet de la formation.
    Les consignes étaient de créer une App en utilisant ReactJS le tout connercter à une REST API. 
    Nous avons fait le choix d'utiliser Bootstrap pour le style. 
    Le site est uniquement pour ordinateur. 
    Nous étions 4 personnes par projet.`,
    technos: ["React JS", "Bootstrap"],
    link: "https://wild-magic-school.netlify.app/",
    // screen: [{ mobileprojet2 }, { pcprojet2 }],
  },
  {
    id: 3,
    title: "Discover",
    description: `Hackaton
    Nous avions 36h pour développer une app sur le thème de la musique.
    Mon équipe a fait le choix d'utiliser ReactJS et notre propre fichier de data.
    Le site est conçu pour les mobiles.
    Nous étions 4 personnes par projet.`,
    technos: ["React JS"],
    link: "https://discover-wcs.netlify.app/",
    // screen: [{ mobileprojet3 }, { padprojet3 }],
  },
  {
    id: 4,
    title: "+2Bad",
    description: `Premier projet avec un client
    Notre client nous a exprimé son besoin : Avoir une interface pour créer des bons de réduction commercialisés à l'unité ou en quantité. Il nous a transmis le template des bons sur lequel nous devons intégrer le montant, le code-barre, le code internet et la durée de validité.
    Il a fallu créer des codes cadeaux unique pour le site en ligne rattaché à un code-barre unique pour le magasin. Une fois la génération faite nous devions intégrer les données dans un pdf, générer un fichier csv et envoyer un email validant la création.
    Pour la gestion des données nous avons utilisé Express, Prisma.
    Nous étions 4 personnes par projet.`,
    technos: ["React JS", "Tailwind", "Express", "Prisma"],
  },
];
export default projets;
