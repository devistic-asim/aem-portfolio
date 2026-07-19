/**
 * Contact block
 * Each row: label | value | optional link
 */
export default function decorate(block) {
  const label = document.createElement('p');
  label.className = 'section-label';
  label.textContent = 'Contact';

  const heading = document.createElement('h2');
  heading.className = 'contact-heading';
  heading.textContent = 'Get in touch';

  const list = document.createElement('ul');
  list.className = 'contact-list';

  [...block.children].forEach((row) => {
    const cells = [...row.children];
    if (!cells.length) return;

    const labelText = cells[0]?.textContent.trim() || '';
    const valueCell = cells[1] || cells[0];
    const link = valueCell?.querySelector('a') || cells[2]?.querySelector('a');
    const valueText = valueCell?.textContent.trim() || '';

    if (!labelText && !valueText) return;
    if (labelText.toLowerCase() === 'contact' && cells.length === 1) return;

    const li = document.createElement('li');
    li.className = 'contact-item';

    const dt = document.createElement('span');
    dt.className = 'contact-label';
    dt.textContent = labelText || 'Link';

    const dd = document.createElement('span');
    dd.className = 'contact-value';

    if (link) {
      const a = link.cloneNode(true);
      a.className = 'contact-link';
      if (a.href.startsWith('http')) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
      dd.append(a);
    } else if (valueText.includes('@')) {
      const a = document.createElement('a');
      a.href = `mailto:${valueText}`;
      a.textContent = valueText;
      a.className = 'contact-link';
      dd.append(a);
    } else if (/^[\d+\s()-]+$/.test(valueText)) {
      const a = document.createElement('a');
      a.href = `tel:${valueText.replace(/\s/g, '')}`;
      a.textContent = valueText;
      a.className = 'contact-link';
      dd.append(a);
    } else {
      dd.textContent = valueText;
    }

    li.append(dt, dd);
    list.append(li);
  });

  block.replaceChildren(label, heading, list);
}
