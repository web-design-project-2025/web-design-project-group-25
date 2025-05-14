// Signup functionality
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirm = document.getElementById("signup-confirm").value;

    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.email === email)) {
      alert("Email already exists. Please use a different email.");
      return;
    }

    const newUser = { email: email, password: password };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created successfully!");
    window.location.href = "log-in.html";
  });
}

// Login functionality
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      alert("Invalid email or password.");
      return;
    }

    alert("Login successful!");

    window.location.href = "index.html";
  });
}
