# Portfólio — Antonio Carlos Virissimo

Portfólio pessoal de **Antonio Carlos Virissimo**, desenvolvedor de software na Softplan, com foco em IA Generativa e sistemas multi-agentes, Java 21 / Spring Boot e Next.js / React.

O site é uma single page com as seções **Home**, **Sobre**, **Portfólio**, **Skills** e **Trajetória**, disponível em **português, inglês e espanhol**.

## Stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Headless UI](https://headlessui.com/) (menu mobile e modal) e [Heroicons](https://heroicons.com/) / [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/) (seletor de idioma)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) (fundo de estrelas, carregado sob demanda)
- [react-scroll](https://github.com/fisshy/react-scroll) (navegação entre seções)

## Rodando localmente

Requer Node.js 18+.

```bash
npm install
npm run dev       # servidor de desenvolvimento em http://localhost:5173
npm run lint      # ESLint
npm run build     # build de produção em dist/
npm run preview   # serve o build localmente
```

## Estrutura

```
public/
  curriculo.pdf          # CV baixado pelo botão "Baixar CV"
src/
  components/            # uma seção ou componente por arquivo
  context/
    LanguageContext.jsx  # idioma atual, textos (t) e localize()
  data/
    translations.js      # textos fixos da interface (pt, en, es)
    data.json            # carreira, formação e projetos
  assets/
    covers/              # capas dos cards de projeto (.webp)
```

## Editando o conteúdo

### Textos da interface

Ficam em `src/data/translations.js`, com um bloco por idioma (`pt`, `en`, `es`). Ao criar uma chave nova, adicione-a nos três blocos.

### Carreira, formação e projetos

Ficam em `src/data/data.json`. Qualquer campo de texto pode ser uma string única, para textos iguais em todos os idiomas, ou um objeto por idioma:

```json
"description": {
    "pt": "Texto em português",
    "en": "Text in English",
    "es": "Texto en español"
}
```

Os componentes resolvem esses campos com `localize()`, do `LanguageContext`. Se faltar a tradução, o texto em português é usado.

### Adicionando um projeto

Acrescente um item em `projects` no `data.json`:

| Campo | Obrigatório | Descrição |
| --- | --- | --- |
| `id` | sim | número único |
| `title`, `description` | sim | texto ou objeto `{ pt, en, es }` |
| `category` | sim | `IA`, `Backend`, `Fullstack` ou `Frontend` (usado no filtro) |
| `tags` | sim | lista de tecnologias |
| `badgeType` | não | `Enterprise`, `OpenSource` ou `LiveDemo` (define a cor do selo) |
| `badgeText` | não | texto do selo |
| `highlights` | não | lista (ou objeto `{ pt, en, es }` de listas) com os destaques |
| `link` | não | URL do repositório no GitHub |
| `online` | não | URL da demo |
| `cover` | não | nome de um arquivo em `src/assets/covers/` |

Para a capa, use um print em `.webp` com cerca de 800 px de largura.
