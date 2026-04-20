const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

const signupPanel = document.querySelector(".signup-panel");
const loginPanel = document.querySelector(".login-panel");

registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    loginPanel.classList.remove("active");
    signupPanel.classList.add("active");
});

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    signupPanel.classList.remove("active");
    loginPanel.classList.add("active");
});