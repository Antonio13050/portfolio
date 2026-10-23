import { lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Career from "./components/Career";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

// three.js é pesado: carrega em um chunk separado, depois do conteúdo
const StarBackground = lazy(() => import("./components/Background"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function App() {
    return (
        <LanguageProvider>
            <div className="min-h-screen overflow-x-hidden bg-night font-sans text-mist-bright selection:bg-accent selection:text-night">
                {!prefersReducedMotion && (
                    <Suspense fallback={null}>
                        <StarBackground />
                    </Suspense>
                )}
                <NavBar />

                <main>
                    <Home />
                    <Portfolio />
                    <Career />
                    <Skills />
                    <Contact />
                </main>

                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
