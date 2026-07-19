/**
 * Projects / Laboratory block
 * Each row: title | description | tech tags (comma-separated) | link | optional image
 */
export default function decorate(block) {
  const label = document.createElement('p');
  label.className = 'section-label';
  label.textContent = 'Laboratory';

  const heading = document.createElement('h2');
  heading.className = 'projects-heading';
  heading.textContent = 'Selected projects';

  const grid = document.createElement('ul');
  grid.className = 'projects-grid';

  [...block.children].forEach((row) => {
    const cells = [...row.children];
    if (!cells.length) return;

    // skip a lone heading row
    const onlyText = cells.map((c) => c.textContent.trim()).filter(Boolean);
    if (onlyText.length === 1 && onlyText[0].toLowerCase().includes('project')) return;

    const titleCell = cells[0];
    const descCell = cells[1];
    const techCell = cells[2];
    const linkCell = cells[3];
    const imageCell = cells[4];

    const title = titleCell?.textContent.trim() || 'Project';
    const description = descCell?.innerHTML || '';
    const techRaw = techCell?.textContent.trim() || '';
    const link = linkCell?.querySelector('a') || (linkCell?.textContent.trim().startsWith('http')
      ? Object.assign(document.createElement('a'), { href: linkCell.textContent.trim(), textContent: 'View Project' })
      : linkCell?.querySelector('a'));
    const img = imageCell?.querySelector('img') || row.querySelector('img');

    const li = document.createElement('li');
    li.className = 'projects-card';

    if (img) {
      const media = document.createElement('div');
      media.className = 'projects-card-media';
      media.append(img.cloneNode(true));
      li.append(media);
    }

    const body = document.createElement('div');
    body.className = 'projects-card-body';

    const h3 = document.createElement('h3');
    h3.textContent = title;
    body.append(h3);

    if (description) {
      const p = document.createElement('div');
      p.className = 'projects-card-desc';
      p.innerHTML = description;
      body.append(p);
    }

    if (techRaw) {
      const tags = document.createElement('div');
      tags.className = 'projects-card-tags';
      techRaw.split(/[,|]/).map((t) => t.trim()).filter(Boolean).forEach((tag) => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tag;
        tags.append(span);
      });
      body.append(tags);
    }

    const href = link?.href || linkCell?.querySelector('a')?.href;
    if (href) {
      const cta = document.createElement('p');
      cta.className = 'button-wrapper';
      const a = document.createElement('a');
      a.href = href;
      a.className = 'button secondary';
      a.textContent = link?.textContent?.trim() || 'View Project';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      cta.append(a);
      body.append(cta);
    }

    li.append(body);
    grid.append(li);
  });

  block.replaceChildren(label, heading, grid);
}
