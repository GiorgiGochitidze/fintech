"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
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

export const description = "A multiple bar chart";

const chartData = [
  { month: "January", income: 214, expenses: 80 },
  { month: "February", income: 305, expenses: 200 },
  { month: "March", income: 237, expenses: 120 },
  { month: "April", income: 73, expenses: 190 },
  { month: "May", income: 209, expenses: 130 },
  { month: "June", income: 354, expenses: 290 },
  { month: "July", income: 157, expenses: 99 },
  { month: "August", income: 256, expenses: 150 },
  { month: "September", income: 379, expenses: 50 },
  { month: "October", income: 144, expenses: 100 },
  { month: "November", income: 214, expenses: 140 },
  { month: "December", income: 214, expenses: 140 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "#10B981",
  },
  expenses: {
    label: "Expenses",
    color: "#EF4444",
  },
} satisfies ChartConfig;

const ChartBar = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-white">Cash Flow Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value, name, item) => (
                    <>
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                        style={{ backgroundColor: item.color }}
                      />
                      {chartConfig[name as keyof typeof chartConfig]?.label}
                      <div className="ml-auto font-mono font-medium">
                        ${Number(value).toLocaleString()}
                      </div>
                    </>
                  )}
                  indicator="dashed"
                />
              }
            />
            <Bar dataKey="income" fill="var(--color-income)" radius={4} />
            <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChartBar;
