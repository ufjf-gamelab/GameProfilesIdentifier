interface arquetipos{
    
        tipo1: number,
        tipo2: number,
        tipo3: number,
        tipo4: number,
        tipo5: number,
}
interface opcao{
    resposta: string;
    propiedades:arquetipos;
}
interface Question {
    nome: string;
    options: opcao[];
    selected?: number;
}

class QuestionApi {
    questions: Question[] = [];
    resposta: arquetipos[] = [];
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
        {resposta: "a", propiedades: {tipo1: 1, tipo2: 2, tipo3: 3, tipo4: 4, tipo5: 5}},
        {resposta: "b", propiedades: {tipo1: 1, tipo2: 2, tipo3: 3, tipo4: 4, tipo5: 5}},
        {resposta: "c", propiedades: {tipo1: 1, tipo2: 2, tipo3: 3, tipo4: 4, tipo5: 5}},
        {resposta: "d", propiedades: {tipo1: 1, tipo2: 2, tipo3: 3, tipo4: 4, tipo5: 5}},
        ]);
    console.log(questionApi.questions);
}
export default questionApi;