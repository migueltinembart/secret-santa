import { create } from "zustand";

const secretSantaCodeStore = create((set) => ({
  code: "",
  changeCode: (input: String) => set((state: String) => ({ code: input })),
}));

export { secretSantaCodeStore };
