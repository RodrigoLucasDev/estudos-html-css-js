let Rodrigo = {
    nome:  'Rodrigo Teixeira Lucas',
    idade: '22',
    sexo:  'M'
}

let Julia = {
    nome:  'Julia Helena Duarte de Matos',
    idade: '22',
    sexo:  'F'
}


console.log(Rodrigo.nome + ',' , Rodrigo.idade + ',', Rodrigo.sexo)
console.log(Julia.nome + ',', Julia.idade + ',', Julia.sexo)

// Lista de usuários
let usuarios = [
  { nome: 'João', idade: 30, email: 'joao@email.com' },
  { nome: 'Maria', idade: 25, email: 'maria@email.com' },
  { nome: 'Pedro', idade: 35, email: 'pedro@email.com' }
];

// Acessar o nome do segundo usuário
console.log(usuarios[1].nome);



// Percorrer todos
usuarios.forEach(usuario => {
  console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
});
