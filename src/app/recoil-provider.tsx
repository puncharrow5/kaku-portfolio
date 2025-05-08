"use client";

import { RecoilRoot } from "recoil";

interface Props {
  children: React.ReactNode;
}

export const RecoilProvider = ({ children }: Props) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
