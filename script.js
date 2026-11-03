const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('#main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#application-form');
const message = document.querySelector('.form-message');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  message.textContent = 'Демонстрационен формуляр: това е примерен формуляр, създаден за учебен проект. Въведените данни не са изпратени и не се съхраняват.';
  form.reset();
});

document.querySelector('.copy-email')?.addEventListener('click', async (event) => {
  const button = event.currentTarget;
  const email = button.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    button.textContent = 'Имейлът е копиран';
  } catch {
    button.textContent = email;
  }
  window.setTimeout(() => { button.textContent = 'Копирай имейла'; }, 2200);
});
