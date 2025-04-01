import { Motivações, PersonasApi } from "./PersonasApi";
type dataSet ={
    dataKeys:string[]
    data : { [key: string]: any } 
}
export class DataGenerator {
    #arvoreAnalisada: PersonasApi;
    #motivacoesKeywords: (keyof Motivações)[] = [
        "ação",
        "social",
        "maestria",
        "conquista",
        "imersão",
        "criatividade",
    ];
    constructor(PersonasTree: PersonasApi) {
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
            data: ["jogo", "media"],
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

        return dataSet;
    }
    getAbsoluteSelectedDataSet() {
        const noEmEdicao = this.#arvoreAnalisada.noEmEdicao
        const dataSet:dataSet = {
            dataKeys: [noEmEdicao.name],
            data: [],
        };
        this.#motivacoesKeywords.forEach((legenda) => {
            const data: { [key: string]: any } = { subtitle: legenda };
            dataSet.data[noEmEdicao.name] = noEmEdicao.pesos[legenda];
            data[noEmEdicao.name] = noEmEdicao.pesos[legenda];
            dataSet.data.push(data);
        });
        return dataSet;
    }
    getAvaregeChildrenDataSet() {
        const noEmEdicao = this.#arvoreAnalisada.noEmEdicao
        const dataSet:dataSet = {
            dataKeys: ["Nó pai","media"],
            data: [],
        };
        this.#motivacoesKeywords.forEach((legenda) => {
            const data: { [key: string]: any } = { subtitle: legenda };
            let totalPesos = 0;
            console.log(noEmEdicao.children);
            noEmEdicao.children?.forEach((node) => {
                totalPesos += node.pesos[legenda];
            });
            data["media"] = totalPesos / noEmEdicao.children!.length;
            data["Nó pai"] = noEmEdicao.pesos[legenda]
            dataSet.data.push(data);
        });
        return dataSet;
    }
    getSumChildrenDataSet() {
        const noEmEdicao = this.#arvoreAnalisada.noEmEdicao
        const dataSet:dataSet = {
            dataKeys: ["Nó pai","soma"],
            data: [],
        };
        this.#motivacoesKeywords.forEach((legenda) => {
            const data: { [key: string]: any } = { subtitle: legenda };
            let totalPesos = 0;
            console.log(noEmEdicao.children);
            noEmEdicao.children?.forEach((node) => {
                totalPesos += node.pesos[legenda];
            });
            data["soma"] = totalPesos
            data["Nó pai"] = noEmEdicao.pesos[legenda]
            dataSet.data.push(data);
        });
        return dataSet;
    }
}