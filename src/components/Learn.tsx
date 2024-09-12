import GatherImage from "/Gather.jpg";
import ScanImage from "/Scan.jpg";
import ControlImage from "/Control.jpg";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="flex flex-row flex-wrap content-between justify-center items-center w-full">
      <figure className="px-10 pt-10 lg:w-full">
        <img src={image} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center lg:text-base">
        <h2 className="card-title md:text-3xl lg:text-2xl">{title}</h2>
        <p className="md:text-xl lg:text-base">{description}</p>
      </div>
    </div>
  );
};

export default function Learn() {
  return (
    <section id="learn" className="w-full hero bg-base-100">
      {/* <div className="hero-overlay bg-opacity-70" /> */}
      <div className="flex-col text-white gap-8">
        <h3 className="text-5xl font-semibold py-16 text-center">
          How to Play
        </h3>
        <div className="grid w-full max-w-md grid-cols-1 md:max-w-xl lg:max-w-6xl lg:grid-cols-3">
          <Card
            title="Gather Around"
            description="Gather everyone around the screen and launch the game."
            image={GatherImage}
          />
          <Card
            title="Scan the QR Code"
            description="Scan the QR code with your phone to connect to the game."
            image={ScanImage}
          />
          <Card
            title="Use Your Phone"
            description="Use your phone as a controller to navigate the maze. Race to the exit or collaborate with others to solve the maze!"
            image={ControlImage}
          />
        </div>
      </div>
    </section>
  );
}
