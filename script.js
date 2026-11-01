const loginDialog = document.querySelector("#login-dialog");
const openLoginButton = document.querySelector("#open-login");
const closeLoginButton = document.querySelector("#close-login");

openLoginButton.addEventListener("click", () => {
  loginDialog.showModal();
});

closeLoginButton.addEventListener("click", () => {
  loginDialog.close();
});
