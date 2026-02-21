"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A simple pie chart";

const chartData = [
  { expenses: "Food & Dining", amount: 131.1, fill: "var(--color-food)" },
  { expenses: "Transportation", amount: 25.00, fill: "var(--color-transportation)" },
  { expenses: "Games", amount: 50.65, fill: "var(--color-games)" },
];

const chartConfig = {
  amount: { label: "Amount" },
  food: {
    label: "Food & Dining",
    color: "#F59E0B",
  },
  transportation: {
    label: "Transportation",
    color: "#4588F5",
  },
  games: {
    label: "Games",
    color: "#d31414",
  },
} satisfies ChartConfig;
const ChartPie = () => {
  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart</CardTitle>
        <CardDescription>January - December 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value, name, item,) => (
                    <div className="flex items-center gap-2">
                      <div
                        className="h-2.5 w-2.5 rounded-[3px]"
                        style={{ backgroundColor: item.payload.fill }}
                      />
                      <span>{name}</span>
                      <span>${Number(value).toFixed(2)}</span>
                    </div>
                  )}
                  hideLabel
                />
              }
            />
            <Pie data={chartData} dataKey="amount" nameKey="expenses" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total Income/Expenses for the last Year
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChartPie;
