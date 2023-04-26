import { useEffect } from "react";
import { themeChange } from "theme-change";
import NavBar from "./components/base/NavBar";
import { Outlet } from "react-router-dom";
import Content from "./components/base/Content";
import Footer from "./components/base/Footer";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="p-2 flex flex-col flex-1">
          <NavBar themes={"night,winter"} />
          <Content className="p-6 shadow-md flex-1 rounded-md border">
            <Outlet context={"/"} />
          </Content>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

// dont forget to set second theme before commit
