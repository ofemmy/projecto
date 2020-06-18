


projectDataSet.forEach((proj) => {
  let project = Object.create(ProjectHandler);
  project.init(proj);
  //console.log(project);
  let DOMCard = UIHandler.createCard(project);
  UIHandler.updateProgressBar(DOMCard, project.percent);
  const main = document.querySelector(".main");
  UIHandler.mountWidget(DOMCard, main);
});
