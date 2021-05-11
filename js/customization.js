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
  availableSocialMedias = availableSocialMedias.sort();

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

addEventListenerToAll(sliders, "input", (e) => {
  const value = e.target.value;
  const variable = e.target.dataset.variable;
  const unit = e.target.dataset.unit ?? "px";    

  updateCssVariable(variable, value, unit)
});

addEventListenerToAll(fileInputs, "change", displaySelectedImage);

function updateCssVariable(variable, value, unit) {  
  document.documentElement.style.setProperty(variable, `${value}${unit ?? ""}`);
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
    <img src="../images/social/${element.media.toLowerCase()}.svg"></a></li>`
  }
}

function validateLink(link){
  const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
  return regex.test(link);
}

function generateAddedAchievements(){
  const addedAchievements = document.querySelector(".added-achievements");
  addedAchievements.innerHTML = "";

  for (let index = 0; index < user.projects.length; index++) {
    const project = user.projects[index];    

    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = project.link;
    a.innerText = project.name;
    a.target = "_blank";

    const icon = document.createElement("span");
    icon.classList.add("material-icons-outlined");
    icon.innerHTML = "delete_outline";
    icon.addEventListener("click", () => {
      user.projects = user.projects.filter(x => x.name != project.name);      

      generateAddedAchievements();
      generateLinks();
    });
    
    li.appendChild(a);
    li.appendChild(icon);

    addedAchievements.appendChild(li);
  }
}

function generateAddedMedias(){
  const addedMedias = document.querySelector(".added-medias");
  addedMedias.innerHTML = "";

  for (let index = 0; index < user.socialMedias.length; index++) {
    const media = user.socialMedias[index];    

    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = media.link;
    a.innerText = media.media;
    a.target = "_blank"

    const icon = document.createElement("span");
    icon.classList.add("material-icons-outlined");
    icon.innerHTML = "delete_outline";
    icon.addEventListener("click", () => {
      user.socialMedias = user.socialMedias.filter(x => x.media != media.media);      
      availableSocialMedias.push(media.media)      

      generateSocialMediasSelect();
      generateAddedMedias();
      renderMediaIcons();
    });
    
    li.appendChild(a);
    li.appendChild(icon);

    addedMedias.appendChild(li);
  }
}

function generateLinks(){
  const linkList = document.getElementById("socialLinks");
  linkList.innerHTML = "";
  const noBgCheckbox = document.getElementById("linkBgCheckbox");  

  for (let index = 0; index < user.projects.length; index++) {
    const project = user.projects[index];
    
    linkList.innerHTML += `
    <li>
        <a class="project-links ${noBgCheckbox.checked ? "no-bg" : ""}" href="${project.link}" target="_blank">
        ${project.name}
        </a>
    </li>`;
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

document.getElementById("addSocialMedia").addEventListener("click", (e) => {
  e.preventDefault();

  const selectMedias = document.getElementById("availableSocialMedias");
  const inputMedia = document.getElementById("socialMediaLink");

  if(!validateLink(inputMedia.value)){
    alert("Link de rede social deve ser um link válido");
    return;
  }

  if (!validateSocialMedia(selectMedias.value, inputMedia.value)){
    alert(`Este não é um link do ${selectMedias.value} válido`);
    return
    }

  user.socialMedias.push({media: selectMedias.value, link: inputMedia.value});

  availableSocialMedias = availableSocialMedias.filter(x => x != selectMedias.value)
  
  generateAddedMedias();
  generateSocialMediasSelect();
  inputMedia.value = ""

  renderMediaIcons();
});

addLinkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
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

  user.projects.push({name: achievementText.value, link: achievementLink.value});

  generateLinks();

  achievementText.value = "";
  achievementLink.value = "";

  generateAddedAchievements();
})

document.getElementById("filter").addEventListener("change", () => {
  const medias = document.querySelector(".social-medias ul");
  medias.classList.toggle("black-white")
});

document.getElementById("removeBgBtn").addEventListener("click", () => {
  document.querySelector(".preview").style.backgroundImage = "";
  document.getElementById("certificardContainer").value = "";
});

document.getElementById("linkBgCheckbox").addEventListener("change", () => {
  const links = document.getElementsByClassName("project-links");

  for (let index = 0; index < links.length; index++) {
    links[index].classList.toggle("no-bg");;    
  }
})

document.getElementById("goFullscreen").addEventListener("click", () => {  
  const certificard = document.querySelector(".certificard");
  certificard.classList.remove("align-right");

  document.querySelector(".options").classList.remove("active");
  document.querySelector(".show-tab").classList.remove("invert");

  const preview = document.querySelector(".preview");
  preview.onfullscreenchange = () => {
    certificard.classList.toggle("fullscreen"); 
  }
  preview.requestFullscreen();
})

function validateSocialMedia(media, link){
  if (media == "Facebook" && link.match("fb.com")){
    return true;
    
  } else if (media == "Youtube" && link.match("youtu.be")) {
    return true;
  }
  else {
    return link.includes(media.toLowerCase());
  }
}