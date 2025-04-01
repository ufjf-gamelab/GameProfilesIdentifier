"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

type ComparativeChartProps = {
    titulo: string
    personasNomes: string[]
    chartData:any
}
export function ComparativeChart({titulo,personasNomes, chartData}: ComparativeChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{titulo}</CardTitle>
        <CardDescription>{
            personasNomes==null?"":personasNomes.join(", ")
            }</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="subtitle"
              tickLine={true}
              tickMargin={0}
              axisLine={false}

              tickFormatter={(value) => value.slice(0, 20)}
            />
            <YAxis
                tickLine={true}
                tickMargin={0}
                axisLine={false}
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
            ></YAxis>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            {
            personasNomes.map((key) => {
                return (<Bar dataKey={key} fill="black" radius={4} />);
            })
            }
           
          </BarChart>

          
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Descrição<TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          mostra os valores das categorias de cada persona selecionada na arvore de elementos
        </div>
      </CardFooter>
    </Card>
  )
}
