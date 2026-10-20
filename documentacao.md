# Documentação do Processo — Checkpoint 6: Vibecoding

**Aluno:** João Pedro Sá (`@Jottape11`)  
**Curso:** Engenharia de Software — FIAP (2º Semestre / 2026)  
**Disciplina:** Front-End Design  

---

## 3.1 Referências Visuais (5 Referências)

1. **Brittany Chiang ([brittanychiang.com](https://brittanychiang.com))**
   - **O que quis aproveitar:** A arquitetura vertical em duas colunas (*split-screen*), onde a coluna da esquerda permanece fixa na tela (*sticky*) com nome, apresentação, menu vertical com linhas horizontais que esticam conforme a seção ativa e ícones sociais no rodapé; além da estrutura da seção de projetos com **imagem de miniatura (thumbnail)** à esquerda, descrição, tags e redirecionamento direto.
   - **Seção inspirada:** Estrutura global de duas colunas, menu lateral fixo e **Seção `02 // SELECTED PROJECTS`**.

2. **João Passarelli ([joaopassarelli.com](https://www.joaopassarelli.com/))**
   - **O que quis aproveitar:** Ritmo vertical editorial limpo, uso da fonte monoespaçada `IBM Plex Mono` para cabeçalhos e metadados, divisórias horizontais finas (*hairlines*), estética de fundo papel/creme e a seção curta **`currently`** com indicador `pinned` para mostrar o que estou estudando e construindo no momento sem precisar de uma timeline longa e artificial.
   - **Seção inspirada:** **Seção `01 // CURRENTLY`**, cabeçalhos de seção, **Seção `03 // TECH STACK`** e tema claro (*Latte Mode*).

3. **VibeCode — Zenit Finance ([github.com/Jottape11/ui-multiverse](https://github.com/Jottape11/ui-multiverse))**
   - **O que quis aproveitar:** Diretriz visual "anti-clichê de IA" (zero gradientes roxos/cianos saturados e zero brilho artificial seguindo o mouse), priorizando cores 100% sólidas, tipografia *Hanken Grotesk* com alto contraste e engenharia de movimento com **GSAP 3 + ScrollTrigger + Lenis Smooth Scroll**.
   - **Seção inspirada:** Sistema de animações da página, botões com preenchimento sólido (*slide-fill*) e card do projeto UI Multiverse.

4. **Rauno Freiberg ([rauno.me](https://rauno.me)) & Awwwards Microinteractions**
   - **O que quis aproveitar:** Microinterações táteis: efeito de decodificação de texto (*Text Scramble*) nos índices das seções ao entrar na viewport e ao passar o mouse no menu, botões sociais magnéticos que reagem à proximidade do cursor e inclinação 3D (*Perspective Tilt*) nas miniaturas dos projetos.
   - **Seção inspirada:** Interações dos cards de projetos, cabeçalhos numerados e ícones sociais da coluna esquerda.

5. **GitHub Profile Jottape11 ([github.com/Jottape11](https://github.com/Jottape11))**
   - **O que quis aproveitar:** Curadoria dos 6 repositórios reais desenvolvidos ao longo dos estudos (`steam-store-analytics`, `cinelog-tvtime`, `fastapi-game-center`, `ui-multiverse`, `projeto-palmeiras` e `projeto-gta`) e organização das ferramentas por área técnica.
   - **Seção inspirada:** Conteúdo dos cards de projetos, links de redirecionamento e tabela de *Tech Stack*.

---

## 3.2 Decisões de Identidade Visual (IDV)

### Paleta de Cores — Tema Dual Café (*Espresso Mode* & *Latte Mode*)
Para fugir do padrão azul-marinho/roxo comum em portfólios gerados por IA, defini uma paleta inspirada em tons de **café** com suporte a dois temas sólidos:

#### Tema Escuro Padrão (*Espresso Mode*)
| Papel na Página | Cor | Hexadecimal | Por que combina com o conceito do projeto |
| :--- | :--- | :--- | :--- |
| **Fundo Principal** | Espresso Roast | `#120D0A` | Tom marrom-café profundo que substitui o preto puro, trazendo aconchego visual e personalidade própria. |
| **Superfície / Cards** | Dark Mocha | `#1C1410` | Destaca a caixa de contato, os chips de tecnologia (`#241A14`) e os botões sem depender de sombras pesadas. |
| **Texto Principal** | Steamed Milk / Crema | `#F5EBE1` | Branco aquecido (cor de leite vaporizado) que garante leitura confortável sem o brilho agressivo do `#FFFFFF`. |
| **Texto Secundário** | Roasted Hazelnut | `#A69080` | Tom avelã equilibrado para descrições técnicas, datas e subtítulos. |
| **Destaque Primário** | Golden Crema / Caramel | `#D48C46` | Cor de crema de espresso usada nas linhas ativas do menu, setas `↗`, barra de progresso superior e botões principais. |
| **Destaque de Status** | Matcha Sage | `#6B9E78` | Usado pontualmente para indicar deploys online (`● LIVE VERCEL`) e subtags de exploração. |

#### Tema Claro Alternativo (*Latte Mode*)
- **Fundo Principal (Oat Latte):** `#F3ECE3`
- **Superfície (Cappuccino Foam):** `#E8DDD0`
- **Texto Principal (Dark Espresso Ink):** `#231710`
- **Texto Secundário (Medium Roast):** `#6E5647`
- **Destaque Primário (Rich Cinnamon):** `#9C4A1A`

### Tipografia
- **Títulos e Corpo (`Hanken Grotesk` — pesos `400` a `800`):** Fonte grotesca contemporânea com excelente leitura em textos corridos e forte presença nos títulos (`letter-spacing: -0.04em`).
- **Metadados, Índices e Tags (`IBM Plex Mono` — pesos `300` a `600`):** Fonte monoespaçada editorial (inspirada no portfólio do João Passarelli) para numerar seções (`01 // CURRENTLY`), tags de tecnologias e links técnicos.

### Tom e Personalidade
- **Personalidade:** **Autêntica, Curiosa, Editorial e Dinâmica.**
- **Como aparece no layout:** Duas colunas verticais no desktop (esquerda fixa e direita rolável), divisórias finas que se desenham durante o scroll, animações fluidas com GSAP/Lenis e ausência total de elementos genéricos.
- **Como aparece nos textos:** Linguagem sincera de um estudante de Engenharia de Software da FIAP que gosta de aprender coisas novas na prática e tem grande curiosidade por Inteligência Artificial.

### Estrutura da Página
1. **Coluna Esquerda Fixa (`Header Sticky`):** Identificação (`<Jottape11 />`), botão de troca de tema (`LATTE MODE` / `ESPRESSO MODE`), nome com animação de máscara, bio curta de estudante/IA, navegação vertical com linhas expansíveis (`01 ATUALMENTE`, `02 PROJETOS`, `03 TECH STACK`, `04 CONTATO`) e ícones circulares magnéticos (GitHub, LinkedIn e E-mail) na base.
2. **`01 // CURRENTLY` (Sobre / Agora):** Dois blocos diretos inspirados no `joaopassarelli.com` destacando a graduação na FIAP e a exploração prática de Inteligência Artificial, Python/FastAPI e React.
3. **`02 // SELECTED PROJECTS` (Projetos com Miniatura):** Lista vertical dos 6 projetos escolhidos (`Steam Store Analytics`, `CineLog TV Time`, `FastAPI Game Center`, `UI Multiverse — Zenit Finance`, `Projeto Palmeiras` e `Projeto GTA`), cada um com captura de tela real como miniatura, inclinação 3D no hover, foco em grupo (os demais cards reduzem a opacidade quando um está em foco), descrição e tags.
4. **`03 // TECH STACK & ARSENAL`:** Tabela vertical limpa separada em *Front-End*, *Back-End & Dados*, *IA & Vibe Coding* e *Workflow*.
5. **`04 // CONTACT` & Rodapé:** Caixa de networking com botão de cópia rápida de e-mail (`jpmaschionsa@gmail.com`), LinkedIn, GitHub e assinatura minimalista (`João Pedro Sá • Engenharia de Software @ FIAP`).

---

## 3.3 Prompts Utilizados (Ordem Cronológica Exata)

### Prompt Inicial
```text
Crie uma landing page de portfólio pessoal moderna, responsiva e interativa utilizando HTML5, Tailwind CSS (via CDN) e JavaScript puro para João Pedro Sá (@Jottape11), estudante de Engenharia de Software na FIAP (São Paulo, SP) e desenvolvedor Full Stack (Front-End & Back-End).

1. IDENTIDADE VISUAL (IDV):
- Paleta de cores inspirada em Brittany Chiang:
  * Fundo principal (Midnight Navy): #0A192F
  * Superfície dos blocos e cards (Slate Surface): #112240 com bordas sutis de 1px em #1E293B
  * Texto principal / Títulos (Lightest Slate): #CCD6F6
  * Texto secundário / Descrições (Muted Slate): #8892B0
  * Cor de destaque (Electric Teal): #64FFDA (usada em pills de tecnologia, setas, indicadores, bordas em foco e destaques)
- Tipografia (Google Fonts):
  * Títulos e interface: 'Inter' e 'Plus Jakarta Sans' (pesos 400, 500, 600, 700, 800)
  * Código, tags técnicas e metadados: 'Fira Code' (pesos 400, 500)
- Efeitos visuais e animações:
  * Efeito Spotlight radial suave que acompanha o movimento do cursor pelo fundo da página.
  * Animação de Scroll Reveal suave conforme as seções entram na tela.

2. ESTRUTURA E SEÇÕES (FUGINDO DO PADRÃO CLICHÊ):
- Navegação Floating Dock:
  * Em vez de um header tradicional de ponta a ponta, crie um menu flutuante centralizado no topo em formato de pílula (glassmorphism com backdrop-blur) contendo os links: Início, Projetos, Stack, Jornada e Contato, além de atalho para o GitHub.
- Hero Section no formato "Command Center / Bento Grid" (sem o clichê de texto na esquerda + foto na direita):
  * Organize a primeira dobra da tela em um Bento Grid modular e interativo contendo:
    1. Bloco Principal (maior): tag monoespaçada "<Jottape11 />", título de impacto "João Pedro Sá — Full Stack Developer & Software Engineering @ FIAP", resumo sobre construção de APIs em camadas com Python/FastAPI e interfaces modernas com React/JavaScript/CSS, e botões para "Explorar Projetos" e "GitHub (@Jottape11)".
    2. Bloco de Localização & Formação: indicador pulsante em #64FFDA mostrando "Engenharia de Software @ FIAP" e "São Paulo, SP — Brasil".
    3. Bloco de Métricas do GitHub: destaque para "24+ Repositórios Públicos" e atuação prática em Front-End, Back-End e Dados.
    4. Bloco de Stack Core & Deploy em Destaque: ícones/badges das tecnologias principais (Python, FastAPI, React, JS, SQLite, CSS) e link rápido para o deploy ativo do projeto CineLog TV Time.
- Seção de Projetos em Destaque (Inspirada na seção de projetos de brittanychiang.com):
  * Lista/grade interativa onde, ao passar o mouse sobre um card, ele recebe destaque translúcido com borda iluminada, a seta diagonal (↗) se move na diagonal, a miniatura dá um leve zoom e os demais cards da lista ficam levemente opacos (efeito de foco em grupo).
  * Cada card deve exibir obrigatoriamente uma IMAGEM DE MINIATURA (thumbnail visual representativa da interface do projeto) ao lado do título, descrição técnica, tags em pílulas na cor #64FFDA (fundo rgba(100, 255, 218, 0.1)) e clique/links redirecionando diretamente para o repositório e deploy:
    1. Steam Store Analytics — Plataforma de coleta automatizada, armazenamento não relacional, disponibilização via API REST e visualização de dados do catálogo público da Loja da Steam Brasil. Tags: Python, REST API, NoSQL, HTML/CSS. Link: https://github.com/Jottape11/steam-store-analytics
    2. CineLog TV Time — Aplicação web interativa para explorar catálogos de filmes e séries e gerenciar favoritos, desenvolvida com React e consumo de API externa. Tags: React, JavaScript, CSS3, REST API. Link Repo: https://github.com/Jottape11/cinelog-tvtime | Link Deploy: https://cinelog-tvtime.vercel.app
    3. FastAPI Game Center — Aplicação full stack de e-commerce de games desenvolvida com FastAPI, arquitetura estrita em camadas (Controller e Service), persistência relacional com SQLite e interface web consumindo Fetch API. Tags: Python, FastAPI, SQLite, JavaScript, Fetch API. Link: https://github.com/Jottape11/fastapi-game-center
    4. UI Multiverse — Coleção de interfaces modernas, componentes interativos e estudos avançados de layout responsivo e estilização no Front-End. Tags: HTML5, CSS3, UI Design, Responsividade. Link: https://github.com/Jottape11/ui-multiverse
    5. Projeto Palmeiras (CP Front-End) — Landing page temática e responsiva desenvolvida como projeto prático de Front-End Design na FIAP, explorando estruturação semântica e estilização em CSS. Tags: HTML5, CSS3, Front-End Design, FIAP. Link: https://github.com/Jottape11/projeto-palmeiras
    6. Projeto GTA — Landing page interativa inspirada na franquia GTA, com foco em composição visual, tipografia de impacto e estilização CSS. Tags: HTML5, CSS3, JavaScript, Landing Page. Link: https://github.com/Jottape11/projeto-gta
- Seção de Arsenal Técnico (Skills & Tech Stack):
  * Mosaico dividido em 4 categorias: Front-End (React, JavaScript ES6+, TypeScript, HTML5, CSS3 Grid/Flexbox, Tailwind, Bootstrap), Back-End & Dados (Python, FastAPI, REST APIs, Pydantic, SQLite, Streamlit), AI-Assisted Engineering (Google Gemini, Anthropic Claude, OpenAI Codex) e Ferramentas (Git, GitHub, VS Code, Postman).
- Seção de Jornada Acadêmica (Timeline FIAP):
  * Linha do tempo destacando a graduação em Engenharia de Software na FIAP, desenvolvimento de Sprints corporativas (Sprint Jovi) e Checkpoints práticos de WebDev, Front-End e Differentiated Problem Solving (DPS).
- Seção de Contato & Footer:
  * Chamada voltada para networking, conexões profissionais e troca de experiências em Engenharia de Software (sem mencionar busca por estágio).
  * Links reais para LinkedIn (https://www.linkedin.com/in/jo%C3%A3o-pedro-s%C3%A1/), E-mail (jpmaschionsa@gmail.com) e GitHub (https://github.com/Jottape11).
```

---

### Prompt de Ajuste 1 (Mudança para Layout Vertical, Preview do Zenit Finance e Fim da Seção Trajetória)
```text
na parte do projeto Ui Multiverse, pegue a imagem do VibeCode — Zenit Finance
sobre o layout do projeto: eu nao gistei, queria algo mais "vertical" tipo o da brittany, tipo esse tbm https://www.joaopassarelli.com/ 
// 03. TRAJETÓRIA nao ficou legal, tem muita coisa que nao faz sentido e podemos repensar
```

---

### Prompt de Ajuste 2 (Tom da Bio, Correção do Bug no Menu Contato, Fim do Gradiente no Mouse e Adição de Animações GSAP/Lenis)
```text
Construo APIs Back-End estruturadas com Python & FastAPI e interfaces web modernas e responsivas no Front-End.

substitua por uma frase de alguem que e um estudante que gosto de aprender coisas novas e tem muita curiosidade por inteligencia artificial. 

na parte de contato, o -contato nao fica "ativado" ao descer na sessao.

senti o site muito estatico, poucas animações, nao gistei do gradiente no fundo no ponteiro do mouse e nem da paleta, quero algo com mais animaçoes, me surpreenda
```

---

### Prompt de Ajuste 3 (Ícones Sociais e Simplificação do Rodapé)
```text
ao lado do João Pedro Sá (@Jottape11) — Engenharia de Software @ FIAP • Animado com GSAP & Lenis. la embaixo do site, troque os nomes github, linkedin e email pelos icones deles

e troque o João Pedro Sá (@Jottape11) — Engenharia de Software @ FIAP • Animado com GSAP & Lenis. por apenas João Pedro Sá  • Engenharia de Software @ FIAP
```

---

### Prompt de Ajuste 4 (Paleta Café nos Temas Escuro e Claro + Favicon)
```text
sim, ambos os temas, quero uma cor de cafe
```
```text
por mim ta perfeito, so quero que crie um favicon pro site agora
```

---

### Prompt de Ajuste 5 (Prints Reais no CineLog TV Time e FastAPI Game Center)
```text
no cinelog tv time, coloque a imagem do projeto verdadeiro.
faça o mesmo com o FastAPI Game Center, mas vc mesmo pegue o print desse projeto e inclua aqui.
```

---

## 3.4 Registro de Correções (Fichas das Rodadas de Ajuste)

### Rodada de Ajuste 1 — Arquitetura Vertical, Imagem do UI Multiverse e Substituição da Timeline
| Campo | Registro |
| :--- | :--- |
| **Problema** | O layout inicial em *Bento Grid* ficou espalhado horizontalmente, diferente da leitura vertical fluida que eu queria. Além disso, o card do *UI Multiverse* usava a imagem do projeto Tailwind em vez do *VibeCode — Zenit Finance*, e a seção `03. Trajetória` tinha uma linha do tempo com textos genéricos que não faziam sentido. |
| **Prompt de correção** | *"na parte do projeto Ui Multiverse, pegue a imagem do VibeCode — Zenit Finance. sobre o layout do projeto: eu nao gistei, queria algo mais 'vertical' tipo o da brittany, tipo esse tbm https://www.joaopassarelli.com/. // 03. TRAJETÓRIA nao ficou legal, tem muita coisa que nao faz sentido e podemos repensar"* |
| **Resultado** | **Resolveu totalmente.** A página passou para duas colunas verticais (esquerda fixa + direita rolável), o card do *UI Multiverse* passou a exibir `vibecode-preview.png` e a timeline foi substituída pela seção enxuta `01 // CURRENTLY` inspirada no João Passarelli. |
| **Aprendizado** | Em vez de pedir um *Bento Grid* genérico na abertura quando minhas referências favoritas eram verticais (`brittanychiang.com` e `joaopassarelli.com`), eu deveria ter especificado desde o prompt inicial a divisão em duas colunas verticais e indicado o caminho exato da imagem de cada repositório. |

---

### Rodada de Ajuste 2 — Bug do Scrollspy em Contato, Tom da Bio e Animações com GSAP/Lenis
| Campo | Registro |
| :--- | :--- |
| **Problema** | 1) Ao rolar até o final da página, o item `- CONTATO` no menu lateral não ficava ativo porque a seção era curta demais para atingir o topo da tela. 2) A frase da bio estava formal/corporativa demais e não refletia meu perfil de estudante curioso por IA. 3) O efeito de luz seguindo o mouse e a paleta azul deixaram o site com cara estática e clichê. |
| **Prompt de correção** | *"Construo APIs Back-End estruturadas com Python & FastAPI e interfaces web modernas e responsivas no Front-End. substitua por uma frase de alguem que e um estudante que gosto de aprender coisas novas e tem muita curiosidade por inteligencia artificial. na parte de contato, o -contato nao fica 'ativado' ao descer na sessao. senti o site muito estatico, poucas animações, nao gistei do gradiente no fundo no ponteiro do mouse e nem da paleta, quero algo com mais animaçoes, me surpreenda"* |
| **Resultado** | **Resolveu totalmente.** O bug do *scrollspy* foi corrigido detectando o fim do scroll da página (`window.innerHeight + scrollTop >= document.documentElement.scrollHeight - 90`), o gradiente do mouse foi removido e entraram animações com **GSAP + ScrollTrigger + Lenis** (rolagem suave, *Text Scramble* nos títulos, linhas se desenhando no scroll, *3D Tilt* nas miniaturas e botões magnéticos). |
| **Aprendizado** | Pedir apenas "scroll reveal suave" no prompt inicial gera animações CSS básicas. Especificar bibliotecas de animação (como GSAP, ScrollTrigger e Lenis) e comportamentos concretos (tilt 3D, text scramble, botões slide-fill) eleva completamente o nível interativo da página. |

---

### Rodada de Ajuste 3 — Ícones Sociais Minimalistas e Limpeza do Rodapé
| Campo | Registro |
| :--- | :--- |
| **Problema** | Na parte inferior da página, os links de GitHub, LinkedIn e E-mail estavam escritos por extenso em botões de texto, competindo visualmente com o rodapé, que também tinha informações técnicas desnecessárias (`Animado com GSAP & Lenis`). |
| **Prompt de correção** | *"ao lado do João Pedro Sá (@Jottape11) — Engenharia de Software @ FIAP • Animado com GSAP & Lenis. la embaixo do site, troque os nomes github, linkedin e email pelos icones deles e troque o João Pedro Sá (@Jottape11) — Engenharia de Software @ FIAP • Animado com GSAP & Lenis. por apenas João Pedro Sá • Engenharia de Software @ FIAP"* |
| **Resultado** | **Resolveu totalmente.** Os textos foram substituídos por botões circulares com ícones SVG minimalistas e efeito magnético, e o rodapé ficou limpo apenas com `João Pedro Sá • Engenharia de Software @ FIAP`. |
| **Aprendizado** | No prompt inicial, devo especificar quando quero apenas ícones vetoriais (SVG) em vez de botões com rótulo de texto, além de definir o texto exato do rodapé para evitar que a IA adicione créditos de bibliotecas por conta própria. |

---

### Rodada de Ajuste 4 — Identidade Visual Café (Espresso & Latte) e Favicon
| Campo | Registro |
| :--- | :--- |
| **Problema** | Embora o contraste sólido tivesse melhorado a página, as cores ainda não tinham a identidade acolhedora e autoral que eu queria: tons de café tanto no modo escuro quanto no modo claro, além da falta de um favicon na aba do navegador. |
| **Prompt de correção** | *"sim, ambos os temas, quero uma cor de cafe"* seguido de *"por mim ta perfeito, so quero que crie um favicon pro site agora"* |
| **Resultado** | **Resolveu totalmente.** Os dois temas foram convertidos para a paleta Café (*Espresso Mode* `#120D0A` com destaque crema `#D48C46` e *Latte Mode* `#F3ECE3` com destaque canela `#9C4A1A`) e o arquivo `assets/favicon.svg` foi criado e vinculado ao HTML. |
| **Aprendizado** | Definir uma temática cromática com personalidade própria (como tons de café/espresso em vez de paletas tech padrão azul/ciano) desde o início dá identidade imediata ao portfólio. |

---

### Rodada de Ajuste 5 — Substituição dos Mockups SVG por Capturas de Tela Reais
| Campo | Registro |
| :--- | :--- |
| **Problema** | Os projetos *CineLog TV Time* e *FastAPI Game Center* estavam usando ilustrações vetoriais (`.svg`) geradas pela IA como miniatura, enquanto os outros 4 projetos exibiam capturas de tela reais das aplicações. |
| **Prompt de correção** | *"no cinelog tv time, coloque a imagem do projeto verdadeiro. faça o mesmo com o FastAPI Game Center, mas vc mesmo pegue o print desse projeto e inclua aqui."* |
| **Resultado** | **Resolveu totalmente.** Os dois SVGs foram substituídos pelos prints reais das interfaces (`assets/cinelog-preview.png` e `assets/fastapi-game-center-preview.png`), deixando todos os 6 projetos com capturas fiéis. |
| **Aprendizado** | Sempre fornecer ou exigir capturas de tela reais dos projetos em vez de ilustrações genéricas mantém a unidade visual da vitrine e valoriza o trabalho real desenvolvido. |

---

## 3.5 Resultado Final e Reflexão

- **Repositório do Portfólio:** [https://github.com/Jottape11/jp-portfolio](https://github.com/Jottape11/jp-portfolio)
- **Link do Deploy (GitHub Pages / Vercel):** [https://jottape11.github.io/jp-portfolio/](https://jottape11.github.io/jp-portfolio/)

### Breve Reflexão
- **O que ficou como eu imaginei:** A estrutura vertical dividida em duas colunas (unindo a organização de projetos com miniaturas da Brittany Chiang e a estética tipográfica/editorial do João Passarelli), a paleta em tons de café (*Espresso & Latte*) e as animações com GSAP e Lenis deixaram o portfólio com muita personalidade e sem cara de template genérico de IA. Todos os 6 projetos reais do meu GitHub ganharam destaque com prints verdadeiros e links funcionais.
- **O que eu ainda mudaria no futuro:** Conforme eu for publicando novos deploys dos meus projetos de Back-End (como o *Steam Store Analytics* e o *FastAPI Game Center*) em nuvem, pretendo adicionar páginas internas de estudo de caso (*case studies*) com vídeos curtos demonstrando o funcionamento de cada aplicação.

