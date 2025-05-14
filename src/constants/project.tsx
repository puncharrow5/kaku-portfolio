import Image, { StaticImageData } from "next/image";

import {
  bangbaesa1,
  bangbaesa2,
  bangbaesa3,
  bangbaesa4,
  bangbaesa5,
  bangbaesa6,
  bangbaesaLogo,
  landingPage1,
  landingPage2,
  landingPage3,
  landingPage4,
  limeodyssey1,
  limeodyssey2,
  limeodyssey3,
  limeodyssey4,
  limeodysseyThumbnail,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  realdivision1,
  realdivision2,
  realdivision3,
  realdivision4,
  realdivision5,
  realdivisionThumbnail,
  stacolink1,
  stacolink2,
  stacolink3,
  stacolink4,
  stacolink5,
  stacolink6,
  stacolinkLogo,
} from "../../public/images";

export type Project = {
  thumbnail: () => JSX.Element;
  title: string;
  projectType: string;
  period: string;
  summary: string;
  workers: string;
  contribution: string;
  stacks: string[];
  role: string;
  tasks: string[];
  achievements: string[];
  slideImages: StaticImageData[];
  contents: string[];
  links?: string[];
  githubs?: string[];
};

export const projects: Project[] = [
  {
    thumbnail: () => (
      <div className="flex justify-center items-center h-[300px] px-[40px] bg-[#1A1A1A] rounded-t-lg">
        <Image src={realdivisionThumbnail} alt="리얼디비젼 로고" />
      </div>
    ),
    title: "리얼디비젼",
    projectType: "회사 프로젝트",
    period: "2023. 11",
    summary: "회사 홈페이지",
    workers: "3인 (개발 1인, 기획 1인, 디자인 1인)",
    contribution: "100%",
    role: "프론트엔드 개발",
    stacks: ["TypeScript", "NextJs", "Styled-Components", "Git"],
    tasks: ["회사 홈페이지 리뉴얼 개발 일괄 담당"],
    achievements: ["회사 홈페이지 개발 및 배포 완료"],
    slideImages: [realdivision1, realdivision2, realdivision3, realdivision4, realdivision5],
    contents: ["회사 홈페이지 리뉴얼 작업", "첫 실무 프로젝트"],
  },
  {
    thumbnail: () => (
      <div className="flex justify-center items-center h-[300px] px-[40px] bg-[#FF6600] rounded-t-lg">
        <Image src={bangbaesaLogo} alt="방배사 로고" />
      </div>
    ),
    title: "방배사 앱",
    projectType: "회사 프로젝트",
    period: "2023. 12 ~ 2024. 08",
    summary: "블록체인 지갑 및 거래 플랫폼 앱",
    workers: "7인 (개발 3인, 기획 2인, 디자인 2인)",
    contribution: "30%",
    role: "앱, 백엔드, 어드민 개발",
    stacks: [
      "TypeScript",
      "ReactNative",
      "Apollo",
      "Recoil",
      "Styled-Components",
      "TailwindCSS",
      "NestJs",
      "Prisma",
      "Graphql",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
      "Git",
    ],
    tasks: [
      "블록체인 지갑 및 가상화폐 거래 플랫폼 “방배사” 모바일 앱, 백엔드, 어드민 개발",
      "공통 컴포넌트 개발",
      "거래 오퍼 관련 기능 개발",
      "채팅 거래 기능 개발",
      "가상화폐 지갑 관련 기능 개발",
      "거래 주문서 관련 기능 개발",
      "활동 내역 관련 기능 개발",
      "회원 신분 인증 기능 개발",
      "앱 튜토리얼 기능 개발",
      "기존 설계되어 있던 스키마 구조 개선 및 설계 (채팅, 주문서, 거래내역)",
    ],
    achievements: [
      "기존 AsyncStorage 기반의 데이터 저장 방식 개선하여 데이터 접근 속도 약 30 배 향상",
      "가상화폐 시세 조회 기능을 Cron 스케줄링과 Redis 캐싱 구조로 변경하여 API 호출 수 절감 및 응답속도 향상",
      "기존 KeyboardAvoidingView 의 한계를 보완하기 위해 커스텀 컴포넌트 직접 구현, 다양한 모바일 기기 대응력 향상 및 자연스러운 애니메이션 효과로 입력 UX 개선",
      "기존 스타일링 방식의 비효율성을 개선하기 위해 Tailwind CSS 도입 제안 및 적용을 주도하여 생상성 향상 및 UI 일관성 유지에 기여",
      "스켈레톤 이미지를 도입하여 로딩 중 사용자 경험 개선",
      "전반적인 리팩토링을 통해 코드 및 컴포넌트 구조의 일관성 및 유지보수성 향상",
      "전반적인 앱 성능 및 속도 개선",
      "방배사 앱, 어드민 개발 및 배포 완료",
      "앱스토어와 플레이스토어 앱 등록 완료",
    ],
    slideImages: [bangbaesa1, bangbaesa2, bangbaesa3, bangbaesa4, bangbaesa5, bangbaesa6],
    contents: ["블록체인 지갑 및 가상화폐 거래 플랫폼 “방배사” 모바일 앱"],
    links: ["https://apps.apple.com/kr/app/%EB%B0%A9%EB%B0%B0%EC%82%AC/id6475664262"],
  },
  {
    thumbnail: () => (
      <div className="flex justify-center items-center h-[300px] px-[40px] bg-white rounded-t-lg">
        <Image src={limeodysseyThumbnail} alt="라임오디세이 로고" />
      </div>
    ),
    title: "라임오디세이",
    projectType: "회사 프로젝트",
    period: "2024. 07 ~ 2024. 08",
    summary: "모바일 게임 사전예약 사이트",
    workers: "5인 (개발 2인, 기획 2인, 디자인 1인)",
    contribution: "50%",
    role: "프론트엔드, 어드민 개발",
    stacks: [
      "TypeScript",
      "NextJs",
      "Recoil",
      "GSAP",
      "TailwindCSS",
      "Prisma",
      "MySQL",
      "Docker",
      "AWS",
      "Git",
    ],
    tasks: [
      "스타코링크 社의 퍼블리싱 신작 “라임오디세이”의 사전예약 사이트 및 어드민 개발",
      "사전예약 관리 기능 개발",
      "구글 메타픽셀 연동으로 사용자 이벤트 데이터 관리",
      "사전예약 사용자 정보를 자동 수집/정리하여 .xlsx 파일로 변환 및 다운로드 기능 구현",
    ],
    achievements: [
      "라임오디세이 사전예약 사이트 및 어드민 개발 및 배포 완료",
      "라임오디세이 사전예약자 약 3천명 이상 등록",
      "애니메이션 및 이미지 최적화로 전반적인 사이트 성능 및 속도 50% 개선",
    ],
    slideImages: [limeodyssey1, limeodyssey2, limeodyssey3, limeodyssey4],
    contents: ["스타코링크 社의 퍼블리싱 신작 모바일 게임 '라임오디세이'의 사전예약 사이트"],
  },
  {
    thumbnail: () => (
      <div className="flex justify-center items-center h-[300px] px-[40px] bg-white rounded-t-lg">
        <Image src={stacolinkLogo} alt="스타코링크 로고" />
      </div>
    ),
    title: "스타코링크",
    projectType: "회사 프로젝트",
    period: "2024. 08",
    summary: "회사 홈페이지",
    workers: "5인 (개발 2인, 기획 2인, 디자인 1인)",
    contribution: "60%",
    role: "프론트엔드, 어드민 개발",
    stacks: [
      "TypeScript",
      "NextJs",
      "SWR",
      "Recoil",
      "GSAP",
      "TailwindCSS",
      "Prisma",
      "MySQL",
      "Docker",
      "AWS",
      "Git",
    ],
    tasks: [
      "스타코링크 홈페이지 프론트엔드 및 어드민 개발",
      "공통 컴포넌트 개발",
      "NextJs 의 App router 방식과 SSR 을 활용한 SEO 최적화",
      "공공데이터 Open API를 통한 주가 및 공시 정보 데이터 연동",
    ],
    achievements: [
      "스타코링크 홈페이지 및 어드민 개발 및 납품 완료",
      "App Router 구조 도입 제안 및 적용을 통해 기존 Next.js 프로젝트에서 사용 중이던 Pages Router 구조를 App Router 로 전환, SSR 을 통한 SEO 최적화와 성능 향상 및 페이지 구조의 일관성을 확보",
    ],
    slideImages: [stacolink1, stacolink2, stacolink3, stacolink4, stacolink5, stacolink6],
    contents: ["협력사인 스타코링크 社의 회사 홈페이지 리뉴얼 작업"],
  },

  {
    thumbnail: () => (
      <div
        className="flex justify-center items-center h-[300px] rounded-t-lg"
        style={{
          backgroundImage: `url("/images/portfolio-1.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    ),
    title: "포트폴리오 사이트",
    projectType: "개인 프로젝트",
    period: "2025. 02",
    summary: "포트폴리오 사이트",
    workers: "1인",
    contribution: "100%",
    role: "프론트엔드 개발",
    stacks: ["TypeScript", "NextJs", "Recoil", "GSAP", "TailwindCSS", "Vercel", "Git"],
    tasks: ["포트폴리오 사이트 프론트엔드 개발", "포트폴리오 사이트 배포"],
    achievements: ["포트폴리오 사이트 개발 및 배포 완료"],
    slideImages: [portfolio1, portfolio2, portfolio3, portfolio4],
    contents: ["개발자 포트폴리오 사이트"],
    links: ["https://kaku-portfolio.info"],
    githubs: ["https://github.com/puncharrow5/kaku-portfolio"],
  },
  {
    thumbnail: () => (
      <div className="flex justify-center items-center h-[300px]  rounded-t-lg overflow-hidden">
        <Image src={landingPage1} alt="랜딩페이지 에디터" />
      </div>
    ),
    title: "랜딩페이지 에디터",
    projectType: "개인 프로젝트",
    period: "2025. 03 ~ 2025. 04",
    summary: "간단한 랜딩페이지를 직접 제작하는 서비스",
    workers: "1인",
    contribution: "100%",
    role: "프론트엔드, 백엔드 개발",
    stacks: [
      "TypeScript",
      "NextJs",
      "Apollo",
      "Styled-Components",
      "TailwindCSS",
      "NestJs",
      "Prisma",
      "Graphql",
      "MySQL",
      "Redis",
      "Docker",
      "AWS",
      "Git",
    ],
    tasks: ["랜딩페이지 에디터 프론트엔드 및 백엔드 개발"],
    achievements: ["개인 프로젝트 완료"],
    slideImages: [landingPage1, landingPage2, landingPage3, landingPage4],
    contents: ["간단한 랜딩페이지를 직접 제작하는 서비스"],
    githubs: [
      "https://github.com/puncharrow5/landing-page-editor-frontend",
      "https://github.com/puncharrow5/landing-page-editor-server",
      "https://github.com/puncharrow5/landing-page-editor-viewer",
    ],
  },
];
