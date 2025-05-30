const alunos = [{ nome: 'Rodrigo', nota: 10 },
{ nome: 'Ygor', nota: 8 },
{ nome: 'Henrique', nota: 6 }
]

alunos.forEach(aluno => {
    if (aluno.nota >= 7) {
        console.log('O aluno' + aluno.nome + 'foi aprovado com nota: ' + aluno.nota)
    }
});