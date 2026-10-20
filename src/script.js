const sessao1 = 30;
const sessao2 = 0;
const sessao3 = 10;
const sessao4 = 0;
const sessao5 = 30;
const sessao6 = 10;


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

function calcularTotalPaginas(listadeSessoes){
  let soma = 0;
  if (!listadeSessoes || listadeSessoes.length === 0){
    return soma;
  }
  for (let i = 0; i < listadeSessoes.length; i++){
    soma += listadeSessoes[i].paginas;
  }
  return soma;
}

function calcularMediaPaginas(total, quantidade){
  if (!total || !quantidade || quantidade === 0){
    return 0;
  }
  else {
    let media = total / quantidade;
    return media;
  }
}

function calcularClassificacao(){
  const media = calcularMediaPaginas(calcularTotalPaginas(sessoes), sessoes.length);

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

function verificarMeta(paginas, meta){
  if (paginas == 0  || paginas == null || paginas == undefined){
    return "Nenhuma leitura realizada";
  }
  
  else if (paginas >= meta){
    return "Atingiu a meta";
  }
  else {
    return "Abaixo da meta";
  }
}

function contarSessoesAtingiramMeta(listadeSessoes, meta){
  let contador = 0;
  if (!listadeSessoes || listadeSessoes.length === 0){
    return contador;
  }
  for (let i = 0; i < listadeSessoes.length; i++){
    if (listadeSessoes[i].paginas >= meta){
      contador++;
    }
  }
  return contador;
}

const containerCards = document.getElementById("cards-sessoes");
const totalPaginas = document.getElementById("total-paginas");
const mediaPaginas = document.getElementById("media-paginas");
const classificacao = document.getElementById("classificacao");
const metaSessao = document.getElementById("sessoes-atingiram-meta");

function validarElementosResultados(elemento){
  if (!elemento || elemento === undefined){
    console.error("Elementos não encontrados");
    return false;
  }
  return true;
}

function criarResultados(){

  const total = calcularTotalPaginas(sessoes);
  const mediaTotal = calcularMediaPaginas(total, sessoes.length);
  const metaAtingidaSessao = contarSessoesAtingiramMeta(sessoes, metaPorSessao);

  if (validarElementosResultados(totalPaginas)){
    totalPaginas.textContent = total;
  }
  if (validarElementosResultados(mediaPaginas)){
    mediaPaginas.textContent = mediaTotal.toFixed(0);
  }
  if (validarElementosResultados(classificacao)){
    classificacao.textContent = calcularClassificacao();
  }
  if (validarElementosResultados(metaSessao)){
    metaSessao.textContent = `${metaAtingidaSessao}/${sessoes.length}`;
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
      <p>Status: <span class="font-semibold text-xl text-primaria">${verificarMeta(sessao.paginas, metaPorSessao)}</span></p>
    </article>`;
    containerCards.innerHTML += cardHTML;
  });
}

criarCardsSessoes(sessoes);

console.group('Saída das funções');
console.log(`Total de páginas lidas: ${calcularTotalPaginas(sessoes)}`);
console.log(`Média de páginas lidas: ${calcularMediaPaginas(calcularTotalPaginas(sessoes), sessoes.length).toFixed(0)}`);
console.log(`Classificação: ${calcularClassificacao()}`); 
console.log(`Sessões que atingiram a meta: ${contarSessoesAtingiramMeta(sessoes, metaPorSessao)}/${sessoes.length}`);
console.groupEnd();