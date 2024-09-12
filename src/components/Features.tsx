import AdventuresImage from "/Adventures.jpg";
import SmoothControlImage from "/SmoothControl.jpg";
import ScoreboardImage from "/Scoreboard.jpg";

interface CardProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const Card = ({ title, description, image, reverse }: CardProps) => {
  const flexDir = reverse ? "flex-col" : "flex-col";
  const lgFlexDir = reverse ? "lg:flex-row" : "lg:flex-row-reverse";
  return (
    <div
      className={`hero-content ${flexDir} m-8 pb-12 ${lgFlexDir} gap-12 border-4 border-slate-500 shadow-2xl`}
    >
      <img
        src={image}
        alt={title}
        className="shadow-xl md:w-[70%] lg:w-[55%]"
      />
      <div className="flex flex-col justify-around">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6">{description}</p>
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <section id="features" className="hero bg-base-300">
      <div className="hero-overlay bg-opacity-70" />
      <div className="flex-col text-white py-12 gap-8">
        <h3 className="text-5xl font-semibold py-8 text-center">
          Key Features
        </h3>
        <Card
          title="Endless Maze Adventures"
          description="No two games are alike! Every refresh brings a brand-new maze, keeping you on your toes with every twist and turn."
          image={AdventuresImage}
        />
        <Card
          title="Smooth Mobile Controls"
          description="Glide through the maze effortlessly using your smartphone as a controller. Quick reactions are your key to success!"
          image={SmoothControlImage}
          reverse
        />
        <Card
          title="Competitive Step Challenge"
          description="It's not just about getting there fast—every step counts! Outsmart your rivals by finding the shortest path and proving who's the real maze master"
          image={ScoreboardImage}
        />
      </div>
    </section>
  );
}
