import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Hero block
 * Expected rows (flexible):
 * 0: role / eyebrow text
 * 1: heading
 * 2: intro paragraph(s)
 * 3: CTA link (optional)
 * 4: image (optional)
 */
export default function decorate(block) {
  const rows = [...block.children];
  const content = document.createElement('div');
  content.className = 'hero-content';

  const media = document.createElement('div');
  media.className = 'hero-media';

  rows.forEach((row) => {
    const cell = row.firstElementChild || row;
    if (!cell) return;

    const pic = cell.querySelector('picture');
    const img = cell.querySelector('img');
    const link = cell.querySelector('a');
    const text = cell.textContent.trim();

    if (pic || img) {
      if (img) {
        const optimized = createOptimizedPicture(img.src, img.alt || 'Hero illustration', true, [{ width: '750' }]);
        media.append(optimized);
      } else {
        media.append(pic);
      }
      return;
    }

    if (link && cell.querySelectorAll('a').length === 1 && text === link.textContent.trim()) {
      const p = document.createElement('p');
      p.className = 'button-wrapper';
      const a = link.cloneNode(true);
      a.className = 'button secondary';
      p.append(a);
      content.append(p);
      return;
    }

    if (!text) return;

    // first short uppercase-ish line → role eyebrow
    if (!content.querySelector('.hero-role') && text.length < 80) {
      const role = document.createElement('p');
      role.className = 'hero-role';
      role.textContent = text;
      content.append(role);
      return;
    }

    if (!content.querySelector('h1')) {
      const h1 = document.createElement('h1');
      h1.textContent = text;
      content.append(h1);
      return;
    }

    const p = document.createElement('p');
    p.className = 'hero-intro';
    p.innerHTML = cell.innerHTML;
    content.append(p);
  });

  // fallback illustration if none authored
  if (!media.hasChildNodes()) {
    const fallback = document.createElement('div');
    fallback.className = 'hero-illustration';
    fallback.innerHTML = `
      <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Developer workstation illustration">
        <rect x="40" y="60" width="180" height="120" rx="4" fill="#1c2333" stroke="#00d4aa" stroke-width="2"/>
        <rect x="50" y="70" width="160" height="90" fill="#0d1117"/>
        <text x="90" y="125" fill="#00d4aa" font-family="monospace" font-size="22">HTML</text>
        <rect x="200" y="80" width="160" height="110" rx="4" fill="#1c2333" stroke="#00d4aa" stroke-width="2"/>
        <rect x="210" y="90" width="140" height="80" fill="#0d1117"/>
        <text x="245" y="140" fill="#00d4aa" font-family="monospace" font-size="22">CSS</text>
        <rect x="120" y="200" width="160" height="12" rx="2" fill="#30363d"/>
        <rect x="160" y="212" width="80" height="40" rx="4" fill="#1c2333" stroke="#00d4aa" stroke-width="1.5"/>
        <circle cx="80" cy="250" r="18" fill="#00d4aa" opacity="0.4"/>
        <rect x="300" y="220" width="40" height="55" rx="4" fill="#1c2333" stroke="#00d4aa" stroke-width="1.5"/>
        <path d="M60 280 Q200 300 340 270" stroke="#00d4aa" stroke-width="2" fill="none" opacity="0.3"/>
      </svg>`;
    media.append(fallback);
  }

  block.replaceChildren(content, media);
}
