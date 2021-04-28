const titles = document.getElementsByClassName("title");
const wrappers = document.getElementsByClassName("wrapper");

const bgPicker = document.querySelector("#bgPicker");
const pseudoPicker = document.querySelector(".pseudo-picker");

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

pseudoPicker.addEventListener("click", () => {
  bgPicker.click();
});

bgPicker.addEventListener("input", (e) => {
  document.documentElement.style.setProperty("--bg", e.target.value);
});

fileInput.addEventListener("change", (e) => {
  const headerImg = document.querySelector(".header-img");
  headerImg.src = URL.createObjectURL(e.target.files[0]);
});
