const projectsEl = document.querySelector(".projects");

const detailView = document.querySelector(".detail-view");
const languages = document.querySelector(".languages");
const demo = document.querySelector(".demo");
const sourceCode = document.querySelector(".source-code");

// Get data
fetch(`data/project-list.json`)
  .then((res) => res.json())
  .then((projects) => {
    displayProject(projects);
    displayDetail(projects);
  });

// Display projects list
const displayProject = (projects) => {
  projects.forEach((project) => {
    const divEl = document.createElement("div");
    divEl.classList.add("project");
    divEl.innerHTML = `
      <h3 class="project-title">${project["title"]}</h3>
      <p class="project-description">${project["description"]}</p>
    `;

    projectsEl.appendChild(divEl);
  });
};

// Display details
const displayDetail = (projects) => {
  const projectList = document.querySelectorAll(".project");

  projectList.forEach((project, index) => {
    project.addEventListener("click", () => {
      if (projects[index]["demo"] === "N/A") {
        detailView.innerHTML = `
          <p class="no-demo-view">Live Demo</p>
        `;
        demo.innerText = `N/A`;
      } else {
        detailView.innerHTML = `
        <iframe class="demo-view" src="${projects[index]["demo"]}" title="${projects[index]["title"]}"></iframe>
        `;
        demo.innerHTML = `
        <a class="link" href="${projects[index]["demo"]}" target="_blank" >${projects[index]["demo"]}</a>
        `;
      }

      languages.innerText = projects[index]["languages"];

      sourceCode.innerHTML = `
      <a class="link" href="${projects[index]["source-code"]}" target="_blank" >${projects[index]["source-code"]}</a>
      `;

      document.querySelector("body").classList.add("details-open");
    });
  });
};

// Close details
const btnClose = document.querySelector(".btn-mobile");

btnClose.addEventListener("click", () => {
  document.querySelector("body").classList.remove("details-open");
});
