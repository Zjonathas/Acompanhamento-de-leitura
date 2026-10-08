const sessao1 = 10;
const sessao2 = 20;
const sessao3 = 30;
const sessao4 = 30;
const sessao5 = 40;
const sessao6 = 40;


const metaPorSessao = 30;
let sessoes = [
  // { id: 1, data: "05/10/2026", paginas: sessao1 },
  // { id: 2, data: "06/10/2026", paginas: sessao2 },
  // { id: 3, data: "10/10/2026", paginas: sessao3 },
  // { id: 4, data: "14/10/2026", paginas: sessao4 },
  // { id: 5, data: "15/10/2026", paginas: sessao5 },
  // { id: 6, data: "20/10/2026", paginas: sessao6 },
];

const paginasLidas = sessoes.map(sessao => sessao.paginas);

function calcularTotalPaginas(){
  let soma = 0;
  if (!paginasLidas || paginasLidas === 0){
    return console.log("Nenhuma página registrada");
  }
  else {
    paginasLidas.forEach(numero => {
      soma += numero;
    });
  }
  return soma
}

function calcularMediaPaginas(){
  const total = calcularTotalPaginas();
  const quantidadeDeSessoes = paginasLidas.length;
  let media = total / quantidadeDeSessoes;
  return media
}

function calcularClassificacao(){
  const media = calcularMediaPaginas();
  if (media >= metaPorSessao * 0.75) {
    return "Leitura intensa"
  }

  else if (media >= metaPorSessao * 0.5) {
    return "Bom rítimo"
  }

  else if (media >= metaPorSessao * 0.25) {
    return "Ritmo inicial"
  }
}


const containerCards = document.getElementById("cards-sessoes");
const totalPaginas = document.getElementById("total-paginas");
const mediaPaginas = document.getElementById("media-paginas");
const classificacao = document.getElementById("classificacao");

function validarElementos(elementos){
  if (!elementos){
    console.error("Elementos não encontrados");
    return false;
  }
  return true;
}

function criarResultados(){
  if (validarElementos(totalPaginas)){
    totalPaginas.innerHTML = calcularTotalPaginas();
  }
  if (validarElementos(mediaPaginas)){
    mediaPaginas.innerHTML = calcularMediaPaginas().toFixed(0);
  }
  if (validarElementos(classificacao)){
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
    `<article class="rounded-md border border-slate-100 shadow-sm p-5">
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