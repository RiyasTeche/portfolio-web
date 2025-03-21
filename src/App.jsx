import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Experiance from "./pages/Experiance";
import Projects from "./pages/Project/Projects";
import Contact from "./pages/Contacts/Contacts";

import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import ContactLayout from "./components/layouts/ContactLayout";

function App() {
  return (
    <>
      <Routes>
        {/* Routes with Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<About />} />
          <Route path="/experiance" element={<Experiance />} />
          <Route path="/projects" element={<Projects />} />
        </Route>

        {/* Routes with Conatct Layout */}
        <Route element={<ContactLayout />}>
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
