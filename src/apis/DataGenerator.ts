import { Motivações, PersonasTreeApi } from "./TreeApi";
type dataSet ={
    dataKeys:string[]
    data : { [key: string]: any } 
}
export class DataGenerator {
    #arvoreAnalisada: PersonasTreeApi;
    #motivacoesKeywords: (keyof Motivações)[] = [
        "ação",
        "social",
        "maestria",
        "conquista",
        "imersão",
        "criatividade",
    ];
    constructor(PersonasTree: PersonasTreeApi) {
        this.#arvoreAnalisada = PersonasTree
    }
    getAbsoluteDataSet() {
        const nosSelecionados = this.#arvoreAnalisada.nosSelecionados
        const dataSet:dataSet = {
            dataKeys: [],
            data: [],
        };
        this.#motivacoesKeywords.forEach((legenda) => {
            const data: { [key: string]: any } = { subtitle: legenda };
            nosSelecionados.forEach((node) => {
                data[node.name] = node.pesos[legenda];
            });
            dataSet.data.push(data);
        });
        dataSet.dataKeys = nosSelecionados.map((node) => node.name);
        return dataSet;
    }
    getAvaregeDataSet() {
        const jogo = this.#arvoreAnalisada.jogo
        const nosSelecionados = this.#arvoreAnalisada.nosSelecionados
        const nosAnalisados = nosSelecionados.filter((node) => {
            if (node.name === "Jogo") return false;
            return true;
        });
        const dataSet:dataSet= {
            dataKeys: [],
            data: [],
        };
        this.#motivacoesKeywords.forEach((legenda) => {
            let totalPesos = 0;
            const data: { [key: string]: any } = { subtitle: legenda };
            nosAnalisados.forEach((node) => {
                console.log(node.pesos[legenda]);
                totalPesos += node.pesos[legenda];
            });
            data["media"] = totalPesos / nosAnalisados.length;
            data["jogo"] = jogo[legenda]
            dataSet.data.push(data);
        });
        dataSet.dataKeys = ["jogo", "media"]

        return dataSet;
    }
}