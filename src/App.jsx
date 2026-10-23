import { lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Career from "./components/Career";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

// three.js é pesado: carrega em um chunk separado, depois do conteúdo
const StarBackground = lazy(() => import("./components/Background"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function App() {
    return (
        <LanguageProvider>
            <div className="bg-gradient-to-b from-black via-zinc-950 to-zinc-900 overflow-x-hidden min-h-screen text-white selection:bg-indigo-500 selection:text-white">
                {!prefersReducedMotion && (
                    <Suspense fallback={null}>
                        <StarBackground />
                    </Suspense>
                )}
                <NavBar />

                <main>
                    <Home />
                    <About />
                    <Portfolio />
                    <Skills />
                    <Career />
                </main>

                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
