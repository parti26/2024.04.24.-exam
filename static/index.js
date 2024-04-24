import data from "./data.js";

const root = document.querySelector("#root");

function main() {
  const section = document.createElement("section");
  section.className = "section";

  const flatListContainer = document.createElement("div");
  flatListContainer.className = "flat-list";

  const titleBlock = document.createElement("div");
  titleBlock.className = "flat-list__title";
  const h1 = document.createElement("h1");
  h1.className = "flat-list__title__header";
  h1.innerText = "Clean Code Principles";

  titleBlock.append(h1);
  flatListContainer.append(titleBlock);

  if (Array.isArray(data)) {
    for (const element of data) {
      const cardComponent = document.createElement("div");
      cardComponent.className = "card";

      const cardTitle = document.createElement("div");
      cardTitle.className = "card__title";
      cardTitle.innerText = element.title;

      const cardBody = document.createElement("div");
      cardBody.className = "card__body";
      cardBody.innerText = element.description;

      cardComponent.append(cardTitle, cardBody);

      flatListContainer.append(cardComponent);
    }
  } else {
    console.error("Data is not defined.");
  }

  section.append(flatListContainer);

  if (root) {
    root.append(section);
  }

  console.log(data);
}
main();