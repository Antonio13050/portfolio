// Imagens dos projetos: "pasta/arquivo.webp" (relativo a src/assets) -> URL final gerada pelo Vite
const files = import.meta.glob("../assets/{covers,projects}/**/*.webp", { eager: true, import: "default" });

export function assetUrl(path) {
    return files[`../assets/${path}`];
}
