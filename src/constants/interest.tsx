import { IoGameController } from "react-icons/io5";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaComputer } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { PiCookingPotFill } from "react-icons/pi";

export type Interest = {
  type: string;
  icon: () => JSX.Element;
  color?: string;
};

export const interests: Interest[] = [
  {
    type: "Develop",
    icon: () => <FaComputer size={27} />,
    color: "#3873E2",
  },
  {
    type: "Music",
    icon: () => <SiApplemusic size={27} />,
    color: "#08DA64",
  },
  {
    type: "Movie",
    icon: () => <BiSolidMoviePlay size={27} />,
    color: "#E6111B",
  },
  {
    type: "Game",
    icon: () => <IoGameController size={27} />,
    color: "#2574A3",
  },
  {
    type: "Cook",
    icon: () => <PiCookingPotFill size={27} />,
    color: "#F38A91",
  },
];
