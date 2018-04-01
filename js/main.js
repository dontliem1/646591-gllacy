var link = document.querySelector(".js-modal");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".modal-close");
var form = modal.querySelector("form");

var nameControl = modal.querySelector("[name=name]");
var mailControl = modal.querySelector("[name=mail]");
var questionControl = modal.querySelector("textarea");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("mail");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  if (storage) {
    nameControl.value = storage;
    if (storage) {
      mailControl.value = storage;
      questionControl.focus();
    } else {
      mailControl.focus();
    }
  } else {
    nameControl.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  form.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      form.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!mailControl.value || !questionControl.value) {
    evt.preventDefault();
    form.classList.remove("modal-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("modal-error");
    console.log("Введите электронную почту и вопрос.");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameControl.value);
      localStorage.setItem("mail", mailControl.value);
    }
  }
});
