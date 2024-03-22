class Aluno{
    constructor (nomeDoAluno, notaDoAluno){
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }

    aprovadoReprovad(){
        if (this.nota >= 6) {console.log(`${this.nome} está aprovado(a) com nota ${this.nota}`)}
        else {console.log(`Infelizmente, ${this.nome} foi reprovado(a) com nota ${this.nota}`)}
    }
}

const Aluno1 = new Aluno('Aluno1', 8);
const Aluno2 = new Aluno('Aluno2', 2);
const Aluno3 = new Aluno('Aluno3', 5);
const Aluno4 = new Aluno('Aluno4', 7);


console.log(Aluno1);
Aluno1.aprovadoReprovad();
console.log(Aluno2);
Aluno2.aprovadoReprovad();
console.log(Aluno3);
Aluno3.aprovadoReprovad();
console.log(Aluno4);
Aluno4.aprovadoReprovad();




