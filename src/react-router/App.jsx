import React from "react";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { FullArticle } from "./components/FullArticle";

function App() {
  const pathname = window.location.pathname;
  const id = pathname.split("/").pop();

  return (
    <>
      <Header />
      {pathname === "/" && <Home />}
      {pathname === "/about" && <About />}
      {pathname === "/login" && <h1>Логин</h1>}
      {pathname === `/post/${id}` && <FullArticle id={id} />}
      <Footer />
    </>
  );
}

export default App;
