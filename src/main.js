class Aluno{
    constructor (nomeDoAluno, notaDoAluno){
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

var alunos = ['Aluno 1', 'Aluno 2', 'Aluno 3', 'Aluno 4'];

var notas = [7,5,6,2];

var alunosNotas = alunos.map(function(nomeDoAluno, Index){
    return new Aluno (nomeDoAluno, notas[Index])
})

function aprovados(aluno) {
    return aluno.nota >= 6;
} 

const alunosAprovados = alunosNotas.filter(aprovados);
console.log('Os alunos aprovados são: ', alunosAprovados);
