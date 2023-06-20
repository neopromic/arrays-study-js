const lutadorName = document.getElementById("lutadorName");
const lutadorNacionalidade = document.getElementById("lutadorNacionalidade");
const lutadorIdade = document.getElementById("lutadorIdade");
const lutadorPeso = document.getElementById("lutadorPeso");
const lutadorAltura = document.getElementById("lutadorAltura");
const phraseTextElement = document.getElementById("phrase");
const datePhrase = document.getElementById("datePhrase");
const arrayMonthsText = document.getElementById("arrayMonths");
const jogoName = document.getElementById("jogoText");
const jogoDev = document.getElementById("jogoDev");
const jogoLancamento = document.getElementById("jogoLancamento");

let lutador = {
  nome: "Fedor Vladimirovich Emelianenko",
  nacionalidade: "Russo",
  idade: 44,
  peso: 106,
  altura: 1.83,
};
let fraseDoDia = {
  date: "10/09/2021",
};
let months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
];
let monthsFormated = months.join(", ");

const jogo = {
  name: "League Of Legends - LOL",
  developer: "Riot Games",
  ano: 2009,
};
//ENVIANDO ESSES DADOS PRO HTML
lutadorName.textContent = `Nome: ${lutador.nome}`;
lutadorNacionalidade.textContent = `Nacionalidade: ${lutador.nacionalidade}`;
lutadorIdade.textContent = `Idade: ${lutador.idade} anos`;
lutadorPeso.textContent = `Peso: ${lutador.peso}Kg`;
lutadorAltura.textContent = `Altura: ${lutador.altura.toLocaleString()}m`;

// SECTION PHRASE OF THE DAY
datePhrase.textContent = `Data: ${fraseDoDia.date}`;
phraseTextElement.textContent = `"Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade." Aaron Swartz.`;
// SECTION ARRAY MONTHS
arrayMonthsText.textContent = monthsFormated;

// SECTION JOGO
jogoName.textContent = `Nome do jogo: ${jogo.name}`;
jogoDev.textContent = `Desenvolvido por: ${jogo.developer}`;
jogoLancamento.textContent = `Ano lançado: ${jogo.ano}`;
