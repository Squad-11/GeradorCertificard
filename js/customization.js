const pickers = document.querySelectorAll("input[type='color']");
const fileInputs = document.querySelectorAll("input[type='file']");
const sliders = document.querySelectorAll("input[type='range']");

const pseudoPickers = document.querySelectorAll(".pseudo-picker");

const socialMedias = ["Github", "Instagram", "Linkedin", "Codepen"];
let availableSocialMedias = socialMedias;

const user = {
  name: "",
  socialMedias: [],
  projects: [],
};

function generateSocialMediasSelect() {
  const selectMedias = document.getElementById("availableSocialMedias");
  selectMedias.innerHTML = "";

  for (let index = 0; index < availableSocialMedias.length; index++) {
    const element = availableSocialMedias[index];
    selectMedias.innerHTML += `<option>${element}</option>`;
  }
}

generateSocialMediasSelect();

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

addEventListenerToAll(fileInputs, "change", displaySelectedImage);

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

function renderMediaIcons(){
  const socialMediasContainer = document.querySelector(".social-medias ul");
  socialMediasContainer.innerHTML = "";

  for (let index = 0; index < user.socialMedias.length; index++) {
    const element = user.socialMedias[index];
    socialMediasContainer.innerHTML += `<li><a href=${element.link} target="_blank">
    <img src="/images/${element.media.toLowerCase()}.svg"></a></li>`
  }
}

document.getElementById("userName").addEventListener("input", (e) => {
  const nameText = document.querySelector(".userName");
  nameText.innerHTML = e.target.value;
});

document.getElementById("achievementsTitle").addEventListener("input", (e) => {
  const nameText = document.querySelector(".achievementsTitle");
  nameText.innerHTML = e.target.value;
});

document.getElementById("addSocialMedia").addEventListener("click", () => {
  const selectMedias = document.getElementById("availableSocialMedias");
  const inputMedia = document.getElementById("socialMediaLink");

  user.socialMedias.push({media: selectMedias.value, link: inputMedia.value});

  availableSocialMedias = availableSocialMedias.filter(x => x != selectMedias.value)
  
  generateSocialMediasSelect();
  inputMedia.value = ""

  renderMediaIcons();
});
