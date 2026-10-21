const content = window.PRAKRITI_CONTENT;

const escapeHTML = (value) => String(value).replace(/[&<>'"]/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
}[character]));

const fillContactDetails = () => {
  document.querySelectorAll('[data-contact="email"]').forEach((element) => {
    element.textContent = content.contact.email;
    element.href = `mailto:${content.contact.email}`;
  });
  document.querySelectorAll('[data-contact="phone"]').forEach((element) => { element.textContent = content.contact.phone; });
  document.querySelectorAll('[data-contact="address"]').forEach((element) => { element.textContent = content.contact.address; });
  document.querySelectorAll('[data-contact="hours"]').forEach((element) => { element.textContent = content.contact.hours; });
};

const renderLeadership = () => {
  const target = document.querySelector('[data-leadership-list]');
  if (!target) return;
  target.innerHTML = content.leadership.map((member, index) => `
    <article class="leader-card reveal is-visible">
      <div class="leader-number">0${index + 1}</div>
      <div class="leader-initials" aria-hidden="true">${escapeHTML(member.name).split(' ').filter(Boolean).slice(0, 2).map(word => word[0]).join('').toUpperCase() || '?'}</div>
      <p class="leader-position">${escapeHTML(member.position)}</p>
      <h3>${escapeHTML(member.name)}</h3>
      <p class="leader-role">${escapeHTML(member.role)}</p>
    </article>`).join('');
};

const renderWork = (selector, entries, type) => {
  const target = document.querySelector(selector);
  if (!target) return;
  if (!entries.length) {
    target.innerHTML = `<div class="empty-work-state"><span>◌</span><p>No verified activities have been published yet. Updates will be shared here as work begins.</p></div>`;
    return;
  }
  target.innerHTML = entries.map((item, index) => {
    const meta = type === 'completed'
      ? `<p class="work-meta">${escapeHTML(item.date)} <span>•</span> ${escapeHTML(item.location)}</p>`
      : `<p class="work-meta">Planned focus</p>`;
    return `<article class="work-item reveal is-visible">
      <span class="work-number">0${index + 1}</span>
      <div>${meta}<h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.description)}</p></div>
    </article>`;
  }).join('');
};

fillContactDetails();
renderLeadership();
renderWork('[data-completed-work]', content.completedWork, 'completed');
renderWork('[data-planned-work]', content.plannedWork, 'planned');
document.querySelectorAll('[data-current-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });
