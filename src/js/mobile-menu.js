const modal = document.querySelector('[data-modal-header]');

// open modal function
function openNav() {
  modal.classList.add('header-modal-visible');
}

// close modal function
function closeNav() {
  modal.classList.remove('header-modal-visible');
}

// Handle events function
function handleNavEvent(event) {
  const { target } = event;
  const navOpen = target.closest('[data-modal-open-header]');
  const navClose = target.closest('[data-modal-close-header]');

  if (navOpen) {
    openNav();
    event.stopPropagation();
  } else if (navClose) {
    closeNav();
  }
}

document.addEventListener('click', handleNavEvent);

// Opțional: închiderea modalului la apăsarea tastei Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('header-modal-visible')) {
    closeNav();
  }
});
window.addEventListener('click', function (event) {
  if (
    !modal.contains(event.target) &&
    !event.target.closest('[data-modal-open-header]')
  ) {
    closeNav();
  }
});
