class opcao{
    resposta: string;
    propiedades: [number, number, number, number, number];
}


interface Question {
    nome: string;
    options: opcao[];
    selected?: number;
}

class QuestionApi {
    questions: Question[] = [];

    addQuestion(nome: string, textoOpcao: string[], resposta: [number, number, number, number, number]) {
        this.questions.push({
            nome: nome;
            for (index = 0; index < textoOpcao.length; index++) {
                options: {
                    resposta: textoOpcao[index];
                    propiedades: resposta;
                }
            }
        });
    }
    constructor() {
        
    }
}

let questionApi = new QuestionApi();
for (let index = 0; index < 5; index++) {
    questionApi.addQuestion("Teste " + index, ["a", [1, 2, 3, 4, 5]]);

    
}
export default questionApi;