import { TreeData } from "./Types";
import { GameFeatureProps, Motivações } from "./Types";

export function getActions(selectedNode: TreeData, dispatch: React.Dispatch<any>): GameFeatureProps[] {
    const gameFeature: GameFeatureProps[] = [
      "ação", "social", "maestria", "conquista", "imersão", "criatividade"
    ].map((key) => ({
      textLabel: key.charAt(0).toUpperCase() + key.slice(1),
      textdescription: getDescriptionForKey(key),
      setValue: (value: number) => {
        dispatch({ type: `SET_${key.toUpperCase()}`, value });
      },
      valorProp: selectedNode?.pesos[key as keyof Motivações]!,
    }));
  
    return gameFeature;
  }
  
  function getDescriptionForKey(key: string): string {
    const descriptions: { [key: string]: string } = {
      ação: "Foco em destruição e excitação intensa.",
      social: "Competição e interação em comunidade.",
      maestria: "Desafio e desenvolvimento de estratégias.",
      conquista: "Completar objetivos e obter poder.",
      imersão: "Exploração de fantasia e histórias profundas.",
      criatividade: "Personalização e descoberta de novidades."
    };
    return descriptions[key] || "";
  }
  