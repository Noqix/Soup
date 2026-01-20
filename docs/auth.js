<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfzSsjtApdkleg00M1cXZlRkdet5iWEnM",
  authDomain: "soup-99252.firebaseapp.com",
  projectId: "soup-99252",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => location.href = "dashboard.html")
    .catch(e => alert(e.message));
};

window.login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => location.href = "dashboard.html")
    .catch(e => alert(e.message));
};

window.checkAuth = () => {
  onAuthStateChanged(auth, user => {
    if (!user) location.href = "login.html";
    else document.getElementById("user").innerText = user.email;
  });
};
</script>
