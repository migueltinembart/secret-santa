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

export async function fetchFromFormPost<T>(
  e: FormEvent<HTMLFormElement>,
  body: T
) {
  e.preventDefault();
  const {
    currentTarget: { action },
  } = e;
  try {
    return await fetch(action, {
      method: "POST", // GET, POST, PUT, DELETE
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error);
  }
}
