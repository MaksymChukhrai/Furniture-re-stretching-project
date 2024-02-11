// modal.js

(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    submitBtn: document.querySelector("[data-modal-submit]"),
<<<<<<< HEAD
    
=======
>>>>>>> 188e55c13661ab4b1ccff982daa1d861c20131d8
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener("click", toggleModal);
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", handleBackdropClick);
  document.addEventListener("keydown", handleKeyPress);

<<<<<<< HEAD
  // if (refs.submitBtn) {
  //   refs.submitBtn.addEventListener("click", handleSubmit);
  // }
=======
  if (refs.submitBtn) {
    refs.submitBtn.addEventListener("click", handleSubmit);
  }
>>>>>>> 188e55c13661ab4b1ccff982daa1d861c20131d8

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function handleBackdropClick(event) {
    if (event.target === refs.modal) {
      toggleModal();
    }
  }

  function handleKeyPress(event) {
    if (event.code === "Escape") {
      toggleModal();
    }
  }
<<<<<<< HEAD
 
 
})();
=======


  function handleSubmit(event) {
    // event.preventDefault(); // Отменяем отправку формы по умолчанию

    // Выполняем валидацию формы
    // const isValid = validation.validate();

    // if (isValid) {
      // Если форма прошла валидацию, выполняем логику отправки данных
      // и закрываем модальное окно
      // Добавьте вашу логику отправки данных здесь

      toggleModal();
    
  }
})();
>>>>>>> 188e55c13661ab4b1ccff982daa1d861c20131d8
