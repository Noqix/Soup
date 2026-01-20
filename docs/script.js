document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const email = loginForm.email.value;
      const password = loginForm.password.value;
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => window.location.href = "index.html")
        .catch(err => alert(err.message));
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const email = registerForm.email.value;
      const password = registerForm.password.value;
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => window.location.href = "index.html")
        .catch(err => alert(err.message));
    });
  }
});
