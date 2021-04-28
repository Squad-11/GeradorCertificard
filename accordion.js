const titles = document.getElementsByClassName("title");
const wrappers = document.getElementsByClassName("wrapper");

const pickers = document.querySelectorAll("input[type='color']");
const pseudoPickers = document.querySelectorAll(".pseudo-picker");

const sliders = document.querySelectorAll(".slider");

const fileInput = document.querySelector("#fileInput");

for (let index = 0; index < titles.length; index++) {
  const element = titles[index];
  element.addEventListener("click", handleDialog);
}

function removeActiveWrapper() {
  for (let index = 0; index < wrappers.length; index++) {
    const element = wrappers[index];
    element.classList.remove("active");
  }
}

function handleDialog(e) {
  const wrapper = e.target.parentElement;

  if (wrapper.classList.contains("active")) {
    wrapper.classList.toggle("active");
    return;
  }

  removeActiveWrapper();
  wrapper.classList.add("active");
}

for (let index = 0; index < pseudoPickers.length; index++) {
  const pseudoPicker = pseudoPickers[index];

  pseudoPicker.addEventListener("click", (e) => {
    const picker = e.target.nextElementSibling;
    picker.click();
  });
}

for (let index = 0; index < pickers.length; index++) {
  const picker = pickers[index];
  picker.addEventListener("input", (e) => {
    const variable = e.target.dataset.variable;

    updateCssVariable(variable, e.target.value);
  });
}

for (let index = 0; index < sliders.length; index++) {
  const slider = sliders[index];
  slider.addEventListener("input", (e) => {
    updateCssVariable(e.target.dataset.variable, `${e.target.value}px`);
  });
}

function updateCssVariable(variable, value) {
  document.documentElement.style.setProperty(variable, value);
}

fileInput.addEventListener("change", (e) => {
  const headerImg = document.querySelector(".header-img");
  headerImg.src = URL.createObjectURL(e.target.files[0]);
});
