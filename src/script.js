const sessao1 = 10;
const sessao2 = 20;
const sessao3 = 30;
const sessao4 = 30;
const sessao5 = 40;
const sessao6 = 30;

const paginasLidas = [];

const metaPorSessao = 30;
const sessoes = [
  { id: 1, data: "05/10/2026", paginas: sessao1 },
  { id: 2, data: "06/10/2026", paginas: sessao2 },
  { id: 3, data: "10/10/2026", paginas: sessao3 },
  { id: 4, data: "14/10/2026", paginas: sessao4 },
  { id: 5, data: "15/10/2026", paginas: sessao5 },
  { id: 6, data: "20/10/2026", paginas: sessao6 },
];

function calcularTotalPaginas(){
  let soma = 0;
  if (paginasLidas === null || paginasLidas.length === 0 || paginasLidas === undefined){
    return console.warn("Nenhuma página registrada");
  }
  else {
    paginasLidas.forEach(numero => {
      soma += numero;
    });
  }
  return soma
}
// Falta adicionar condicionais para valores nulos ou não numericos
function calcularMediaPaginas(){
  const total = calcularTotalPaginas();
  const quantidadeDeSessoes = paginasLidas.length;
  let media = total / quantidadeDeSessoes;
  return media
}

function calcularClassificacao(){
  const media = calcularMediaPaginas();
  if (media > metaPorSessao * 0.75) {
    return "Leitura intensa"
  }

  else if (media > metaPorSessao * 0.5) {
    return "Bom rítimo"
  }

  else if (media > metaPorSessao * 0.25) {
    return "Ritmo inicial"
  }
}

console.group('Testes');
console.log(calcularTotalPaginas());

console.log(calcularMediaPaginas());

console.log(calcularClassificacao()); 
console.groupEnd();