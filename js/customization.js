const pickers = document.querySelectorAll("input[type='color']");
const fileInputs = document.querySelectorAll("input[type='file']");

const sliders = document.querySelectorAll(".slider");
const pseudoPickers = document.querySelectorAll(".pseudo-picker");

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
  slider.addEventListener("input", (e) =>
    updateCssVariable(e.target.dataset.variable, `${e.target.value}px`)
  );
}

function updateCssVariable(variable, value) {
  document.documentElement.style.setProperty(variable, value);
  customProps[variable.substring(2)] = value;
}

for (let index = 0; index < fileInputs.length; index++) {
  const fileInput = fileInputs[index];

  fileInput.addEventListener("change", (e) => {
    const element = document.querySelector(`.${e.target.dataset.elementClass}`);
    const isBackgroundImg = e.target.dataset.isBgImg == "";

    if (isBackgroundImg) {
      element.style.backgroundImage = `url(${URL.createObjectURL(
        e.target.files[0]
      )})`;
    }

    element.src = URL.createObjectURL(e.target.files[0]);
  });
}

document.getElementById("userName").addEventListener("input", (e) => {
  const nameText = document.querySelector(".userName");
  nameText.innerHTML = e.target.value;
});

document.getElementById("gerarCartao").addEventListener("click", () => {
  sessionStorage.setItem("customProps", customProps);
});

const customProps = {
  bg: "#fff",
  linkHover: "red",
  linkColor: "#fff",
  linkBgColor: "blue",
  imgBorderWidth: "0px",
  imgBorderColor: "#fff",
  cardRadius: "15px",
  headerImgRadius: "10px",
  userImgRadius: "50%",
  boxPadding: "50px",
};
