// 1. Rendre toutes les pages et menus réactifs
document.addEventListener("DOMContentLoaded", function () {

    navToggle.addEventListener("click", () => {
        document.body.classList.toggle("nav-open");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            document.body.classList.remove("nav-open");
        });
    });

    // Make sections responsive
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        if (section.offsetHeight > windowHeight) {
            section.style.height = "auto";
        }
    });
});

// 2. Validation des formulaires
function validateForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const fullName = document.getElementById("Full").value.trim();
    const email = document.getElementById("Email").value.trim();
    const message = document.getElementById("phone").value.trim();

    // Simple validation checks
    if (!fullName) {
        showMessage("Le nom complet est requis.", "error");
        return;
    }

    if (!validateEmail(email)) {
        showMessage("L'email n'est pas valide.", "error");
        return;
    }

    if (!message) {
        showMessage("Le message est requis.", "error");
        return;
    }

    // Show success message
    showMessage("Message envoyé avec succès!", "success");

    // vider le formulaire
    document.getElementById("Full").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("phone").value = "";
}

// validation de l'email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// 3. Afficher un message sur la page pour l'utilisateur à chaque soumission d'un formulaire
function showMessage(message, type) {
    const messageBox = document.createElement("div");
    messageBox.className = `message-box ${type}`;
    messageBox.textContent = message;

    const container = document.querySelector(".container");
    container.insertBefore(messageBox, container.firstChild);

    setTimeout(() => {
        messageBox.remove();
    }, 3000);
}

// Add event listener to the form
document.querySelector("form").addEventListener("submit", validateForm);

// 4. Une page de jeu ou d'animations (basic animation example)
const animationSection = document.createElement("section");
animationSection.className = "animation";
animationSection.innerHTML = `
    <h2>Animation Section</h2>
    <div class="animation-box"></div>
`;
document.body.appendChild(animationSection);

// Simple animation
document.querySelector(".animation-box").addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
});

document.querySelector(".animation-box").addEventListener("mouseout", function () {
    this.style.backgroundColor = "blue";
});

// 5. Des interactions avec l'utilisateur sur chaque page du site
document.querySelector(".contact").addEventListener("mouseover", function () {
    this.style.backgroundColor = "lightyellow";
});

document.querySelector(".contact").addEventListener("mouseout", function () {
    this.style.backgroundColor = "white";
});

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
         parent.classList.remove("focus");
    }  
}

contactForm.forEach((input) => {
    input.addEventListener("focus", focusFunc);
});

