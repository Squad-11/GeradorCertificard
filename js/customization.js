const pickers = document.querySelectorAll("input[type='color']");
const fileInputs = document.querySelectorAll("input[type='file']");
const sliders = document.querySelectorAll("input[type='range']");

const pseudoPickers = document.querySelectorAll(".pseudo-picker");

function addEventListenerToAll(list, event, exec) {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];

    element.addEventListener(event, exec);
  }
}

addEventListenerToAll(pseudoPickers, "click", (e) => {
  const picker = e.target.nextElementSibling;
  picker.click();
});

addEventListenerToAll(pickers, "input", (e) => {
  const variable = e.target.dataset.variable;
  updateCssVariable(variable, e.target.value);
});

addEventListenerToAll(sliders, "input", (e) =>  updateCssVariable(e.target.dataset.variable, `${e.target.value}px`));

addEventListenerToAll(fileInputs, "change", displaySelectedImage)

function updateCssVariable(variable, value) {
  document.documentElement.style.setProperty(variable, value);  
}

function displaySelectedImage(e) {
    const element = document.querySelector(`.${e.target.dataset.elementClass}`);
    const isBackgroundImg = e.target.dataset.isBgImg === "";

    if (isBackgroundImg) {
      element.style.backgroundImage = `url(${URL.createObjectURL(
        e.target.files[0]
      )})`;
    }

    element.src = URL.createObjectURL(e.target.files[0]);
}

document.getElementById("userName").addEventListener("input", (e) => {
  const nameText = document.querySelector(".userName");
  nameText.innerHTML = e.target.value;
});

document.getElementById("achievementsTitle").addEventListener("input", (e) => {
  const nameText = document.querySelector(".achievementsTitle");
  nameText.innerHTML = e.target.value;
});

addLinkBtn.addEventListener("click", () => {
  const linkList = document.getElementById("socialLinks");
  const achievementText = document.getElementById("achievementText");
  const achievementLink = document.getElementById("achievementLink");
  linkList.innerHTML += `<li><a class="project-links" href="${achievementLink.value}" target="_blank">${achievementText.value}</a></li>`;
  achievementText.value = "";
  achievementLink.value = "";
})
