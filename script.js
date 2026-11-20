let repositorios = "";
let projetos = ''
const consumirProjetos = async () => {
  const url = "https://api.github.com/users/Gabrielopes02/repos";

  try {
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(`Erro na requisição: ${resp.status}`);
    }

    repositorios = await resp.json();
  } catch (erro) {
    console.error("Falha ao buscar repositórios:", erro.message);
  }
  consumirDadosProjetos();
};

const consumirDadosProjetos = async () => {
  const urlProject = `https://api.github.com/repos/gabrielopes02/${repositorios[0].name}/contents  `;
  const resp = await fetch(urlProject);
  const data = await resp.json();
};

consumirProjetos();

const criarLista = (lista) => {
  const ul = document.querySelector(".lista");
  lista.forEach((projetos) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = `${projetos.name}`;
    ul.appendChild(newLi);
  });
};
