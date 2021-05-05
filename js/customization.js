const pickers = document.querySelectorAll("input[type='color']");
const fileInputs = document.querySelectorAll("input[type='file']");
const sliders = document.querySelectorAll("input[type='range']");

const pseudoPickers = document.querySelectorAll(".pseudo-picker");

const socialMedias = ["Github", "Instagram", "Linkedin", "Codepen", "Youtube", "Twitter", "Facebook"];
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
    <img src="/images/social/${element.media.toLowerCase()}.svg"></a></li>`
  }
}

function validateLink(link){
  const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
  return regex.test(link);
}

document.getElementById("userName").addEventListener("input", (e) => {
  const nameText = document.querySelector(".userName");
  nameText.innerHTML = e.target.value;
});

document.getElementById("achievementsTitle").addEventListener("input", (e) => {
  const nameText = document.querySelector(".achievementsTitle");
  nameText.innerHTML = e.target.value;
});

document.getElementById("addSocialMedia").addEventListener("click", (e) => {
  e.preventDefault();

  const selectMedias = document.getElementById("availableSocialMedias");
  const inputMedia = document.getElementById("socialMediaLink");

  if(!validateLink(inputMedia.value)){
    alert("Link de rede social deve ser um link válido");
    return;
  }

  user.socialMedias.push({media: selectMedias.value, link: inputMedia.value});

  availableSocialMedias = availableSocialMedias.filter(x => x != selectMedias.value)
  
  generateSocialMediasSelect();
  inputMedia.value = ""

  renderMediaIcons();
});

addLinkBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const linkList = document.getElementById("socialLinks");
  const achievementText = document.getElementById("achievementText");
  const achievementLink = document.getElementById("achievementLink");

  if(!achievementText.value){
    alert("Nome da conquista não pode ser vazio");
    return;
  }

  if(!validateLink(achievementLink.value)){
    alert("Link da conquista inválido");
    return;
  }

  linkList.innerHTML += `<li><a class="project-links" href="${achievementLink.value}" target="_blank">${achievementText.value}</a></li>`;
  achievementText.value = "";
  achievementLink.value = "";
})

document.getElementById("filter").addEventListener("change", () => {
  const medias = document.querySelector(".social-medias ul");
  medias.classList.toggle("black-white")
});