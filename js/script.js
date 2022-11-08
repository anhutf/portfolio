const projectList = document.querySelectorAll(".project");

// Get data
const getProject = (index) => {
  const detailView = document.querySelector(".detail-view");
  const languages = document.querySelector(".languages");
  const demo = document.querySelector(".demo");
  const sourceCode = document.querySelector(".source-code");

  fetch(`data/project-list.json`)
    .then((res) => res.json())
    .then((data) => {
      detailView.src = data[index]["demo"];
      detailView.title = data[index]["title"];

      languages.innerText = data[index]["languages"];

      demo.innerText = data[index]["demo"];
      demo.href = data[index]["demo"];

      sourceCode.innerText = data[index]["source-code"];
      sourceCode.href = data[index]["source-code"];
    });
};

projectList.forEach((project, index) => {
  project.addEventListener("click", () => {
    getProject(index);

    document.querySelector("body").classList.add("details-open");
  });
});
