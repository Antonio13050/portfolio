// Imagens dos projetos: "pasta/arquivo.webp" (relativo a src/assets) -> URL final gerada pelo Vite
const files = import.meta.glob("../assets/{covers,projects}/**/*.webp", { eager: true, import: "default" });

export function assetUrl(path) {
    return files[`../assets/${path}`];
}

// Galeria do projeto já no idioma atual; sem galeria, a capa sozinha. A primeira imagem é a capa.
export function projectImages(item, localize) {
    const list = item.gallery ?? (item.cover ? [{ image: `covers/${item.cover}` }] : []);
    return list.map((image) => ({
        src: assetUrl(localize(image.image)),
        title: localize(image.title),
        caption: localize(image.caption),
    }));
}
