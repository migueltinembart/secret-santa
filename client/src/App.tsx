import { useState } from "react";
import Box from "./components/Box";
import { secretSantaCodeStore } from "./store/formState";
function App() {
  const code = secretSantaCodeStore((state) => state.code);
  return (
    <>
      <div className="w-screen h-screen flex flex-row justify-center items-center">
        <Box grid rows={2} cols={2}>
          <div className="col-span-2 text-center text-3xl">Secret Santa</div>
          <form
            action="/index/:id"
            method="get"
            className="flex flex-col justify-start"
          >
            <label htmlFor="secret-santa-codebox">
              Paste your secret santa code here...
            </label>

            <input
              type="text"
              id="secret-santa-codebox"
              minLength={8}
              maxLength={8}
            ></input>
            <br />
            <input type="submit" value="Submit" className="hover:bg-red-200" />
          </form>
          <form
            action="/register"
            method="post"
            className="flex flex-col gap-1"
          >
            <label htmlFor="firstName">First Name: </label>
            <input type="text" name="First Name" id="firstName" />
            <br />
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" name="Last Name" id="lastName" />
            <br />
            <label htmlFor="email">E-Mail: </label>
            <input type="email" name="E-Mail" id="email" />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </Box>
      </div>
    </>
  );
}

export default App;
