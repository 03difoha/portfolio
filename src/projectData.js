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
    title: "Runner Targetting tool",
    desc:
      "Customer segmentation Dashboard. Filter runners by brand, age, pace and many other parameters. Includes lightbox view, incorrect image flagging and",
    img: miro,
    tech: ["node", "vue", "mdbootstrap"]
  },
  {
    title: "Smart Shopping",
    desc:
      "Vue.js + Express. Paste your favourite online recipes into the smart list tool and collate all the needed ingredients into one convenient shopping list.",
    img: recipes,
    tech: ["node", "express", "cheerio", "bulma", "heroku"]
  },
  {
    title: "Ludio",
    desc:
      "1 in 100 children in the UK are autistic. How can technology be utilised to fascilitate learning for children with ASD? Winner of Ravensbourne Marketplace 2017 and Incubation Lite award.",
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
