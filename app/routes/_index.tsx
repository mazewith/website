import type { MetaFunction } from "@remix-run/node";
import About from "src/components/Landing";
import Learn from "src/components/Learn";
import Features from "src/components/Features";

export const meta: MetaFunction = () => {
  return [
    { title: "MazeWith - Multiplayer Maze Game" },
    {
      name: "description",
      content:
        "MazeWith is a multiplayer maze game that you can play with friends.",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <About />
      <Features />
      <Learn />
    </div>
  );
}
