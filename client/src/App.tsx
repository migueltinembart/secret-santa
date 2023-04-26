import { useEffect } from "react";
import { themeChange } from "theme-change";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Content from "./components/Content";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <div className="p-2 flex flex-col h-screen">
        <NavBar themes={"bumblebee,dark"} />
        <Content className="px-6 shadow-md flex-1 rounded-md">
          <Outlet context={"/"} />
        </Content>
      </div>
    </>
  );
}

export default App;
