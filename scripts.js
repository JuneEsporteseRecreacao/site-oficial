const sections = [
  { id: "header", path: "sections/header.html" },
  { id: "personal-kids", path: "sections/personal kids.html" },
  { id: "recreacao", path: "sections/recreacao.html" },
  { id: "colonia", path: "sections/colonia de ferias.html" },
  { id: "oficinas", path: "sections/oficinas.html" },
  { id: "brinquedos", path: "sections/brinquedos.html" },
  { id: "contato", path: "sections/contato.html" },
  { id: "footer", path: "sections/footer.html" }
];

sections.forEach(section => {
  fetch(section.path)
    .then(response => response.text())
    .then(html => {
      document.getElementById(section.id).innerHTML = html;
    });
});
