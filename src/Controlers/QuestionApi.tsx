interface opcao{
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
    addQuestion(nome: string, opcao: opcao[]) {

        let NovaQuestao: Question = {
            nome: nome,
            options: opcao,
        };
    
        this.questions.push(NovaQuestao);
    }
    constructor() {
        
    }
}

let questionApi = new QuestionApi();


for (let index = 0; index < 5; index++) {
    questionApi.addQuestion("Teste " + index, 
        [
        {resposta: "a", propiedades: [1, 2, 3, 4, 5]}
        ]);
    console.log(questionApi.questions);
    
}
export default questionApi;