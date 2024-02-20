document.addEventListener('DOMContentLoaded', function () {
  // Selectează modalul, overlay-ul și butoanele
  const modal = document.querySelector('.buy-now-modal');
  const modalOverlay = document.querySelector('.modal-overlay'); // Asigură-te că ai acest element în HTML
  const openModalButton = document.querySelector('[data-modal-open-buy-now]');
  const closeModalButton = document.querySelector('[data-modal-close-buy-now]');

  function toggleModalVisibility(show) {
    if (show) {
      modal.classList.remove('buy-now-modal-is-hidden');
      modalOverlay.classList.remove('buy-now-modal-is-hidden');
    } else {
      modal.classList.add('buy-now-modal-is-hidden');
      modalOverlay.classList.add('buy-now-modal-is-hidden');
    }
  }

  openModalButton.addEventListener('click', function () {
    toggleModalVisibility(true);
  });

  closeModalButton.addEventListener('click', function () {
    toggleModalVisibility(false);
  });

  modalOverlay.addEventListener('click', function () {
    toggleModalVisibility(false);
  });
});
