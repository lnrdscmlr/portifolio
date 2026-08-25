// ==============================
// DARK / LIGHT MODE
// ==============================

const themeToggle = document.getElementById("theme-toggle");

// Verifica se já existe um tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

// Alterna entre tema claro e escuro
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const isLightTheme =
        document.body.classList.contains("light-theme");

    if (isLightTheme) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }

});


// ==============================
// MENU MOBILE
// ==============================

const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {

    navList.classList.toggle("active");

});


// Fecha o menu quando clicar em algum link
const navLinks = document.querySelectorAll(".nav-list a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navList.classList.remove("active");

    });

});


// ==============================
// BOTÃO VOLTAR AO TOPO
// ==============================

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==============================
// FORMULÁRIO DE CONTATO
// ==============================

const contactForm = document.getElementById("contact-form");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (event) => {

    // Evita o envio padrão do formulário
    event.preventDefault();


    // Remove espaços extras
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const mensagemValue = mensagem.value.trim();


    // Nome vazio
    if (nomeValue === "") {

        formMessage.textContent =
            "Por favor, informe seu nome.";

        return;
    }


    // E-mail vazio
    if (emailValue === "") {

        formMessage.textContent =
            "Por favor, informe seu e-mail.";

        return;
    }


    // Validação básica de e-mail
    if (!emailValue.includes("@") || !emailValue.includes(".")) {

        formMessage.textContent =
            "Por favor, informe um e-mail válido.";

        return;
    }


    // Mensagem vazia
    if (mensagemValue === "") {

        formMessage.textContent =
            "Por favor, escreva uma mensagem.";

        return;
    }


    // Se tudo estiver correto
    formMessage.textContent =
        "Mensagem validada com sucesso!";

    // Limpa os campos
    contactForm.reset();

});


// ==============================
// ANIMAÇÃO DOS CARDS
// ==============================

const cards = document.querySelectorAll(
    ".card, .project-card, .education-card"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


// Observa cada card
cards.forEach((card) => {

    card.classList.add("hidden");
    observer.observe(card);

});