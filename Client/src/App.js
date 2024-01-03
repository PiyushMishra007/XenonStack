import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import DataProvider from "./context/DataProvider";

import Login from "./pages/Login";
function App() {
  return (
    <div>
      <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
