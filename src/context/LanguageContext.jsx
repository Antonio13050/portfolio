import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem("portfolio_lang");
        return saved || "pt";
    });

    useEffect(() => {
        localStorage.setItem("portfolio_lang", language);
        document.documentElement.lang = language;
    }, [language]);

    const t = translations[language] || translations.pt;

    // Campos do data.json podem ser texto único ou { pt, en, es }
    const localize = (value) =>
        value && typeof value === "object" && !Array.isArray(value)
            ? value[language] ?? value.pt
            : value;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, localize }}>
            {children}
        </LanguageContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
