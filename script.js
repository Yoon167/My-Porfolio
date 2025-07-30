// ===== LOGIN FORM HANDLING =====
const loginForm = document.getElementById("login-form");
const loginResponse = document.getElementById("login-response");
const loginRegisterContainer = document.querySelector('.login-register-container');
const homeSection = document.getElementById('home');

if (loginForm && loginResponse) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = loginForm.elements["username"].value.trim();
    const password = loginForm.elements["password"].value.trim();

    // Simple demo: username "admin", password "1234"
    if (username === "wang" && password === "12345") {
      loginResponse.innerText = "Login successful! Welcome, " + username + ".";
      loginResponse.style.color = "limegreen";
      setTimeout(() => {
        // Hide login/register
        if (loginRegisterContainer) loginRegisterContainer.style.display = "none";
        // Scroll to home/profile header
        if (homeSection) homeSection.scrollIntoView({ behavior: "smooth" });
      }, 1000); // 1 second delay for user to see message
    } else {
      loginResponse.innerText = "Invalid username or password.";
      loginResponse.style.color = "crimson";
    }
    loginForm.reset();
  });
}

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById("contact-form");
const formResponse = document.getElementById("form-response");

if (contactForm && formResponse) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.elements["name"].value.trim();
    const email = contactForm.elements["email"].value.trim();
    const message = contactForm.elements["message"].value.trim();

    // Simple validation
    if (!name || !email || !message) {
      formResponse.innerText = "Please fill out all fields.";
      formResponse.style.color = "crimson";
      return;
    }

    // Simulate success
    formResponse.innerText = `Thanks, ${name}! Your message has been received.`;
    formResponse.style.color = "limegreen";
    contactForm.reset();
  });
}

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById("contact-form");
const formResponse = document.getElementById("form-response");

if (contactForm && formResponse) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.elements["name"].value.trim();
    const email = contactForm.elements["email"].value.trim();
    const message = contactForm.elements["message"].value.trim();

    // Simple validation
    if (!name || !email || !message) {
      formResponse.innerText = "Please fill out all fields.";
      formResponse.style.color = "crimson";
      return;
    }

    // Simulate success
    formResponse.innerText = `Thanks, ${name}! Your message has been received.`;
    formResponse.style.color = "limegreen";
    contactForm.reset();
  });
}

// ...existing code...

// ===== LOGIN/REGISTER TOGGLE ANIMATION =====
const showLoginBtn = document.getElementById("show-login");
const showRegisterBtn = document.getElementById("show-register");
const loginSection = document.getElementById("login-section");
const registerSection = document.getElementById("register-section");

if (showLoginBtn && showRegisterBtn && loginSection && registerSection) {
  showLoginBtn.addEventListener("click", () => {
    showLoginBtn.classList.add("active");
    showRegisterBtn.classList.remove("active");
    registerSection.classList.add("hide");
    setTimeout(() => {
      registerSection.style.display = "none";
      loginSection.style.display = "block";
      setTimeout(() => loginSection.classList.remove("hide"), 10);
    }, 400);
  });

  showRegisterBtn.addEventListener("click", () => {
    showRegisterBtn.classList.add("active");
    showLoginBtn.classList.remove("active");
    loginSection.classList.add("hide");
    setTimeout(() => {
      loginSection.style.display = "none";
      registerSection.style.display = "block";
      setTimeout(() => registerSection.classList.remove("hide"), 10);
    }, 400);
  });
}
