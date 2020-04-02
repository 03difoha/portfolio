import tfl from "./img/tfl.png";
import miro from "./img/miro.png";
import recipes from "./img/recipes.png";
import ludio from "./img/ludio.png";
import nt from "./img/nt.png";

const projectData = [
  {
    title: "Parking Planner",
    desc:
      " This Parking Planner uses TFL data to plot the average number of free spaces at various car parks around London.",
    img: tfl,
    tech: ["node", "vue", "AWS", "MYSQL", "express", "chart-js", "vue-material"]
  },
  {
    title: "Runner Dashboard",
    desc:
      "Customer segmentation Dashboard for MIRO AI. Filter runners by, age, gender, pace etc.",
    img: miro,
    tech: ["node", "vue", "mdbootstrap"]
  },
  {
    title: "Smart Shopping",
    desc:
      "Web scrapping to collate all youte favorite recipes into one convenient shopping list.",
    img: recipes,
    tech: ["node", "express", "cheerio", "bulma", "heroku"]
  },
  {
    title: "Ludio",
    desc:
      "How can technology be utilised to fascilitate learning for children with ASD? Winner of Ravensbourne Marketplace 2017 and Incubation Lite award.",
    img: ludio,
    tech: ["HTML", "CSS", "javascript", "phaser"]
  },
  {
    title: "National Theatre Backstage website",
    desc:
      "Interactive website to advertise The National Theatre Backstage app.",
    img: nt,
    tech: ["HTML", "CSS", "javascript"]
  }
];

export default projectData;
