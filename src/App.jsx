import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="pt-20">
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  );
}
