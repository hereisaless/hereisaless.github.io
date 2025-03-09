document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    })
    .catch((error) => alert("Erro ao enviar mensagem!"));
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwSt697_iBrz3HOOfB9jcPJVGfjR4fERknW8QboJMpWQ8ds-vbac4RTwur2WPvrHmkv/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Formulário enviado");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
