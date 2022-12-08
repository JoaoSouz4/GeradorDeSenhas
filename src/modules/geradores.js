//rand é uma função criada para gerar um número aletório.
const rand = (min, max)=> Math.floor(Math.random()*(max-min))+min;

//esta função é criada para retornar uma String aletória utilizando a função rand como parâmetro da função fromCharCode
const geraMaiuscula =()=> String.fromCharCode(rand(65,91));

//Do mesmo modo acontece com esta função e assim por diante.
const geraMinuscula =()=> String.fromCharCode(rand(97, 123));
const geraNumero =()=> String.fromCharCode(rand(48,58));

const simbolos = ',"";[]{}!@#$%¨&*()_-+=?'
const geraSimbolo = ()=> simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos){

    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i<qtd;i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0,qtd);

}

