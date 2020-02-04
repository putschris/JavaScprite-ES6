const name = 'Guilherme';

// - Não podemos alter o valor
// name = 'Guilherme';

const user = {
    name: "Guilherme"
};

// - Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Larissa';

// - Não podemos fazer o objeto "apontar"para outro lugar
// user = {
//     name: "Guilherme"
// };

const persons = ['Guilherme', 'Larissa', 'Giulia'];

// - Podemos adicionar novos itens
persons.push('Pedro');

// - Podemos remover algum item
persons.shift();

// - Podemo alterar diretamente
persons[1] = 'Chris';

console.log('\nArray após as alterações: ', persons);