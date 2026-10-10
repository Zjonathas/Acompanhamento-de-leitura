const sessao1 = 10;
const sessao2 = 20;
const sessao3 = 30;
const sessao4 = 30;
const sessao5 = 40;
const sessao6 = 40;


const metaPorSessao = 30;
let sessoes = [
  { id: 1, data: "05/10/2026", paginas: sessao1 },
  { id: 2, data: "06/10/2026", paginas: sessao2 },
  { id: 3, data: "10/10/2026", paginas: sessao3 },
  { id: 4, data: "14/10/2026", paginas: sessao4 },
  { id: 5, data: "15/10/2026", paginas: sessao5 },
  { id: 6, data: "20/10/2026", paginas: sessao6 },
];

const paginasLidas = sessoes.map(sessao => sessao.paginas);

function calcularTotalPaginas(){
  let soma = 0;
  if (!paginasLidas || paginasLidas.length === 0){
    return 0;
  }
  paginasLidas.forEach(numero => {
    soma += numero;
  });
  return soma
}

function calcularMediaPaginas(){
  const total = calcularTotalPaginas();
  const quantidadeDeSessoes = paginasLidas.length;
  if (!total || quantidadeDeSessoes === 0){
    return 0;
  }
  else {
    let media = total / quantidadeDeSessoes;
    return media;
  }
}

function calcularClassificacao(){
  const media = calcularMediaPaginas();

  if (!media || isNaN(media) || media === 0) {
    return "Nenhuma classificação";
  }
  else if (media >= metaPorSessao * 0.75) {
    return "Leitura intensa"
  }

  else if (media >= metaPorSessao * 0.5) {
    return "Bom ritmo"
  }

  else if (media >= metaPorSessao * 0.25) {
    return "Ritmo inicial"
  }
  else {
    return "Abaixo da meta";
  }
}

const containerCards = document.getElementById("cards-sessoes");
const totalPaginas = document.getElementById("total-paginas");
const mediaPaginas = document.getElementById("media-paginas");
const classificacao = document.getElementById("classificacao");

function validarElementosResultados(elemento){
  if (!elemento || elemento === undefined){
    console.error("Elementos não encontrados");
    return false;
  }
  return true;
}

function criarResultados(){
  if (validarElementosResultados(totalPaginas)){
    totalPaginas.innerHTML = calcularTotalPaginas();
  }
  if (validarElementosResultados(mediaPaginas)){
    mediaPaginas.innerHTML = calcularMediaPaginas().toFixed(0);
  }
  if (validarElementosResultados(classificacao)){
    classificacao.innerHTML = calcularClassificacao();
  }
}

criarResultados();

function criarCardsSessoes(listadeSessoes){
  containerCards.innerHTML = "";

  if(!listadeSessoes || listadeSessoes.length === 0){
    containerCards.innerHTML = `<p class="col-span-full text-slate-500 text-center">
    Nenhuma sessão registrada</p>`;
    return;
  }
  
  listadeSessoes.forEach(sessao => {
    const cardHTML =
    `<article class="bg-white rounded-md border border-slate-200 shadow-sm p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      <h3 class="text-xl font-bold border-b border-primaria pb-2 mb-4">Sessão ${sessao.id}</h3>
      <p>Data: ${sessao.data}</p>
      <p>Páginas lidas: <span class="font-semibold text-xl text-primaria">${sessao.paginas}</span></p>
    </article>`;
    containerCards.innerHTML += cardHTML;
  });
}

criarCardsSessoes(sessoes);

console.group('Testes');
console.log(calcularTotalPaginas());

console.log(calcularMediaPaginas());

console.log(calcularClassificacao()); 
console.groupEnd();