import { FormEvent } from "react";

export async function fetchFromFormGet(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const {
    currentTarget: { action },
  } = e;

  return await fetch(action)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
