import { atom } from "recoil";

export type MapModalState = {
  show: boolean;
};

export const mapModalState = atom<MapModalState>({
  key: "mapModalState",
  default: {
    show: false,
  },
});
