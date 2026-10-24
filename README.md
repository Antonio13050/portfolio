# Portfólio — Antonio Carlos Virissimo

Portfólio pessoal de **Antonio Carlos Virissimo**, desenvolvedor de software na Softplan, com foco em IA Generativa e sistemas multi-agentes, Java 21 / Spring Boot e Next.js / React.

O site é uma single page com as seções **Início**, **Projetos**, **Experiência e formação**, **Competências** e **Contato**, disponível em **português, inglês e espanhol**.

## Stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Headless UI](https://headlessui.com/) (menu mobile e modal) e [Heroicons](https://heroicons.com/) / [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/) (seletor de idioma)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) (fundo de estrelas, carregado sob demanda)
- [react-scroll](https://github.com/fisshy/react-scroll) (navegação entre seções)

## Rodando localmente

Requer Node.js 24 (mesma versão usada no deploy da Vercel, definida em `engines` no package.json).

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
  curriculo.pdf          # currículo baixado pelos botões "Baixar currículo"
src/
  components/            # uma seção ou componente por arquivo
  context/
    LanguageContext.jsx  # idioma atual, textos (t) e localize()
  data/
    translations.js      # textos fixos da interface (pt, en, es)
    data.json            # carreira, formação e projetos
    links.js             # links de contato (GitHub, LinkedIn, WhatsApp, currículo)
    skills.js            # competências: grupos de IA (com "Usado em") e base técnica
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

### Carreira e formação

Os itens de `career` e `education` aparecem juntos na linha do tempo, agrupados pelo ano de `start` (`"AAAA-MM"`, também usado na ordenação). Cada item tem `title`, `description`, `dates` (texto exibido) e `details` (parágrafos do modal). O cargo atual é o de `id` 1 em `career` (`CURRENT_ROLE_ID` em `Career.jsx`).

### Adicionando um projeto

Cada projeto tem uma ficha completa em `docs/projetos/<nome>.md` (contexto, arquitetura, stack, links e pendências). O card do site é um resumo dela: atualize a ficha primeiro.

Acrescente um item em `projects` no `data.json`:

| Campo | Obrigatório | Descrição |
| --- | --- | --- |
| `id` | sim | número único |
| `title`, `description` | sim | texto ou objeto `{ pt, en, es }`; no título, o que vem depois de ` — ` vira o subtítulo; a `description` completa aparece na janela "Ver detalhes" |
| `summary` | sim | resumo de uma ou duas frases, exibido na vitrine ou no cartão de "Outros projetos" |
| `featured` | não | `true` coloca o projeto na vitrine principal (imagem grande, um por linha); sem ele, vai para "Outros projetos" |
| `category` | sim | `IA`, `Backend`, `Fullstack` ou `Frontend` |
| `tags` | sim | lista de tecnologias; a vitrine mostra as 6 primeiras |
| `badgeType` | não | `Enterprise` mostra "Repositório corporativo" no lugar do link; `OpenSource` e `LiveDemo` são informativos |
| `badgeText` | não | rótulo acima do título (ex.: "Em produção · Líder Imóveis") |
| `keyPoints` | não | 3 destaques `{ title, text }` exibidos em mini-blocos na vitrine |
| `steps` | não | passos `{ title, text }` da seção "Como funciona" na janela de detalhes |
| `facts` | não | linhas `{ label, value }` do quadro "Informações" na janela de detalhes |
| `stackGroups` | não | tecnologias agrupadas `{ group, items }` na janela de detalhes; sem ele, a janela usa `tags` |
| `link` | não | URL do repositório no GitHub |
| `online` | não | URL da demo |
| `site` | não | URL do site do produto (link "Site do app") |
| `private` | não | `true` mostra "Código privado" no lugar do link do repositório |
| `gallery` | não | lista de imagens `{ image, title, caption }`; a primeira é a capa e o clique abre a galeria |
| `galleryNote` | não | aviso exibido na galeria (ex.: "dados de demonstração") |
| `cover` | não | sem `gallery`, um arquivo em `src/assets/covers/` (abre ampliado ao clicar) |
| `flow` | não | fluxo da arquitetura exibido quando não há imagem (ex.: `EJE → CDC → SIE-PJ`) |

Na galeria, `image` é um caminho relativo a `src/assets/` (ex.: `projects/imobi/01-atendimento.webp`) ou um objeto `{ pt, en, es }` com uma imagem por idioma; `title` e `caption` também aceitam `{ pt, en, es }`. Use prints em `.webp`: largura original para telas de sistema (o texto precisa ficar legível ampliado) e cerca de 720 px para telas de celular. Sem imagem, o card mostra `badgeText` e `flow`.
