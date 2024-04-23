import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Career from "./components/Career";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import StarBackground from "./components/Background";

function App() {
    return (
        <>
            <div className=" bg-gradient-to-b from-black to-gray-800 overflow-x-hidden">
                <StarBackground />
                <NavBar />
                <Home />
                <About />
                <Portfolio />
                <Skills />
                <Career />
                <Modal />
                <Footer />
            </div>
        </>
    );
}

export default App;
