let repositorios = "";
let projetos = "";
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
  criarLista(repositorios);
};

consumirProjetos();

const criarLista = (lista) => {
  let principaisProjetos = [
    "escala-Povao",
    "jogodavelha",
    "Relat-rio-da-Lua",
    "relat-rio-Pai",
  ];
  console.log(lista);
  const ul = document.querySelector(".lista");
  lista.forEach((projetos) => {
    principaisProjetos.forEach((nomes) => {
      if (nomes == projetos.name) {
        const newLi = document.createElement("li");
        const newDiv = document.createElement("div");
        const newImage = document.createElement("img");
        const linha = document.createElement("p");
        const a = document.createElement("a");
        a.href = `https://gabrielopes02.github.io/${projetos.name}/`;
        a.innerText = 'acessar'
        a.target = '_blank'
        console.log(a.href)
        newDiv.classList.add("divLi");
        linha.innerText = `${projetos.description}`;
        newImage.src = `imagens dos projeto/${projetos.name}.png`;
        newDiv.append(newImage, linha, a);
        newDiv.classList.add("cards");
        newLi.append(newDiv);
        ul.appendChild(newLi);
      }
    });
  });
};
