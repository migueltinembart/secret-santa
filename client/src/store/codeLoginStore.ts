import { create } from "zustand";

interface CodeLoginStore {
  code: string;
  changeCode: (input: string) => void;
}

const useStore = create<CodeLoginStore>()((set) => ({
  code: "",
  changeCode: (input: string) =>
    set((state) => ({ code: (state.code = input) })),
}));

export { useStore };
