const express = require('express');
const app = express();

const citacoes = [
    { autor: "Albert Einstein", citacao: "A imaginação é mais importante que o conhecimento." },
    { autor: "Isaac Newton", citacao: "Se vi mais longe, foi por estar sobre os ombros de gigantes." },
    { autor: "Marie Curie", citacao: "Nada na vida deve ser temido, apenas compreendido." },
    { autor: "Charles Darwin", citacao: "Não é o mais forte que sobrevive, mas o que melhor se adapta." },
    { autor: "Stephen Hawking", citacao: "Inteligência é a capacidade de se adaptar à mudança." },
    { autor: "Nikola Tesla", citacao: "O presente é deles; o futuro, pelo qual eu realmente trabalhei, é meu." },
    { autor: "Richard Feynman", citacao: "O que eu não posso criar, eu não entendo." },
    { autor: "Carl Sagan", citacao: "Alegações extraordinárias exigem evidências extraordinárias." },
    { autor: "Ada Lovelace", citacao: "A imaginação é a faculdade de descoberta, pré-eminentemente." },
    { autor: "Louis Pasteur", citacao: "A sorte favorece a mente preparada." },
    { autor: "Galileu Galilei", citacao: "Todas as verdades são fáceis de entender uma vez descobertas." },
    { autor: "Thomas Edison", citacao: "Eu não falhei. Apenas descobri 10 mil maneiras que não funcionam." },
    { autor: "Rosalind Franklin", citacao: "A ciência e a vida cotidiana não podem e não devem ser separadas." },
    { autor: "Alan Turing", citacao: "Às vezes são as pessoas de quem ninguém imagina nada que fazem as coisas que ninguém pode imaginar." },
    { autor: "Jane Goodall", citacao: "O que você faz faz diferença, e você tem que decidir que tipo de diferença quer fazer." },
    { autor: "Max Planck", citacao: "A ciência não pode resolver o mistério final da natureza." },
    { autor: "Niels Bohr", citacao: "Um especialista é alguém que cometeu todos os erros possíveis em um campo muito restrito." },
    { autor: "Katherine Johnson", citacao: "Goste de aprender, pois o saber não ocupa lugar." },
    { autor: "Rachel Carson", citacao: "Na natureza nada existe sozinho." },
    { autor: "Linus Pauling", citacao: "A melhor maneira de ter uma boa ideia é ter muitas ideias." },
    { autor: "Johannes Kepler", citacao: "A natureza usa o mínimo possível de tudo." },
    { autor: "Ernest Rutherford", citacao: "Toda ciência é ou física ou coleção de selos." },
    { autor: "Dmitri Mendeleev", citacao: "Não há nada no mundo que eu tema mais do que a mediocridade." },
    { autor: "Barbara McClintock", citacao: "Se você sabe que está no caminho certo, não se importe com o que os outros dizem." },
    { autor: "Edwin Hubble", citacao: "Equipado com seus cinco sentidos, o homem explora o universo ao seu redor." },
    { autor: "Gregor Mendel", citacao: "Meu tempo ainda virá." },
    { autor: "Michael Faraday", citacao: "Nada é bom demais para ser verdade." },
    { autor: "James Clerk Maxwell", citacao: "A ciência é o motor do mundo." },
    { autor: "Alexander Fleming", citacao: "Um cientista não deve ser um seguidor, mas um buscador da verdade." },
    { autor: "Rita Levi-Montalcini", citacao: "Não tema os momentos difíceis. O melhor vem deles." }
];

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 100) + 1;
    res.send(num.toString());
});

app.get('/dado', (req, res) => {
    const dado = Math.floor(Math.random() * 6) + 1;
    res.send(dado.toString());
});

app.get('/citacoes', (req, res) => {
    const aleatoria = citacoes[Math.floor(Math.random() * citacoes.length)];
    res.json(aleatoria);
});

module.exports = app;
