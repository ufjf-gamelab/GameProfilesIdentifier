import CircularProgress from "@mui/joy/CircularProgress";
import "./gameFeature.css";
import { Slider } from "@/components/ui/slider";
import { useRef } from "react";
import { GameFeatureProps } from "@/Controlers/Types";

function GameFeature({
  textLabel,
  textdescription,
  setValue,
}: GameFeatureProps) {
  const value = useRef(0);
  return (
    <div className="GameFeature">
      <div className="InputDescription">
        <Slider
          max={100}
          onValueChange={(valores: number[]) => {
            setValue(valores[0]);
            value.current = valores[0];
          }}
        />
        <label>
          🛈 {textLabel}: {textdescription}
        </label>
      </div>
    </div>
  );
}

export default GameFeature;
