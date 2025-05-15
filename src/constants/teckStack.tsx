import Image from "next/image";

import StackIcon from "tech-stack-icons";
import { SiApollographql, SiRecoil, SiStyledcomponents, SiVercel, SiNotion } from "react-icons/si";
import { zeplinIcon } from "../../public/images";

export type TechStack = {
  id: number;
  type: string;
  title: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  icon: () => JSX.Element;
};

export const techStacks: TechStack[] = [
  {
    id: 1,
    type: "languages",
    title: "Languages",
    skills: [
      {
        name: "JavaScript",
        icon: () => <StackIcon name="js" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "TypeScript",
        icon: () => <StackIcon name="typescript" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "Python",
        icon: () => <StackIcon name="python" className="size-[20px] md:size-[30px]" />,
      },
    ],
  },
  {
    id: 2,
    type: "framework",
    title: "Framework / Library",
    skills: [
      {
        name: "React",
        icon: () => <StackIcon name="reactjs" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "NextJs",
        icon: () => <StackIcon name="nextjs2" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "ReactNative",
        icon: () => <StackIcon name="reactjs" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "NestJs",
        icon: () => <StackIcon name="nestjs" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "Prisma",
        icon: () => <StackIcon name="prisma" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "GraphQL",
        icon: () => <StackIcon name="graphql" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "Apollo",
        icon: () => <SiApollographql className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "Recoil",
        icon: () => <SiRecoil className="size-[20px] md:size-[30px] text-[#1480FD]" />,
      },
      {
        name: "TailwindCSS",
        icon: () => <StackIcon name="tailwindcss" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "Styled-Components",
        icon: () => <SiStyledcomponents className="size-[20px] md:size-[30px]" />,
      },
    ],
  },
  {
    id: 3,
    type: "devops",
    title: "DevOps",
    skills: [
      {
        name: "Vercel",
        icon: () => (
          <div className="flex justify-center items-center size-[20px] md:size-[30px] bg-black rounded-full">
            <SiVercel className="size-[12px] md:size-[16px] text-white" />
          </div>
        ),
      },
      {
        name: "Docker",
        icon: () => <StackIcon name="docker" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "AWS",
        icon: () => <StackIcon name="aws" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "Git",
        icon: () => <StackIcon name="git" className="size-[20px] md:size-[30px]" />,
      },
    ],
  },
  {
    id: 4,
    type: "database",
    title: "Database",
    skills: [
      {
        name: "MySQL",
        icon: () => <StackIcon name="mysql" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "MongoDB",
        icon: () => <StackIcon name="mongodb" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "Redis",
        icon: () => <StackIcon name="redis" className="size-[20px] md:size-[30px]" />,
      },
    ],
  },
  {
    id: 5,
    type: "etc",
    title: "Etc",
    skills: [
      {
        name: "Notion",
        icon: () => <SiNotion className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "Slack",
        icon: () => <StackIcon name="slack" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "Figma",
        icon: () => <StackIcon name="figma" className="size-[20px] md:size-[30px]" />,
      },
      {
        name: "Zeplin",
        icon: () => <Image src={zeplinIcon} className="size-[20px] md:size-[30px]" alt="Zeplin" />,
      },
    ],
  },
];
