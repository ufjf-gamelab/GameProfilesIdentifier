interface Question {
    nome: string;
    options: string[];
    selected?: number;
}

class QuestionApi {
    questions: Question[] = [];

    addQuestion(nome: string, Option: string[]) {
        this.questions.push({
            nome: nome,
            options: Option
        });
    }
    constructor() {
        
    }
}

let questionApi = new QuestionApi();
for (let index = 0; index < 5; index++) {
    questionApi.addQuestion("Teste "+index, ["a", "b","c","d"]);
}
export default questionApi;