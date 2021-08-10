const searchForm = document.querySelector("#searchForm");
const input = document.querySelector("#phonenumber");
const errorBox = document.querySelector(".error-box");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!input.value) {
    errorBox.style.display = "block";
  } else {
    errorBox.style.display = "none";
  }
});
