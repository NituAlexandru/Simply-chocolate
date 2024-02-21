document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.buy-now-modal');
  const modalOverlay = document.querySelector('.modal-overlay');
  const openModalButtons = document.querySelectorAll(
    '[data-modal-open-buy-now], [data-modal-open-sec]'
  );
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

  openModalButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      toggleModalVisibility(true);
    });
  });

  closeModalButton.addEventListener('click', function () {
    toggleModalVisibility(false);
  });

  modalOverlay.addEventListener('click', function () {
    toggleModalVisibility(false);
  });
});
