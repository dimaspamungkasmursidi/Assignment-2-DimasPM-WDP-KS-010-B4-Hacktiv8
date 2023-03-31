const mainPage = document.getElementById("mainpage");
const formPage = document.getElementById("formpage");
const footerPage = document.getElementById("footerpage");

const editBtn = document.getElementById("editbtn");

const submitBtn = document.getElementById("submitbtn");
const inputName = document.getElementById("inputname");
const inputRole = document.getElementById("inputrole");
const inputAvai = document.getElementById("inputavai");
const inputAge = document.getElementById("inputage");
const inputLocation = document.getElementById("inputlocation");
const inputYears = document.getElementById("inputyears");
const inputEmail = document.getElementById("inputemail");

const nameProfile = document.getElementById("nameprofile");
const role = document.getElementById("role");
const avaibillityEl = document.getElementById("avaibillity");
const ageEl = document.getElementById("age");
const locationEl = document.getElementById("location");
const yearsEl = document.getElementById("years");
const emailEl = document.getElementById("email");

formPage.style.display = "none";
footerPage.style.display = "none";

editBtn.addEventListener("click", function () {
    mainPage.style.display = "none";
    formPage.style.display = "block";
    footerPage.style.display = "block";
});

submitBtn.addEventListener("click", function () {
    mainPage.style.display = "block";
    formPage.style.display = "none";
    footerPage.style.display = "none";

    nameProfile.textContent = inputName.value;
    role.textContent = inputRole.value;
    avaibillityEl.textContent = inputAvai.value;
    ageEl.textContent = inputAge.value;
    locationEl.textContent = inputLocation.value;
    yearsEl.textContent = inputYears.value;
    emailEl.textContent = inputEmail.value;
});
