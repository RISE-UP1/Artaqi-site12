const root = document.documentElement;
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const darkToggle = document.getElementById('darkToggle');
const darkToggleSm = document.getElementById('darkToggleSm');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const sunIconSm = document.getElementById('sunIconSm');
const moonIconSm = document.getElementById('moonIconSm');
const yearEl = document.getElementById('year');

function setDark(on) {
  if (on) {
    root.classList.add('dark');
    sunIcon?.classList.remove('hidden');
    moonIcon?.classList.add('hidden');
    sunIconSm?.classList.remove('hidden');
    moonIconSm?.classList.add('hidden');
  } else {
    root.classList.remove('dark');
    sunIcon?.classList.add('hidden');
    moonIcon?.classList.remove('hidden');
    sunIconSm?.classList.add('hidden');
    moonIconSm?.classList.remove('hidden');
  }
  localStorage.setItem('dark', on ? '1' : '0');
}

setDark(localStorage.getItem('dark') === '1');

darkToggle?.addEventListener('click', () => setDark(!root.classList.contains('dark')));
darkToggleSm?.addEventListener('click', () => setDark(!root.classList.contains('dark')));

burger?.addEventListener('click', () => {
  if (!mobileMenu || !b1 || !b2 || !b3) return;
  const isClosed = mobileMenu.classList.contains('max-h-0');
  if (isClosed) {
    mobileMenu.classList.remove('max-h-0', 'opacity-0');
    mobileMenu.classList.add('max-h-[600px]', 'opacity-100');
    b1.classList.remove('-translate-y-1');
    b1.classList.add('rotate-45', 'translate-y-1');
    b2.classList.add('opacity-0');
    b3.classList.remove('translate-y-1');
    b3.classList.add('-rotate-45', '-translate-y-1');
    burger.setAttribute('aria-expanded', 'true');
  } else {
    mobileMenu.classList.add('max-h-0', 'opacity-0');
    mobileMenu.classList.remove('max-h-[600px]', 'opacity-100');
    b1.classList.add('-translate-y-1');
    b1.classList.remove('rotate-45', 'translate-y-1');
    b2.classList.remove('opacity-0');
    b3.classList.add('translate-y-1');
    b3.classList.remove('-rotate-45', '-translate-y-1');
    burger.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('[data-article]').forEach((card) => {
  const excerpt = card.querySelector('.excerpt');
  const full = card.querySelector('.full');
  const more = card.querySelector('.read-more');
  const less = card.querySelector('.read-less');
  if (excerpt && full && more && less) {
    more.addEventListener('click', () => {
      excerpt.classList.add('hidden');
      full.classList.remove('hidden');
      more.classList.add('hidden');
      less.classList.remove('hidden');
    });
    less.addEventListener('click', () => {
      full.classList.add('hidden');
      excerpt.classList.remove('hidden');
      less.classList.add('hidden');
      more.classList.remove('hidden');
    });
  }
});

yearEl && (yearEl.textContent = new Date().getFullYear());
