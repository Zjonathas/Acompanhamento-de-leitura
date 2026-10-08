# Acompanhamento de Leitura

Calcula o total de páginas, a média por sessão, quantas sessões alcançaram a meta e uma classificação como Leitura intensa, Bom ritmo ou Ritmo inicial.

---

## Tabelas de Saídas Lógicas das Condicionais

### 1. Condicionais do Projeto (`src/script.js`)

Abaixo estão detalhadas todas as saídas lógicas geradas pelas estruturas condicionais (`if`, `else if`, `else`) implementadas no código da aplicação.

#### A. Validação de Dados — `calcularTotalPaginas()`

A função avalia o estado do array `paginasLidas` utilizando o operador lógico de disjunção (`||` - OU) e igualdade estrita (`===`):

**Expressão no código:**
```javascript
if (paginasLidas === undefined || paginasLidas === null || paginasLidas.length === 0)
```

| Cenário de Entrada (`paginasLidas`) | `paginasLidas === undefined` | `paginasLidas === null` | `paginasLidas.length === 0` | Avaliação Geral (`\|\|`) | Saída / Retorno Lógico |
| :--- | :---: | :---: | :---: | :---: | :--- |
| `undefined` | `true` | *(curto-circuito)* | *(curto-circuito)* | **`true`** | `console.log("Nenhuma página registrada")` (retorna `undefined`) |
| `null` | `false` | `true` | *(curto-circuito)* | **`true`** | `console.log("Nenhuma página registrada")` (retorna `undefined`) |
| `[]` *(array vazio)* | `false` | `false` | `true` | **`true`** | `console.log("Nenhuma página registrada")` (retorna `undefined`) |
| `[10, 20, 30]` *(com valores)* | `false` | `false` | `false` | **`false`** | Cai no `else`: itera com `forEach` e retorna a soma numérica (`soma`) |


---

#### B. Classificação de Desempenho — `calcularClassificacao()`

Com base na meta de referência `metaPorSessao = 30`:
- **75% da meta:** `30 * 0.75 = 22.5`
- **50% da meta:** `30 * 0.50 = 15.0`
- **25% da meta:** `30 * 0.25 = 7.5`

| Estrutura Condicional | Expressão Avaliada | Faixa da Média (`media`) | Condição Booleana | Saída / Retorno Lógico |
| :--- | :--- | :--- | :---: | :--- |
| `if` | `media >= metaPorSessao * 0.75` | `media >= 22.5` | `true` | Retorna `"Leitura intensa"` |
| `else if` | `media >= metaPorSessao * 0.5` | `15.0 <= media < 22.5` | `true` | Retorna `"Bom rítimo"` |
| `else if` | `media >= metaPorSessao * 0.25` | `7.5 <= media < 15.0` | `true` | Retorna `"Ritmo inicial"` |
| *(Implícito / Sem correspondência)* | *(Nenhuma das anteriores)* | `media < 7.5` ou `NaN` | `false` (todas) | Retorna `undefined` |

---

## Paleta de Cores

| Cor | Código Hexadecimal | Variável CSS |
| :--- | :---: | :--- |
| Primária | `#2F39A9` | `--color-primaria` |
| Secundária | `#2E6FA0` | `--color-secundaria` |
| Terciária | `#49A4BB` | `--color-terciaria` |
| Quartenária | `#3730A3` | `--color-quartenaria` |
| Destaque | `#15D8B3` | `--color-destaque` |

