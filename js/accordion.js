const titles = document.getElementsByClassName("title");
const wrappers = document.getElementsByClassName("wrapper");

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