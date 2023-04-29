import { create } from "zustand";

enum Status {
  Success,
  Failed,
  Pending,
}

export interface RegistrationStore {
  firstName: string;
  setFirstName: (input: string) => void;
  lastName: string;
  setLastName: (input: string) => void;
  email: string;
  setEmail: (input: string) => void;
  registrationStatus: Status;
  setRegistrationStatus: (status: Status) => void;
}
/**
 * this store holds functions for manipulating state for a registration form
 */
const useStore = create<RegistrationStore>()((set) => ({
  firstName: "",
  setFirstName: (input: string) =>
    set((state) => ({
      firstName: (state.firstName = input),
    })),
  lastName: "",
  setLastName: (input: string) =>
    set((state) => ({
      lastName: (state.lastName = input),
    })),
  email: "",
  setEmail: (input: string) =>
    set((state) => ({
      email: (state.email = input),
    })),
  registrationStatus: Status.Pending,
  setRegistrationStatus: (status: Status) =>
    set((state) => ({
      registrationStatus: (state.registrationStatus = status),
    })),
}));

export { useStore };
