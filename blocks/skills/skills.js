/**
 * Skills block
 * Each row: skill name | optional icon image or icon name
 * Or: icon image | skill name
 */
export default function decorate(block) {
  const label = document.createElement('p');
  label.className = 'section-label';
  label.textContent = 'Skills';

  const heading = document.createElement('h2');
  heading.className = 'skills-heading';
  heading.textContent = 'Technologies I work with';

  const list = document.createElement('ul');
  list.className = 'skills-list';

  [...block.children].forEach((row) => {
    const cells = [...row.children];
    if (!cells.length) return;

    const textParts = cells.map((c) => c.textContent.trim()).filter(Boolean);
    // skip header-like first row if it says "skills"
    if (textParts.length === 1 && textParts[0].toLowerCase() === 'skills') return;

    const img = row.querySelector('img');
    const name = textParts.find((t) => t.length > 0 && t.toLowerCase() !== 'skills') || '';

    if (!name && !img) return;

    const li = document.createElement('li');
    li.className = 'skills-item';

    const nameEl = document.createElement('span');
    nameEl.className = 'skills-name';
    nameEl.textContent = name;

    const iconWrap = document.createElement('div');
    iconWrap.className = 'skills-icon';

    if (img) {
      const clone = img.cloneNode(true);
      clone.alt = clone.alt || name;
      iconWrap.append(clone);
    } else {
      // letter badge fallback
      const badge = document.createElement('span');
      badge.className = 'skills-badge';
      badge.textContent = name.slice(0, 2).toUpperCase();
      iconWrap.append(badge);
    }

    li.append(nameEl, iconWrap);
    list.append(li);
  });

  block.replaceChildren(label, heading, list);
}
