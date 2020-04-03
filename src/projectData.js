import tfl from "./img/tfl.png";
import miro from "./img/miro.png";
import recipes from "./img/recipes.png";
import ludio from "./img/ludio.png";
import nt from "./img/nt.png";

const projectData = [
  {
    title: "Parking Planner",
    desc:
      "Using TFL data to plot the busiest times at various car parks around London.",
    img: tfl,
    link:
      "http://parking-planner-vue-frontend.s3-website-us-east-1.amazonaws.com",
    tech: ["node", "vue", "AWS", "MYSQL", "express", "chart-js", "vue-material"]
  },
  {
    title: "Runner Dashboard",
    desc:
      "Customer segmentation dashboard for MIRO AI. Filter runners by demographic and export to CSV.",
    img: miro,
    link: "https://i.imgur.com/vXjIkrN.gif",
    tech: ["node", "vue", "mdbootstrap"]
  },
  {
    title: "Smart Shopping",
    desc:
      "Web scrape all the ingredients for your favorite recipes into one convenient shopping list!",
    img: recipes,
    link: "https://shopping-list-frontend.herokuapp.com/",
    tech: ["node", "express", "cheerio", "bulma", "heroku"]
  },
  {
    title: "Ludio",
    desc:
      "Utilising technology to fascilitate learning for children with ASD. Winner of Ravensbourne Marketplace 2017 and Incubation Lite award.",
    img: ludio,
    link: "https://github.com/03difoha/Ludio/blob/master/README.md",
    tech: ["HTML", "CSS", "javascript", "phaser"]
  },
  {
    title: "National Theatre Backstage website",
    desc:
      "Interactive website to advertise The National Theatre Backstage app.",
    img: nt,
    link: "http://digital.nationaltheatre.org.uk/",
    tech: ["HTML", "CSS", "javascript"]
  }
];

export default projectData;
