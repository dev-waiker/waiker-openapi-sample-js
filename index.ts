import { newsApiSamples } from "./src/news/tryme";
import packageJson from "./package.json";

console.info(
  ":: Waiker Open API Javascript(Typescript) Samples ::",
  `[${packageJson.version}]`
);

newsApiSamples();
