import "../styles/App.css";
 import About from "./about/About";
import Contacts from "./contact/Contacts";
import Experience from "./experience/Experience";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Projet from "./projet/Projet";

function App() {
  return (
    <>
      <Nav/>
      <Header />
      <About></About>
      <Experience />
      <Projet />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
