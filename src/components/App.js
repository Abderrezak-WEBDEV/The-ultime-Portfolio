import "../styles/App.css";
import About from "./about/About";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Nav from "./nav/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
