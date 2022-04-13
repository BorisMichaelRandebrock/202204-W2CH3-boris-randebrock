let userName;
const p1 = document.querySelector("#p1");
const userNameContainer = document.querySelector("userNameContainer");

const getUserName = () => {
  let userNameHTML = document.querySelector("#userName");
  if (userNameHTML.value === "" || userNameHTML.value === null) {
    userName = "Erudit@";
    p1.innerText =
      "Aquí protegemos tu privacidad; \n\npara poder dirigirnos a ti te llamaremos Erudit@.\n\nAntes de seguir adelante, tendrías que echar un vistazo a las reglas.\n\nPor favor haz click en el botón para seguir.";
  } else {
    userName =
      userNameHTML.value.charAt(0).toUpperCase() + userNameHTML.value.slice(1);
    p1.innerText =
      "Antes de seguir adelante, tendrías que echar un vistazo a las reglas.\n\nPor favor haz click en el botón para seguir.";
  } //.textContent  and .innerText

  let userNameContainer = document.getElementById("userName");
  userNameContainer.parentNode.removeChild(userNameContainer);

  userNameContainer = document.getElementById("submit");
  userNameContainer.parentNode.removeChild(userNameContainer);

  let buttonRules = document.createElement("button");
  buttonRules.innerHTML = "reglas";
  buttonRules.type = "submit";
  buttonRules.class = "submit";
  buttonRules.id = "submit";
  document.body.appendChild(buttonRules);
  buttonRules.addEventListener("click", goToRules).focus();

  //   let buttonRules = document.createElement("button");
  //   buttonRules.innerHTML = `<a href="rules.html" id="submit2" autofocus>reglas</a>`;
  //   document.body.appendChild(buttonRules);// desaparece el boton   ?? document.container.appendChild(buttonRules);
};

const botonSubmit = document.querySelector("#submit");
const TextFieldUserName = document.querySelector("#userName");
botonSubmit.addEventListener("click", getUserName);
botonSubmit.addEventListener("click", function handleClick() {
  botonSubmit.textContent = "reglas";
});

const goToRules = () => window.open("rules.html");

botonSubmit.addEventListener("click", function handleClick() {
  botonSubmit.onClick = href = "rules.html";
});

// document.querySelector("#input").addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     sendInput();
//     document.getElementById("input").focus();
//   }
// });
