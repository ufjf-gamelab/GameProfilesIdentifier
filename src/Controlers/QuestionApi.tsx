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

    addQuestion(nome: string, textoOpcao: string[], propsOpcao: [number, number, number, number, number][]) {
        let OpcoesQuest: opcao[] = [];
        for (let i=0; i< textoOpcao.length; i++){
            let optionDefinir: opcao = {
                resposta: textoOpcao[i],
                propiedades: propsOpcao[i] as [number, number, number, number, number],
            };
            OpcoesQuest.push(optionDefinir);
        }
        
        let NovaQuestao: Question = {
            nome: nome,
            options: OpcoesQuest,
        };
        this.questions.push(NovaQuestao);
    }
    constructor() {
        
    }
}

let questionApi = new QuestionApi();
for (let index = 0; index < 5; index++) {
    //questionApi.addQuestion("Teste " + index, ["a", [1, 2, 3, 4, 5]]);
    
}
export default questionApi;