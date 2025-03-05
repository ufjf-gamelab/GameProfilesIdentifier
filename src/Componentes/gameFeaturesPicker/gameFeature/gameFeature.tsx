import CircularProgress from "@mui/joy/CircularProgress";
import "./gameFeature.css";
import { Slider } from "@/components/ui/slider";
import { useRef } from "react";
import { GameFeatureProps } from "@/Controlers/Types";

function GameFeature({
  textLabel,
  textdescription,
  setValue,
  valorProp,
}: GameFeatureProps) {
  const value = useRef(valorProp);
  return (
    <div className="GameFeature">
      <div className="InputDescription">
        <Slider
          max={100}
          onValueChange={(valores: number[]) => {
            setValue(valores[0]);
            value.current = valores[0];
          }}
          value={[valorProp]}
        />
        <label>
          🛈 {textLabel}: {textdescription}
        </label>
      </div>
    </div>
  );
}

export default GameFeature;
