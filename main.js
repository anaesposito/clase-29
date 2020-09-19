const cards = document.querySelectorAll(".card");
const filtroBotones = document.querySelectorAll(".filtro-boton");

for (let boton of filtroBotones) {
  boton.onclick = () => {
    console.log(boton.onclick);
    for (let card of cards) {
      if (boton.dataset.color === card.dataset.color) {
        card.classList.remove("hidden");
      } else if (boton.dataset.color === "todos") {
        card.classList.remove("hidden");
      } else card.classList.add("hidden");
    }
  };
}

const busquedaNombre = document.querySelector("#nombre");

busquedaNombre.oninput = () => {
  for (let card of cards) {
    let nombre = card.dataset.nombre;
    let busqueda = busquedaNombre.value;
    if (nombre.includes(busqueda)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
    if (busquedaNombre.value == "") {
      card.classList.remove("hidden");
    }
  }
};

const radioMacho = document.querySelector("#macho");
const radioHembra = document.querySelector("#hembra");
const radioIndistinto = document.querySelector("#indistinto");

radioMacho.onclick = () => {
  for (let card of cards) {
    if (radioMacho.dataset.sexo === card.dataset.sexo) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  }
};

radioHembra.onclick = () => {
  for (let card of cards) {
    if (radioHembra.dataset.sexo === card.dataset.sexo) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  }
};

radioIndistinto.onclick = () => {
  for (let card of cards) {
    if (radioIndistinto.dataset.sexo === card.dataset.sexo) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  }
};
// for (let radio of radioOptions) {
//   radioOptions.checked = () => {
//     console.log(radioOptions.checked)
//     for (card of cards) {
//       let sexoRadio = radio.value;
//       let sexoGatito = card.dataset.sexo;

//       if (sexoRadio === sexoGatito) {
//         card.classList.remove("hidden");
//       } else {
//         card.classList.add("hidden");
//       }
//     }
//   };
// }

// if (boton.dataset.color === card.dataset.color) {
//   card.classList.remove("hidden");
// } else if (boton.dataset.color === "todos") {
//   card.classList.remove("hidden");
// } else card.classList.add("hidden");
// }
// if (boton.dataset.color === card.dataset.color) {
//   card.classList.remove("hidden");
// } else if (boton.dataset.color === "todos") {
//   card.classList.remove("hidden");
// } else card.classList.add("hidden");
// }
// };
// }
