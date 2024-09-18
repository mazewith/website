import LogoImage from "/favicon.ico";
import { config } from "src/config";

export default function Header() {
  return (
    <div className="navbar absolute">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a href="#records">Records</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#learn">Learn</a>
            </li>
          </ul>
        </div>
        <a className="btn hover:bg-inherit text-xl" href="/#">
          <img src={LogoImage} alt="Logo" height={24} width={24} />
          {config.name}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base text-[#f2e0c8]">
          <li>
            <a href="#records">Records</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#learn">Learn</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary px-8 text-xl" href={config.gameUrl}>
          Play
        </a>
      </div>
    </div>
  );
}
