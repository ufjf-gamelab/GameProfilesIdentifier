"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Motivações } from "@/apis/TreeApi";
import ResultApi from "@/apis/QFoundryApi";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function VictoryChart({ gameValues }: { gameValues: Motivações }) {
  const resultApi = new ResultApi(gameValues);

    
  const chartData =resultApi.getDataSet();
  console.log(chartData);
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>qFoundry Personas Analysis</CardTitle>
        <CardDescription>
        O grafico será gerado com o resultado da taxa de agradabilidade estimada para cada perfil de jogador definido pela Quantic Foundry
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
          
        >
          <RadarChart  data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="subtitle"
            orientation="outer"
            
            tickLine={false}
            />
            <PolarGrid 
            
            />
            <Radar
              dataKey="dataKey"
              fill="var(--color-desktop)"
              fillOpacity={0.6}                         

            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
        {resultApi.getTextoResultado().nomeMaiorElemento}
        <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
        {resultApi.getTextoResultado().textoPrimeiro}

        </div>
      </CardFooter>
    </Card>
  );
}
