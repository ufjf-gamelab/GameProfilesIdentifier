import { Motivações } from "../PersonasApi";

 export type GameFeatureProps = {
    textLabel: string
    textdescription: string
    valorProp: number
    setValue: (value: number) => void
}

export type SelectGameProps = {
    Features: GameFeatureProps[];
    disabled : boolean;
  }

  
 
  
