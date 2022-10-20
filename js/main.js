const elForm = document.querySelector("#form");
const elNameInput = document.querySelector("#name");
const elEmailInput = document.querySelector("#email");
const elSubjectInput = document.querySelector("#subject");
const elTextInput = document.querySelector("#text");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const my_text = `Result is:%0A - <b>Name:</b> <i>${elNameInput.value}</i> %0A - <b>Email:</b> <i>${elEmailInput.value}</i> %0A - <b>Subject:</b> <i>${elSubjectInput.value}</i> %0A - <b>Text:</b> <i>${elTextInput.value}</i>`;

  const token = "5774085143:AAFfqlNVxkCI_kOvesjTCopDUPY37yd0ov0";
  const chat_id = -1001665137044;
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;

  const api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();
});
