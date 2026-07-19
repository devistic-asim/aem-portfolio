import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * About block
 * Rows:
 * 0: photo
 * 1: name
 * 2: email | github | linkedin (links, optional)
 * 3+: bio paragraphs / heading
 */
function socialIcon(type) {
  const icons = {
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.2c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .26.18.59.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.67v-8.1h2.67v8.1zM7 9.1a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.24h-2.67v-4.3c0-1.02-.02-2.34-1.43-2.34-1.43 0-1.65 1.12-1.65 2.27v4.37H9.92v-8.1h2.56v1.11h.04c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.2 1.78 3.2 4.1v4.29z"/></svg>',
  };
  return icons[type] || '';
}

function detectSocial(href, text) {
  const h = (href || '').toLowerCase();
  const t = (text || '').toLowerCase();
  if (h.includes('github.com') || t.includes('github')) return 'github';
  if (h.includes('linkedin.com') || t.includes('linkedin')) return 'linkedin';
  if (h.startsWith('mailto:') || t.includes('@') || t.includes('email')) return 'email';
  return null;
}

export default function decorate(block) {
  const rows = [...block.children];
  const profile = document.createElement('div');
  profile.className = 'about-profile';

  const body = document.createElement('div');
  body.className = 'about-body';

  const socials = document.createElement('div');
  socials.className = 'about-socials';

  rows.forEach((row) => {
    const cell = row.firstElementChild || row;
    if (!cell) return;

    const img = cell.querySelector('img');
    const links = [...cell.querySelectorAll('a')];

    if (img && !profile.querySelector('.about-photo')) {
      const photoWrap = document.createElement('div');
      photoWrap.className = 'about-photo';
      photoWrap.append(createOptimizedPicture(img.src, img.alt || 'Profile photo', false, [{ width: '400' }]));
      profile.append(photoWrap);
      return;
    }

    if (links.length > 0 && links.every((a) => detectSocial(a.href, a.textContent))) {
      links.forEach((a) => {
        const type = detectSocial(a.href, a.textContent);
        const link = document.createElement('a');
        link.href = a.href;
        link.className = `about-social about-social-${type}`;
        link.setAttribute('aria-label', type);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        if (type === 'email') {
          link.removeAttribute('target');
          link.removeAttribute('rel');
        }
        link.innerHTML = socialIcon(type);
        socials.append(link);
      });
      return;
    }

    const text = cell.textContent.trim();
    if (!text) return;

    if (!profile.querySelector('.about-name') && text.length < 60 && !body.hasChildNodes()) {
      const name = document.createElement('p');
      name.className = 'about-name';
      name.textContent = text;
      profile.append(name);
      return;
    }

    if (!body.querySelector('.section-label') && text.length < 40) {
      const label = document.createElement('p');
      label.className = 'section-label';
      label.textContent = text;
      body.append(label);
      return;
    }

    if (!body.querySelector('h2') && text.length < 120) {
      const h2 = document.createElement('h2');
      h2.textContent = text;
      body.append(h2);
      return;
    }

    const p = document.createElement('p');
    p.innerHTML = cell.innerHTML;
    body.append(p);
  });

  if (socials.hasChildNodes()) profile.append(socials);

  // placeholder avatar if no photo
  if (!profile.querySelector('.about-photo')) {
    const photoWrap = document.createElement('div');
    photoWrap.className = 'about-photo about-photo-placeholder';
    photoWrap.innerHTML = '<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#1c2333" stroke="#00d4aa" stroke-width="4"/><circle cx="60" cy="48" r="22" fill="#00d4aa" opacity="0.5"/><ellipse cx="60" cy="95" rx="34" ry="22" fill="#00d4aa" opacity="0.5"/></svg>';
    profile.prepend(photoWrap);
  }

  block.replaceChildren(profile, body);
}
