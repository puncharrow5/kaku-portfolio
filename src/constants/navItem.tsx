import { IoMdHome } from "react-icons/io";
import { IoPersonSharp, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { BsStack } from "react-icons/bs";
import { PiProjectorScreenChartBold } from "react-icons/pi";

export type NavItem = {
  id: number;
  name: string;
  icon: () => JSX.Element;
  mobileIcon: () => JSX.Element;
};

export const navItems: NavItem[] = [
  {
    id: 0,
    name: "INTRO",
    icon: () => <IoMdHome size={25} />,
    mobileIcon: () => <IoMdHome size={20} />,
  },
  {
    id: 1,
    name: "ABOUT",
    icon: () => <IoPersonSharp size={25} />,
    mobileIcon: () => <IoPersonSharp size={20} />,
  },
  {
    id: 2,
    name: "CAREER",
    icon: () => <CgFileDocument size={25} />,
    mobileIcon: () => <CgFileDocument size={20} />,
  },
  {
    id: 3,
    name: "SKILL",
    icon: () => <BsStack size={25} />,
    mobileIcon: () => <BsStack size={20} />,
  },
  {
    id: 4,
    name: "PROJECT",
    icon: () => <PiProjectorScreenChartBold size={25} />,
    mobileIcon: () => <PiProjectorScreenChartBold size={20} />,
  },
  {
    id: 5,
    name: "CONTACT",
    icon: () => <IoChatbubbleEllipsesOutline size={25} />,
    mobileIcon: () => <IoChatbubbleEllipsesOutline size={20} />,
  },
];
