const { promises: fs } = require("fs");
const ejs = require("ejs");

async function main() {
  const rawData = await fs.readFile("props.json", "utf-8");
  const ejsFile = await fs.readFile("index.ejs", "utf-8");
  const props = await JSON.parse(rawData);
  const renderedHTML = await ejs.render(ejsFile, { props });
  await fs.writeFile("README.md", renderedHTML);
}

main();
