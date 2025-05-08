import { atom } from "recoil";

export type CardModalState = {
  show: boolean;
  projectNumber: number | undefined;
};

export const cardModalState = atom<CardModalState>({
  key: "cardModalState",
  default: {
    show: false,
    projectNumber: undefined,
  },
});
