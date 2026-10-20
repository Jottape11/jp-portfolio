// 1. Inicialização do Lenis Smooth Scroll sincronizado com GSAP ScrollTrigger
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis = null;
if (!prefersReducedMotion && typeof Lenis !== 'undefined') {
  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  if (typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}

// 2. Alternância de Tema Sólido Café: Espresso (#120D0A) ⇄ Latte (#F3ECE3)
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const htmlEl = document.documentElement;

if (themeToggle && themeLabel) {
  themeToggle.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'paper' : 'dark';
    htmlEl.setAttribute('data-theme', next);
    themeLabel.textContent = next === 'dark' ? 'LATTE MODE' : 'ESPRESSO MODE';
  });
}

// 3. Efeito Text Scramble (Decodificação estilo terminal nos labels)
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789//<>_';

function scrambleText(element, finalString, durationMs = 420) {
  if (!element || prefersReducedMotion) return;
  const totalSteps = 12;
  const stepTime = durationMs / totalSteps;
  let step = 0;

  if (element._scrambleInterval) clearInterval(element._scrambleInterval);

  element._scrambleInterval = setInterval(() => {
    step += 1;
    const progress = step / totalSteps;
    const revealCount = Math.floor(progress * finalString.length);

    let output = '';
    for (let i = 0; i < finalString.length; i += 1) {
      if (finalString[i] === ' ') {
        output += ' ';
      } else if (i < revealCount) {
        output += finalString[i];
      } else {
        output += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
    }

    element.textContent = output;

    if (step >= totalSteps) {
      clearInterval(element._scrambleInterval);
      element.textContent = finalString;
    }
  }, stepTime);
}

// Dispara Text Scramble ao passar o mouse nos itens do menu vertical
document.querySelectorAll('.side-nav-link').forEach((link) => {
  const label = link.querySelector('.side-nav-label');
  if (!label) return;
  const original = label.getAttribute('data-scramble') || label.textContent;
  link.addEventListener('mouseenter', () => {
    scrambleText(label, original, 340);
  });
});

// 4. Animações GSAP + ScrollTrigger (Entrada, Linhas Divisórias e Cards)
if (!prefersReducedMotion && typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Animação de entrada da Coluna Esquerda
  const introTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  introTl
    .from('.line-inner', {
      yPercent: 115,
      duration: 0.95,
    })
    .from(
      '.intro-fade',
      {
        y: 18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
      },
      '-=0.55'
    );

  // Desenho das linhas divisórias horizontais (.hairline-draw)
  gsap.utils.toArray('.hairline-draw').forEach((line) => {
    gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: line,
          start: 'top 88%',
        },
      }
    );
  });

  // Decodificação automática dos cabeçalhos de seção ao entrar na tela
  gsap.utils.toArray('.section-index').forEach((headerEl) => {
    const finalText = headerEl.getAttribute('data-scramble') || headerEl.textContent;
    ScrollTrigger.create({
      trigger: headerEl,
      start: 'top 88%',
      once: true,
      onEnter: () => scrambleText(headerEl, finalText, 500),
    });
  });

  // Surgimento em cascata dos blocos (.reveal-up)
  gsap.utils.toArray('.reveal-up').forEach((item) => {
    gsap.fromTo(
      item,
      { y: 26, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
        },
      }
    );
  });
}

// 5. Efeito 3D Perspective Tilt nas Miniaturas dos 6 Projetos
const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    if (prefersReducedMotion) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    card.style.transform = `perspective(700px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg)';
  });
});

// 6. Botões Magnéticos nos links sociais da coluna esquerda
const magneticButtons = document.querySelectorAll('.magnetic-btn');

magneticButtons.forEach((btn) => {
  btn.addEventListener('mousemove', (event) => {
    if (prefersReducedMotion) return;
    const rect = btn.getBoundingClientRect();
    const deltaX = (event.clientX - (rect.left + rect.width / 2)) * 0.28;
    const deltaY = (event.clientY - (rect.top + rect.height / 2)) * 0.28;
    btn.style.transform = `translate(${deltaX.toFixed(1)}px, ${deltaY.toFixed(1)}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0px, 0px)';
  });
});

// 7. Scrollspy + Barra de Progresso (com correção para ativar 04 // CONTATO no fim da página)
const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('.side-nav-link');
const scrollProgress = document.getElementById('scrollProgress');

function setActiveNavById(sectionId) {
  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute('data-section') === sectionId;
    link.classList.toggle('active', isCurrent);
  });
}

function handleScrollUpdate() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Atualiza barra superior de progresso
  if (scrollProgress && docHeight > 0) {
    const ratio = Math.min(1, Math.max(0, scrollTop / docHeight));
    scrollProgress.style.transform = `scaleX(${ratio})`;
  }

  // Se chegou próximo ao final da página, ativa obrigatoriamente "contato"
  if (window.innerHeight + scrollTop >= document.documentElement.scrollHeight - 90) {
    setActiveNavById('contato');
    return;
  }

  // Caso contrário, verifica qual seção está na faixa de leitura
  const triggerPoint = scrollTop + window.innerHeight * 0.35;
  let currentId = 'sobre';

  sections.forEach((section) => {
    if (triggerPoint >= section.offsetTop) {
      currentId = section.getAttribute('data-section-id') || section.id;
    }
  });

  setActiveNavById(currentId);
}

window.addEventListener('scroll', handleScrollUpdate, { passive: true });
handleScrollUpdate();

// Navegação suave ao clicar nos links da esquerda (e ativação imediata)
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('data-section');
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    event.preventDefault();
    setActiveNavById(targetId);

    if (lenis) {
      lenis.scrollTo(targetEl, { offset: -32 });
    } else {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 8. Copiar e-mail com feedback imediato
const copyEmailBtn = document.getElementById('copyEmailBtn');
const copyEmailText = document.getElementById('copyEmailText');
let copyTimeout = null;

if (copyEmailBtn && copyEmailText) {
  copyEmailBtn.addEventListener('click', async () => {
    const email = copyEmailBtn.getAttribute('data-email') || 'jpmaschionsa@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const temp = document.createElement('input');
      temp.value = email;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    }

    copyEmailText.textContent = 'E-mail copiado! ✓';
    if (copyTimeout) clearTimeout(copyTimeout);
    copyTimeout = setTimeout(() => {
      copyEmailText.textContent = `Copiar: ${email}`;
    }, 2400);
  });
}
