import { config } from "src/config";
import HeroImage from "/HeroImage.jpg";

export default function Landing() {
  return (
    <section
      id="about"
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content text-center mb-10">
        <div className="max-w-screen-md">
          <h1 className="mb-5 lg:text-6xl font-bold text-blue-200 md:text-5xl text-3xl">
            READY TO
            <br />
            ESCAPE THE MAZE? 🌀
          </h1>
          <div className="hover:drop-shadow-[0_0_12px_#f0abfc]">
            <a
              className="btn btn-lg btn-outline rounded-none border-2 text-fuchsia-200 my-7 hover:bg-fuchsia-200 hover:text-white hover:shadow-2xl hover:scale-110 "
              href={config.gameUrl}
            >
              Enter Now
            </a>
          </div>
          <p className="mb-5 lg:text-xl text-white md:text-xl text-lg">
            A maze-solving game where players compete to reach the exit first.
            <br />
            Can you beat the maze faster than others?
          </p>
        </div>
      </div>
      <a href="#features">
        <svg
          fill="#ffffff"
          height="24px"
          width="24px"
          viewBox="0 0 330 330"
          className="absolute bottom-4"
        >
          <path
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
          c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
          s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
      </a>
    </section>
  );
}
